import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges {

  @Input() enabled: any;
  @Input() formValue: any;
  public summary:any = {
    purchase_price: 0,
    no_of_units: 0,
    emd: 0,
    loan: 0,
    interest_rate: 0,
    amortization: 0,
    interest_only:0,
    acquisition_fee:0,
    eff_gross_income:0,
    total_expenses: 0,
    noi:0,
    debt_service: 0,
    debt_service_ratio:0,
    cash_flow_debt_service:0,
    lp_equity_share:0,
    gp_equity_share:0,
    preff_return_to_lp:0,
    asset_mgmt_fee:0,
    fee_to_mgr:0,
    gross_rent_multiplier:0
  };

  public result:any = {
    purchase_price: 0,
    no_of_units: 0,
    emd: 0,
    loan: 0,
    interest_rate: 0,
    amortization: 0,
    interest_only:0,
    acquisition_fee:0,
    eff_gross_income:0,
    total_expenses: 0,
    noi:0,
    debt_service: 0,
    debt_service_ratio:0,
    cash_flow_debt_service:0,
    lp_equity_share:0,
    gp_equity_share:0,
    preff_return_to_lp:0,
    asset_mgmt_fee:0,
    fee_to_mgr:0,
    gross_rent_multiplier:0
  };

  constructor(private excelService: ExcelService) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateSummary();
  }

  changeEmitter(data:any) {
    this.summary[data.key] = data.value;
    this.calculateSummary();
  }

  calculateSummary() {
    this.result['purchase_price'] = this.formValue['asking_price'];
    this.result['no_of_units'] = this.formValue['units'];
    this.result['emd'] = this.result['purchase_price'] * this.summary['emd'];
    this.result['loan'] = this.summary['loan'];
    this.result['interest_rate'] = this.result['loan'] ? this.summary['interest_rate']: 0;
    this.result['amortization'] = this.result['loan'] ? this.summary['amortization']: 0;
    this.result['acquisition_fee'] = this.summary['acquisition_fee'] ? (this.summary['acquisition_fee'] * 0.01 * this.result['purchase_price']) : 0;
    this.result['eff_gross_income'] = this.summary['eff_gross_income'];
    this.result['total_expenses'] = this.summary['total_expenses'];
    this.result['lp_equity_share'] = this.summary['lp_equity_share'];
    this.result['debt_service'] = this.summary['debt_service'];
    this.result['noi'] = this.result['eff_gross_income'] - this.result['total_expenses'];
    this.result['debt_service_ratio'] = this.result['purchase_price'] ? this.result['debt_service'] ? (this.result['noi'] / this.result['debt_service'])  : 0 : 0;
    this.result['cash_flow_debt_service'] = this.result['noi'] - this.result['debt_service'];
    this.result['gp_equity_share'] = 1 - this.summary['lp_equity_share'];
    this.result['preff_return_to_lp'] = this.summary['preff_return_to_lp'];
    this.result['asset_mgmt_fee'] = this.summary['asset_mgmt_fee'];
    this.result['fee_to_mgr'] = this.summary['fee_to_mgr'];
    this.result['gross_rent_multiplier'] = 0;
  }

  onSubmit() {
    const fileName = 'report';
    this.excelService.exportToExcel([this.result], fileName);
  }

}
