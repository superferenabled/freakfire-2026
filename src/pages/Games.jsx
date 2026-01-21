import React from 'react'

export default function Games() {
  return (
    <section className="about">
      <h2>Our Games</h2>
      <p>We ship across multiple genres. Highlights:</p>
      <div className="cards">
        <article className="card">
          <h3>Emberfall</h3>
          <p>Action-RPG with tactical party combat.</p>
        </article>
        <article className="card">
          <h3>Pyro Clash</h3>
          <p>Competitive arena shooter with modular classes.</p>
        </article>
        <article className="card">
          <h3>Glint</h3>
          <p>Experimental narrative puzzler.</p>
        </article>
      </div>
    </section>
  )
}
