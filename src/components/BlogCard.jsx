import BlogPost from "./BlogPost";

export default function BlogCard({ blogPost }) {
	return <BlogPost blogPost={blogPost} isBlogCard="true" />;
}
