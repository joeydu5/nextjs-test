import React from "react";
import Link from "next/link";

function BlogPage() {
  return (
    <div>
      Blog Page
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </div>
  );
}

export default BlogPage;
