import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rendimiento_enraizamiento_tbl', schema: 'calidad' })
export class RendimientoEnraizamiento {
  @PrimaryGeneratedColumn()
  id_re: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

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

  @Column({ type: 'int', nullable: true })
  esquejes_sembrados: number;
}
