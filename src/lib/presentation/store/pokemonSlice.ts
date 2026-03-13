/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPokemons } from "@/lib/application/usecases/getPokemon"

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async ({ page }: { page: number }) => {
        const limit = 6
        const offset = (page - 1) * limit

        const data = await getPokemons(offset, limit)

        return {
            pokemons: data.results,
            count: data.count,
            page,
        }
    }
)

export const fetchAllPokemons = createAsyncThunk(
    "pokemon/fetchAllPokemons",
    async () => {
        const data = await getPokemons(0, 1350)

        return data.results
    }
)

interface PokemonState {
    pokemons: any[]
    allPokemons: any[]
    loading: boolean
    page: number
    totalPages: number
}

const initialState: PokemonState = {
    pokemons: [],
    allPokemons: [],
    loading: false,
    page: 1,
    totalPages: 0,
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,

    reducers: {

        searchLocalPokemon: (state, action) => {

            const search = action.payload.toLowerCase()

            const results = state.allPokemons.filter((pokemon) =>
                pokemon.name.includes(search)
            )

            state.pokemons = results.slice(0, 6)
        }

    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true
            })

            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.loading = false
                state.pokemons = action.payload.pokemons
                state.page = action.payload.page
                state.totalPages = Math.ceil(action.payload.count / 6)
            })

            .addCase(fetchAllPokemons.fulfilled, (state, action) => {
                state.allPokemons = action.payload
            })

    },
})

export const { searchLocalPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer