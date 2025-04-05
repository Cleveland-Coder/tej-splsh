interface SocialLinkProps {
  href: string;
  iconClass: string;
  title: string;
}

function SocialLink({ href, title, iconClass }: SocialLinkProps) {
  return (
    <li>
      <a href={href} title={title}>
        <span className={`icon-social fa ${iconClass}`}></span>
      </a>
    </li>
  );
}

const socialLinks: SocialLinkProps[] = [
  {
    href: '//instagram.com/tinyerica',
    iconClass: 'fa-instagram',
    title: 'instagram',
  },
  {
    href: '//facebook.com/tinyerica',
    iconClass: 'fa-facebook-square',
    title: 'facebook',
  },
  {
    href: '//pinterest.com/tinyerica',
    iconClass: 'fa-pinterest-square',
    title: 'pinterest',
  },
  {
    href: '//twitter.com/tinyerica',
    iconClass: 'fa-twitter-square',
    title: 'twitter',
  },
];

function SocialLinkList() {
  return (
    <ul className="list-social">
      {socialLinks.map((link) => (
        <SocialLink key={link.title} {...link} />
      ))}
    </ul>
  );
}

export default SocialLinkList;
