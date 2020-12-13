import { Injectable } from '@nestjs/common';
import { AllPlaces } from './mock-database/places'


@Injectable()
export class PlacesService {
  findAll() {
    return AllPlaces
  }

  async findByParams(uf: string, nome: string) {

    const filterByNome = (place: any) => place.nome == nome.toUpperCase()
    const filterByUf = (place: any) => place.uf == uf.toUpperCase()
    
    let data = nome ? AllPlaces.filter(filterByNome) : AllPlaces
    
    if(uf)
      data = data.filter(filterByUf)
    
    return data
  }
}