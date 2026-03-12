/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPokemons } from "../../application/usecases/getPokemon"

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async ({ offset }: { offset: number }) => {
        return await getPokemons(offset)
    }
)

interface PokemonState {
    pokemons: any[]
    loading: boolean
    offset: number
}

const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    offset: 0,
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.loading = false
                state.pokemons = action.payload.results
            })
    },
})

export default pokemonSlice.reducer