import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import usePostClaps from '../../hooks/usePostClaps';

import s from './Clapper.module.scss';

type Props = {
  postid: string
};

type ClapperButtonProps = {
  myClaps: number
  totalClaps: number
  clap: (e: any) => any
  isOverLimit: boolean
  isLoading: boolean
  className?: string
};

const ClapperButton = React.memo(({ myClaps, totalClaps, clap, isOverLimit, isLoading, className, ...props }: ClapperButtonProps) => {
  const [ isDiffVisible, setDiffVisibility ] = useState(false);

  useEffect(() => {
    if (myClaps === 0) return () => {};
    setDiffVisibility(true);
    const timer = setTimeout(() => setDiffVisibility(false), 1000);
    return () => clearTimeout(timer);
  }, [myClaps]);

  return (
    <button
      className={cx(s.clapperBtn, className, { [s.overLimit]: isOverLimit })}
      onClick={clap}
      disabled={isOverLimit}
      {...props}
    >
      {isLoading ? '--' : totalClaps}

      <div className={cx(s.userCount, { [s.userCountShow]: isDiffVisible })}>
        +{myClaps}
      </div>
    </button>
  );
});

const Clapper = React.memo(({ postid }: Props) => {
  const postClapData = usePostClaps(postid);

  return (
    <div>
      <div className={s.topbar}>
        <ClapperButton
          {...postClapData}
          className={s.clapperBtnTop}
        />
      </div>

      <div className={s.bottomBar}>
        <ClapperButton
          {...postClapData}
        />
      </div>
    </div>
  );
});

export default Clapper;
