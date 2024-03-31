import Link from 'next/link';

interface Props {
  book: BestSellers;
}

export default async function Book({ book }: Props) {
  return (
    <Link
      href={`/lists/${book.list_name_encoded}`}
      className='border border-black rounded-lg px-2 py-4 cursor-pointer'
    >
      {book.display_name}
    </Link>
  );
}
