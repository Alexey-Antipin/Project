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

export type {
  Article,
  MassiveLink,
  ListProps,
  LinkProps,
  PaginationProps,
};
