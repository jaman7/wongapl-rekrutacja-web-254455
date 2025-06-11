import React from 'react';
import * as Icons from 'react-icons/tb';

type Props = {
  iconName: string;
  size?: number;
};

const ReactIcon = ({ iconName, size = 32 }: Props) => {
  const Icon = Icons[iconName as keyof typeof Icons];

  if (!Icon) {
    return <div>Icon "{iconName}" not found</div>;
  }

  return <Icon size={size} />;
};

export default ReactIcon;
