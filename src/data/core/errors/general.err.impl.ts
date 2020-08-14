import { CustomError } from '../../../app/Shared/Error/custom-error';

export class GeneralErrorImpl extends CustomError {
  name = 'generalError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}`;
  }
}
