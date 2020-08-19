import { ID } from '../Shared/Definitions/id'
import { User } from '../core/entities/user'

export interface SignupRepository {
  findUserByUsername(username: string): Promise<User | null>
  createUser(user: User): Promise<ID>
}
