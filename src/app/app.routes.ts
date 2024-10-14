import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "sign-in", loadChildren: () => import("./sign-in/sign-in.module").then(m => m.SignInModule) },
];
