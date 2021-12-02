import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-new-user',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewUserComponent implements OnInit {

  @Output() btnSave = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.btnSave.emit(true);
  }


}
