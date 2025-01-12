import { Component, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../shared/models/user";
import { USER$ } from "../../shared/tokens/user.token";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
})
export class UserComponent {
  constructor(@Inject(USER$) protected user$: Observable<User>) {
    this.user$.subscribe(console.log);
  }
}
