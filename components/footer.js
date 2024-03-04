import Link from 'next/link';
export default function Footer(){
    return(
        <>
            <footer className="body-font bg-gray-100">
                <div>
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <Link legacyBehavior href="/">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl">Sia</span>
                        </a>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                        </a>
                        <a className="ml-3 text-gray-500">
                        </a>
                        <a className="ml-3 text-gray-500">
                        </a>
                        <a className="ml-3 text-gray-500">
                        </a>
                    </span>
                    </div>
                </div>
            </footer>
        </>
    )
}