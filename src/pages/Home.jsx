import React from 'react'
import Card from '../components/ui/Card'

export default function Home() {
  return (
    <>
      <section className="px-8 py-16 text-center">
        <h1 className="text-4xl mb-3">FreakFire — Games That Ignite</h1>
        <p className="mb-4 opacity-90">We build immersive worlds and bold gameplay for players everywhere.</p>
        <a className="bg-f-accent text-black px-4 py-2.5 rounded-lg no-underline font-bold" href="/contact">Work with us</a>
      </section>

      <section id="games" className="flex gap-4 px-8 py-6">
        {/* Use shadcn-style local Card component */}
        <Card title="Action RPGs">
          <p>Deep systems, visceral combat, memorable characters.</p>
        </Card>

        <Card title="Multiplayer Arenas">
          <p>Fast-paced competitive modes with rich progression.</p>
        </Card>

        <Card title="Indie Originals">
          <p>Small teams, big ideas — experimental, polished experiences.</p>
        </Card>
      </section>
    </>
  )
}
