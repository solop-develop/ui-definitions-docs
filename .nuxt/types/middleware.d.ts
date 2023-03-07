import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/opt/Development/workspace/nuxt-ui/ui-definitions-docs/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}