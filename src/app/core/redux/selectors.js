import {
  navigation,
  routing,
  user,
  version,
} from '@zengenti/contensis-react-base/redux';

export const {
  hasNavigationTree,
  selectNavigationRoot,
  selectNavigationDepends,
} = navigation.selectors;

export const {
  selectCurrentAncestors,
  selectCurrentPath,
  selectCurrentProject,
  selectCurrentSearch,
  selectIsNotFound,
  selectQueryStringAsObject,
  selectRouteEntry,
  selectRouteEntryContentTypeId,
  selectRouteEntryDepends,
  selectRouteEntryEntryId,
  selectRouteEntryID,
  selectRouteEntrySlug,
  selectRouteLoading,
} = routing.selectors;

export const {
  selectUser,
  selectUsername,
  selectUserLoggedIn,
  selectUserGroups,
  selectUserMessage,
  selectLoginScreenMode,
  selectPasswordMessage,
  selectChangePasswordMessage,
  selectCaptchaResponse,
  selectCaptchaData,
  selectCaptchaToken,
  selectCaptchaSiteKey,
} = user.selectors;

export const {
  selectCommitRef,
  selectBuildNumber,
  selectVersionStatus,
} = version.selectors;
