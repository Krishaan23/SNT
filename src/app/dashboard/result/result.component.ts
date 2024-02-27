import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public rowData = [];
  public displayedColumns: string[] = ['Purchase Price', 'No of Units', 'EMD', '2 - Loan', 'Interest Rate', 'Amortization', 'Interest Only'];

  constructor(private excelService: ExcelService) {

  }

  ngOnInit() {
    this.getSheetData();
  }

  getSheetData() {
    this.excelService.getSheetData().subscribe((res: any) => {
      console.log('RESULT TABLE DATA', res)
      if(res.length) {
        this.rowData = res;
      }
    })
  }


}
