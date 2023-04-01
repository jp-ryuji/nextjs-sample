import Head from 'next/head'
import { Inter } from 'next/font/google'

import { useState } from 'react'
import { Book, Review } from '../mocks/types'

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Next Sample</title>
//         <meta name="description" content="next sample" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <h1>Next Sample</h1>
//       </main>
//     </>
//   )
// }

type Props = {
  book: Book
}

export default function Home({ book }: Props) {
  const [reviews, setReviews] = useState<Review[] | null>(null)

  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    fetch('/reviews')
      .then((res) => res.json())
      .then(setReviews)
  }

  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.ts`.
  const res = await fetch('https://my.backend/book')
  const book = await res.json()

  return {
    props: {
      book,
    },
  }
}
