import { Injectable } from '@angular/core';
import { Batch } from '../../../model/batch.model';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  batches: Batch[] = [
    {batchNo:'B001', expiryDate:'20/10/2021', quantityAvailable:100, quantityAdministered:10,
      vaccine:{vaccineID:'V001', vaccineName:'AstraZeneca', manufacturer:'BioPharma'}
    },
    {batchNo:'B002', expiryDate:'25/10/2021', quantityAvailable:100, quantityAdministered:10,
      vaccine:{vaccineID:'V002', vaccineName:'SinoVac', manufacturer:'China'}
    },
    {batchNo:'B003', expiryDate:'31/10/2021', quantityAvailable:100, quantityAdministered:10,
      vaccine:{vaccineID:'V003', vaccineName:'Pfizer', manufacturer:'Johnson&Johnson'}
    },
    {batchNo:'B004', expiryDate:'11/11/2021', quantityAvailable:100, quantityAdministered:10,
      vaccine:{vaccineID:'V003', vaccineName:'Pfizer', manufacturer:'Johnson&Johnson'}
    }

  ]
  constructor() { }

  getBatches(){
    return this.batches;
  }
}
