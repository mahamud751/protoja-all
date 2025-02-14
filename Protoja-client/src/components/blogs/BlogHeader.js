import Image from 'next/image';


const BlogHeader = () => {
    return (
        <div className=" relative flex flex-col items-center justify-center p-4">
      <div className=" p-0 w-full bg-white shadow-lg rounded-2xl overflow-hidden relative">
        
        {/* Background Image */}
        <div className="absolute inset-0 bg-opacity-50 ">
          <Image
            src="/assets/blog-image/blog-banner.jpg"
            alt="Color Psychology in Branding"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content Block */}
        <div className="relative w-full p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 w-[350px] ">
            COLOR PSYCHOLOGY
          </h1>
          <p className="text-lg font-semibold bg-yellow-400 text-black px-4 rounded py-2 mt-2">
            IN BRANDING
          </p>
        </div>

        {/* Post Description */}
        <div className="p-6 rounded-2xl mt-4 shadow-md relative text-white ">
       
          
          <p className=" text-lg leading-relaxed mb-6 mt-20 ">
            Tools and trends change, but good design is timeless. Learn how to quickly develop an <strong>“eye”</strong> for design.
          </p>

          {/* Author and Date Information */}
          <div className="flex items-center gap-5 text-sm border-t pt-4">
            <div className="mt-4">
              <p>Written By</p>
             <div className='flex gap-2 items-center mt-2'>
             <Image
              src="/assets/blog-image/author.png"
              width={50}
              height={50}
     
              alt="Author"
            />
             <span>Md Rafatul Islam</span>
             </div>
            </div>
            <div className="">
            <p>Published on</p>
             <div className='flex gap-2 items-center mt-2'>
             <span>10 April 2024</span>
             </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default BlogHeader;