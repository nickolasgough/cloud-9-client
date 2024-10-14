import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    provideRouter(routes),
  ],
})
export class AppModule { }