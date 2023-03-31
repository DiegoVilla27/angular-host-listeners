import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickDirective } from './directives/click.directive';
import { ResizeDirective } from './directives/resize.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { KeyboardDirective } from './directives/keyboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickDirective,
    ResizeDirective,
    ScrollDirective,
    KeyboardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
