import { pokemonApi } from "@/lib/infrastructure/api/pokemonApi";

export const getPokemons = async (offset=0, limit=6) => {
    const response = await pokemonApi.get(`/pokemon?offset=${offset}&limit=${limit}`)
    return response.data
}