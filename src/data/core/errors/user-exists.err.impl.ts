import { CustomError } from '../../../app/Shared/Error/custom-error'

export class UserExistsErrorImpl extends CustomError {
  name = 'userExistsError'

  constructor() {
    super()
  }

  toString(): string {
    return `${this.name}:
    ${JSON.stringify(this.data, null, 2)}`
  }
}
