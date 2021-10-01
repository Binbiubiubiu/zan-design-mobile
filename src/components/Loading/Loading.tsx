import React from 'react';
import {
  extend,
  addUnit,
  getSizeStyle,
  createNamespace,
} from '@/utils';

import "./style"


export type LoadingType = 'circular' | 'spinner';

export interface LoadingProps {
  size?: number | string;
  type?: LoadingType;
  color?: string;
  vertical?: boolean;
  textSize?: number | string;
  textColor?: string;
  children?: React.ReactNode;
}

const [name, bem] = createNamespace('loading');

const SpinIcon: JSX.Element[] = Array(12)
  .fill(null)
  .map((_, index) => (
    <i className={bem('line', String(index + 1))} key={`line_${index}`} />
  ));

const CircularIcon = (
  <svg className={bem('circular')} viewBox="25 25 50 50">
    <circle cx="50" cy="50" r="20" fill="none" />
  </svg>
);

const Loading:React.FC<LoadingProps> = (props: LoadingProps)=> {


  const spinnerStyle = React.useMemo(
    () => {
      const { color, size } = props;
      return extend({ color }, getSizeStyle(size));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.color, props.size]
  );

  const renderText = () => {
    if (props.children) {
      return (
        <span
          className={bem('text')}
          style={{
            fontSize: addUnit(props.textSize),
            color: props.textColor ?? props.color,
          }}
        >
          {props.children}
        </span>
      );
    }
  };

  const { type, vertical } = props;
  return (
    <div className={bem([type, { vertical }])}>
      <span className={bem('spinner', type)} style={spinnerStyle}>
        {type === 'spinner' ? SpinIcon : CircularIcon}
      </span>
      {renderText()}
    </div>
  );
}

Loading.displayName = name;
Loading.defaultProps = {
  type:'circular',
  vertical: false
}

export default Loading;
