import { Injectable } from '@angular/core';
import { Vaccine } from 'src/app/model/vaccine.model';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

  storedVaccines: Vaccine[] = [
    {vaccineID:'V001', vaccineName:'AstraZeneca', manufacturer:'BioPharma'},
    {vaccineID:'V002', vaccineName:'SinoVac', manufacturer:'China'},
    {vaccineID:'V003', vaccineName:'Pfizer', manufacturer:'Johnson&Johnson'}
  ];

  constructor() { }

  getVaccines(){
    return this.storedVaccines
  }
}


