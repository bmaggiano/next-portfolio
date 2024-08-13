import { Button } from "./button";

export default function Jumbotron() {
    return (
        <main className="flex flex-col items-center justify-center gap-y-4 px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-white text-center font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">From Concept to Code</h1>
            <p className="max-w-[42rem] text-center leading-normal text-gray-400 sm:text-xl sm:leading-8">Crafting React and Next.js magic. Step into my portfolio, where code meets creativity.</p>
            <Button variant="outline">
                Follow along on X
            </Button>
        </main>
    )
}