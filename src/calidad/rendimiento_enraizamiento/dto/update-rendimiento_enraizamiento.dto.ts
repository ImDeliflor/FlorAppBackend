import { PartialType } from '@nestjs/mapped-types';
import { CreateRendimientoEnraizamientoDto } from './create-rendimiento_enraizamiento.dto';

export class UpdateRendimientoEnraizamientoDto extends PartialType(CreateRendimientoEnraizamientoDto) {}
