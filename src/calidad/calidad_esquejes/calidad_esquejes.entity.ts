import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'calidad_esqueje_tbl', schema: 'calidad', synchronize: false })
export class CalidadEsqueje {
  @PrimaryGeneratedColumn({ name: 'id_ce' })
  id_ce: number;

  @Column({ type: 'timestamp', name: 'fecha' })
  fecha: Date;

  @Column({ type: 'integer', name: 'id_empleado' })
  id_empleado: number;

  @Column({ type: 'integer', name: 'id_variedad' })
  id_variedad: number;

  @Column({ type: 'varchar', length: 5, name: 'seleccion' })
  seleccion: string;

  @Column({ type: 'integer', name: 'total_esquejes' })
  total_esquejes: number;

  @Column({ type: 'integer', name: 'corto' })
  corto: number;

  @Column({ type: 'integer', name: 'largo' })
  largo: number;

  @Column({ type: 'integer', name: 'pla_enf' })
  pla_enf: number;

  @Column({ type: 'integer', name: 'delgado' })
  delgado: number;

  @Column({ type: 'integer', name: 'grueso' })
  grueso: number;

  @Column({ type: 'integer', name: 'inmaduro' })
  inmaduro: number;

  @Column({ type: 'integer', name: 'pasado' })
  pasado: number;

  @Column({ type: 'integer', name: 'hoja_base' })
  hoja_base: number;

  @Column({ type: 'integer', name: 'deshid_maltr' })
  deshid_maltr: number;

  @Column({ type: 'integer', name: 'esquejes_reales' })
  esquejes_reales: number;

  @Column({ type: 'integer', name: 'esquejes_totales' })
  esquejes_totales: number;
}
