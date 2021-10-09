import { Component, OnInit } from '@angular/core';
import { Batch } from '../../../model/batch.model';
import { BatchService } from './batch.service';

@Component({
  selector: 'app-view-vaccine-batch',
  templateUrl: './view-vaccine-batch.component.html',
  styleUrls: ['./view-vaccine-batch.component.css']
})
export class ViewVaccineBatchComponent implements OnInit {
  batches:Batch[] = [];


  constructor(public batchService:BatchService) { }

  ngOnInit(): void {
    this.batches = this.batchService.getBatches()
  }



}
