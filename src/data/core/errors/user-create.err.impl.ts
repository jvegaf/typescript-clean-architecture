import { CustomError } from '../../../app/Shared/Error/custom-error'

export class UserCreateErrorImpl extends CustomError {
  name = 'userCreateError'

  constructor() {
    super()
  }

  toString(): string {
    return `${this.name}:
    ${this.data}`
  }
}
