import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
    PaginationLink,
} from "@/components/ui/pagination"

interface Props {
    page: number
    totalPages: number
    onPageChange: (page: number) => void
}

export const PokemonPagination = ({
    page,
    totalPages,
    onPageChange,
}: Props) => {

    const pages = Array.from({ length: totalPages })
        .slice(Math.max(0, page - 3), page + 2)

    return (
        <Pagination className="flex justify-end mt-8">

            <PaginationContent>

                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => page > 1 && onPageChange(page - 1)}
                        className="text-neutral-300 border border-neutral-700 hover:bg-neutral-800 hover:text-white [&>svg]:stroke-neutral-300"
                    />
                </PaginationItem>

                <div className="hidden sm:flex">
                    {pages.map((_, index) => {
                        const pageNumber = index + Math.max(1, page - 2)
                        return (
                            <PaginationItem key={pageNumber}>
                                <PaginationLink
                                    isActive={page === pageNumber}
                                    onClick={() => onPageChange(pageNumber)}
                                    className={
                                        page === pageNumber
                                            ? "border border-neutral-400 bg-neutral-700 text-white hover:bg-neutral-600 hover:text-white"
                                            : "text-neutral-300 border border-neutral-700 hover:bg-neutral-800 hover:text-white"
                                    }
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    })}
                </div>

                <PaginationItem className="px-3 text-sm sm:hidden text-neutral-300">
                    {page} / {totalPages}
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext
                        onClick={() => page < totalPages && onPageChange(page + 1)}
                        className="text-neutral-300 border border-neutral-700 hover:bg-neutral-800 hover:text-white [&>svg]:stroke-neutral-300"
                    />
                </PaginationItem>

            </PaginationContent>

        </Pagination>
    )
}