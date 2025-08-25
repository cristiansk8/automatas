import es from './es/translation.json';
import en from './en/translation.json';
import pt from './pt/translation.json';

export const translations = { es, en, pt } as const;

export type Lang = keyof typeof translations;

export const locales: Lang[] = Object.keys(translations) as Lang[];