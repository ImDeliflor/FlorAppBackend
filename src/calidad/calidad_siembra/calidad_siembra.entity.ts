import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Representa la tabla 'calidad_siembra_tbl' en la base de datos.
 */
@Entity({ name: 'calidad_siembra_tbl', schema: 'calidad' })
export class CalidadSiembra {
  @PrimaryGeneratedColumn({ name: 'id_cs' })
  id_cs: number;

  @Column()
  fecha: Date;

  @Column()
  id_empleado: number;

  @Column()
  id_area: number;

  @Column({ length: 50, nullable: true })
  check_siembra_1: string;

  @Column({ length: 50, nullable: true })
  check_siembra_2: string;

  @Column({ length: 50, nullable: true })
  check_siembra_3: string;

  @Column({ length: 50, nullable: true })
  check_siembra_4: string;

  @Column({ length: 50, nullable: true })
  check_siembra_5: string;

  @Column({ length: 50, nullable: true })
  check_siembra_6: string;
}
