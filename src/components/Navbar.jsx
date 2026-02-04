import { useState } from "react";

const navLinks = [
    { id: "intro", title: "Intro" },
    { id: "portfolio", title: "Portfolio" },
    { id: "timeline", title: "Timeline" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
];

const menuIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
        />
    </svg>
);

const closeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

function Navbar({ active, scrollToSection }) {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="fixed z-10 right-4 md:right-12 top-4 w-full flex justify-end pointer-events-none">
            <div className="relative flex items-center pointer-events-auto">
                {/* Menu toggle */}
                <button
                    onClick={() => setToggle(!toggle)}
                    className="cursor-pointer icon-btn"
                    aria-label="Toggle menu"
                >
                    {toggle ? closeIcon : menuIcon}
                </button>
                {/* Menu items */}
                <div
                    className={`absolute top-12 right-0 min-w-40 p-6 rounded-xl z-30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300
                                ${toggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                            `}
                >
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((nav) => (
                            <li key={nav.id}>
                                <button
                                    onClick={() => {
                                        scrollToSection(nav.id);
                                        setActive(nav.id);
                                        setToggle(false);
                                    }}
                                    className={`text-left w-full text-[16px] font-medium transition-colors duration-200
                                                ${active === nav.id ? "text-violet-600 dark:text-orange-300" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"}
                                            `}
                                >
                                    {nav.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;