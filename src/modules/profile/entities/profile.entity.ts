import { Designation } from '../../designation/entities/designation.entity';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity('profiles')
export class Profile extends BaseEntity {
  @Column({ nullable: true }) // not required
  avatar: string;

  @Column()
  address: string; // (Character Varying)

  //   @Column({ type: 'tinyint', default: 0 })
  @Column({ default: false })
  isRemote: boolean; // some dbs don't support boolean, so they store true=1 and false=0

  @Column()
  totalHours: number; // translated to Integer

  @OneToOne(() => User, (user) => user.profile, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Designation, (designation) => designation.profiles)
  designation: Designation;
}
