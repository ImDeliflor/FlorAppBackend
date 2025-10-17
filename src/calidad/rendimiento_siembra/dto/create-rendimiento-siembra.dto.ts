import { IsDateString, IsInt, IsNumber, Min } from 'class-validator';

/**
 * DTO para la creación de registros en la tabla de rendimiento de siembra.
 * Se valida la estructura de los datos antes de guardar.
 */
export class CreateRendimientoSiembraDto {
  /** Fecha del registro (en formato ISO o 'YYYY-MM-DD') */
  @IsDateString()
  fecha: Date;

  /** ID del empleado que realizó la siembra */
  @IsInt()
  id_empleado: number;

  /** Horas trabajadas en el día (ej. 6.5) */
  @IsNumber()
  @Min(0)
  horas_trabajadas: number;

  /** Total de esquejes sembrados */
  @IsInt()
  @Min(0)
  esquejes_sembrados: number;

  @IsInt()
  id_area: number;
}
