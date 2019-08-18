import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Literals} from '../../core/constant/literals';

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent implements OnInit {

  public hours: string[] = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  public minutes: string[] = ['00','05','10','15','20','25','30','35','40','45','50','55'];

  selectedHour : string;
  selectedMinute: string;

  @Output()
  timeEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  time : string;

  constructor() { }

  ngOnInit() {
  }

  exportTime() {
    this.time = this.selectedHour + "h" + this.selectedMinute;
    this.timeEventEmitter.emit(this.time);
  }

  onChoose(value: string, part: string) {
    if (part === Literals.HOUR) {
      if (this.selectedMinute !== undefined){
        this.exportTime()
      }
    } else if (part === Literals.MINUTE) {
      if (this.selectedHour !== undefined) {
        this.exportTime();
      }
    }
  }

}
