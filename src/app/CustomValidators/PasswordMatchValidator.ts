import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const PasswordMatchValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('ConfirmPassword');

  return (password && confirmPassword && password.value === confirmPassword.value)? null : {passwordMismatch: true};
};
