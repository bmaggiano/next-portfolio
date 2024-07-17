import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
export default function Header() {
    return (
        <header className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 text-white">
            <div className="flex items-center">
                <Link href={'/'}>
                    <Avatar>
                        <AvatarImage src="/bmaggiano.jpeg" alt="@bmaggiano" />
                        <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                </Link>
                <span className="ml-3 text-xl font-semibold">
                    Brandon's Site
                </span>
            </div>
            <div className="flex items-center gap-x-6">
                <a href="https://github.com/bmaggiano" target='_blank' className="text-sm font-semibold">
                    View on GitHub
                </a>
            </div>
        </header>
    )
}