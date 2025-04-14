export interface SadpakOptions {
  lastNameUpperCase?: boolean;
}

export function sadpak(firstName: string, lastName: string, options?: SadpakOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
