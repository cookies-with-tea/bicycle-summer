import type { AboutResponseType, SocialNetworksResponseTypeType } from '#entities/about'

export const ABOUT_MOCK_DATA: AboutResponseType = {
  h1: 'О нас',
  hero: {
    h2: '<mark>Велосипед</mark> – это не просто средство передвижения!',
    useful: [
      {
        title: 'Хранение',
        description:
          // eslint-disable-next-line max-len
          'Любишь кататься — люби и велосипед в квартире на зиму парковать или сдавай к нам на хранение и обслуживание.',
        slug: 'hranenie',
        uuid: 'qwerty-1234-1',
      },
      {
        title: 'Веломастерская',
        description:
          // eslint-disable-next-line max-len
          'Если вы купили велосипед в нашем магазине, то то можете не волноваться о настройке и проверке, так как мы это выполняем в рамках предпродажной подготовки.',
        slug: 'velomasterskaya',
        uuid: 'qwerty-1234-2',
      },
      {
        title: 'Гарантия',
        description:
          // eslint-disable-next-line max-len
          'Также, для удобства покупателей, наш магазин помогает (участвует) в формирование гарантийных запросов по всем нижеперечисленным брендам. При любом гарантийном случае можно обращаться напрямую к нам.',
        slug: 'garantiya',
        uuid: 'qwerty-1234-3',
      },
    ],
  },
  best: {
    dealers: {
      title: 'Мы — официальные дилеры лучших брендов:',
      items: [
        {
          title: 'Велосипеды',
          uuid: 'qwerty-1235',
          slug: 'velocipedy',
          brands: [
            {
              title: 'BMC',
              slug: 'bmc',
              uuid: 'qwerty-1233-1',
            },
            {
              title: 'Cervelo',
              slug: 'cervelo',
              uuid: 'qwerty-1233-2',
            },
          ],
        },
        {
          title: 'Аксессуары',
          uuid: 'qwerty-1235-2',
          slug: 'aksessuari',
          brands: [
            {
              title: 'SKS',
              slug: 'sks',
              uuid: 'qwerty-1233-1',
            },
            {
              title: 'Selle Royal',
              slug: 'selle-royal',
              uuid: 'qwerty-1233-2',
            },
          ],
        },
        {
          title: 'Запчасти',
          uuid: 'qwerty-1235-3',
          slug: 'zapchasty',
          brands: [
            {
              title: 'SKS',
              slug: 'sks',
              uuid: 'qwerty-1233-1',
            },
            {
              title: 'Selle Royal',
              slug: 'selle-royal',
              uuid: 'qwerty-1233-2',
            },
          ],
        },
      ],
    },
  },
}

export const SOCIAL_NETWORKS_MOCK_DATA: SocialNetworksResponseTypeType = [
  {
    link: 'https://google.com',
    iconName: 'ok',
  },
  {
    link: 'https://google.com',
    iconName: 'vk',
  },
  {
    link: 'https://google.com',
    iconName: 'tg',
  },
  {
    link: 'https://google.com',
    iconName: 'whatsapp',
  },
  {
    link: 'https://google.com',
    iconName: 'viber',
  },
]
