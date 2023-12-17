import React from 'react';

interface FontAwesomeIconProps {
  iconName: string;
  style?: React.CSSProperties;
}

const FontAwesomeIcon: React.FC<FontAwesomeIconProps> = ({ iconName, style }) => {
  return <i className={`fa fa-${iconName}`} style={style} aria-hidden="true"></i>;
};

export default FontAwesomeIcon;