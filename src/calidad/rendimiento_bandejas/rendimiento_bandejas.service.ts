import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendimientoBandeja } from './entities/rendimiento_bandeja.entity';
import { CreateRendimientoBandejaDto } from './dto/create-rendimiento_bandeja.dto';

@Injectable()
export class RendimientoBandejasService {
  constructor(
    @InjectRepository(RendimientoBandeja)
    private readonly rendimientoRepository: Repository<RendimientoBandeja>,
  ) {}

  async create(dto: CreateRendimientoBandejaDto): Promise<RendimientoBandeja> {
    const nuevo = this.rendimientoRepository.create(dto);
    return this.rendimientoRepository.save(nuevo);
  }

  async findAll(): Promise<RendimientoBandeja[]> {
    return this.rendimientoRepository.find();
  }

  async findOne(id: number): Promise<RendimientoBandeja> {
    const registro = await this.rendimientoRepository.findOne({
      where: { id_rb: id },
    });

    if (!registro) {
      throw new NotFoundException(
        `RendimientoBandeja con id ${id} no encontrado`,
      );
    }

    return registro;
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.rendimientoRepository.remove(registro);
  }
}
