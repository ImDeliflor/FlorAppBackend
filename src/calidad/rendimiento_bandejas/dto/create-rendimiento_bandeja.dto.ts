import { IsInt, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateRendimientoBandejaDto {
  @IsDateString()
  fecha: string;

  @IsInt()
  id_empleado: number;

  @IsNumber()
  horas_trabajadas: number;

  @IsOptional()
  @IsInt()
  bandejas_llenas?: number;
}
