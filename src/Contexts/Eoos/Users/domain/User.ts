import { Uuid } from '../../../Shared/domain/value-object/Uuid'
import { Role } from './Roles'

export class User {
  private id: Uuid
  private email: string
  private password: string
  private role: Role

  constructor(id: Uuid, email: string, password: string, role: Role) {
    this.id = id
    this.email = email
    this.password = password
    this.role = role
  }
}
