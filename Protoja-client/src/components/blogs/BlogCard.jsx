
import Image from 'next/image';

import { MdArrowOutward } from "react-icons/md";

// Array of blog data
const blogData = [
  {
    id: 1,
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    image: '/assets/blog-image/Image2.jpg', // Image for card
    author: 'Md Rafatul Islam',
    date: '20 Jan 2024',
  },
  {
    id: 2,
    title: 'Nature and Wildlife',
    description:
      'Nature has always been an essential part of human life. It helps in maintaining ecological balance.',
    image: '/assets/blog-image/Image2.jpg', // Image for card
    author: 'Jane Doe',
    date: '15 Feb 2024',
  },
  {
    id: 3,
    title: 'Tech Innovations',
    description:
      'Tech innovations continue to disrupt industries, changing the way we live, work, and interact with the world.',
    image: '/assets/blog-image/Image2.jpg', // Image for card
    author: 'John Smith',
    date: '18 Mar 2024',
  },
];

export default function BlogCard() {
  return (
   <>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {blogData.map((card) => (
        <div key={card.id} className=" rounded-lg overflow-hidden shadow-lg bg-white">
          {/* Image with Next.js Image component */}
          <div className="relative w-full h-48">
            <Image
              src={card.image}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          {/* Content */}
          <div className="p-3">
         <div className='flex justify-between'>
         <h2 className="text-2xl font-semibold text-gray-800">{card.title}</h2>
         <MdArrowOutward size={20} className='text-black'/>
         </div>
            <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
          </div>

       

          {/* Author and Date */}
          <div className="p-3 text-gray-600 text-xs  border-gray-200">
            <div className="">
              <span>{card.author}</span>
       
            </div>
            <div className="">
        
              <span>{card.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

   </>
  );
}
