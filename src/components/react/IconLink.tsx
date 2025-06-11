import React from 'react';
import ReactIcon from './icon';

type LinkProps = {
  title: string;
  link: string;
  icon: string;
  className: string;
};
function IconLink({ title, link, icon, className = '', ariaLabel }: LinkProps & { ariaLabel?: string }) {
  return (
    <a className={className} href={link} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel ?? `Go to ${title}`}>
      <span className="sr-only">{title}</span>
      <ReactIcon iconName={icon} />
    </a>
  );
}

export default IconLink;
