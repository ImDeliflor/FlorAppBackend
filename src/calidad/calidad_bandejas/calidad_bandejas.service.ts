import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalidadBandejas } from './entities/calidad_bandeja.entity';
import { CreateCalidadBandejaDto } from './dto/create-calidad_bandeja.dto';

@Injectable()
export class CalidadBandejasService {
  constructor(
    @InjectRepository(CalidadBandejas)
    private readonly calidadBandejasRepository: Repository<CalidadBandejas>,
  ) {}

  async create(dto: CreateCalidadBandejaDto): Promise<CalidadBandejas> {
    const newRegistro = this.calidadBandejasRepository.create(dto);
    return this.calidadBandejasRepository.save(newRegistro);
  }

  async findAll(): Promise<CalidadBandejas[]> {
    return this.calidadBandejasRepository.find();
  }

  async findOne(id: number): Promise<CalidadBandejas> {
    const registro = await this.calidadBandejasRepository.findOne({
      where: { id_cb: id },
    });

    if (!registro) {
      throw new NotFoundException(`CalidadBandejas con id ${id} no encontrado`);
    }

    return registro;
  }

  async remove(id: number): Promise<void> {
    const registro = await this.findOne(id);
    await this.calidadBandejasRepository.remove(registro);
  }
}
