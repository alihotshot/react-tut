import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg"
    alt="I Will Teach You to Be Rich"
  />
)
const Title = () => <h2>I Will Teach You to Be Rich</h2>
const Author = () => {
  return <h4>Ramit Sethi</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
