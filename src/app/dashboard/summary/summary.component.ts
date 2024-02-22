import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelService } from 'src/app/services/excel.service';

export interface DataElements {
  name: string;
  key: string;
  position: number;
  editable: boolean;
  value: number;
  action: boolean;
};

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})

export class SummaryComponent implements OnInit, OnChanges {

  @Input() enabled: any;
  @Input() formValue: any;
  public displayedColumns: string[] = ['name', 'value', 'action'];
  public dataElements: DataElements[] = [
    {
      position: 1,
      name: 'Purchase Price',
      key: 'purchase_price',
      value: 0,
      editable: false,
      action: false
    },
    {
      position: 2,
      name: 'Units',
      key: 'no_of_units',
      value: 0,
      editable: false,
      action: false
    },
    {
      position: 3,
      name: 'EMD',
      key: 'emd',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 4,
      name: 'Loan',
      key: 'loan',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 5,
      name: 'Intrest Rate',
      key: 'interest_rate',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 6,
      name: 'Amortization',
      key: 'amortization',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 7,
      name: 'Interest Only',
      key: 'interest_only',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 8,
      name: 'Acquisition Fee',
      key: 'acquisition_fee',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 9,
      name: 'Effective Gross Income',
      key: 'eff_gross_income',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 10,
      name: 'Total Expenses',
      key: 'total_expenses',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 11,
      name: 'NOI',
      key: 'noi',
      editable: false,
      value: 0,
      action: false
    },
    {
      position: 12,
      name: 'Debt Service',
      key: 'debt_service',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 13,
      name: 'Debt Service Ratio',
      key: 'debt_service_ratio',
      editable: false,
      value: 0,
      action: false
    },
    {
      position: 14,
      name: 'Cash Flow Debt Service',
      key: 'cash_flow_debt_service',
      editable: false,
      value: 0,
      action: false
    },
    {
      position: 15,
      name: 'Cash Flow Debt Service',
      key: 'cash_flow_debt_service',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 16,
      name: 'Lp Equity Share',
      key: 'lp_equity_share',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 17,
      name: 'Gp Equity Share',
      key: 'gp_equity_share',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 18,
      name: 'Preferred Return to LP',
      key: 'preff_return_to_lp',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 19,
      name: 'Asset Managment Fee',
      key: 'asset_mgmt_fee',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 20,
      name: 'Fee to Mgr',
      key: 'fee_to_mgr',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 21,
      name: 'Gross Rent Multiplier',
      key: 'gross_rent_multiplier',
      editable: false,
      value: 0,
      action: true
    },
    // {
    //   position: 22,
    //   name: 'Units',
    //   key: 'no_of_units',
    //   value: 0,
    //   action: false
    // },
    // {
    //   position: 23,
    //   name: 'Units',
    //   key: 'no_of_units',
    //   value: 0,
    //   action: false
    // },
    // {
    //   position: 24,
    //   name: 'Units',
    //   key: 'no_of_units',
    //   value: 0,
    //   action: false
    // }
  ];
  public acquisitionDataElements: DataElements[] = [
    {
      position: 1,
      name: 'Down payment',
      key: 'down_payment',
      value: 0,
      editable: false,
      action: false
    },
    {
      position: 2,
      name: 'Closing cost',
      key: 'closing_cost',
      value: 0,
      editable: false,
      action: false
    },
    {
      position: 3,
      name: 'Acquistion Fee',
      key: 'acquisition_fee',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 4,
      name: 'Repair',
      key: 'repair',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 5,
      name: 'Total Capital',
      key: 'total_capital',
      editable: false,
      value: 0,
      action: true
    }
  ];
  public endGameDataElements: DataElements[] = [
    {
      position: 1,
      name: 'Cash out Re-Finance at Year',
      key: 'cash_out_re_finance_at_year',
      value: 0,
      editable: false,
      action: false
    },
    {
      position: 2,
      name: 'Closing cost',
      key: 'closing_cost',
      value: 0,
      editable: false,
      action: false
    },
    {
      position: 3,
      name: 'After Sale',
      key: 'after_sale',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 4,
      name: 'Amount Paid to LP',
      key: 'amount_paid_to_lp',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 5,
      name: 'Amount Paid to GP',
      key: 'amount_paid_to_gp',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 6,
      name: 'IRR',
      key: 'irr',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 7,
      name: 'Cash on Cash Average',
      key: 'cash_on_cash_average',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 8,
      name: 'Refianance',
      key: 're_fianance',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 9,
      name: 'Refianance  LTV',
      key: 're_fianance_ltv',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 10,
      name: 'Interest Rate',
      key: 'interest_rate',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 11,
      name: 'Amortization',
      key: 'amortization',
      editable: false,
      value: 0,
      action: false
    },
    {
      position: 12,
      name: 'Re Fianance Cost',
      key: 're_fianance_cost',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 13,
      name: 'Prepayment Penalty',
      key: 'pre_payment_penalty',
      editable: false,
      value: 0,
      action: false
    },
    {
      position: 14,
      name: 'Gross Proceeds from Re-Fi',
      key: 'gross_proceeds',
      editable: false,
      value: 0,
      action: false
    },
    {
      position: 15,
      name: 'Net Proceeds to LP',
      key: 'net_proceeds_lp',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 16,
      name: 'Net Proceeds to GP',
      key: 'net_proceeds_gp',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 17,
      name: 'Total Cash to LP/GP',
      key: 'total_cash',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 18,
      name: 'Sale',
      key: 'sales',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 19,
      name: 'Sales Cost',
      key: 'sales_cost',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 20,
      name: 'Net Proceeds from Sale',
      key: 'net_proceeds_sale',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 21,
      name: 'Net Proceeds to LP',
      key: 'net_proceeds_lp1',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 22,
      name: 'Net Proceeds to gP',
      key: 'net_proceeds_gp1',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 23,
      name: 'Total Cash to LP/GP',
      key: 'total_cash1',
      editable: false,
      value: 0,
      action: true
    },
    {
      position: 24,
      name: 'Net Proceeds from Sale',
      key: 'net_proceeds_sale1',
      editable: false,
      value: 0,
      action: true
    }
  ];
  public dataSource = new MatTableDataSource(this.dataElements);
  public acquistionDataSource = new MatTableDataSource(this.acquisitionDataElements);
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

  public acquisition:any = {
    down_payment: 0,
    closing_cost: 0,
    acquisition_fee: 0,
    repair: 0,
    total_capital: 0
  };

  public acquisitionResult:any = {
    down_payment: 0,
    closing_cost: 0,
    acquisition_fee: 0,
    repair: 0,
    total_capital: 0
  };

  public endGame:any = {
    cash_out_re_finance_at_year: 0,
    closing_cost: 0,
    after_sale: 0,
    amount_paid_to_lp: 0,
    amount_paid_to_gp: 0,
    irr: 0,
    cash_on_cash_average:0,
    re_fianance:0,
    re_fianance_ltv:0,
    interest_rate: 0,
    amortization:0,
    re_fianance_cost: 0,
    pre_payment_penalty:0,
    gross_proceeds:0,
    net_proceeds_lp:0,
    net_proceeds_gp:0,
    total_cash:0,
    sales:0,
    sales_cost:0,
    net_proceeds_sale:0,
    net_proceeds_lp1:0,
    net_proceeds_gp1:0,
    total_cash1:0,
    net_proceeds_sale1:0,
  };

  public endGameResult:any = {
    cash_out_re_finance_at_year: 0,
    closing_cost: 0,
    after_sale: 0,
    amount_paid_to_lp: 0,
    amount_paid_to_gp: 0,
    irr: 0,
    cash_on_cash_average:0,
    re_fianance:0,
    re_fianance_ltv:0,
    interest_rate: 0,
    amortization:0,
    re_fianance_cost: 0,
    pre_payment_penalty:0,
    gross_proceeds:0,
    net_proceeds_lp:0,
    net_proceeds_gp:0,
    total_cash:0,
    sales:0,
    sales_cost:0,
    net_proceeds_sale:0,
    net_proceeds_lp1:0,
    net_proceeds_gp1:0,
    total_cash1:0,
    net_proceeds_sale1:0,
  };

  constructor(private excelService: ExcelService) {}

  ngOnInit() {
  }

  changeToInput(key: string) {
    const ele = this.dataElements.find(a => a.key == key);
    if(ele && ele.action) {
      ele.editable = !!!ele.editable
    }
    console.log('ELE', ele);
  }
  acqusitionInput(key: string) {
    const ele = this.acquisitionDataElements.find(a => a.key == key);
    if(ele && ele.action) {
      ele.editable = !!!ele.editable
    }
    console.log('ELE', ele);
  }
  endGameInput(key: string) {
    const ele = this.endGameDataElements.find(a => a.key == key);
    if(ele && ele.action) {
      ele.editable = !!!ele.editable
    }
    console.log('ELE', ele);
  }

  onEnter(event: any, key: string) {
    const ele = this.dataElements.find(a => a.key == key);
    this.summary[key] = Number(event?.target?.value)
    console.log('RESULT', this.result, event);
    if(ele) {
      ele.editable = false;
      ele.value = this.summary[key] ?? 0
    }
    this.calculateSummary();
  }
  onAcqusitionEnter(event: any, key: string) {
    const ele = this.acquisitionDataElements.find(a => a.key == key);
    this.summary[key] = Number(event?.target?.value)
    console.log('RESULT', this.result, event, ele);
    if(ele) {
      ele.editable = false;
      ele.value = this.summary[key] ?? 0
    }
  }
  onEndGameEnter(event: any, key: string) {
    const ele = this.endGameDataElements.find(a => a.key == key);
    this.summary[key] = Number(event?.target?.value)
    console.log('RESULT', this.result, event, ele);
    if(ele) {
      ele.editable = false;
      ele.value = this.summary[key] ?? 0
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateSummary();
  }

  changeEmitter(data:any) {
    this.summary[data.key] = data.value;
    this.calculateSummary();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateSummary() {
    this.result['purchase_price'] = this.formValue['asking_price'] ?? 0;
    this.result['no_of_units'] = this.formValue['units'] ?? 0;
    this.result['emd'] = this.result['purchase_price'] * this.summary['emd'];
    this.result['loan'] = this.summary['loan'] ?? 0;
    this.result['interest_rate'] = this.result['loan'] ? this.summary['interest_rate']: 0;
    this.result['amortization'] = this.result['loan'] ? this.summary['amortization']: 0;
    this.result['acquisition_fee'] = this.summary['acquisition_fee'] ? (this.summary['acquisition_fee'] * 0.01 * this.result['purchase_price']) : 0;
    this.result['eff_gross_income'] = this.summary['eff_gross_income'] ?? 0;
    this.result['total_expenses'] = this.summary['total_expenses'] ?? 0;
    this.result['lp_equity_share'] = this.summary['lp_equity_share'] ?? 0;
    this.result['debt_service'] = this.summary['debt_service'];
    this.result['noi'] = this.result['eff_gross_income'] - this.result['total_expenses'];
    this.result['debt_service_ratio'] = this.result['purchase_price'] ? this.result['debt_service'] ? (this.result['noi'] / this.result['debt_service'])  : 0 : 0;
    this.result['cash_flow_debt_service'] = this.result['noi'] - this.result['debt_service'];
    this.result['gp_equity_share'] = 1 - this.summary['lp_equity_share'] ?? 0;
    this.result['preff_return_to_lp'] = this.summary['preff_return_to_lp'] ?? 0;
    this.result['asset_mgmt_fee'] = this.summary['asset_mgmt_fee'] ?? 0;
    this.result['fee_to_mgr'] = this.summary['fee_to_mgr'] ?? 0;
    this.result['gross_rent_multiplier'] = 0;
  }

  onSubmit() {
    const fileName = 'report';
    this.excelService.exportToExcel([this.result], fileName);
  }

}
