import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import { Project } from 'src/modules/project/entities/project.entity';
import { TaskStatus } from '../enums/task-status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  assignee: Profile;

  @IsNotEmpty()
  reporter: string;

  @IsNotEmpty()
  priority: number;

  @IsNotEmpty()
  estimatedDuration: string;

  @IsNotEmpty()
  @IsIn(Object.values(TaskStatus)) // ['todo','in-progress', 'done']
  status: string;

  @IsOptional()
  project: Project;
}
