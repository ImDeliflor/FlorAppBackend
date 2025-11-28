import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'calidad_enraizamiento_tbl', schema: 'calidad' })
export class CalidadEnraizamiento {
  @PrimaryGeneratedColumn()
  id_ce: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ nullable: true })
  check_enraizamiento_1: string;

  @Column({ nullable: true })
  check_enraizamiento_2: string;

  @Column({ nullable: true })
  check_enraizamiento_3: string;

  @Column({ type: 'int', nullable: true })
  esquejes_revisados: number;

  @Column({ type: 'int', nullable: true })
  esquejes_incorrectos: number;

  @Column({ nullable: true })
  check_enraizamiento_4: string;

  @Column({ nullable: true })
  check_enraizamiento_5: string;

  @Column({ nullable: true })
  check_enraizamiento_6: string;

  @Column({ nullable: true })
  check_enraizamiento_7: string;
}
