import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { provideRouter } from "@angular/router";
import { SignInComponent } from "./sign-in.component";
import { routes } from "./sign-in.routes";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [SignInComponent],
  providers: [provideRouter(routes)],
})
export class SignInModule {}
