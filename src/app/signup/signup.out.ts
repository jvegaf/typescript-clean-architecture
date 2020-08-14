import { Output } from '../Shared/Definitions/output';
import { User } from '../core/entities/user';

export interface SignupOutput extends Output {
  user: Omit<User, 'password' | 'balance'>;
}
