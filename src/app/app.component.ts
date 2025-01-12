import { Component } from "@angular/core";
import { EventType, Router } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  protected showSideNav$: Observable<boolean>;

  constructor(private router: Router) {
    this.showSideNav$ = this.router.events.pipe(
      filter((event) => event.type === EventType.NavigationEnd),
      map((event) => {
        const url = event.urlAfterRedirects;
        const isSignUpPath = url.includes("/sign-up");
        const isSignInPath = url.includes("/sign-in");
        return !isSignUpPath && !isSignInPath;
      })
    );
  }
}
