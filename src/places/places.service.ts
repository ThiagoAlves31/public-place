import { Injectable } from '@nestjs/common';
import { AllPlaces } from './mock-database/places'


@Injectable()
export class PlacesService {
  findAll() {
    return AllPlaces
  }

  findByParams(uf: string, nome: string) {
    
    const data = nome ? [AllPlaces.find((value) => value.nome == nome) ] : AllPlaces
    
    return uf ? [data.find((value) => value.uf == uf)] : data
  }
}
