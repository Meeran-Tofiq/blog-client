import { useState } from "react";
import TinyMCEEditor from "./TinyMCEEditor";
import useFetchWithAuth from "../api/fetch";

export default function CommentBox({ blogPostId, handleCommentUpdated }) {
	const [content, setContent] = useState("");
	const [isCreatingComment, setIsCreatingComment] = useState(false);
	const fetch = useFetchWithAuth();

	const toggleIsCreatingComment = () => {
		setIsCreatingComment(!isCreatingComment);
	};

	const handleCommentPost = async () => {
		const res = await fetch(
			`/blog-posts/${blogPostId}/comments`,
			{
				method: "POST",
				body: JSON.stringify({ content }),
			},
			true
		);
		if (res.ok) {
			handleCommentUpdated();
			toggleIsCreatingComment();
		}
	};

	return (
		<div className="comment-create-container">
			{isCreatingComment ? (
				<>
					<TinyMCEEditor onContentChanged={setContent} height={200} />
					<button type="submit" onClick={handleCommentPost}>
						Add comment
					</button>
					<button onClick={toggleIsCreatingComment}>Abort</button>
				</>
			) : (
				<button
					onClick={toggleIsCreatingComment}
					id="create-comment-button"
				>
					Create a comment
				</button>
			)}
		</div>
	);
}
