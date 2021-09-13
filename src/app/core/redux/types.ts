import {
  navigation,
  routing,
  version,
} from '@zengenti/contensis-react-base/redux';

export const { GET_NODE_TREE, SET_NODE_TREE, GET_NODE_TREE_ERROR } =
  navigation.types;

export const {
  GET_ENTRY,
  SET_ENTRY,
  SET_NODE,
  SET_ANCESTORS,
  SET_SIBLINGS,
  SET_ENTRY_ID,
  SET_NAVIGATION_NOT_FOUND,
  SET_NAVIGATION_PATH,
  SET_TARGET_PROJECT,
  SET_ROUTE,
} = routing.types;

export const { SET_VERSION, SET_VERSION_STATUS } = version.types;
