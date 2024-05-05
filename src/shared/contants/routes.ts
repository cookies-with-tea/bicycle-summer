export const ROUTES = {
  UIKIT: {
    name: 'uikit',
    path: '/uikit',
  },
  HOME: {
    name: 'index',
    path: '/',
  },
  ABOUT: {
    name: 'about',
    path: '/about',
  },
} as const

type RouteNamesKeyType = keyof typeof ROUTES

type LowercaseRouteNamesKeyType = {
  [K in RouteNamesKeyType as Lowercase<K>]: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
}

export const ROUTE_SEO_DATA: Partial<LowercaseRouteNamesKeyType> = {
  home: {
    title: 'Большой ассортимент товаров',
    description: 'Большой ассортимент товаров',
    ogTitle: 'Большой ассортимент товаров',
    ogDescription: 'Большой ассортимент товаров',
  },
  about: {
    title: 'О нас',
    description: 'О нас',
    ogTitle: 'О нас',
    ogDescription: 'О нас',
  },
  uikit: {
    title: 'UIKit',
    description: 'UIKit',
    ogTitle: 'UIKit',
    ogDescription: 'UIKit',
  },
} as const
