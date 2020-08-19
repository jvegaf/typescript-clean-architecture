import { ApplicationErrorFactory } from '../../../app/Shared/Error/application-error-factory'
import { CustomError, ErrorDataType } from '../../../app/Shared/Error/custom-error'
import { ERRORS } from './errors'

export class ApplicationErrorFactoryImpl implements ApplicationErrorFactory {
  getError(name: string, data?: ErrorDataType): CustomError {
    const errorImpl = ERRORS[name as keyof typeof ERRORS] || ERRORS['general']
    const params = data || {}

    errorImpl.initialize(params)
    return errorImpl
  }
}
