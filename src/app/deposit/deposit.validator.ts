import { Validator } from '../Shared/Definitions/validator'
import { ValidatorResult } from '../Shared/Definitions/validator-result'

import { DepositInput } from './deposit.in'

export interface DepositValidator extends Validator<DepositInput> {
  validate(request: DepositInput): ValidatorResult
}
