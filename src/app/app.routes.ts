import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.HomeModule),
  },
  { path: "**", redirectTo: "auth" },
];
