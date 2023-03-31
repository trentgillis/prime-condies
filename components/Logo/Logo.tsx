import Image from 'next/image';
import logo from '@/public/logo.svg';

export function Logo() {
  return <Image src={logo} alt="logo" height={24} priority />;
}
