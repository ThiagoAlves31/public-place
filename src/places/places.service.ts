import { Injectable } from '@nestjs/common';
import { AllPlaces } from './mock-database/places'


@Injectable()
export class PlacesService {
  findAll() {
    return AllPlaces
  }

  async findByParams(uf: string, nome: string) {
    
    let data = nome ? AllPlaces.filter((value) => value.nome == nome.toUpperCase()) : AllPlaces
    
    if(uf)
      data = data.filter((value) => value.uf == uf.toUpperCase())
    
    return data
  }
}
