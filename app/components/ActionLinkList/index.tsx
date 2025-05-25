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
function ActionLink({ children, href, rel, spaced, target }: ActionLinkProps) {
  const spacingClassName = spaced ? 'mt-12' : '[&:not(:first-child)]:mt-3';
  return (
    <Link
      className={`${btnClassNames} ${arsenalBoldItalic.className} ${spacingClassName}`}
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
    <>
      {ACTION_LINKS.map((props: ActionLinkProps) => (
        <ActionLink key={props.href} {...props} />
      ))}
    </>
  );
}

export default ActionLinkList;
