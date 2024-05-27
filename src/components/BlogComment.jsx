import { DateTime } from "luxon";

export default function BlogComment(comment) {
	const { user, content, date: dateString } = blogPost;
	const author = user.username;
	const date = new Date(dateString);
	const dateFormatted = DateTime.fromJSDate(date).toLocaleString(
		DateTime.DATETIME_MED
	);

	return (
		<article className="blogComment">
			<header className="commentHeader">
				<h4>{author}</h4>
				<h4>{dateFormatted}</h4>
			</header>
			<main className="commentContent">
				<p>{content}</p>
			</main>
		</article>
	);
}
