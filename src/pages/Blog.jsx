import React from 'react'

const posts = [
  { id: 1, title: 'FreakFire: Our Vision', excerpt: 'A quick look at what drives our team.' },
  { id: 2, title: 'Devlog — Emberfall', excerpt: 'Behind the scenes on our action-RPG.' },
]

export default function Blog() {
  return (
    <section className="about">
      <h2>Blog</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
