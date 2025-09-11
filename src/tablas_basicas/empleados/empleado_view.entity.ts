import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'empleados_produccion_view',
  schema: 'tablas_basicas_views',
  synchronize: false,
})
export class EmpleadoView {
  @PrimaryGeneratedColumn()
  id_empleado: number;

  @Column()
  nombre_empleado: string;

  @Column()
  apellido_empleado: string;

  @Column({ unique: true })
  codigo_empleado: string;

  @Column()
  nombre_programa: string;

  @Column()
  nombre_area: string;

  @Column()
  nombre_cargo: string;

  @Column()
  estado_empleado: string;
}
