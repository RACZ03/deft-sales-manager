import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ProductI } from '../../../interfaces/product';

@Component({
  selector: 'ngx-detail-product',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  @Output() btnClose = new EventEmitter<boolean>();
  @Input() product: Partial<ProductI>;
  public title: string = 'Código';

  constructor(protected ref: NbDialogRef<ProductDetailComponent>) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  onClose() {
    this.ref.close();
  }

  onPrint() {

  }
}
