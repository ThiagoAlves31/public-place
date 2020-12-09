import { Controller, Get, Param, Query} from '@nestjs/common';
import { AllPlaces } from './mock-database/places';
import { PlacesService } from './places.service';

@Controller('places/api/logradouro/v1/endereco/municipios')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}
  @Get()
  findAll(
    @Query('nome') nome: string,
    @Query('uf') uf: string
  ) {
    if(!nome && !uf)
      return this.placesService.findAll();

    return this.placesService.findByParams(uf,nome);
  }
}
