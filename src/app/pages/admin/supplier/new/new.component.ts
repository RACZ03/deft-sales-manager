import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-new-supplier',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewSupplierComponent implements OnInit {

  @Output() btnSave = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.btnSave.emit(true);
  }


}
