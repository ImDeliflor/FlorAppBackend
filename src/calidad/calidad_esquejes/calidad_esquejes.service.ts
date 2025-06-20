import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalidadEsqueje } from './calidad_esquejes.entity';
import { Repository } from 'typeorm';
import { CreateCalidadEsquejeDTO } from './dto/create-calidad-esqueje.dto';

@Injectable()
export class CalidadEsquejesService {
  constructor(
    @InjectRepository(CalidadEsqueje)
    private calidadEsquejeRepository: Repository<CalidadEsqueje>,
  ) {}

  create(calidadEsqueje: CreateCalidadEsquejeDTO) {
    const newEvaluacion = this.calidadEsquejeRepository.create(calidadEsqueje);
    return this.calidadEsquejeRepository.save(newEvaluacion);
  }

  findAll() {
    return this.calidadEsquejeRepository.find();
  }
}
