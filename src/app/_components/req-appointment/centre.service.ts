import { Injectable } from '@angular/core';
import { VaccinationCentre } from 'src/app/model/vaccination-centre.model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  registeredCentres: VaccinationCentre[] = [
    {centreId:'C001', centreName:'Centre 1', address:'Somewhere over here', listOfVaccines:[
      {vaccineID:'V001', vaccineName:'AstraZeneca', manufacturer:'BioPharma'}
    ]},
    {centreId:'C002', centreName:'Centre 2', address:'Somewhere over there', listOfVaccines:[
      {vaccineID:'V001', vaccineName:'AstraZeneca', manufacturer:'BioPharma'},
      {vaccineID:'V002', vaccineName:'SinoVac', manufacturer:'China'},
      {vaccineID:'V003', vaccineName:'Pfizer', manufacturer:'Johnson&Johnson'}
    ]},
    {centreId:'C003', centreName:'Centre 3', address:'Somewhere over yonder', listOfVaccines:[
      {vaccineID:'V002', vaccineName:'SinoVac', manufacturer:'China'},
      {vaccineID:'V003', vaccineName:'Pfizer', manufacturer:'Johnson&Johnson'}
    ]},
  ]

  constructor() { }

  getCenters() {
    return this.registeredCentres
  }

}
