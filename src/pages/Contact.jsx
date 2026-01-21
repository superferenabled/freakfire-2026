import React from 'react'

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>
        For business inquiries, email us at{' '}
        <a href="mailto:hello@freakfire.games">hello@freakfire.games</a>
      </p>
      <p>Or fill in the short form below (placeholder):</p>
      <form>
        <label>
          Name
          <br />
          <input name="name" type="text" />
        </label>
        <br />
        <label>
          Email
          <br />
          <input name="email" type="email" />
        </label>
        <br />
        <label>
          Message
          <br />
          <textarea name="message" rows={4} />
        </label>
        <br />
        <button type="button">Send</button>
      </form>
    </section>
  )
}
