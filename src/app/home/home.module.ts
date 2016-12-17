import { XPipePipe } from './../x-pipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, XPipePipe]
})
export class HomeModule { }
