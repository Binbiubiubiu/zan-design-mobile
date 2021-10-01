// import { ref, reactive } from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/default';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Message = Record<string, any>;

// let lang = 'zh-CN';
let runtimeMessage = {...defaultMessages};

export const Locale = {
  messages(): Message {
    return runtimeMessage;
  },
  use(newMessage?: Message):void {
    // lang = newLang;
    if(newMessage){
      deepAssign(runtimeMessage, newMessage);
    }else{
      runtimeMessage = {...defaultMessages};
    }
  }
};

export default Locale;
