import React, { useState } from 'react'

export const ThoughtInput = () => {
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [thougth, setThought] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGES_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: thougth })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <section className='input-thought'>
      <form onSubmit={handleSubmit}>
        <p>
          What is making you happy right now?
        </p>
        <textarea
          rows='2'
          type='text'
          onChange={event => setThought(event.target.value)}
          className='form-text'>
        </textarea>
        <button
          className='form-button'
          type='submit'
          onClick={handleSubmit}
        // disabled={thought.length < 5 || thought.length > 140}
        // thought.length  or message.length?
        >
          ❤️ Send Thought ❤️
        </button>
      </form>
      {/* <p>{thought.length} / 140</p> */}
    </section>
  )


}