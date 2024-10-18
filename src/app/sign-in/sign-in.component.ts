import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IamService } from "@cloud-9/iam";
import { take } from "rxjs/operators";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrl: "./sign-in.component.scss",
})
export class SignInComponent implements OnInit {
  protected signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private iamService: IamService
  ) {
    this.signInForm = this.formBuilder.group({
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

  ngOnInit(): void {
    const node = document.createElement("script");
    node.src = "https://accounts.google.com/gsi/client";
    node.async = true;
    document.head.appendChild(node);
  }

  signIn(): void {
    const email = this.signInForm.get("email")?.value;
    const password = this.signInForm.get("password")?.value;
    this.iamService
      .signInWithPassword({ email, password })
      .pipe(take(1))
      .subscribe(() => {});
  }
}
