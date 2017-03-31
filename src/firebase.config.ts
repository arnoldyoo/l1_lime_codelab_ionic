import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyD9dFqT8luyOpCKq5AZQnhg6UFV8x9v4K8",
  authDomain: "devlabs-1c5ab.firebaseapp.com",
  databaseURL: "https://devlabs-1c5ab.firebaseio.com",
  projectId: "devlabs-1c5ab",
  storageBucket: "devlabs-1c5ab.appspot.com",
  messagingSenderId: "726477132345"
};

export const firebaseGoogleAuthentication = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

export const firebaseFaceookAuthentication = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Popup
}