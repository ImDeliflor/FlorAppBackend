import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'informe_calidad_bandejas_v',
  schema: 'calidad_views',
  synchronize: false,
})
export class CalidadBandejaView {
  @PrimaryColumn({ type: 'int' })
  id_cb: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ type: 'varchar' })
  nombre_empleado: string;

  @Column({ type: 'varchar', length: 10 })
  check_bandejas_1: string;

  @Column({ type: 'int' })
  bandejas_revisadas: number;

  @Column({ type: 'int' })
  bandejas_incorrectas: number;

  @Column({
    type: 'numeric',
    precision: 4,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  porc_bandejas: number;

  @Column({
    type: 'numeric',
    precision: 4,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  cumplimiento_calidad: number;

  @Column({ type: 'int' })
  nro_dia: number;

  @Column({ type: 'int' })
  semana_anio: number;

  @Column({ type: 'int' })
  mes: number;

  @Column({ type: 'int' })
  anio: number;
}
