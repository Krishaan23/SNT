import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ASSET_TYPE } from 'src/app/common/const';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public dashboardForm: FormGroup = new FormGroup({});
  public asset_types = ASSET_TYPE;
  public summaryEnable:boolean = false;
  public activeTab:string = 'summary';
  public submitted:boolean = false;
  public result: any = {};
  constructor() {

  }
  
  ngOnInit() {
    this.createForm();
  }


  restrictInputValues(keyval: string) {
    if(this.dashboardForm.value && this.dashboardForm.value[keyval]) {
      const control = this.dashboardForm.get(keyval);
      switch(keyval) {
        case "asking_price":
          this.dashboardForm.patchValue({asking_price: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "units":
          this.dashboardForm.patchValue({units: parseInt(this.dashboardForm.value[keyval])})
      }
      switch(keyval) {
        case "down_payment":
          this.dashboardForm.patchValue({down_payment: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "int_months":
          this.dashboardForm.patchValue({int_months: parseInt(this.dashboardForm.value[keyval])})
      }
      switch(keyval) {
        case "repairs":
          this.dashboardForm.patchValue({repairs: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "op_reservers":
          this.dashboardForm.patchValue({op_reservers: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "gross_income":
          this.dashboardForm.patchValue({gross_income: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "total_expenses":
          this.dashboardForm.patchValue({total_expenses: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "intreset_rates":
          this.dashboardForm.patchValue({intreset_rates: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
      switch(keyval) {
        case "amortization":
          this.dashboardForm.patchValue({amortization: parseInt(this.dashboardForm.value[keyval])})
      }
      switch(keyval) {
        case "market_cap_rate":
          this.dashboardForm.patchValue({market_cap_rate: Number(this.dashboardForm.value[keyval].toFixed(2))})
      }
    }
  }

  onCalculate() {
    this.submitted = true;
    if(!this.dashboardForm.valid) {
      this.dashboardForm.markAllAsTouched();
      return;
    }
    this.summaryEnable = true;
    this.result = this.dashboardForm.value;
  }

  onReset() {
    this.submitted = false;
    this.summaryEnable = false;
    this.dashboardForm.reset();
  }

  createForm() {
    this.dashboardForm = new FormGroup({
      asset_type: new FormControl('', [Validators.required]),
      asking_price: new FormControl('', [Validators.required]),
      units: new FormControl('', [Validators.required]),
      down_payment: new FormControl('', [Validators.required]),
      int_months: new FormControl('', [Validators.required]),
      repairs: new FormControl('', [Validators.required]),
      op_reservers: new FormControl('', [Validators.required]),
      gross_income: new FormControl('', [Validators.required]),
      total_expenses: new FormControl('', [Validators.required]),
      intreset_rates: new FormControl('', [Validators.required]),
      amortization: new FormControl('', [Validators.required]),
      market_cap_rate: new FormControl('', [Validators.required]),
    });
  }


}
