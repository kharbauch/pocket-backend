import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Response as Res } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly sequelize: Sequelize,
  ) {}

  @Get()
  async getHello(@Response() res: Res): Promise<Res> {
    // return this.appService.getHello();
    const data = await this.sequelize.query(
      'select  top 10 ART_I_ID  , ART_C_REF from ART_ARTICLE where ART_FAM_I_ID = 28',
    );
    return res.json(data);
  }
}
