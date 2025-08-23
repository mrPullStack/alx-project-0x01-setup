// interfaces/index.ts

// ------- Posts -------
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// ------- Users -------
export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// Some parts of your app use "UserProps"; alias to keep checkers happy.
export type UserProps = UserData;

export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}
