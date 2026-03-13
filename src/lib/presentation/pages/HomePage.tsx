/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, searchLocalPokemon, fetchAllPokemons } from "@/lib/presentation/store/pokemonSlice";
import { type RootState } from "@/lib/app/store/store";

import { PokemonSkeleton } from "@/lib/presentation/components/PokemonSkeleton";
import { PokemonCard } from "@/lib/presentation/components/PokemonCard";
import { PokemonPagination } from "@/lib/presentation/components/PokemonPagination";
import { SearchBar } from "@/lib/presentation/components/SearchBar";
import { useDebounce } from "@/lib/hooks/useDebounce";


export const HomePage = () => {

    const dispatch = useDispatch();

    const { pokemons, loading, page, totalPages } = useSelector(
        (state: RootState) => state.pokemon
    );

    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    const handleSearch = (value: string) => {

        setSearch(value);

    };
    //cargar pokemones iniciales 
    useEffect(() => {

        dispatch(fetchPokemons({ page: 1 }) as any);

        dispatch(fetchAllPokemons() as any);

    }, [dispatch]);

    useEffect(() => {

        if (debouncedSearch.trim() === "") {

            dispatch(fetchPokemons({ page: 1 }) as any)

        } else {

            dispatch(searchLocalPokemon(debouncedSearch))

        }

    }, [debouncedSearch, dispatch])

    const handlePageChange = (newPage: number) => {

        dispatch(fetchPokemons({ page: newPage }) as any);

    };

    return (

        <div className="container p-6 mx-auto">

            <h1 className="mb-6 text-4xl font-bold text-center">
                Pokedex
            </h1>

            {/* Search */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

                <SearchBar
                    value={search}
                    onChange={handleSearch}
                />

            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">

                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <PokemonSkeleton key={i} />
                    ))
                    : pokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    ))}

            </div>

            {/* Pagination */}
            {search === "" && (

                <PokemonPagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

            )}

        </div>
    );
};