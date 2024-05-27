import { DateTime } from "luxon";

export default function BlogPost({ blogPost, isBlogCard }) {
	const { title, user, content, date: dateString } = blogPost;
	const author = user.username;
	const date = new Date(dateString);
	const dateFormatted = DateTime.fromJSDate(date).toLocaleString(
		DateTime.DATETIME_MED
	);

	return (
		<article className={isBlogCard ? "blogCard" : "blogPost"}>
			<header className="blogHeader">
				<h2>{title}</h2>
				<aside>
					<h4>{author}</h4>
					<h4>{dateFormatted}</h4>
				</aside>
			</header>
			<main className="blogContent">
				<p className={isBlogCard ? "truncate" : ""}>{content}</p>
			</main>
		</article>
	);
}
