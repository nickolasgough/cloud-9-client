import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IamService } from "@cloud-9/iam";
import { ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";
import { fromAPIUser, User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user$$ = new ReplaySubject<User>(1);
  public user$ = this.user$$.asObservable();

  constructor(
    private router: Router,
    private iamService: IamService
  ) {
    this.loadUser();
  }

  public refreshUser(): void {
    this.loadUser();
  }

  private loadUser(): void {
    this.iamService
      .getUser()
      .pipe(take(1))
      .subscribe({
        next: (apiUser) => {
          const user = fromAPIUser(apiUser);
          this.user$$.next(user);
        },
        error: () => {
          this.router.navigateByUrl("/auth/sign-in");
        },
      });
  }
}
