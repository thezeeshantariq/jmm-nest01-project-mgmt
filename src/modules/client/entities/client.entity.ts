import { User } from '../../user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity('clients')
export class Client extends BaseEntity {
  @Column({ nullable: true })
  contactPerson: string;

  @Column({ nullable: true })
  contactEmail: string;

  @Column({ nullable: true })
  contactNumber: string;

  @Column({ nullable: true })
  address: string;

  @OneToOne(() => User, (user) => user.client)
  @JoinColumn()
  user: User;
}