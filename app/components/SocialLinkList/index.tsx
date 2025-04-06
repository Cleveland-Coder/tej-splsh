// Internal types
import { SocialLinkProps } from './types';

// Internal constants
import { SOCIAL_LINKS } from './constants';
import Link from 'next/link';

function SocialLink({ href, title, iconClass }: SocialLinkProps) {
  return (
    <li>
      <Link href={href} title={title} target="_blank" rel="noopener noreferrer">
        <span className={`icon-social fa ${iconClass}`}></span>
      </Link>
    </li>
  );
}

function SocialLinkList() {
  return (
    <ul className="list-social">
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.title} {...link} />
      ))}
    </ul>
  );
}

export default SocialLinkList;
