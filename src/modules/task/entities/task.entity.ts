import { Profile } from '../../profile/entities/profile.entity';
import { Project } from '../../project/entities/project.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base.entity';
import { TaskStatus } from '../enums/task-status.enum';

@Entity('tasks')
export class Task extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Profile, (profile) => profile.task)
  assignee: Profile;

  @Column({ nullable: false })
  reporter: string;

  @Column({ nullable: true })
  priority: number;

  @Column({ nullable: true })
  estimatedDuration: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.TODO })
  status: string;

  @ManyToOne(() => Project, (project) => project.task)
  project: Project;
}
