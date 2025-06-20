import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'informe_checklist_calidad_esqueje_v',
  schema: 'calidad_views',
})
export class ChecklistEsquejeView {
  @PrimaryColumn()
  id_che: number;

  @Column()
  fecha: Date;

  @Column()
  nombre_empleado: string;

  @Column()
  check_1: string;

  @Column()
  check_2: string;

  @Column()
  check_3: string;

  @Column()
  check_4: string;

  @Column()
  cumplimiento_calidad: number;

  @Column()
  nro_dia: string;

  @Column()
  mes: string;

  @Column()
  semana_anio: string;

  @Column()
  anio: string;
}
