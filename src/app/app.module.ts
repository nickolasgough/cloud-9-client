import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }