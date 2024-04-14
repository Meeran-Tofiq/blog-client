import { DateTime } from "luxon";

export default function BlogCard({ blogPost }) {
	const { title, user, content, date: dateString } = blogPost;
	const author = user.username;
	const date = new Date(dateString);
	const dateFormatted = DateTime.fromJSDate(date).toLocaleString(
		DateTime.DATETIME_MED
	);

	return (
		<article>
			<header>
				<h2>{title}</h2>
				<aside>
					<h4>{author}</h4>
					<h4>{dateFormatted}</h4>
				</aside>
			</header>
			<main>
				<p className="truncate">{content}</p>
			</main>
		</article>
	);
}
