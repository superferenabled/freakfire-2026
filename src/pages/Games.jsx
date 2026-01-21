import React from "react";
import Card from "../components/ui/Card";

export default function Games() {
    return (
        <section className="px-8 py-6">
            <h2>Our Games</h2>
            <p>We ship across multiple genres. Highlights:</p>
            <div className="flex gap-4">
                <Card title="Emberfall">
                    Action-RPG with tactical party combat.
                </Card>
                <Card title="Pyro Clash">
                    Competitive arena shooter with modular classes.
                </Card>
                <Card title="Glint">Experimental narrative puzzler.</Card>
            </div>
        </section>
    );
}
