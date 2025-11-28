import { IsInt, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateRendimientoEnraizamientoDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  id_empleado: number;

  @IsOptional()
  @IsNumber()
  horas_trabajadas?: number;

  @IsOptional()
  @IsInt()
  esquejes_sembrados?: number;
}
