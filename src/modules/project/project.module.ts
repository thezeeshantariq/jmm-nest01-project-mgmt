import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { ProjectDocumentModule } from '../project-document/project-document.module';
import { TaskModule } from '../task/task.module';
import { TeamModule } from '../team/team.module';
import { ProjectCategory } from '../project-category/entities/project-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), TaskModule, TeamModule],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
