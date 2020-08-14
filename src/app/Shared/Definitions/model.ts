import { Entity } from '../../core/entities/entity';

export interface Model {
  toEntity(): Entity;
}
