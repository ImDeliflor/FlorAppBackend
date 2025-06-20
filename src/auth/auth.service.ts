/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { In, Repository } from 'typeorm';
import { RegisterUserDTO } from './dto/register-user.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Rol } from 'src/roles/rol.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Rol) private rolesRepository: Repository<Rol>,

    private jwtService: JwtService,
  ) {}

  async register(user: RegisterUserDTO) {
    const { email, phone } = user;

    const emailExists = await this.usersRepository.findOneBy({ email });
    if (emailExists) {
      throw new HttpException(
        'El email ya está registrado',
        HttpStatus.CONFLICT,
      );
    }

    const phoneExists = await this.usersRepository.findOneBy({ phone });
    if (phoneExists) {
      throw new HttpException(
        'El teléfono ya está registrado',
        HttpStatus.CONFLICT,
      );
    }

    const newUser = this.usersRepository.create(user);

    let rolesIds: string[] = [];

    if (user.rolesIds === undefined || user.rolesIds === null) {
      rolesIds = ['CLIENT'];
    } else if (Array.isArray(user.rolesIds)) {
      rolesIds = user.rolesIds.map((id: any) => String(id).trim());
    } else if (typeof user.rolesIds === 'string') {
      rolesIds = user.rolesIds.split(',').map((id) => id.trim());
    } else {
      console.error(
        'Tipo de user.rolesIds inesperado:',
        typeof user.rolesIds,
        user.rolesIds,
      );
      throw new Error('rolesIds debe ser un string o un array');
    }

    const roles = await this.rolesRepository.findBy({ id: In(rolesIds) });
    newUser.roles = roles;

    const userSaved = await this.usersRepository.save(newUser);
    const rolesString = userSaved.roles.map((rol) => rol.id);

    const payload = {
      id: userSaved.id,
      name: userSaved.name,
      roles: rolesString,
    };
    const token = this.jwtService.sign(payload);

    const userWithoutPassword = JSON.parse(JSON.stringify(userSaved));
    delete userWithoutPassword.password;

    return {
      user: userWithoutPassword,
      token: 'Bearer ' + token,
    };
  }

  async login(loginData: LoginAuthDto) {
    const { email, password } = loginData;
    const userFound = await this.usersRepository.findOne({
      where: { email },
      relations: ['roles'],
    });

    if (!userFound) {
      // 404 NOT FOUND
      throw new HttpException(
        'El email no está registrado',
        HttpStatus.NOT_FOUND,
      );
    }

    const isPasswordValid = await compare(password, userFound.password);
    if (!isPasswordValid) {
      // 403 FORBIDDEN
      throw new HttpException(
        'La contraseña es incorrecta',
        HttpStatus.FORBIDDEN,
      );
    }

    const rolesIds = userFound.roles.map((rol) => rol.id);

    const payload = { id: userFound.id, name: userFound.name, roles: rolesIds };
    const token = this.jwtService.sign(payload);

    // Convierte en objeto plano
    const userWithoutPassword = JSON.parse(JSON.stringify(userFound));
    delete userWithoutPassword.password;

    const data = {
      user: userWithoutPassword,
      token: 'Bearer ' + token,
    };

    return data;
  }
}
