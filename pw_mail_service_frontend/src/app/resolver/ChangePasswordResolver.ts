import {inject} from '@angular/core';
import type {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';

export const changePasswordResolver: ResolveFn<object> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {

  const token = route.queryParams["token"]!
  const email = route.queryParams["email"]!

  return {
    token,
    email
  }
};
