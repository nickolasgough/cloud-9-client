import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IamService } from "@cloud-9/iam";
import { take } from "rxjs/operators";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrl: "./sign-up.component.scss",
})
export class SignUpComponent {
  protected createUserForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private iamService: IamService
  ) {
    this.createUserForm = this.formBuilder.group({
      email: this.formBuilder.control("", [
        Validators.required,
        Validators.email,
      ]),
      password: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  createUser(): void {
    const email = this.createUserForm.get("email")?.value;
    const password = this.createUserForm.get("password")?.value;
    this.iamService
      .createUser({ email, password })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.router.navigateByUrl("/home");
        },
      });
  }
}
