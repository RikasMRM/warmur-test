import React from "react";
import { getPost } from "@/app/ghost-config";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("params", params);
  console.log("params.slug", params.slug);
  const post = await getPost(params.slug);
  console.log("post", post);
  return <div>{post?.title}</div>;
}
