import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

/**
 * DTO para la creación de un nuevo registro de calidad de siembra.
 * Valida y define la forma de los datos esperados en el body del POST.
 */
export class CreateCalidadSiembraDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  id_empleado: number;

  @IsInt()
  id_area: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  check_siembra_1?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  check_siembra_2?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  check_siembra_3?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  check_siembra_4?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  check_siembra_5?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  check_siembra_6?: string;
}
