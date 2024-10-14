import { NgModule } from "@angular/core";
import { provideRouter } from "@angular/router";
import { SignInComponent } from "./sign-in.component";
import { routes } from "./sign-in.routes";

@NgModule({
  declarations: [
    SignInComponent,
  ],
  providers: [
    provideRouter(routes),
  ]
})
export class SignInModule { }
