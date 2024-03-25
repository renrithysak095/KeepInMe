import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async getToken(): Promise<{ access_token: string }> {
    const { access_token } = await this.appService.signIn('renrithysak', '123');
    return { access_token };
  }
}
