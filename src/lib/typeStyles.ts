export const typeColorMap: Record<
    string,
    { border: string; shadow: string; badge: string; text: string }
> = {
    fire: {
        border: "#ef4444",
        shadow: "rgba(239,68,68,0.35)",
        badge: "rgba(239,68,68,0.15)",
        text: "#f87171",
    },
    water: {
        border: "#3b82f6",
        shadow: "rgba(59,130,246,0.35)",
        badge: "rgba(59,130,246,0.15)",
        text: "#60a5fa",
    },
    electric: {
        border: "#eab308",
        shadow: "rgba(234,179,8,0.35)",
        badge: "rgba(234,179,8,0.15)",
        text: "#facc15",
    },
    grass: {
        border: "#22c55e",
        shadow: "rgba(34,197,94,0.35)",
        badge: "rgba(34,197,94,0.15)",
        text: "#4ade80",
    },
    poison: {
        border: "#a855f7",
        shadow: "rgba(168,85,247,0.35)",
        badge: "rgba(168,85,247,0.15)",
        text: "#c084fc",
    },
    psychic: {
        border: "#ec4899",
        shadow: "rgba(236,72,153,0.35)",
        badge: "rgba(236,72,153,0.15)",
        text: "#f472b6",
    },
    ice: {
        border: "#22d3ee",
        shadow: "rgba(34,211,238,0.35)",
        badge: "rgba(34,211,238,0.15)",
        text: "#67e8f9",
    },
    dragon: {
        border: "#818cf8",
        shadow: "rgba(129,140,248,0.35)",
        badge: "rgba(129,140,248,0.15)",
        text: "#a5b4fc",
    },
    dark: {
        border: "#6b7280",
        shadow: "rgba(107,114,128,0.35)",
        badge: "rgba(107,114,128,0.15)",
        text: "#9ca3af",
    },
    ghost: {
        border: "#7c3aed",
        shadow: "rgba(124,58,237,0.35)",
        badge: "rgba(124,58,237,0.15)",
        text: "#a78bfa",
    },
    fighting: {
        border: "#f97316",
        shadow: "rgba(249,115,22,0.35)",
        badge: "rgba(249,115,22,0.15)",
        text: "#fb923c",
    },
    normal: {
        border: "#9ca3af",
        shadow: "rgba(156,163,175,0.25)",
        badge: "rgba(156,163,175,0.1)",
        text: "#d1d5db",
    },
    ground: {
        border: "#d97706",
        shadow: "rgba(217,119,6,0.35)",
        badge: "rgba(217,119,6,0.15)",
        text: "#fbbf24",
    },
    rock: {
        border: "#92400e",
        shadow: "rgba(146,64,14,0.35)",
        badge: "rgba(146,64,14,0.15)",
        text: "#d97706",
    },
    bug: {
        border: "#84cc16",
        shadow: "rgba(132,204,22,0.35)",
        badge: "rgba(132,204,22,0.15)",
        text: "#a3e635",
    },
    steel: {
        border: "#94a3b8",
        shadow: "rgba(148,163,184,0.35)",
        badge: "rgba(148,163,184,0.15)",
        text: "#cbd5e1",
    },
    fairy: {
        border: "#f9a8d4",
        shadow: "rgba(249,168,212,0.35)",
        badge: "rgba(249,168,212,0.15)",
        text: "#fbcfe8",
    },
    flying: {
        border: "#818cf8",
        shadow: "rgba(129,140,248,0.25)",
        badge: "rgba(129,140,248,0.1)",
        text: "#a5b4fc",
    },
};
