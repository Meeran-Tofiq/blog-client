import { DateTime } from "luxon";

export default function BlogCard({ blogPost }) {
	const { title, author, date: dateString } = blogPost;
	const date = new Date(dateString);
	const dateFormatted = DateTime.fromJSDate(date).toLocaleString(
		DateTime.DATETIME_MED
	);

	return (
		<article>
			<header>
				<h2>{title}</h2>
			</header>
			<aside>
				<h4>{author}</h4>
				<h4>{dateFormatted}</h4>
			</aside>
		</article>
	);
}
