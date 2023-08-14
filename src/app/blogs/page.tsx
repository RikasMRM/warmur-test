import React from "react";
import SectionHeading from "@/components/section-heading";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href="/" className="cursor-pointer items-left">
        <FaArrowLeft size={20} />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <SectionHeading>Blogs</SectionHeading>
      </div>
    </>
  );
}

// import React from "react";
// import SectionHeading from "@/components/section-heading";
// import { getPosts } from "@/app/api/ghost-config";
// import Image from "next/image";
// import { FaArrowLeft } from "react-icons/fa";
// import Link from "next/link";

// export default async function Home() {
//   const posts = await getPosts();
//   return (
//     <>
//       <Link href="/" className="cursor-pointer items-left">
//         <FaArrowLeft size={20} />
//       </Link>
//       <div className="flex flex-col items-center justify-center h-screen">
//         <SectionHeading>Blogs</SectionHeading>

//         {posts &&
//           posts.map((post: any) => (
//             <React.Fragment key={post.id}>
//               <Link href={`/blogs/${post.slug}`}>
//                 <section className="scroll-mt-8 mb-6 bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
//                   <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
//                     <h3 className="text-2xl font-semibold">{post?.title}</h3>
//                     <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
//                       <div dangerouslySetInnerHTML={{ __html: post.html }} />
//                     </p>
//                     <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//                       <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
//                         Published by: {post?.authors[0]?.name}
//                       </li>
//                     </ul>
//                   </div>
//                   <Image
//                     width={500}
//                     height={500}
//                     src={post?.feature_image}
//                     alt="feature image"
//                     className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
//                 transition
//                 group-hover:scale-[1.04]
//                 group-hover:-translate-x-3
//                 group-hover:translate-y-3
//                 group-hover:-rotate-2
//                 group-even:group-hover:translate-x-3
//                 group-even:group-hover:translate-y-3
//                 group-even:group-hover:rotate-2
//                 group-even:right-[initial] group-even:-left-40"
//                   ></Image>
//                 </section>
//               </Link>
//             </React.Fragment>
//           ))}
//       </div>
//     </>
//   );
// }
