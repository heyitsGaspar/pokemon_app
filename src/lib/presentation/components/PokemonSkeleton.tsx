import { Skeleton } from "@/components/ui/skeleton";

export const PokemonSkeleton = () => {
    return (
        <div className="space-y-4">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-4 w-30" />
        </div>
    )
}