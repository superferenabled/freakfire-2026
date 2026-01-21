import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4.5">
            <div className="font-bold text-3xl text-f-accent">FreakFire</div>
            <nav className="flex space-x-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `nav-link text-xl font-semibold ${isActive ? "text-f-accent active" : "text-gray-300 hover:text-blue-300"}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/games"
                    className={({ isActive }) =>
                        `nav-link text-xl font-semibold ${isActive ? "text-f-accent active" : "text-gray-300 hover:text-green-300"}`
                    }
                >
                    Games
                </NavLink>
                <NavLink
                    to="/studio"
                    className={({ isActive }) =>
                        `nav-link text-xl font-semibold ${isActive ? "text-f-accent active" : "text-gray-300 hover:text-purple-300"}`
                    }
                >
                    The Studio
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                        `nav-link text-xl font-semibold ${isActive ? "text-f-accent active" : "text-gray-300 hover:text-orange-300"}`
                    }
                >
                    Blog
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `nav-link text-xl font-semibold ${isActive ? "text-f-accent active" : "text-gray-300 hover:text-pink-300"}`
                    }
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}
