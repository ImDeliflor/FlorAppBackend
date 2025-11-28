import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendimientoEnraizamiento } from './entities/rendimiento_enraizamiento.entity';
import { CreateRendimientoEnraizamientoDto } from './dto/create-rendimiento_enraizamiento.dto';

@Injectable()
export class RendimientoEnraizamientoService {
  constructor(
    @InjectRepository(RendimientoEnraizamiento)
    private readonly repo: Repository<RendimientoEnraizamiento>,
  ) {}

  create(data: CreateRendimientoEnraizamientoDto) {
    const nuevo = this.repo.create(data);
    return this.repo.save(nuevo);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const registro = await this.repo.findOne({ where: { id_re: id } });
    if (!registro) throw new NotFoundException('Registro no encontrado');
    return registro;
  }

  async remove(id: number) {
    const registro = await this.findOne(id);
    return this.repo.remove(registro);
  }
}
