import { ProjectCategory } from '../../project-category/entities/project-category.entity';
import { ProjectDocument } from '../../project-document/entities/project-document.entity';
import { Task } from '../../task/entities/task.entity';
import { Team } from '../../team/entities/team.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity('projects')
export class Project extends BaseEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  duration: string;

  @Column()
  budget: string;

  @ManyToOne(() => ProjectCategory, (category) => category.projects)
  category: ProjectCategory;

  @Column({ nullable: true })
  proposal: string;

  @Column({ nullable: true })
  feasibility: string;

  @Column()
  isInHouse: boolean;

  @Column({ nullable: false })
  status: boolean;

  @OneToMany(() => ProjectDocument, (document) => document.project)
  document: ProjectDocument[];

  @ManyToOne(() => Team, (team) => team.projects)
  team: Team;

  @OneToMany(() => Task, (task) => task.project)
  task: Task[];
}
