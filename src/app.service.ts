import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {

  constructor(private jwtService: JwtService){
}

  getHello(): string {
    return 'Hello World!';
  }


  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = {password: '123'};
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: '1', username: 'renrithysak' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }


}
