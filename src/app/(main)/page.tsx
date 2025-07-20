import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { getDailyPrompt } from '@/lib/api/common';
import { Calendar } from 'lucide-react';

export default async function Home() {
  const prompt = await getDailyPrompt();

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-5xl space-y-8 text-center">
        <h1 className="text-gradient mb-6 text-5xl leading-tight font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Không gian của bạn. <br /> Tâm sự của bạn.
        </h1>
        <p className="text-lg text-orange-800 md:text-xl">
          Nắm bắt suy nghĩ, theo dõi tâm trạng và suy ngẫm về hành trình của bạn trong một không gian đẹp và an toàn.
        </p>

        <div className="relative after:pointer-events-none after:absolute after:inset-0 after:z-1 after:bg-gradient-to-t after:from-orange-50 after:via-transparent after:to-transparent">
          <div className="mx-auto rounded-2xl bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-orange-600" />
                <span className="font-medium text-orange-900">Ngày hôm nay của bạn</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-orange-200"></div>
                <div className="size-3 rounded-full bg-orange-300"></div>
                <div className="size-3 rounded-full bg-orange-400"></div>
              </div>
            </div>

            <hr className="my-4 border-t border-orange-100" />

            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-orange-900">{prompt}</h3>
              <Skeleton className="h-4 w-3/4 rounded bg-orange-100" />
              <Skeleton className="h-4 w-full rounded bg-orange-100" />
              <Skeleton className="h-4 w-2/3 rounded bg-orange-100" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="rounded-full">
            Bắt đầu viết
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:text-primary rounded-full">
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </div>
  );
}
