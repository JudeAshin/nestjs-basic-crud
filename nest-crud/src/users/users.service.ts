import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private  users = [
    {
      userId: 1,
      username: 'jude',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'ashin',
      password: 'guess',
    },
    {
        userId:3,
        username:'jude ashin',
        password:'iamok',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}