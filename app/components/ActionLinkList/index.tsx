// External dependencies
import Link from 'next/link';

// Internal types
import { ActionLinkProps } from './types';

// Internal constants
import { ACTION_LINKS } from './constants';

// Internal utilities and config
import { arsenalBoldItalic } from '~config/fonts';

// Internal styles
import { btnClassNames, btnStyles } from './tailwind';

/**
 * A styled link component for action buttons
 */
function ActionLink({ children, href, rel, target }: ActionLinkProps) {
  return (
    <Link
      className={`${btnClassNames} ${arsenalBoldItalic.className}`}
      href={href}
      rel={rel}
      style={btnStyles}
      target={target}
    >
      {children}
    </Link>
  );
}

/**
 * A list of action links/buttons for navigation
 */
function ActionLinkList() {
  return (
    <div>
      {ACTION_LINKS.map((link: ActionLinkProps) => (
        <ActionLink href={link.href} key={link.href} rel={link.rel} target={link.target}>
          {link.children}
        </ActionLink>
      ))}
    </div>
  );
}

export default ActionLinkList;
