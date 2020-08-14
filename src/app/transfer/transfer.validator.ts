import { Validator } from '../Shared/Definitions/validator';
import { ValidatorResult } from '../Shared/Definitions/validator-result';

import { TransferInput } from './transfer.in';

export interface TransferValidator extends Validator<TransferInput> {
  validate(request: TransferInput): ValidatorResult;
}
