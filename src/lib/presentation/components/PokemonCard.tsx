import { Card, CardContent } from '@/components/ui/card'

interface PokemonCardProps {
    name: string
    url: string
}

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
    const id = url.split('/')[6]
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <Card className='hover:scale-105 transition'>
            <CardContent className='flex flex-col items-center p-6'>
            <img src={image} alt={name} className='w-24 h-24' />

            <h2 className='capitalize font-bold text-lg'>{name}</h2>
            </CardContent>
        </Card>
    )
}
