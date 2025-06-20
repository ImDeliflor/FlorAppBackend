import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'calidad_esqueje_tbl', schema: 'calidad' })
export class CalidadEsqueje {
  @PrimaryGeneratedColumn({ name: 'id_ce' })
  id_ce: number;

  @Column({ type: 'datetime', name: 'fecha' })
  fecha: Date;

  @Column({ type: 'int', name: 'id_empleado' })
  id_empleado: number;

  @Column({ type: 'int', name: 'id_variedad' })
  id_variedad: number;

  @Column({ type: 'varchar', length: 5, name: 'seleccion' })
  seleccion: string;

  @Column({ type: 'int', name: 'total_esquejes' })
  total_esquejes: number;

  @Column({ type: 'int', name: 'corto' })
  corto: number;

  @Column({ type: 'int', name: 'largo' })
  largo: number;

  @Column({ type: 'int', name: 'pla_enf' })
  pla_enf: number;

  @Column({ type: 'int', name: 'delgado' })
  delgado: number;

  @Column({ type: 'int', name: 'grueso' })
  grueso: number;

  @Column({ type: 'int', name: 'inmaduro' })
  inmaduro: number;

  @Column({ type: 'int', name: 'pasado' })
  pasado: number;

  @Column({ type: 'int', name: 'hoja_base' })
  hoja_base: number;

  @Column({ type: 'int', name: 'deshid_maltr' })
  deshid_maltr: number;

  @Column({ type: 'int', name: 'esquejes_reales' })
  esquejes_reales: number;

  @Column({ type: 'int', name: 'esquejes_totales' })
  esquejes_totales: number;
}
