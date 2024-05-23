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
  gallery: [
    {
      src: 'https://img10.joyreactor.cc/pics/post/full/Anime-art-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5-Anime-Ero-212148.jpeg',
      alt: '',
    },
    {
      src: 'https://img10.joyreactor.cc/pics/post/full/Anime-art-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5-Anime-Ero-212148.jpeg',
      alt: '',
    },
    {
      src: 'https://cdn1.ozone.ru/s3/multimedia-v/6452541703.jpg',
      alt: '',
    },
    {
      src: 'https://sun9-8.userapi.com/impf/c849324/v849324964/b5b13/GpDdjcSHCL0.jpg?size=1280x991&quality=96&sign=edca706d2f236491b4cadf530005cacd&c_uniq_tag=kNW_hD9_K_REeryCMDXFa61wFUk5J78zHACMnx1FFTw&type=album',
      alt: '',
    },
    {
      src: 'https://img10.reactor.cc/pics/post/Anime-Original-Anime-Artist-Anime-Anime-Ero-4782455.png',
      alt: '',
    },
  ],
  contacts: [
    {
      label: 'Наименование:',
      value: 'ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ',
    },
    {
      label: 'ИНН:',
      value: '402573939444',
    },
    {
      label: 'ОГРН:',
      value: '317402700004683',
    },
    {
      label: 'Фактический адрес: ',
      value: 'Москва, ул. Доватора, дом 7/8 с1',
    },
    {
      label: 'Юридический адрес: ',
      value: 'Москва, ул. Доватора, дом 7/8 с1',
    },
    {
      label: 'Расчетный счет: ',
      value: '40802810800000085888',
    },
    {
      label: 'Банк: ',
      value: 'АО «ТИНЬКОФФ БАНК»',
    },
    {
      label: 'Корр.счет: ',
      value: '30101810145250000974 ',
    },
    {
      label: 'БИК: ',
      value: '044525974',
    },
  ],
  companies: [
    {
      src: 'https://img10.joyreactor.cc/pics/post/full/Anime-art-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5-Anime-Ero-212148.jpeg',
      alt: '',
    },
    {
      src: 'https://img10.joyreactor.cc/pics/post/full/Anime-art-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5-Anime-Ero-212148.jpeg',
      alt: '',
    },
    {
      src: 'https://cdn1.ozone.ru/s3/multimedia-v/6452541703.jpg',
      alt: '',
    },
    {
      src: 'https://sun9-8.userapi.com/impf/c849324/v849324964/b5b13/GpDdjcSHCL0.jpg?size=1280x991&quality=96&sign=edca706d2f236491b4cadf530005cacd&c_uniq_tag=kNW_hD9_K_REeryCMDXFa61wFUk5J78zHACMnx1FFTw&type=album',
      alt: '',
    },
    {
      src: 'https://img10.reactor.cc/pics/post/Anime-Original-Anime-Artist-Anime-Anime-Ero-4782455.png',
      alt: '',
    },
  ],
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
