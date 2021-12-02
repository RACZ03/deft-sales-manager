import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-new-category',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewCategoryComponent implements OnInit {

  @Output() btnSave = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.btnSave.emit(true);
  }
}
