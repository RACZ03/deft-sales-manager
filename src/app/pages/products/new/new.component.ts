import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-new-product',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public valueExpiration = 1;
  public valueWarranty = 0;
  public title: string = 'Nuevo Producto';
  
  @Output() btnSave = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.btnSave.emit(true);
  }

}
