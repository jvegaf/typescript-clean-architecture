import { CustomError } from '../../../app/Shared/Error/custom-error'

export class UserHasNoBalanceErrorImpl extends CustomError {
  name = 'userHasNoBalance'

  constructor() {
    super()
  }

  toString(): string {
    return `${this.name}:
    ${this.data}`
  }
}
