import { Route } from "@angular/router";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { SignInComponent } from "./sign-in.component";

export const routes: Route[] = [
  { path: "", component: SignInComponent },
  { path: "register", component: CreateAccountComponent },
  { path: "**", component: SignInComponent },
];
