// External dependencies
import { NextResponse, type NextRequest } from 'next/server';

// Internal constants
import { AI_CRAWLERS } from '~constants/ai-crawlers';

// Tokens are plain identifiers ([A-Za-z0-9-]), so no escaping is needed.
const AI_CRAWLER_PATTERN = new RegExp(AI_CRAWLERS.join('|'), 'i');

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') ?? '';

  if (AI_CRAWLER_PATTERN.test(userAgent)) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  // Everything except JS/CSS build chunks and robots.txt — a crawler that
  // reads robots.txt should be able to see that it is disallowed. Images
  // (including /_next/image) stay covered; they are what scrapers want.
  matcher: ['/((?!_next/static|robots\\.txt).*)'],
};
