import { XPipePipe } from './x-pipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [XPipePipe],
  exports: [XPipePipe]
})
export class SharedModule { }
