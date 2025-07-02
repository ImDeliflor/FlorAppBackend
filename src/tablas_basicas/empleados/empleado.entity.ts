import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'empleado_tbl', schema: 'tablas_basicas', synchronize: false })
export class Empleado {
  @PrimaryGeneratedColumn()
  id_empleado: number;

  @Column()
  nombre_empleado: string;

  @Column()
  apellido_empleado: string;

  @Column({ unique: true })
  codigo_empleado: string;

  @Column()
  id_programa: number;

  @Column()
  id_area: number;

  @Column()
  id_cargo: number;

  @Column()
  estado_empleado: string;
}
