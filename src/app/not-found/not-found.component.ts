import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  @Input() fruitForm: FormGroup;
  @Output() saveFruitEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    if (this.fruitForm.valid) {
      this.saveFruitEvent.emit(this.fruitForm.getRawValue());
    }
  }
}
