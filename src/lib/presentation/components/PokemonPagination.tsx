import { 
    Pagination, 
    PaginationContent, 
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PokemonPaginationProps {
    next: () => void
    previous: () => void
    hasPrevious: boolean
}

export const PokemonPagination = ({ next, previous, hasPrevious }: PokemonPaginationProps) => {
    return (
        <Pagination className="mt-10">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious 
                    onClick={previous} 
                    className={!hasPrevious ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext 
                    onClick={next} 
                    className="cursor-pointer"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}