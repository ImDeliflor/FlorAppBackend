import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Variedad } from './variedad.entity';
import { Repository } from 'typeorm';
import { CreateVariedadDTO } from './dto/create-variedad.dto';

@Injectable()
export class VariedadesService {
  constructor(
    @InjectRepository(Variedad)
    private variedadRepository: Repository<Variedad>,
  ) {}

  create(variedad: CreateVariedadDTO) {
    const newVariedad = this.variedadRepository.create(variedad);
    return this.variedadRepository.save(newVariedad);
  }

  findAll() {
    return this.variedadRepository.find();
  }
}
