import { labels } from "./labes";

export function useTranslations(lang: keyof typeof labels) {
  return function translate(key: keyof (typeof labels)["es"]) {
    return labels[lang][key] || labels["es"][key];
  };
}
