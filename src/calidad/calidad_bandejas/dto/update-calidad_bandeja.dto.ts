import { PartialType } from '@nestjs/mapped-types';
import { CreateCalidadBandejaDto } from './create-calidad_bandeja.dto';

export class UpdateCalidadBandejaDto extends PartialType(CreateCalidadBandejaDto) {}
