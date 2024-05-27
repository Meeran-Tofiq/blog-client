import { useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import BlogCard from "./BlogCard";

export default function Homepage({ fetch }) {
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await fetch("/blog-posts");
				if (!res.ok) {
					throw new Error("Failed to fetch blog posts");
				}
				const json = await res.json();
				setBlogPosts(json.data);
			} catch (error) {
				console.error("Error fetching blog posts: ", error);
			}
		};

		fetchBlogs();
	}, [fetch]);

	return (
		<>
			<HeroImage imageUrl={"/images/heroImage.jpg"}>
				<h1>HEAR THE VOICE OF THE WORLD</h1>
			</HeroImage>

			<ol className="blogPostList">
				{blogPosts.map((blogPost) => (
					<li key={blogPost._id}>
						<BlogCard blogPost={blogPost}></BlogCard>
					</li>
				))}
			</ol>
		</>
	);
}
