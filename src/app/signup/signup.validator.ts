import { Validator } from '../Shared/Definitions/validator'
import { ValidatorResult } from '../Shared/Definitions/validator-result'

import { SignupInput } from './signup.in'

export interface SignupValidator extends Validator<SignupInput> {
  validate(request: SignupInput): ValidatorResult
}
