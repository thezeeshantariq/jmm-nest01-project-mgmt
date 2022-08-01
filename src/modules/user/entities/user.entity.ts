import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { Role, Status } from '../enums';
import { BaseEntity } from '../../base.entity';

import { Profile } from '../../profile/entities/profile.entity';
import { Client } from '../../client/entities/client.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  // TypeOr
  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Staff })
  role: string;

  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: string;

  @OneToOne(() => Profile, (profile) => profile.user)
  // @JoinColumn()
  profile: Profile; // profileId

  @OneToOne(() => Client, (client) => client.user)
  // @JoinColumn()
  client: Client;
}
