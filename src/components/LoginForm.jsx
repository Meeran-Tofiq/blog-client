import { useForm } from "react-hook-form";
import useFetchWithAuth from "../api/fetch";

export default function LoginForm({}) {
	const { register, handleSubmit } = useForm();
	const fetch = useFetchWithAuth();

	async function onSubmit(formData, event) {
		event.preventDefault();
		const res = await fetch("/users/login", {
			method: "POST",
			body: JSON.stringify(formData),
		});
		console.log(await res.json());
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend>Login Info</legend>

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
			</fieldset>

			<button type="submit">Log In</button>
		</form>
	);
}
