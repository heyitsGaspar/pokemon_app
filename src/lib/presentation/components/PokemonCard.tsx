import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { typeColorMap } from "@/lib/typeStyles";

interface PokemonCardProps {
    name: string;
    url: string;
}

interface PokemonType {
    type: {
        name: string;
    };
}

export const PokemonCard = ({ name, url }: PokemonCardProps) => {
    const id = url.split("/")[6];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const [types, setTypes] = useState<PokemonType[]>([]);

    useEffect(() => {
        const fetchTypes = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setTypes(data.types);
        };
        fetchTypes();
    }, [url]);

    const primaryType = types[0]?.type.name ?? "normal";
    const colors = typeColorMap[primaryType] ?? typeColorMap.normal;

    return (
        <Card
            className="overflow-hidden transition duration-300 border cursor-pointer group hover:-translate-y-2 bg-[#111] relative"
            style={{
                borderColor: colors.border,
                boxShadow: `0 8px 30px ${colors.shadow}`,
            }}
            onMouseEnter={e =>
                (e.currentTarget.style.boxShadow = `0 16px 40px ${colors.shadow.replace("0.35", "0.55")}`)
            }
            onMouseLeave={e =>
                (e.currentTarget.style.boxShadow = `0 8px 30px ${colors.shadow}`)
            }
        >
            {/* shiny hover overlay */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 bg-linear-to-br from-white/5 to-transparent" />

            <CardContent className="flex flex-col items-center gap-3 p-6">
                <img
                    src={image}
                    alt={name}
                    className="object-contain transition duration-300 w-28 h-28 group-hover:scale-110"
                />

                <p className="font-mono text-xs tracking-widest text-neutral-500">#{id}</p>

                <h2 className="text-lg font-semibold tracking-wide capitalize text-neutral-200">
                    {name}
                </h2>

                <div className="flex gap-2 mt-1">
                    {types.map((t) => {
                        const c = typeColorMap[t.type.name] ?? typeColorMap.normal;
                        return (
                            <span
                                key={t.type.name}
                                className="px-3 py-1 text-xs font-medium capitalize rounded-full"
                                style={{
                                    background: c.badge,
                                    border: `1px solid ${c.border}`,
                                    color: c.text,
                                }}
                            >
                                {t.type.name}
                            </span>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};