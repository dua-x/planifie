import Skeleton from '../components/layout/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col pt-32 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <Skeleton variant="rectangular" className="w-32 h-8 rounded-full opacity-20" />
            <div className="space-y-4">
              <Skeleton variant="text" className="h-16 w-full opacity-20" />
              <Skeleton variant="text" className="h-16 w-3/4 opacity-20" />
            </div>
            <Skeleton variant="text" className="h-20 w-1/2 opacity-20" />
            <div className="flex gap-4">
              <Skeleton variant="rectangular" className="w-48 h-16 opacity-20" />
              <Skeleton variant="rectangular" className="w-48 h-16 opacity-20" />
            </div>
          </div>
          <div className="flex justify-end">
            <Skeleton variant="rectangular" className="w-full max-w-[460px] h-[500px] opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
