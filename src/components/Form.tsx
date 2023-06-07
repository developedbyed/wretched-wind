import { useState } from "react"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Netlify will handle the form submission
  }

  return (
    <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea
          name="message"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
  )
}
