import { ID } from '../Shared/Definitions/id';
import { Input } from '../Shared/Definitions/input';

export interface DepositInput extends Input {
  userId: ID;
  value: number;
}
