import React from "react";

export default function Input(props) {
    return (
        <input
            className="w-full px-3 py-2.5 rounded-lg bg-gray-900 border border-gray-700"
            {...props}
        />
    );
}
