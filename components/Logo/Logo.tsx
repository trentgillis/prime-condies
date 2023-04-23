import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo.svg';

export function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" priority sizes="100vh" width={197} height={24} />
    </Link>
  );
}
