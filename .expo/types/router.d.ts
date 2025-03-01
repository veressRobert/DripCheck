/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/screens/registerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens/forgotPasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/loadingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/loginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/styles/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/registerScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/forgotPasswordScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/loadingScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/screens/loginScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/styles/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/screens/registerScreen${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/screens/forgotPasswordScreen${`?${string}` | `#${string}` | ''}` | `/screens/loadingScreen${`?${string}` | `#${string}` | ''}` | `/screens/loginScreen${`?${string}` | `#${string}` | ''}` | `/styles/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/screens/registerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/screens/forgotPasswordScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/loadingScreen`; params?: Router.UnknownInputParams; } | { pathname: `/screens/loginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/styles/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
