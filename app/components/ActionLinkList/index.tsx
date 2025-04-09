// External dependencies
import Link from 'next/link';

// Internal constants
import { ACTION_LINKS } from './constants';

// Internal utilities and config
import { lato } from '~config/fonts';

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

function ActionLink({ href, children, target, rel }: ActionLinkProps) {
  return (
    <Link className={`btn ${lato.className}`} href={href} target={target} rel={rel}>
      {children}
    </Link>
  );
}

function ActionLinkList() {
  return (
    <div>
      {ACTION_LINKS.map((link) => (
        <ActionLink key={link.href} href={link.href} target={link.target} rel={link.rel}>
          {link.label}
        </ActionLink>
      ))}
    </div>
  );
}

export default ActionLinkList;
