import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CapabilitySheet {
  @PrimaryGeneratedColumn('uuid') id!: string;

  @Column('uuid') tenant_id!: string;

  @Column('jsonb') payload!: any;
  @Column() signature!: string;
  @Column({ type: 'timestamp', default: () => 'NOW()' })
  created_at!: Date;
}
