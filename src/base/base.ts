import { Repository } from 'typeorm';
export abstract class BaseRepository<T> extends Repository<T> {
  private repository: Repository<T>;
  protected constructor(repository: Repository<T>) {
    super(repository.target, repository.manager, repository.queryRunner);
    this.repository = repository;
  }
  
}