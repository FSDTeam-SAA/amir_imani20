import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Blog } from "@/lib/types/blog";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  // Format date using Intl.DateTimeFormat
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group flex flex-col gap-4 ">
      {/* Image Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl bg-gray-100">
        {blog.img ? (
          <img
            src={blog.img}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-purple-600">
          {formattedDate}
        </span>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <Link href={`/blogs/${blog._id}`}>
            <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <p className="text-gray-600 line-clamp-3">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
