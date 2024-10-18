import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IamService } from "@cloud-community/iam";
import { take } from "rxjs/operators";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrl: "./create-account.component.scss",
})
export class CreateAccountComponent {
  protected createAccountForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private iamService: IamService
  ) {
    this.createAccountForm = this.formBuilder.group({
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

  createAccount(): void {
    const email = this.createAccountForm.get("email")?.value;
    const password = this.createAccountForm.get("password")?.value;
    this.iamService
      .createAccount({ email, password })
      .pipe(take(1))
      .subscribe(() => {});
  }
}
