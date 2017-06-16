import { UserContract } from '../../../application/definitions/contracts/user.contract';
import { User } from '../../../application/definitions/entities/user';

export default class InMemoryUserContract implements UserContract {
  private users: User[] = [];
  private lastId = 1;

  findById(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
      const users = this.users.filter((usr) => {
        return usr.id === userId;
      });

      resolve(users || []);
    });
  }

  findByDocument(document: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const user = this.users.find((usr) => {
        return usr.document === document;
      });

      resolve(user || null);
    });
  }

  create(firstName: string, lastName: string, document: string): Promise<User> {
    return new Promise((resolve, reject) => {
      const usr = {
        id: this.lastId++,
        firstName: firstName,
        lastName: lastName,
        document: document
      };

      this.users.push(usr);

      resolve(usr);
    });
  }
}
