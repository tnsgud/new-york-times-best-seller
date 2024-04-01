'use client';
import { BASE_URL } from '@/index';
import Link from 'next/link';
import { useParams } from 'next/navigation';

async function getBooks(id: string) {
  const response = await fetch(`${BASE_URL}/list?name=${id}`);
  const data: ListResponseOfName = await response.json();

  return data.results.books;
}

export default async function Page() {
  const { id } = useParams<{ id: string }>();
  const books = await getBooks(id);

  return (
    <div className='flex flex-wrap gap-10'>
      {books.map((book) => {
        return (
          <Link
            key={`key-${book.title}`}
            className='text-center text-wrap'
            href={book.buy_links[0].url}
          >
            <img className='w-40 h-60' src={book.book_image} />
            {book.title}
          </Link>
        );
      })}
    </div>
  );
}
