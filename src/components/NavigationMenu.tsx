import Link from 'next/link';

export const NavigationMenu = () => {
    return (
        <nav className="p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-10">
                        <Link className="text-white hover:text-gray-300" href="/">
                            Home
                        </Link>
                        <Link className="text-white hover:text-gray-300" href="/countries">
                            Countries
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
