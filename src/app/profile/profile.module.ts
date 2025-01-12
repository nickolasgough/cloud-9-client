import { NgModule } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./profile.routes";
import { UserComponent } from "./user/user.component";

@NgModule({
  imports: [],
  declarations: [UserComponent],
  providers: [provideRouter(routes)],
})
export class HomeModule {}
