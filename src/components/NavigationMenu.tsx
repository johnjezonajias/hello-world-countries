import Link from 'next/link';

export const NavigationMenu = () => {
    return (
        <nav className="w-auto">
            <div className="flex justify-between">
                <div className="text-sm flex space-x-10">
                    <Link className="text-white hover:text-gray-300" href="/">
                        Home
                    </Link>
                    <Link className="text-white hover:text-gray-300" href="/countries">
                        Countries
                    </Link>
                </div>
            </div>
        </nav>
    );
}
