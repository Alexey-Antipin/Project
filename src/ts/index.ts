type MassiveOfListProps = {
  massive?: MassiveOfList[];
  classes?: MassiveOfClassesProps;
  hook?: {
    activeId: number;
    setActiveId: (value: number) => void;
  };
  usuallyList?: boolean;
  usuallyArray?: string[];
};
type MassiveOfClassesProps = {
  classSprite?: string;
  classUl?: string;
  classParagraph?: string;
  classColour?: string;
  classList?: string;
};
type MassiveOfList = {
  id: number;
  text: string;
  sprite?: string | number;
  colour?: string;
  underLine?: boolean;
  characterSprite?: {
    height?: string;
    width?: string;
    colour?: string;
  };
};

//Footer ==>
type FooterOfArrayList = {
  a: string[];
  b: string[];
  c: string[];
  d: string[];
};

type FooterOfLink = {
  name: string;
  href: string;
};
//Footer <==

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

//Article ==>
type Article = {
  id: number;
  title: string;
  time: string;
  photo: string;
  text: string[];
  description: string;
};

type ArticleProps = {
  list: Article[];
};
//Article <==

type LinkProps = {
  link: string;
  deeperLink?: string;
};

type PaginationProps = {
  setPage: (value: string | number) => void;
  page: string | number;
};

type SpriteProps = {
  id: string | number;
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
  MassiveOfList,
  MassiveOfListProps,
  FooterOfLink,
  FooterOfArrayList,
  Head,
  Article,
  ArticleProps,
  LinkProps,
  PaginationProps,
  SpriteProps,
  RegistrationOfFormik,
  AuthorizationOfFormik,
};
