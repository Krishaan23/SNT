// excel.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor(private http: HttpClient) {}

  exportToExcel(jsonData: any[], fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the workbook to the assets folder
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  writeToSheet(res: any) {
    return this.http.post('https://sheetdb.io/api/v1/7g3082apdzng4', {data: res});
  }

  getSheetData() {
    return this.http.get('https://sheetdb.io/api/v1/7g3082apdzng4');
  }
}
