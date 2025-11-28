import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CalidadBandejaView } from './entities/calidad_bandeja_view.entity';

@Injectable()
export class CalidadBandejasViewService {
  constructor(
    @InjectRepository(CalidadBandejaView)
    private informeRepository: Repository<CalidadBandejaView>,
  ) {}

  findAll() {
    return this.informeRepository.find();
  }
}
