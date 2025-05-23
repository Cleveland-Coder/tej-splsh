// External dependencies
import Link from 'next/link';

// Internal types
import { ActionLinkProps, ActionLinkConfig } from './types';

// Internal constants
import { ACTION_LINKS } from './constants';

// Internal utilities and config
import { arsenalBoldItalic } from '~config/fonts';

// Internal styles
import { btnClassNames, btnStyles } from './tailwind';

/**
 * A styled link component for action buttons
 */
function ActionLink({ href, children, target, rel }: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`${btnClassNames} ${arsenalBoldItalic.className}`}
      style={btnStyles}
      target={target}
      rel={rel}
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
      {ACTION_LINKS.map((link: ActionLinkConfig) => (
        <ActionLink key={link.href} href={link.href} target={link.target} rel={link.rel}>
          {link.label}
        </ActionLink>
      ))}
    </div>
  );
}

export default ActionLinkList;
