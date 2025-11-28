import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateCalidadEnraizamientoDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  id_empleado: number;

  @IsOptional()
  @IsString()
  check_enraizamiento_1?: string;

  @IsOptional()
  @IsString()
  check_enraizamiento_2?: string;

  @IsOptional()
  @IsString()
  check_enraizamiento_3?: string;

  @IsOptional()
  @IsInt()
  esquejes_revisados?: number;

  @IsOptional()
  @IsInt()
  esquejes_incorrectos?: number;

  @IsOptional()
  @IsString()
  check_enraizamiento_4?: string;

  @IsOptional()
  @IsString()
  check_enraizamiento_5?: string;

  @IsOptional()
  @IsString()
  check_enraizamiento_6?: string;

  @IsOptional()
  @IsString()
  check_enraizamiento_7?: string;
}
