// Internal types
import { SocialLinkProps } from './types';

// External dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Internal constants
import { EXTERNAL_LINK_PROPS } from '~constants/index';
import { SOCIAL_LINKS } from './constants';
import Link from 'next/link';

function SocialLink({ href, title, icon }: SocialLinkProps) {
  return (
    <li>
      <Link href={href} title={title} {...EXTERNAL_LINK_PROPS}>
        <FontAwesomeIcon className="icon-social" icon={icon} />
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
