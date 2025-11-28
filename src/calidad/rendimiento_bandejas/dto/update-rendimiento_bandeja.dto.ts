import { PartialType } from '@nestjs/mapped-types';
import { CreateRendimientoBandejaDto } from './create-rendimiento_bandeja.dto';

export class UpdateRendimientoBandejaDto extends PartialType(
  CreateRendimientoBandejaDto,
) {}
