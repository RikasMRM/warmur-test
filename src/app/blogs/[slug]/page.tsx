import React from "react";
import { getPost } from "@/app/api/ghost-config";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const post: any = await getPost(params.slug);

  const createdAt = new Date(post?.created_at);
  const formattedCreatedAt = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  console.log("post", post);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        width={500}
        height={500}
        src={post?.feature_image}
        alt="feature image"
        className=""
      ></Image>
      <div className="px-20 text">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <h3 className="text-2xl mt-5 font-semibold">{post?.title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
            Published at: {formattedCreatedAt}
          </li>
        </ul>
      </p>
      </div>
    </div>
  );
}
