import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

/**
 * Vista que muestra el informe general de rendimiento de siembra,
 * con información del empleado, área y métricas de productividad.
 */
@ViewEntity({
  schema: 'calidad_views',
  name: 'informe_rendimiento_siembra_v',
})
export class RendimientoSiembraView {
  @PrimaryColumn({ type: 'int' })
  id_rs: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ type: 'varchar', length: 150 })
  nombre_empleado: string;

  @Column({ type: 'varchar', length: 100 })
  nombre_area: string;

  @Column({ type: 'varchar', length: 50 })
  estado_area: string;

  // Numeric(4,1) → precisión de una cifra decimal
  @Column({
    type: 'numeric',
    precision: 4,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  horas_trabajadas: number;

  @Column({ type: 'int' })
  esquejes_sembrados: number;

  @Column({ type: 'int' })
  rendimiento: number;

  @Column({ type: 'int' })
  nro_dia: number;

  @Column({ type: 'int' })
  semana_anio: number;

  @Column({ type: 'varchar', length: 20 })
  mes: string;

  @Column({ type: 'int' })
  anio: number;
}
