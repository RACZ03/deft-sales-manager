import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';

export interface PositionI {
  topR: string;
  topL: string;
  bottomL: string;
  bottomR: string;
  topE: string;
  topS: string;
  bottomE: string;
  bottomS: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private index = 1;

  private positions: PositionI = {
    topR: NbGlobalPhysicalPosition.TOP_RIGHT,
    topL: NbGlobalPhysicalPosition.TOP_LEFT,
    bottomL: NbGlobalPhysicalPosition.BOTTOM_LEFT,
    bottomR: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    topE: NbGlobalLogicalPosition.TOP_END,
    topS: NbGlobalLogicalPosition.TOP_START,
    bottomE: NbGlobalLogicalPosition.BOTTOM_END,
    bottomS: NbGlobalLogicalPosition.BOTTOM_START,
  };
  
  constructor(private toastrService: NbToastrService) { }

  public showToast(type: NbComponentStatus, position, title: string, duration: number, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: duration,
      hasIcon: true,
      position: this.positions[position],
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
