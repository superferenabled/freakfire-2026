import React from 'react'

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>FreakFire — Games That Ignite</h1>
        <p>We build immersive worlds and bold gameplay for players everywhere.</p>
        <a className="cta" href="/contact">Work with us</a>
      </section>

      <section id="games" className="cards">
        <article className="card">
          <h3>Action RPGs</h3>
          <p>Deep systems, visceral combat, memorable characters.</p>
        </article>
        <article className="card">
          <h3>Multiplayer Arenas</h3>
          <p>Fast-paced competitive modes with rich progression.</p>
        </article>
        <article className="card">
          <h3>Indie Originals</h3>
          <p>Small teams, big ideas — experimental, polished experiences.</p>
        </article>
      </section>
    </>
  )
}
