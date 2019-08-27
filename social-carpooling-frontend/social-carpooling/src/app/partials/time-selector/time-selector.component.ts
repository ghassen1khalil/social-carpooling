import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {Literals} from '../../core/constant/literals';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: TimeSelectorComponent, multi: true}
  ]
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     multi: true,
  //     useExisting: forwardRef(() => TimeSelectorComponent),
  //   }
  // ]
})
export class TimeSelectorComponent implements ControlValueAccessor {


  public hours: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  public minutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

  @Input()
  timeForm: FormGroup;

  selectedHour: string;
  selectedMinute: string;

  /*@Output()
  timeEventEmitter: EventEmitter<string> = new EventEmitter<string>();*/
  time: string;

  constructor(private formBuilder: FormBuilder) {
    this.timeForm = this.formBuilder.group({
      hour: [''],
      minute: ['']
    });
  }

  registerOnChange(fn: (value: any) => void) {
    this.timeForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    //this.time = value ? value : '';
    this.timeForm.setValue(value);
  }

  exportTime() {
    this.time = this.selectedHour + 'h' + this.selectedMinute;
    //this.timeEventEmitter.emit(this.time);
  }

  onChoose(value: string, part: string) {
    if (part === Literals.HOUR) {
      if (this.selectedMinute !== undefined) {
        this.exportTime()
      }
    } else if (part === Literals.MINUTE) {
      if (this.selectedHour !== undefined) {
        this.exportTime();
      }
    }
  }

}
