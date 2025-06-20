import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './empleado.entity';
import { Repository } from 'typeorm';
import { CreateEmpleadoDTO } from './dto/create-empleado.dto';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {}

  create(empleado: CreateEmpleadoDTO) {
    const newEmpleado = this.empleadoRepository.create(empleado);
    return this.empleadoRepository.save(newEmpleado);
  }

  findAll() {
    return this.empleadoRepository.find();
  }
}
