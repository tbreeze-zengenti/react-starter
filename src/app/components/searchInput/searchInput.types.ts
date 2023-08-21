export type SearchInputProps = {
  className?: string;
  placeholder?: string;
  submit: (term: string) => void;
  value?: string;
};
