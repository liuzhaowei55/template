import React, { FC, useContext, useEffect, useState } from 'react';
import { createIntl, RawIntlProvider, createIntlCache, IntlConfig } from 'react-intl';
import { MobXProviderContext, observer } from 'mobx-react';

import en from './lang/en';
import zhCN from './lang/zh-CN';
import { App } from '../models/App';

const I18n: FC = ({ children }) => {
  const [intlConfig, setIntlConfig] = useState<IntlConfig>({
    locale: 'zh-CN',
    messages: zhCN,
    defaultLocale: 'zh-CN',
  });
  const { app } = useContext(MobXProviderContext) as { app: App };
  const cache = createIntlCache();

  useEffect(() => {
    setIntlConfig((intlConfig) => {
      switch (app.locale) {
        case 'en':
          return { ...intlConfig, locale: 'en', messages: en };
        case 'zh-CN':
          return { ...intlConfig, locale: 'zh-CN', messages: zhCN };
        default:
          return { ...intlConfig };
      }
    });
  }, [app.locale]);

  const intl = createIntl(intlConfig, cache);
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
};

export default observer(I18n);
