import { Component, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/model/vaccine.model';
import { VaccinesService } from './vaccines.service';
import { VaccinationCentre } from 'src/app/model/vaccination-centre.model';
import { CentreService } from './centre.service';

@Component({
  selector: 'app-req-appointment',
  templateUrl: './req-appointment.component.html',
  styleUrls: ['./req-appointment.component.css']
})
export class ReqAppointmentComponent implements OnInit {

  vacSelection:string = '';
  storedVaccines: Vaccine[] = [];
  registeredCentres: VaccinationCentre[] = [];
  filteredCentres: VaccinationCentre[] = [];

  constructor(public vaccineService: VaccinesService, public centreService: CentreService) { }

  ngOnInit(): void {
    this.storedVaccines = this.vaccineService.getVaccines()
    this.registeredCentres = this.centreService.getCenters()
  }

  getRelatedCentres(value:string){
    this.filteredCentres = []
    this.vacSelection = value;
    this.registeredCentres.forEach((centre) => {
      centre.listOfVaccines.forEach((vaccine) => {
        if(vaccine.vaccineName === this.vacSelection){
          this.filteredCentres.push(centre);
        }
      })
    })
  }

  checkCentreHasVaccine(){

  }

}
