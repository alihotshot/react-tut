import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const books = [
  {
    img: './images/Book1.webp',
    title: 'Power of Chemistry',
    author: 'John Delta',
  },
  {
    img: './images/Book2.webp',
    title: 'Atomic Habit',
    author: 'Elon Musk',
  },
]

const names = ['Book1', 'Book2']

const BookList = () => {
  return (
    <section className="booklist">
      {names.map((items) => {
        return <h2>items</h2>
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
