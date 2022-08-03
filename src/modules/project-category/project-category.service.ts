import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectCategoryDto } from './dto/create-project-category.dto';
import { UpdateProjectCategoryDto } from './dto/update-project-category.dto';
import { ProjectCategory } from './entities/project-category.entity';

@Injectable()
export class ProjectCategoryService {
  constructor(
    @InjectRepository(ProjectCategory)
    private repository: Repository<ProjectCategory>,
  ) {}

  create(createProjectCategoryDto: CreateProjectCategoryDto) {
    return this.repository.save(createProjectCategoryDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} projectCategory`;
  }

  update(id: number, updateProjectCategoryDto: UpdateProjectCategoryDto) {
    return `This action updates a #${id} projectCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectCategory`;
  }
}
