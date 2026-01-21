import React from "react";

export default function Button({ children, className = "", ...props }) {
    return (
        <button
            className={`bg-f-accent text-black px-3 py-2.5 rounded-lg font-bold ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
