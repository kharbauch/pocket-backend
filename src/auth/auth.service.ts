import { Injectable, UnauthorizedException  } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

  constructor(private readonly usersService :UsersService){

  }

  async connect(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    const user = {password  : "lorem"};
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
