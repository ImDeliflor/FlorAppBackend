import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'informe_evaluaciones_calidad_esqueje_v',
  schema: 'calidad_views',
})
export class CalidadEsquejeView {
  @PrimaryColumn()
  id_ce: number;

  @Column({ type: 'datetime', name: 'fecha' })
  fecha: Date;

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

  @Column({ type: 'int', name: 'total_esquejes' })
  total_esquejes: number;

  @Column({ type: 'int', name: 'corto' })
  corto: number;

  @Column({ type: 'int', name: 'largo' })
  largo: number;

  @Column({ type: 'int', name: 'pla_enf' })
  pla_enf: number;

  @Column({ type: 'int', name: 'delgado' })
  delgado: number;

  @Column({ type: 'int', name: 'grueso' })
  grueso: number;

  @Column({ type: 'int', name: 'inmaduro' })
  inmaduro: number;

  @Column({ type: 'int', name: 'pasado' })
  pasado: number;

  @Column({ type: 'int', name: 'hoja_base' })
  hoja_base: number;

  @Column({ type: 'int', name: 'deshid_maltr' })
  deshid_maltr: number;

  @Column({ type: 'int', name: 'total_descartes' })
  total_descartes: number;

  @Column({ type: 'int', name: 'esquejes_reales' })
  esquejes_reales: number;

  @Column({ type: 'int', name: 'esquejes_totales' })
  esquejes_totales: number;

  @Column({ type: 'int', name: 'porc_precision' })
  porc_precision: number;

  @Column({ type: 'int', name: 'calidad' })
  calidad: number;

  @Column({ type: 'int', name: 'calidad_ajustada' })
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
