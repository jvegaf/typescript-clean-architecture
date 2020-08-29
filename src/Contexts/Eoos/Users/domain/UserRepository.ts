import { User } from './User'
import { Nullable } from '../../../Shared/domain/Nullable'

export interface UserRepository {
  save(user: User): Promise<void>

  find(id: string): Promise<Nullable<User>>
}
