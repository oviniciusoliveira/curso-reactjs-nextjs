import { Route, Switch } from 'react-router-dom';
import { pages } from '../data/pages';

export function AppRoutes() {
  return (
    <Switch>
      {pages.map((page) => {
        return <Route key={page.path} path={page.path} component={page.component} />;
      })}
    </Switch>
  );
}
