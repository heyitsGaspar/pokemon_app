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
        <Pagination className="mt-8 flex justify-end">

            <PaginationContent>

                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => page > 1 && onPageChange(page - 1)}
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
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    })}

                </div>

                <PaginationItem className="sm:hidden px-3 text-sm">
                    {page} / {totalPages}
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext
                        onClick={() =>
                            page < totalPages && onPageChange(page + 1)
                        }
                    />
                </PaginationItem>

            </PaginationContent>

        </Pagination>
    )
}