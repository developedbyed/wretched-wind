import { useState } from "react"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div>
      <h1 className="text-center text-xl">Get in touch ✨</h1>
      <form
        className="flex flex-col items-center gap-12 py-24"
        name="contact"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label> <br />
          <input
            className="w-64 bg-gray-200 px-4 py-2"
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
            className="w-64 bg-gray-200 px-4 py-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea
            className="w-64 bg-gray-200 px-4 py-2"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </p>
        <p className="rounded-md bg-primary px-4 py-2 font-bold text-white">
          <input type="submit" value="Submit message" />
        </p>
      </form>
    </div>
  )
}
