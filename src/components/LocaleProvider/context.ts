import { createContext } from 'react';
import type { Message } from '@/locale';

const LocaleContext = createContext<Message | undefined>(undefined);

export default LocaleContext;
