import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'historico_informe_evaluaciones_calidad_esqueje_v',
  schema: 'calidad_views',
  synchronize: false,
})
export class CalidadEsquejeView {
  @PrimaryColumn()
  id_ce: number;

  @Column({ type: 'timestamp', name: 'fecha' })
  fecha: Date;

  @Column({ type: 'integer', name: 'id_empleado' })
  id_empleado: string;

  @Column({ type: 'varchar', name: 'codigo_empleado' })
  codigo_empleado: string;

  @Column({ type: 'varchar', name: 'nombre_empleado' })
  nombre_empleado: string;

  @Column({ type: 'varchar', name: 'nombre_variedad' })
  nombre_variedad: string;

  @Column({ type: 'varchar', name: 'nombre_programa' })
  nombre_programa: string;

  @Column({ type: 'varchar', name: 'seleccion' })
  seleccion: string;

  @Column({ type: 'integer', name: 'total_esquejes' })
  total_esquejes: number;

  @Column({ type: 'integer', name: 'corto' })
  corto: number;

  @Column({ type: 'integer', name: 'largo' })
  largo: number;

  @Column({ type: 'integer', name: 'pla_enf' })
  pla_enf: number;

  @Column({ type: 'integer', name: 'delgado' })
  delgado: number;

  @Column({ type: 'integer', name: 'grueso' })
  grueso: number;

  @Column({ type: 'integer', name: 'inmaduro' })
  inmaduro: number;

  @Column({ type: 'integer', name: 'pasado' })
  pasado: number;

  @Column({ type: 'integer', name: 'hoja_base' })
  hoja_base: number;

  @Column({ type: 'integer', name: 'deshid_maltr' })
  deshid_maltr: number;

  @Column({ type: 'integer', name: 'total_descartes' })
  total_descartes: number;

  @Column({ type: 'integer', name: 'esquejes_reales' })
  esquejes_reales: number;

  @Column({ type: 'integer', name: 'esquejes_totales' })
  esquejes_totales: number;

  @Column({ type: 'integer', name: 'porc_precision' })
  porc_precision: number;

  @Column({ type: 'integer', name: 'calidad' })
  calidad: number;

  @Column({ type: 'integer', name: 'calidad_ajustada' })
  calidad_ajustada: number;

  @Column({ type: 'varchar', name: 'nro_dia' })
  nro_dia: string;

  @Column({ type: 'varchar', name: 'mes' })
  mes: string;

  @Column({ type: 'varchar', name: 'semana_anio' })
  semana_anio: string;

  @Column({ type: 'varchar', name: 'anio' })
  anio: string;
}
