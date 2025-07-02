import { User } from 'src/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'roles', schema: 'seguridad' })
export class Rol {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  image: string;

  @Column()
  route: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated: Date;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
