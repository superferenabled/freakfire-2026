import React from "react";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";

export default function Contact() {
    return (
        <section className="px-8 py-6">
            <h2>Contact</h2>
            <p>
                For business inquiries, email us at{" "}
                <a href="mailto:hello@freakfire.games">hello@freakfire.games</a>
            </p>
            <p>Or fill in the short form below:</p>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted (placeholder)");
                }}
            >
                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                    <div className="mb-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project"
                    />
                </div>

                <div className="mb-3">
                    <Button type="submit">Send message</Button>
                </div>
            </form>
        </section>
    );
}
