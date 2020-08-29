import { Uuid } from '../../../Shared/domain/value-object/Uuid'
import { Role } from './Role'
import { Email } from './Email'

export class User {
  private id: Uuid
  private email: Email
  private password: string
  private role: Role

  constructor(id: Uuid, email: string, password: string, role: Role) {
    this.id = id
    this.email = new Email(email)
    this.password = password
    this.role = role
  }
}
