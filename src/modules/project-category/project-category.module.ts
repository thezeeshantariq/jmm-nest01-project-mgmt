import { Module } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';
import { ProjectCategoryController } from './project-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectCategory } from './entities/project-category.entity';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectCategory]), ProjectModule],
  controllers: [ProjectCategoryController],
  providers: [ProjectCategoryService],
  exports: [ProjectCategoryService],
})
export class ProjectCategoryModule {}
