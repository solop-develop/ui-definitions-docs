import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom"
declare module "/opt/Development/workspace/nuxt-ui/ui-definitions-docs/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}