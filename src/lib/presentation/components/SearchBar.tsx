import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Props {
    value: string
    onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: Props) => {
    return (
        <div className="relative w-full md:w-80">

            <Search className="absolute w-4 h-4 left-3 top-2 text-muted-foreground" />

            <Input
                value={value}
                placeholder="Buscar Pokémon..."
                onChange={(e) => onChange(e.target.value)}
                className="text-white pl-9"
            />

        </div>
    )
}