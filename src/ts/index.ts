type Head = {
  id: number;
  hook: string;
  state: (value: string) => void;
  title: string;
  placeholder: string;
  sprite: string;
  class: string;
  normal: string;
  error: string;
};

type Article = {
  id: number;
  title: string;
  time: string;
  photo: string;
  text: string[];
  description: string;
};

type MassiveLink = {
  id: number;
  text: string;
};

type ListProps = {
  list: Article[];
};

type LinkProps = {
  link: string;
  deeperLink?: string;
};

type PaginationProps = {
  setPage: (value: string | number) => void;
  page: string | number;
};

type SpriteProps = {
  id: string;
  colour?: string;
  height?: string;
  width?: string;
};

type RegistrationOfFormik = {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type AuthorizationOfFormik = {
  email: string;
  password: string;
};

export type {
  Head,
  Article,
  MassiveLink,
  ListProps,
  LinkProps,
  PaginationProps,
  SpriteProps,
  RegistrationOfFormik,
  AuthorizationOfFormik,
};
