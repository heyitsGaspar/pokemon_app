import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Props {
    value: string
    onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: Props) => {
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute w-4 h-4 left-3 top-3 text-neutral-400" />
            <Input
                value={value}
                placeholder="Buscar Pokémon..."
                onChange={(e) => onChange(e.target.value)}
                className="text-white pl-9 bg-zinc-900 border-neutral-700 focus:border-red-500 focus-visible:ring-red-500/30 placeholder:text-neutral-500 h-11"
            />
        </div>
    )
}