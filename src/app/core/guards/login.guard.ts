import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const EmailExistsGuard: CanActivateFn = () => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  if (_authService.CheckEmailExistance()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

export const CodeExistsGuard: CanActivateFn = () => {
  const _authService = inject(AuthService);
  const router = inject(Router);

  if (_authService.CheckCodeExistance()) {
    return true;
  }

  return router.createUrlTree(['/code-validation']);
};