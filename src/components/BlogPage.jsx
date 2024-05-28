import { useEffect, useState } from "react";
import BlogComment from "./BlogComment";
import BlogPost from "./BlogPost";
import { useLocation } from "react-router-dom";

export default function BlogPage({ fetch }) {
	const location = useLocation();
	const { blogPost } = location.state;
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchBlogComments = async () => {
			try {
				const res = await fetch(`/blog-posts/${blogPost._id}/comments`);
				if (!res.ok)
					throw new Error("Failed to fetch comments for this post");

				const json = await res.json();
				setComments(json.data);
			} catch (error) {
				console.error("Error fetching blog posts: ", error);
			}
		};

		fetchBlogComments();
	}, []);

	return (
		<>
			<BlogPost blogPost={blogPost} />

			<div className="blog-comments-container">
				<h2>Comments</h2>
				<ol className="blog-comments">
					{comments.map((comment) => {
						return (
							<li key={comment._id}>
								<BlogComment comment={comment} />
							</li>
						);
					})}
				</ol>
			</div>
		</>
	);
}
