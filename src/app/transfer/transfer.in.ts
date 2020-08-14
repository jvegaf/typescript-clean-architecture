import { ID } from '../Shared/Definitions/id';
import { Input } from '../Shared/Definitions/input';

export interface TransferInput extends Input {
  from: ID;
  to: ID;
  value: number;
}
