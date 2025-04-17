// External dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

// Internal types
import { SocialLinkProps } from './types';

// Internal constants
import { EXTERNAL_LINK_PROPS } from '~constants/index';
import { SOCIAL_LINKS } from './constants';

// Internal styles
import styles from './SocialLinkList.module.css';

function SocialLink({ href, title, icon }: SocialLinkProps) {
  return (
    <li>
      <Link href={href} title={title} className={styles.iconSocial} {...EXTERNAL_LINK_PROPS}>
        <FontAwesomeIcon icon={icon} />
      </Link>
    </li>
  );
}

function SocialLinkList() {
  return (
    <ul className={styles.listSocial}>
      {SOCIAL_LINKS.map((link) => (
        <SocialLink key={link.title} {...link} />
      ))}
    </ul>
  );
}

export default SocialLinkList;
