/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import { IconName as IconIconName, IconDefinition } from "./components/icon/Icon.vue";

  declare const component: DefineComponent<{}, {}, any>
  export default component;

  // Exports from components (beside the actual component)
  // I have not found a way to make this generic

  // Icon.vue
  export declare const icons: IconDefinition[];
  export declare type IconName = IconIconName;
}
