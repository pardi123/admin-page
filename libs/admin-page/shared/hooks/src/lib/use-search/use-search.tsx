import {
  SearchContext,
  SearchContextType,
} from '@admin-page/admin-page/shared/context';
import * as React from 'react';

export function useSearch() {
  const search = React.useContext(SearchContext) as SearchContextType;
  return search;
}

export default useSearch;
