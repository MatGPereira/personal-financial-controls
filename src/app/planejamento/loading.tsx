import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  console.log("Loading component rendered!")

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        {
          [...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`bg-white border p-4 rounded-lg flex flex-col
                border-zinc-200 space-y-2 dark:bg-gray-800 dark:border-gray-700
              `}
            >
              <Skeleton className="h-[20px] w-[60px]" />
              <Skeleton className="h-[23px] w-[103px]" />
            </div>
          ))
        }
      </div>
      <div className="flex flex-col gap-y-2">
        {
          [...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`bg-white border p-4 rounded-lg flex flex-col
                border-zinc-200 space-y-2 dark:bg-gray-800 dark:border-gray-700
              `}
            >
              <div className="w-full">
                <div className="w-full mb-4">
                  <Skeleton className="h-[20px] w-[103px]" />
                </div>
                <div className="flex flex-col gap-y-2">
                  {
                    [...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center justify-between w-full"
                      >
                        <Skeleton className="h-[24px] w-[109px]" />
                        <div className="inline-flex items-center gap-x-1">
                          <Skeleton className="h-[24px] w-[54px] rounded-full" />
                          <Skeleton className="h-[16px] w-[16px] rounded-full" />
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className={`mt-4 pt-4 flex items-center gap-x-2 border-t
                  border-t-zinc-200 dark:border-t-gray-700
                `}>
                  <div className="flex items-center gap-x-2 flex-1">
                    <Skeleton className="h-[42px] w-[118.5px]" />
                    <Skeleton className="h-[42px] w-[118.5px]" />
                  </div>
                  <Skeleton className="h-[40px] w-[56px]" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
