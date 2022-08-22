import { Layout } from '@admin-page/admin-page/shared/layout';
import { routes } from '@admin-page/admin-page/shared/routes';
import { Outlet, Route, Routes } from 'react-router';
import { routeNames } from './routes';

/* eslint-disable-next-line */
export interface AdminPageMainProps {}

export function AdminPageMain(props: AdminPageMainProps) {
  return (
    <Layout>
      <Outlet />
      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={
              routeNames.find((r) => r.path === route.path)?.component ?? (
                <h1>{route.name}</h1>
              )
            }
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default AdminPageMain;
