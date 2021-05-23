import React from 'react';
import type { FC } from 'react';

interface LogoProps {
  [key: string]: any;
}

const Logo: FC<LogoProps> = (props) => {
  const { white } = props;
  return (
    <img
      alt="Logo"
      src={white ? "/static/images/logo_white.svg" : "/static/images/logo.svg"}
    />
  );
}

export default Logo;
