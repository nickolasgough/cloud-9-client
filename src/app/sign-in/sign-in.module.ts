import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { provideRouter, RouterModule } from "@angular/router";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { SignInComponent } from "./sign-in.component";
import { routes } from "./sign-in.routes";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  declarations: [SignInComponent, CreateAccountComponent],
  providers: [provideRouter(routes)],
})
export class SignInModule {}
