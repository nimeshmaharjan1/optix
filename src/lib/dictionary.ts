import type { Locale } from '@/i18n.config';
import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  ne: () =>
    import('@/dictionaries/ne_NP.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
