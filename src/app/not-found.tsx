import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-4 p-4 text-center lg:p-6">
      <h1 className="text-gradient text-7xl font-extrabold md:text-8xl lg:text-9xl">404</h1>
      <h3 className="text-2xl font-semibold">Trang không tìm thấy</h3>
      <p className="text-muted-foreground text-sm">Úi! Đây không phải trang bạn đang tìm kiếm.</p>
      <Button asChild>
        <Link href="/">Trở về trang chủ</Link>
      </Button>
    </div>
  );
};

export default NotFound;
