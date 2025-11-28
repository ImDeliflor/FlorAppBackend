import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendimientoBandejasView } from './entities/rendimiento_bandeja_view.entity';

@Injectable()
export class RendimientoBandejasViewService {
  constructor(
    @InjectRepository(RendimientoBandejasView)
    private readonly viewRepository: Repository<RendimientoBandejasView>,
  ) {}

  findAll() {
    return this.viewRepository.find();
  }
}
