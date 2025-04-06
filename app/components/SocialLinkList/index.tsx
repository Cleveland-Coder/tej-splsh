// Internal types
import { SocialLinkProps } from './types';

// Internal constants
import { SOCIAL_LINKS } from './constants';

function SocialLink({ href, title, iconClass }: SocialLinkProps) {
  return (
    <li>
      <a href={href} title={title}>
        <span className={`icon-social fa ${iconClass}`}></span>
      </a>
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
