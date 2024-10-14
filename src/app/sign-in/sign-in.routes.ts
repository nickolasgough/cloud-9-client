import { Route } from "@angular/router";
import { SignInComponent } from "./sign-in.component";

export const routes: Route[] = [
  { path: '**', component: SignInComponent },
];
