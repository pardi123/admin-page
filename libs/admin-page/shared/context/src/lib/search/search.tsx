import * as React from 'react';

export interface SearchContextType {
  keyword: string;
  setKeyword: (payload: string) => void;
  clearKeyword: () => void;
  page: number;
  setPage: (page: number) => void;
}

export interface SearchProps {
  children: React.ReactNode;
}

export const SearchContext = React.createContext<SearchContextType | null>(
  null
);

export function SearchProvider({ children }: SearchProps) {
  const [keyword, setKeyword] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);

  function setSearchKeyword(payload: string) {
    setKeyword(payload);
  }
  function setSearchPage(page: number) {
    setPage(page);
  }
  function clearKeyword() {
    setKeyword('');
  }

  return (
    <SearchContext.Provider
      value={{
        keyword,
        page,
        clearKeyword,
        setPage: setSearchPage,
        setKeyword: setSearchKeyword,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
