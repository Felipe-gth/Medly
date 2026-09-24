export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function isEmailValid(email: string): boolean {
  if (!email) return false;
  return EMAIL_REGEX.test(email.trim());
}

export function getPasswordRequirements(password: string) {
  return {
    hasMinLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>_\-\\]/.test(password),
  };
}

export function arePasswordsValid(password: string, confirmPassword: string): boolean {
  if (!password || !confirmPassword) return false;
  return getPasswordRequirements(password) && password === confirmPassword;
}