import { Link } from 'react-router-dom';

function NavbarLinks(){
    return(<div className="">
        <ul className="lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 sm:hidden xs:hidden md:hidden lg:hidden xl:flex">
            <li>
                <a
                    className="text-sm text-black hover:underline hover:underline-offset-4"
                    href="#"
                >
                    Home
                </a>
            </li>
            <li className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#6366F1"
                    stroke="#6366F1"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                </svg>
            </li>
            <li>
                <a
                    className="text-sm text-black hover:underline hover:underline-offset-4"
                    href="#"
                >
                    Services
                </a>
            </li>
            <li className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#6366F1"
                    stroke="#6366F1"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                </svg>
            </li>
            <li>
                <Link
                    className="text-sm text-black hover:underline hover:underline-offset-4"
                    to="/fyp-schedulizer/dashboard"
                >
                    Dashboard
                </Link>
            </li>
        </ul>
    </div>);
}

export default NavbarLinks;