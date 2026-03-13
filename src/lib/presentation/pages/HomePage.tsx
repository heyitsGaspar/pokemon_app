/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, searchLocalPokemon, fetchAllPokemons } from "@/lib/presentation/store/pokemonSlice";
import { type RootState } from "@/lib/app/store/store";

import { PokemonSkeleton } from "@/lib/presentation/components/PokemonSkeleton";
import { PokemonCard } from "@/lib/presentation/components/PokemonCard";
import { PokemonPagination } from "@/lib/presentation/components/PokemonPagination";
import { SearchBar } from "@/lib/presentation/components/SearchBar";


export const HomePage = () => {

    const dispatch = useDispatch();

    const { pokemons, loading, page, totalPages } = useSelector(
        (state: RootState) => state.pokemon
    );

    const [search, setSearch] = useState("");

    const handleSearch = (value: string) => {

        setSearch(value);

        if (value.trim() === "") {
            dispatch(fetchPokemons({ page: 1 }) as any);
            return;
        }

        dispatch(searchLocalPokemon(value));
    };

    useEffect(() => {

        dispatch(fetchPokemons({ page: 1 }) as any);

        dispatch(fetchAllPokemons() as any);

    }, [dispatch]);

    useEffect(() => {

        if (search === "") {
            dispatch(fetchPokemons({ page }) as any);
        }

    }, [dispatch, page, search]);

    const handlePageChange = (newPage: number) => {

        dispatch(fetchPokemons({ page: newPage }) as any);

    };

    return (

        <div className="container mx-auto p-6">

            <h1 className="text-4xl font-bold mb-6 text-center">
                Pokedex
            </h1>

            {/* Search */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">

                <SearchBar
                    value={search}
                    onChange={handleSearch}
                />

            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

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