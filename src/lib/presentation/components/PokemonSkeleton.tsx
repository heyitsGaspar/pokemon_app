import { Skeleton } from "@/components/ui/skeleton";

export const PokemonSkeleton = () => {
    return (
        <div className="space-y-4 p-6 rounded-xl border border-neutral-800 bg-[#111]">
            <Skeleton className="mx-auto rounded-lg h-28 w-28 bg-neutral-800" />
            <Skeleton className="w-10 h-3 mx-auto rounded-full bg-neutral-800" />
            <Skeleton className="w-24 h-4 mx-auto rounded-full bg-neutral-800" />
            <div className="flex justify-center gap-2">
                <Skeleton className="h-5 rounded-full w-14 bg-neutral-800" />
                <Skeleton className="h-5 rounded-full w-14 bg-neutral-800" />
            </div>
        </div>
    )
}