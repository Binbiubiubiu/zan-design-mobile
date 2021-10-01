import { createContext } from 'react';
import type { ConfigProviderProps } from '.';

type ConfigContextProps = Exclude<ConfigProviderProps, 'tag' | 'themeVars'>;

const ConfigContext = createContext<ConfigContextProps | undefined>(undefined);

export default ConfigContext;
