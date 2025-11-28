import { PartialType } from '@nestjs/mapped-types';
import { CreateCalidadEnraizamientoDto } from './create-calidad_enraizamiento.dto';

export class UpdateCalidadEnraizamientoDto extends PartialType(CreateCalidadEnraizamientoDto) {}
