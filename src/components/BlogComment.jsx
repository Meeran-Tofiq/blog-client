import { DateTime } from "luxon";
import { useContext, useState } from "react";
import TinyMCEEditor from "./TinyMCEEditor";
import useFetchWithAuth from "../api/fetch";
import AuthContext from "../context/AuthContext";

export default function BlogComment({ comment, onCommentUpdated }) {
	const { user } = useContext(AuthContext);
	const [edit, setEdit] = useState(false);
	const [newContent, setNewContent] = useState();
	const fetch = useFetchWithAuth();

	const { user: commentUser, content, date: dateString } = comment;
	const author = commentUser.username;
	const date = new Date(dateString);
	const dateFormatted = DateTime.fromJSDate(date).toLocaleString(
		DateTime.DATETIME_MED
	);

	const onContentChanged = (content) => {
		setNewContent(content);
	};

	const handleCommentUpdate = async (event) => {
		event.preventDefault();

		setEdit(false);
		const res = await fetch(
			`/blog-posts/${comment.blogPost}/comments/${comment._id}`,
			{
				method: "PUT",
				body: JSON.stringify({ content: newContent }),
			},
			true
		);
		onCommentUpdated();
	};

	const handleCommentDelete = async (event) => {
		event.preventDefault();

		setEdit(false);
		const res = await fetch(
			`/blog-posts/${comment.blogPost}/comments/${comment._id}`,
			{
				method: "DELETE",
			},
			true
		);
		onCommentUpdated();
	};

	return (
		<article className="blog-comment">
			<header className="comment-header">
				<h4>{author}</h4>
				<h4>{dateFormatted}</h4>
			</header>
			<main className="commentContent">
				<p>{content}</p>
			</main>
			{commentUser.username === user?.username ? (
				<div className="editor-container">
					<button
						className="comment-control-button"
						onClick={() => setEdit(!edit)}
					>
						Edit
					</button>
					<button
						className="comment-control-button"
						onClick={handleCommentDelete}
					>
						Delete
					</button>
					{edit ? (
						<>
							<TinyMCEEditor
								initialContent={content}
								onContentChanged={onContentChanged}
							/>
							<button type="submit" onClick={handleCommentUpdate}>
								Submit
							</button>
						</>
					) : null}
				</div>
			) : null}
		</article>
	);
}
