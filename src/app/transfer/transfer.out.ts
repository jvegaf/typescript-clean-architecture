import { ID } from '../Shared/Definitions/id'
import { Output } from '../Shared/Definitions/output'

export interface TransferOutput extends Output {
  transactionId: ID
}
