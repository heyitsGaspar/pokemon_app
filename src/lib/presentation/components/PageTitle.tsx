import { useLineAnimation } from "@/lib/utils";

interface Props {
    name: string;
}

export const PageTitle = ({ name }: Props) => {
    const expanded = useLineAnimation(600);

    return (
        <div className="flex flex-col mb-8">
            <h1 className="text-4xl font-black tracking-widest text-left text-transparent uppercase bg-linear-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text">
                {name}
            </h1>
            <div
                className={`mt-3 h-0.5 bg-linear-to-r from-transparent via-red-500 to-transparent transition-all duration-1000 ease-out ${
                    expanded ? "w-72" : "w-0"
                }`}
            />
        </div>
    );
};
