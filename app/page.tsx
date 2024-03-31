import Book from '@/components/book';
import { BASE_URL } from '@/index';

async function getAllBestSellers() {
  const response = await fetch(`${BASE_URL}/lists`);
  const data: ListResponse = await response.json();

  return data.results;
}

export default async function Home() {
  const bestSellers = await getAllBestSellers();

  return (
    <div className='flex flex-row flex-wrap gap-10 p-10'>
      {bestSellers?.map((book) => {
        return <Book key={`key-${book.display_name}`} book={book}></Book>;
      })}
    </div>
  );
}
