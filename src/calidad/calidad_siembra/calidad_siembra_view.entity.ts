import { ViewEntity, ViewColumn } from 'typeorm';

/**
 * Vista que consolida información de calidad de siembra.
 * Se usa únicamente para lectura (no inserciones ni actualizaciones).
 */
@ViewEntity({ name: 'informe_calidad_siembra_v', schema: 'calidad_views' })
export class CalidadSiembraView {
  @ViewColumn()
  id_cs: number;

  @ViewColumn()
  fecha: Date;

  @ViewColumn()
  id_empleado: number;

  @ViewColumn()
  nombre_empleado: string;

  @ViewColumn()
  nombre_area: string;

  @ViewColumn()
  estado_area: string;

  @ViewColumn()
  check_siembra_1: string;

  @ViewColumn()
  check_siembra_2: string;

  @ViewColumn()
  check_siembra_3: string;

  @ViewColumn()
  check_siembra_4: string;

  @ViewColumn()
  check_siembra_5: string;

  @ViewColumn()
  check_siembra_6: string;

  @ViewColumn()
  cumplimiento_calidad: string;

  @ViewColumn()
  nro_dia: number;

  @ViewColumn()
  semana_anio: number;

  @ViewColumn()
  mes: string;

  @ViewColumn()
  anio: number;
}
