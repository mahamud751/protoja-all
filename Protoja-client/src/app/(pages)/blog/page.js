import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "Blog",
};
const BlogPage = () => {
  return (
    <div className="relative bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="container p-0 w-full bg-white shadow-lg rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/blog-imgae/blog-banner.jpg"
            alt="Color Psychology in Branding"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-[500px] p-6 bg-white bg-opacity-50 rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            COLOR PSYCHOLOGY
          </h1>
          <p className="text-center text-lg font-semibold text-yellow-500 mt-2">
            IN BRANDING
          </p>
        </div>
        <div className="p-6 bg-white bg-opacity-50 rounded-2xl mt-4">
          <p className="text-gray-700 text-center">
            Tools and trends change, but good design is timeless. Learn how to
            quickly develop an {`"eye" `} for design.
          </p>
          <div className="mt-6 flex justify-between items-center text-gray-600 text-sm border-t pt-4">
            <div className="flex items-center gap-2">
              <Image
                src="/author-image.jpg"
                width={24}
                height={24}
                className="rounded-full"
                alt="Author"
              />
              <span>Md Rafatul Islam</span>
            </div>
            <span>10 April 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
