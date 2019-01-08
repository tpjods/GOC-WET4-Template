interface Location {
  id: string;
  englishName: string;
  frenchName: string;
}

export interface AuthUser {
  email: string;
  firstName: string;
  lastName: string;
  accountName: string;
  displayName: string;
  description: string;
  location: Location;
  roles: string[];
}
