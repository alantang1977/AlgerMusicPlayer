import { createI18n } from 'vue-i18n';

import enUS from './lang/en-US';
import zhCN from './lang/zh-CN';
import zhHant from './lang/zh-Hant';

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'zh-Hant': zhHant
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages,
  globalInjection: true,
  silentTranslationWarn: true,
  silentFallbackWarn: true
});

export default i18n;
