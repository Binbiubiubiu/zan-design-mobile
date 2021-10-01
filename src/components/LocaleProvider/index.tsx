import React from 'react';
import Locale from '@/locale';
import type {Message} from '@/locale';
import LocaleContext from './context';

export interface LocaleProviderProps {
  locale: Message;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static defaultProps = {
    locale: {},
  };

  constructor(props: LocaleProviderProps) {
    super(props);
    Locale.use(props.locale);
  }

  componentDidMount():void {
    Locale.use(this.props.locale);
  }

  componentDidUpdate(prevProps: LocaleProviderProps):void {
    const { locale } = this.props;
    if (prevProps.locale !== locale) {
      Locale.use(this.props.locale);
    }
  }

  componentWillUnmount():void {
    Locale.use();
  }

  render():React.ReactNode {
    const { locale, children } = this.props;

    return (
      <LocaleContext.Provider value={{ ...locale, exist: true }}>{children}</LocaleContext.Provider>
    );
  }
}
