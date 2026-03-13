import { pokemonApi } from "../../infrastructure/api/pokemonApi"

export const searchPokemon = async (name: string) => {
    try {
        const response = await pokemonApi.get(`/pokemon/${name.toLowerCase()}`)

        return {
            name: response.data.name,
            url: `https://pokeapi.co/api/v2/pokemon/${response.data.id}/`
        }

    } catch {
        return null
    }
}