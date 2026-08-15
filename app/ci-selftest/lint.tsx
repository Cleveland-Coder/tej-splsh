'use client';

import { useState } from 'react';

export default function BrokenLint({ flag }: { flag: boolean }) {
  if (flag) {
    const [value] = useState(0);
    return <p>{value}</p>;
  }
  return <p>no</p>;
}
