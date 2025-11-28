import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateCalidadBandejaDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  id_empleado: number;

  @IsOptional()
  @IsString()
  check_siembra_1?: string;

  @IsOptional()
  @IsInt()
  bandejas_revisadas?: number;

  @IsOptional()
  @IsInt()
  bandejas_incorrectas?: number;
}
