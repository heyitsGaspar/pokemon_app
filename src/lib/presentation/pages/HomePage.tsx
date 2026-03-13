/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchPokemons,
    searchLocalPokemon,
    fetchAllPokemons
} from '@/lib/presentation/store/pokemonSlice'
import { type RootState } from '@/lib/app/store/store'

import { PokemonSkeleton } from '@/lib/presentation/components/PokemonSkeleton'
import { PokemonCard } from '@/lib/presentation/components/PokemonCard'
import { PokemonPagination } from '@/lib/presentation/components/PokemonPagination'
import { SearchBar } from '@/lib/presentation/components/SearchBar'
import { useDebounce } from '@/lib/hooks/useDebounce'
import { PageTitle } from '../components/PageTittle'

export const HomePage = () => {
    const dispatch = useDispatch()

    const { pokemons, loading, page, totalPages } = useSelector(
        (state: RootState) => state.pokemon
    )

    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)

    const handleSearch = (value: string) => {
        setSearch(value)
    }

    useEffect(() => {
        dispatch(fetchPokemons({ page: 1 }) as any)
        dispatch(fetchAllPokemons() as any)
    }, [dispatch])

    useEffect(() => {
        if (debouncedSearch.trim() === '') {
            dispatch(fetchPokemons({ page: 1 }) as any)
        } else {
            dispatch(searchLocalPokemon(debouncedSearch))
        }
    }, [debouncedSearch, dispatch])

    const handlePageChange = (newPage: number) => {
        dispatch(fetchPokemons({ page: newPage }) as any)
    }

    const noResults = !loading && pokemons.length === 0 && search !== ''

    return (
        <div className='min-h-screen bg-zinc-950'>
            <div className='w-full p-6 mx-auto max-w-7xl '>
                {/* Title */}
                <PageTitle name='Gaspar Israel Chay Colli' />
                {/* Search */}
                <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
                    <SearchBar value={search} onChange={handleSearch} />
                </div>

                {/* Grid */}
                {noResults ? (
                    <div className='flex flex-col items-center justify-center gap-4 py-24 text-center'>
                        <span className='text-6xl'>🔍</span>
                        <p className='text-xl font-semibold text-neutral-300'>
                            No se encontró <span className='text-red-500'>"{search}"</span>
                        </p>
                        <p className='text-sm text-neutral-500'>
                            Intenta con otro nombre o revisa la ortografía
                        </p>
                    </div>
                ) : (
                    <div className='grid grid-cols-2 gap-6 md:grid-cols-3'>
                        {loading
                            ? Array.from({ length: 6 }).map((_, i) => (
                                <PokemonSkeleton key={i} />
                            ))
                            : pokemons.map(pokemon => (
                                <PokemonCard
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            ))}
                    </div>
                )}

                {/* Pagination */}
                {search === '' && (
                    <PokemonPagination
                        page={page}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    )
}
