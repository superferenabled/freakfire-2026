import React from "react";

export default function Card({ title, children, className = "" }) {
    return (
        <article className={`bg-f-card p-4.5 rounded-xl flex-1 ${className}`}>
            {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
            <div>{children}</div>
        </article>
    );
}
