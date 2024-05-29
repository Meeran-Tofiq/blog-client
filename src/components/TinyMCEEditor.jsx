import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCEEditor({ initialContent, onContentChanged }) {
	const [content, setContent] = useState(initialContent);

	const handleEditorChange = (content) => {
		setContent(content);
		onContentChanged(content);
	};

	return (
		<div>
			<Editor
				apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
				initialValue={`<p>${initialContent}</p>`}
				init={{
					height: 500,
					menubar: false,
					plugins: [
						"advlist autolink lists link image charmap print preview anchor",
						"searchreplace visualblocks code fullscreen",
						"insertdatetime media table paste code help wordcount",
					],
					toolbar:
						"undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
				}}
				value={content}
				onEditorChange={handleEditorChange}
			/>
		</div>
	);
}
