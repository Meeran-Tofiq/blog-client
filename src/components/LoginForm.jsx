import { useForm } from "react-hook-form";

export default function LoginForm({ postFormData }) {
	const { register, handleSubmit } = useForm();

	async function onSubmit(formData, event) {
		postFormData(formData, event, "/users/login");
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
				required
			/>

			<button type="submit">Log In</button>
		</form>
	);
}
