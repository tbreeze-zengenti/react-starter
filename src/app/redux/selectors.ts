import { navigation } from '@zengenti/contensis-react-base/redux';
import { ReduxState } from './redux.type';
import { navBarMapper } from '~/components/navbar/navbar.mapper';

export const { selectNavigationChildren } = navigation.selectors;

// select and map Contensis SiteView nodes
export const selectNavbar = (state: ReduxState) => {
  const nodes = selectNavigationChildren(state);
  return navBarMapper(nodes);
};

// check whether search state is in redux store
export const selectSearchExists = (state: ReduxState) =>
  state?.search?.context != null;
