import { Input } from '@/components/ui/input'

interface SearchBarProps {
    onSearch: (value: string) => void
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    return(
        <Input
            placeholder="Search Pokémon..."
            onChange={(e) => onSearch(e.target.value)}
            className='max-w-md'
        />
    )
}