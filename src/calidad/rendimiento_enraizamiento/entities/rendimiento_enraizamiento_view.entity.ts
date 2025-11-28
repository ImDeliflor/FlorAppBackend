import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'informe_rendimiento_enraizamiento_v',
  schema: 'calidad_views',
  synchronize: false,
})
export class RendimientoEnraizamientoView {
  @PrimaryColumn({ type: 'int' })
  id_re: number;

  @Column({ type: 'timestamp with time zone' })
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ type: 'text' })
  nombre_empleado: string;

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

  @Column({ type: 'int' })
  mes: number;

  @Column({ type: 'int' })
  anio: number;
}
