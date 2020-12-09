import { Controller, Get, Query, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect()
  getMock() {
      return { url: 'places/api/logradouro/v1/endereco/municipios' };
    }
}
