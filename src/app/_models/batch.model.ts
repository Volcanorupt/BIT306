import { Vaccine } from "src/app/model/vaccine.model";

export interface Batch {
  batchNo: string;
  expiryDate: string;
  quantityAvailable: number;
  quantityAdministered: number;
  vaccine: Vaccine;
}
