const USER_LOGGED_IN_KEY = 'Authentication-userIsLoggedIn';

export function userIsLoggedIn(): boolean {
  const userIsLoggedIn =
        window.sessionStorage.getItem(USER_LOGGED_IN_KEY);
    return userIsLoggedIn !== null && userIsLoggedIn === 'true';
}

export function userIsLoggedOut(): boolean {
  return !userIsLoggedIn();
}

export function logUserIn(username: string, password: string): void {
  window.sessionStorage.setItem(USER_LOGGED_IN_KEY, 'true');
}

export function logUserOut() {
  window.sessionStorage.setItem(USER_LOGGED_IN_KEY, 'false');
}
