import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadoView } from './empleado_view.entity';

@Injectable()
export class EmpleadosViewService {
  constructor(
    @InjectRepository(EmpleadoView)
    private empleadoViewRepository: Repository<EmpleadoView>,
  ) {}

  findAll() {
    return this.empleadoViewRepository.find();
  }
}
