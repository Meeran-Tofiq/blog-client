import { useForm } from "react-hook-form";

export default function SignUpForm({ postFormData }) {
	const { register, handleSubmit } = useForm();

	async function onSubmit(formData, event) {
		const res = await postFormData(formData, event, "/users");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend>User Info</legend>
				<label htmlFor="username">Username: </label>
				<input
					type="text"
					id="username"
					{...register("username", { required: true })}
				/>
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					id="password"
					{...register("password", { required: true })}
				/>
				<label htmlFor="passwordConfirmation">Confirm Password: </label>
				<input
					type="password"
					id="passwordConfirmation"
					{...register("passwordConfirmation", { required: true })}
				/>
			</fieldset>

			<fieldset>
				<legend>Do you want to post, or just leave comments?</legend>

				<input
					type="radio"
					id="userCannotPost"
					value={false}
					{...register("canPost", { required: true })}
				/>
				<label htmlFor="userCannotPost">I only want to comment</label>

				<input
					type="radio"
					id="userCanPost"
					value={true}
					{...register("canPost", { required: true })}
				/>
				<label htmlFor="userCanPost">
					I want to comment and post too!
				</label>
			</fieldset>

			<button type="submit">Log In</button>
		</form>
	);
}
