import type { ThemeConfig } from './types/theme-config.d.ts';

// language files from ./src/i18n
import azStrings from './src/i18n/az.json' with { type: 'json' };

export const themeConfig: ThemeConfig = {
  // `import.meta.env?.` is guarded because this file is also imported from `ec.config.mjs`
  site: import.meta.env?.SITE_OVERRIDE || 'https://botaz.online',
  primaryColor: '#00D9B1', // Botaz AI Accent Neon Green
  themeColor: '#090A0F',
  generateWebmanifest: true,
  name: 'Botaz AI',
  shortName: 'Botaz',
  darkMode: true,
  robots: import.meta.env?.ROBOTS || 'index, follow',
  xHandle: 'botaz_ai',

  // Structured data
  author: {
    type: 'Organization',
    name: 'Botaz AI Team',
    url: 'https://botaz.online',
    image: '',
  },
  publisher: {
    type: 'Organization',
    name: 'Botaz AI',
    url: 'https://botaz.online',
    image: '',
  },

  // I18n (Əsas dil Azərbaycan dili)
  i18n: {
    defaultLocale: 'az',
    locales: ['az'],
    languages: {
      az: 'Azərbaycan',
    },
    languageModules: {
      az: azStrings,
    },
    translatedStructuredData: {},
  },

  // md(x) code block rendering
  expressiveCodeThemes: {
    light: 'min-light',
    dark: 'min-dark',
  },

  // content/article settings
  articles: {
    imageFallback: true,
    gridView: true,
    textOverImage: false,
    categories: true,
    tags: true,
    entriesPerPage: 4,
    tocMaxDepth: 3,
    defaults: {
      author: {
        name: 'Botaz AI',
        url: 'https://botaz.online',
      },
    },
    social: {
      xHandle: 'botaz_ai',
      buttons: {
        email: true,
        facebook: true,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: false,
        telegram: true,
        x: true,
        whatsapp: true,
      },
      buttonsSmallScreen: {
        email: true,
        facebook: true,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: false,
        telegram: true,
        x: true,
        whatsapp: true,
      },
    },
  },

  // promotion settings
  promotions: {
    newsletterSignup: 'footer',
    footerBanner: false,
    navAd: false,
    topBanner: true,
    heroChip: true,
  },

  onDemandRenderedCollections: ['integration_options'],

  dynamicEvents: {
    pullFromAddToCalendarPro: false,
    filterBy: {
      from: '',
      to: '',
      group: '',
    },
  },

  // LLM and coding assistant settings
  llms: {
    autoGeneration: true,
    intro: 'Botaz AI - Instagram və WhatsApp satışlarını avtopilota keçirən, səsli mesajları və şəkilləri anlayan Azərbaycan dilində ilk AI satış köməkçisidir.',
    excludePagesPattern: ['/integration/**'],
    includePages: [],
    addArticles: 'selected',
    addEvents: 'all',
    addFAQ: 'all',
  },

  askAiTrigger: 'Botaz AI nədir və Instagram satışlarımı necə artıra bilərəm?',
};