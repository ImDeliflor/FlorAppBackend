import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'checklist_esqueje_tbl', schema: 'calidad' })
export class ChecklistEsqueje {
  @PrimaryGeneratedColumn()
  id_che: number;

  @Column()
  fecha: Date;

  @Column()
  id_empleado: number;

  @Column()
  check_1: string;

  @Column()
  check_2: string;

  @Column()
  check_3: string;

  @Column()
  check_4: string;
}
