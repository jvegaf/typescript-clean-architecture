import { ID } from '../Shared/Definitions/id';
import { Output } from '../Shared/Definitions/output';

export interface DepositOutput extends Output {
  transactionId: ID;
  balance: number;
}
