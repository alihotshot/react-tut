import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const firstBook = {
  img: './images/Book1.webp',
  title: 'Power of Chemistry',
  author: 'John Delta',
}

const secondBook = {
  img: './images/Book2.webp',
  title: 'Atomic Habit',
  author: 'Elon Musk',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Think differently and find the courage to challenge the status quo
          with this mindset-shifting guide here.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

// Call properties as a special props & children props
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src='{img}' alt='{title}' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

// Access properties without dot in Props

// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
