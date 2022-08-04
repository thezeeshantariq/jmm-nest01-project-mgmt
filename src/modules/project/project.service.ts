import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private repository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.repository.save(createProjectDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number, relations = []) {
    return this.repository.findOne({
      where: { id },
      relations,
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  // findByClientId(id: number){
  //   return this.repository.findBy()
  // }
}
