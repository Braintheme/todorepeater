import { Repository, FindOptionsWhere, FindManyOptions } from 'typeorm';

export class BaseUserRepository<T extends { user: { id: number } }> {
  constructor(protected readonly repository: Repository<T>) {}

  findAllByUser(userId: number): Promise<T[]> {
    const where: FindOptionsWhere<T> = {
      user: { id: userId },
    } as unknown as FindOptionsWhere<T>;

    return this.repository.find({ where });
  }

  findPaginatedByUser(
    userId: number,
    page: number,
    limit: number,
    extraOptions: Omit<FindManyOptions<T>, 'where' | 'skip' | 'take'> = {},
  ): Promise<T[]> {
    const where: FindOptionsWhere<T> = {
      user: { id: userId },
    } as unknown as FindOptionsWhere<T>;

    return this.repository.find({
      where,
      skip: (page - 1) * limit,
      take: limit,
      ...extraOptions,
    });
  }
}
