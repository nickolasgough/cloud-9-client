import { CommonModule } from "@angular/common";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, RouterModule } from "@angular/router";
import { ApiModule, Configuration } from "@cloud-9/iam";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { UserService } from "./shared/services/user.service";
import { USER$ } from "./shared/tokens/user.token";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ApiModule.forRoot(() => new Configuration({ withCredentials: true })),
  ],
  declarations: [AppComponent],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: USER$,
      useFactory: (userService: UserService) => userService.user$,
      deps: [UserService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
