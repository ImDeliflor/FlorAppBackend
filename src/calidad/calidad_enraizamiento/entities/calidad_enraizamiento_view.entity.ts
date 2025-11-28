import { Column, PrimaryColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'informe_calidad_enraizamiento_v',
  schema: 'calidad_views',
})
export class CalidadEnraizamientoView {
  @PrimaryColumn({ type: 'int' })
  id_ce: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ type: 'varchar' })
  nombre_empleado: string;

  @Column({ type: 'varchar' })
  check_enraizamiento_1: string;

  @Column({ type: 'varchar' })
  check_enraizamiento_2: string;

  @Column({ type: 'varchar' })
  check_enraizamiento_3: string;

  @Column({ type: 'int' })
  esquejes_revisados: number;

  @Column({ type: 'int' })
  esquejes_incorrectos: number;

  @Column({
    type: 'numeric',
    precision: 4,
    scale: 1,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  enraizamiento: number;

  @Column({ type: 'varchar' })
  check_enraizamiento_4: string;

  @Column({ type: 'varchar' })
  check_enraizamiento_5: string;

  @Column({ type: 'varchar' })
  check_enraizamiento_6: string;

  @Column({ type: 'varchar' })
  check_enraizamiento_7: string;

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
