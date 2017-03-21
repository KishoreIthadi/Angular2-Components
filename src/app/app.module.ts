import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExamplesModule } from './examples/examples.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { trace, Category, UIRouterModule } from "ui-router-ng2";
import { MAIN_STATES } from './routes/app.states'

//trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    ExamplesModule,
    ComponentsModule,
    UIRouterModule.forRoot(
      {
        states: MAIN_STATES,
        otherwise: { state: 'pagination' },
        useHash: true
      })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }