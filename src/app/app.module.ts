import { CommonModule } from "@angular/common";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter, RouterModule } from "@angular/router";
import { ApiModule, Configuration } from "@cloud-community/iam";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ApiModule.forRoot(() => new Configuration({ withCredentials: true })),
  ],
  declarations: [AppComponent],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
