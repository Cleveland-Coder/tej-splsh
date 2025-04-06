import Link from 'next/link';

function Home() {
  return (
    <div>
      <Link
        className="btn"
        href="//www.etsy.com/shop/TinyErica"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop
      </Link>
      <Link className="btn" href="mailto:hello@tinyerica.com">
        Email
      </Link>
    </div>
  );
}

export default Home;
