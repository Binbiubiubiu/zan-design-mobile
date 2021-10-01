import React from 'react';
import ConfigContext from './context'
import { kebabCase } from '@/utils';

export interface ConfigProviderProps {
  tag: keyof JSX.IntrinsicElements;
  themeVars?: Record<string, string | number>;
  iconPrefix?: string;
}

function mapThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
  const cssVars: Record<string, string | number> = {};
  Object.keys(themeVars).forEach((key) => {
    cssVars[`--zan-${kebabCase(key)}`] = themeVars[key];
  });
  return cssVars;
}


const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const style = React.useMemo(() => {
    if (props.themeVars) {
      return mapThemeVarsToCSSVars(props.themeVars);
    }
  }, [props.themeVars]);


  return (
    <props.tag style={style}>
      <ConfigContext.Provider value={props}>
        {props.children}
      </ConfigContext.Provider>
    </props.tag>
  );
};

ConfigProvider.defaultProps = {
  tag:'div'
}

export default ConfigProvider;
