import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return <img src="./images/Book1.webp" alt="Power of Chemistry" />
}

const Title = () => <h2>Power of Chemistry </h2>
const Author = () => {
  return <h4>John Delta</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
