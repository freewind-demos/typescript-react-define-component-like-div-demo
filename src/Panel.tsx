import './Panel.css';

import React, {HTMLAttributes} from 'react';
import classnames from 'classnames';

export default function Panel({children, ...props}: HTMLAttributes<HTMLDivElement> & { children: any }) {
  console.log('### props', props);
  const newProps = {
    ...props,
    className: classnames(props.className, 'panel')
  }
  return <div  {...newProps}>
    {children}
  </div>
};
