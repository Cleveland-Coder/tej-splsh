// External dependencies
import { ReactNode } from 'react';

// Internal components
import Flag from '~components/Flag';

// Internal constants
import { BANNER } from '~constants';

/**
 * Displays the available flag
 * @returns The flag component or null if no message is available
 */
export function displayAvailableFlag(): ReactNode {
  if (!BANNER.message) return null;
  return <Flag bgColor={BANNER.bgColor} message={BANNER.message} />;
}
