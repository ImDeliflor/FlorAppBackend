import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'calidad_bandejas_tbl', schema: 'calidad' })
export class CalidadBandejas {
  @PrimaryGeneratedColumn()
  id_cb: number;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ type: 'int' })
  id_empleado: number;

  @Column({ nullable: true })
  check_bandejas_1: string;

  @Column({ type: 'int', nullable: true })
  bandejas_revisadas: number;

  @Column({ type: 'int', nullable: true })
  bandejas_incorrectas: number;
}
