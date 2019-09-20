import {Component} from '@angular/core';
import {Literals} from '../../core/constant/literals';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TimeSelectorComponent,
      multi: true
    }
  ]
})
export class TimeSelectorComponent implements ControlValueAccessor {
  // tslint:disable-next-line:max-line-length
  public hours: string[] = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  public minutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

  selectedHour: string;
  selectedMinute: string;
  time: string;

  private onChange: (value: string) => void;

  constructor(private formBuilder: FormBuilder) {
  }

  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: string): void {
    this.selectedHour = value.substr(0, 2);
    this.selectedMinute = value.substr(3, 2);
  }

  exportTime() {
    this.time = this.selectedHour + 'h' + this.selectedMinute;
    this.onChange(this.time);
  }

  onChoose(value: string, part: string) {
    if (part === Literals.HOUR) {
      if (this.selectedMinute !== undefined) {
        this.exportTime();
      }
    } else if (part === Literals.MINUTE) {
      if (this.selectedHour !== undefined) {
        this.exportTime();
      }
    }
  }

}
