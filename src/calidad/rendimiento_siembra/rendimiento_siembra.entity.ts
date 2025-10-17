import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Entidad que representa los registros de rendimiento en la siembra.
 * Cada registro contiene información sobre las horas trabajadas y esquejes sembrados por empleado.
 */
@Entity({ name: 'rendimiento_siembra_tbl', schema: 'calidad' })
export class RendimientoSiembra {
  @PrimaryGeneratedColumn({ name: 'id_rs' })
  id_rs: number;

  @Column()
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({
    type: 'numeric',
    precision: 4,
    scale: 1,
    transformer: {
      to: (value: number) => value, // lo guarda tal cual
      from: (value: string) => parseFloat(value), // lo convierte a número al leer
    },
  })
  horas_trabajadas: number;

  @Column({ type: 'int' })
  esquejes_sembrados: number;

  @Column()
  id_area: number;
}
