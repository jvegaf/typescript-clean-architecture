import { Input } from '../Shared/Definitions/input';

export interface SignupInput extends Input {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}
