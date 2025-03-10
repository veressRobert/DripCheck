/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/forgotPasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/loadingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/loginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/registerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/DownloadMedia`; params?: Router.UnknownInputParams; } | { pathname: `/components/UploadMedia`; params?: Router.UnknownInputParams; } | { pathname: `/providers/firebaseAuth`; params?: Router.UnknownInputParams; } | { pathname: `/screens/forYouScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/mainPage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/notificationPage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/searchBar`; params?: Router.UnknownInputParams; } | { pathname: `/screens/yourProfile`; params?: Router.UnknownInputParams; } | { pathname: `/styles/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/authScreens/forgotPasswordScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/authScreens/loadingScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/authScreens/loginScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/authScreens/registerScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/components/DownloadMedia`; params?: Router.UnknownOutputParams; } | { pathname: `/components/UploadMedia`; params?: Router.UnknownOutputParams; } | { pathname: `/providers/firebaseAuth`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/forYouScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/mainPage`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/notificationPage`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/searchBar`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/yourProfile`; params?: Router.UnknownOutputParams; } | { pathname: `/styles/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/authScreens/forgotPasswordScreen${`?${string}` | `#${string}` | ''}` | `/authScreens/loadingScreen${`?${string}` | `#${string}` | ''}` | `/authScreens/loginScreen${`?${string}` | `#${string}` | ''}` | `/authScreens/registerScreen${`?${string}` | `#${string}` | ''}` | `/components/DownloadMedia${`?${string}` | `#${string}` | ''}` | `/components/UploadMedia${`?${string}` | `#${string}` | ''}` | `/providers/firebaseAuth${`?${string}` | `#${string}` | ''}` | `/screens/forYouScreen${`?${string}` | `#${string}` | ''}` | `/screens/mainPage${`?${string}` | `#${string}` | ''}` | `/screens/notificationPage${`?${string}` | `#${string}` | ''}` | `/screens/searchBar${`?${string}` | `#${string}` | ''}` | `/screens/yourProfile${`?${string}` | `#${string}` | ''}` | `/styles/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/forgotPasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/loadingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/loginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/authScreens/registerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/DownloadMedia`; params?: Router.UnknownInputParams; } | { pathname: `/components/UploadMedia`; params?: Router.UnknownInputParams; } | { pathname: `/providers/firebaseAuth`; params?: Router.UnknownInputParams; } | { pathname: `/screens/forYouScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/mainPage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/notificationPage`; params?: Router.UnknownInputParams; } | { pathname: `/screens/searchBar`; params?: Router.UnknownInputParams; } | { pathname: `/screens/yourProfile`; params?: Router.UnknownInputParams; } | { pathname: `/styles/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
