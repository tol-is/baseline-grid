import React, { useContext } from 'react';
import { css } from 'emotion';

import Context from './Context';
import useBaseline from './useBaseline';

export default props => {
  const { baseline, capRatio, correctionRatio } = useContext(Context);

  const cssRules = useBaseline({
    baseline: baseline,
    capRatio: capRatio,
    correctionRatio: correctionRatio,
    fontSize: props.size,
    leading: props.leading,
    flow: props.flow,
    measure: props.measure
  });

  const textClassName = css(cssRules);

  return <span className={textClassName} {...props} />;
};
