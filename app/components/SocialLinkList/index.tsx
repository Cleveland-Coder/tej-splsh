// External dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

// Internal types
import { SocialLinkProps } from './types';

// Internal constants
import { EXTERNAL_LINK_PROPS } from '~constants';
import { SOCIAL_LINKS } from './constants';

// Internal styles
import {
  listSocialClassNames,
  listSocialStyles,
  iconSocialClassNames,
  iconSocialHoverClassNames,
} from './tailwind';

/**
 * A social media link component with icon
 */
function SocialLink({ href, title, icon }: SocialLinkProps) {
  return (
    <li>
      <Link
        href={href}
        title={title}
        className={`${iconSocialClassNames} ${iconSocialHoverClassNames[title as keyof typeof iconSocialHoverClassNames]}`}
        {...EXTERNAL_LINK_PROPS}
      >
        <FontAwesomeIcon icon={icon} />
      </Link>
    </li>
  );
}

/**
 * A list of social media links with icons
 */
function SocialLinkList() {
  return (
    <ul className={listSocialClassNames} style={listSocialStyles}>
      {SOCIAL_LINKS.map((link: SocialLinkProps) => (
        <SocialLink key={link.title} {...link} />
      ))}
    </ul>
  );
}

export default SocialLinkList;
