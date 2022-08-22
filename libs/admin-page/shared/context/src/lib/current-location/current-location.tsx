import { RouteProps, routes } from '@admin-page/admin-page/shared/routes';
import * as React from 'react';
import { matchPath, resolvePath, useLocation } from 'react-router-dom';

export type CurrentLocationReturn = RouteProps | undefined;

export interface CurrentLocationContextType {
  location: CurrentLocationReturn;
}

export interface CurrentLocationProps {
  children: React.ReactNode;
}

export const CurrentLocationContext =
  React.createContext<CurrentLocationContextType | null>(null);

export function CurrentLocationProvider({ children }: CurrentLocationProps) {
  const { pathname } = useLocation();

  const getCurrentLocation = React.useCallback(() => {
    const findRoutes = routes.find((r) => {
      const resolved = resolvePath(pathname);
      const match = matchPath(r.path, resolved.pathname);
      return match;
    });

    return findRoutes;
  }, [pathname]);

  const [currentLocation, setCurrentLocation] =
    React.useState<CurrentLocationReturn>(getCurrentLocation());

  React.useEffect(() => {
    if (pathname) {
      const location = getCurrentLocation();
      setCurrentLocation(location);
    }
  }, [getCurrentLocation, pathname]);

  return (
    <CurrentLocationContext.Provider value={{ location: currentLocation }}>
      {children}
    </CurrentLocationContext.Provider>
  );
}

export default CurrentLocationProvider;
