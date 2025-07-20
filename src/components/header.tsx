import { cn } from '@/lib/utils';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Lobster } from 'next/font/google';
import Link from 'next/link';
import { Button } from './ui/button';
import Profile from './common/profile';
import { FolderOpen, PenBox } from 'lucide-react';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

const Header = () => {
  return (
    <nav className="container flex items-center justify-between px-4 py-6">
      <Link href="/" className={cn(lobster.className, 'text-4xl font-bold')}>
        Dairamy
      </Link>
      <div className="flex items-center gap-2">
        <SignedIn>
          <Button variant="outline" asChild>
            <Link href="/trang-chu#bo-suu-tap">
              <FolderOpen className="size-4" />
              <span className="hidden md:inline">Bộ sưu tập</span>
            </Link>
          </Button>
        </SignedIn>
        <Button asChild>
          <Link href="/nhat-ky/moi">
            <PenBox className="size-4" />
            <span className="hidden md:inline">Tạo mới</span>
          </Link>
        </Button>

        <SignedOut>
          <SignInButton>
            <Button variant="outline">Đăng nhập</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <Profile />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
