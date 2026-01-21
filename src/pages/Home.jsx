import React from 'react'
import Card from '../components/ui/Card'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>FreakFire — Games That Ignite</h1>
        <p>We build immersive worlds and bold gameplay for players everywhere.</p>
        <a className="cta" href="/contact">Work with us</a>
      </section>

      <section id="games" className="cards">
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
