"use client";

import { useBlog } from "@/hooks/use-blogs";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const BlogDetailsPage = () => {
  const { id } = useParams() as { id: string };
  const { data, isLoading, error } = useBlog(id);

  if (isLoading) {
    return (
      <div className="flex bg-white h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
      </div>
    );
  }

  if (error || !data?.success) {
    return (
      <div className="flex bg-white h-screen w-full flex-col items-center justify-center gap-4">
        <p className="text-red-500">Error loading blog details.</p>
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-purple-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blogs
        </Link>
      </div>
    );
  }

  const blog = data.data;
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white pt-40 pb-12 ">
      <article className="container mx-auto max-w-4xl px-4">
        {/* Navigation */}
        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-purple-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        {/* Header */}
        <header className="mb-8 flex flex-col gap-4">
          <time className="text-sm font-medium text-purple-600">
            {formattedDate}
          </time>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
        </header>

        {/* Hero Image */}
        {blog.img && (
          <div className="mb-10 aspect-video w-full overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={blog.img}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-purple max-w-none text-gray-600">
          {blog.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetailsPage;
