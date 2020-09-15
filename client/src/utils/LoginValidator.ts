export function userNameIsAlphaNumeric(userName: string): boolean {
  const matches = userName.match(/^[a-zA-Z0-9]+$/)
  return matches !== null && matches.length === 1;
}

export function userNameHasValidLength(userName: string): boolean {
  return userName.length > 0 && userName.length < 100;
}

export function passwordHasValidLength(password: string): boolean {
  return password.length > 9 && password.length < 50;
}

export function passwordHasMinimumSpecialCharacters(
    password: string): boolean {
  const specialCharacterMatches =
      password.match(/[`~!@$%^&*()-=\[\];:'",.?\/\\]/g);
  return specialCharacterMatches !== null &&
      specialCharacterMatches.length > 0;
}

export function passwordHasMinimumLetterCharacters(password: string): boolean {
  const letterMatches = password.match(/[a-zA-Z]/g);
  return letterMatches !== null && letterMatches.length > 2;
}

export function passwordHasMinimumNumericCharacters(
    password: string): boolean {
  const numericMatches = password.match(/[0-9]/g);
  return numericMatches !== null && numericMatches.length > 1;
}

export function emailSignatureIsValid(email: string): boolean {
  const emailMatches =
      email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/g);
  return emailMatches !== null && emailMatches.length === 1;
}

export function emailHasValidLength(email: string): boolean {
  return email.length > 0 && email.length < 100;
}

export function nameContainsLettersOnly(name: string): boolean {
  const nameMatches = name.match(/^[a-zA-Z]+$/g)
  return nameMatches !== null && nameMatches.length === 1;
}

export function nameHasValidLength(name: string): boolean {
  return name.length > 0 && name.length < 100;
}
