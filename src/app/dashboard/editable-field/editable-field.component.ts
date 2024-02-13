import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss']
})
export class EditableFieldComponent implements OnInit,OnChanges {
  public edit:boolean = false;
  @Input() value: number = 0;
  @Input() key: string = '';
  @Output() calculateValues = new EventEmitter<any>();
  constructor() {

  }
  ngOnInit() {

  }
  ngOnChanges() {

  }

  onBlurEvent() {
    this.edit = false;
    this.calculateValues.emit({key: this.key, value: this.value});
  }
}
