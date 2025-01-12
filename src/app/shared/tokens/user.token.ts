import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

export const USER$ = new InjectionToken<Observable<User>>("User");
