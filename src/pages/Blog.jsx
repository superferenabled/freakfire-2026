import React from 'react'
import Card from '../components/ui/Card'

const posts = [
  { id: 1, title: 'FreakFire: Our Vision', excerpt: 'A quick look at what drives our team.' },
  { id: 2, title: 'Devlog — Emberfall', excerpt: 'Behind the scenes on our action-RPG.' },
]

export default function Blog() {
  return (
    <section className="about">
      <h2>Blog</h2>
      <div className="cards">
        {posts.map((p) => (
          <Card key={p.id} title={p.title}>
            <p>{p.excerpt}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
