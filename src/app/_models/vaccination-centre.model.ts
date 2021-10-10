import { Vaccine } from "./vaccine.model";

export interface VaccinationCentre {
  centreId: string;
  centreName: string;
  address: string;
  listOfVaccines: Vaccine[];
}
