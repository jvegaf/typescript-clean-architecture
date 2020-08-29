import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { RegexValidation, RegexPattern } from 'regexpattern-collection'
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'

export class Email extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.validate(value)
  }

  private validate(value: string): void {
    if (!RegexValidation.hasMatch(value, RegexPattern.email))
      throw new InvalidArgumentError(`The Email ${value} is not valid`)
  }
}
