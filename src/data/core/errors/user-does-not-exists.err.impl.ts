import { CustomError } from '../../../app/Shared/Error/custom-error'

export class UserDoesNotExistsErrorImpl extends CustomError {
  name = 'userDoesNotExistsError'

  constructor() {
    super()
  }

  toString(): string {
    return `${this.name}:
    ${JSON.stringify(this.data, null, 2)}`
  }
}
