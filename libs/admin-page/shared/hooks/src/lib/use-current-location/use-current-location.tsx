import {
  CurrentLocationContext,
  CurrentLocationContextType,
} from '@admin-page/admin-page/shared/context';
import * as React from 'react';

export function useCurrentLocation(): CurrentLocationContextType {
  const location = React.useContext(
    CurrentLocationContext
  ) as CurrentLocationContextType;
  return location;
}

export default useCurrentLocation;
