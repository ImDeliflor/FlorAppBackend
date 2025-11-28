import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalidadEnraizamiento } from './entities/calidad_enraizamiento.entity';
import { CreateCalidadEnraizamientoDto } from './dto/create-calidad_enraizamiento.dto';

@Injectable()
export class CalidadEnraizamientoService {
  constructor(
    @InjectRepository(CalidadEnraizamiento)
    private readonly repo: Repository<CalidadEnraizamiento>,
  ) {}

  create(data: CreateCalidadEnraizamientoDto) {
    const nuevo = this.repo.create(data);
    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const registro = await this.repo.findOne({
      where: { id_ce: id },
    });

    if (!registro) {
      throw new NotFoundException('Registro no encontrado');
    }

    return registro;
  }

  async remove(id: number) {
    const registro = await this.findOne(id);
    return this.repo.remove(registro);
  }
}
