import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('report')
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  startPrepTime: string;

  @Column('text', { nullable: true })
  endPrepTime: string;

  @Column('numeric', { nullable: true })
  numberOfOrder: number;
}
