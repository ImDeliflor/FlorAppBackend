import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { Rol } from 'src/roles/rol.entity';

@Entity({ name: 'users', schema: 'seguridad' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  notification_token: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated: Date;

  @JoinTable({
    name: 'user_has_roles',
    schema: 'seguridad',
    joinColumn: {
      name: 'id_user',
    },
    inverseJoinColumn: {
      name: 'id_rol',
    },
  })
  @ManyToMany(() => Rol, (rol) => rol.users)
  roles: Rol[];

  @BeforeInsert()
  async hashPassword() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    this.password = await hash(this.password, Number(process.env.HASH_SALT));
  }
}
