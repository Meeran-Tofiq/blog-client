import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function useGet() {
	/**
	 * Sends a get request to the specified url.
	 *
	 * @param {string} url - The url to send the request to.
	 * @returns {Promise} The promise, which if resolved, gives the server response.
	 */
	async function get(url) {
		const res = fetch(import.meta.env.VITE_API_URL + url);
		return res;
	}

	return get;
}

function usePost() {
	/**
	 * Sends a post request to the specified url.
	 *
	 * @param {string} url - The url to send the request to.
	 * @param {object} data - The data to be sent.
	 * @returns {Promise} The promise, which if resolved, gives the server response.
	 */
	async function post(url, data) {
		const res = await fetch(import.meta.env.VITE_API_URL + url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return res;
	}

	return post;
}

function usePostWithAuth() {
	const { token } = useContext(AuthContext);

	/**
	 * Fetches a resource with an Authorization header.
	 * If there is no authorization token, it will throw an error.
	 *
	 * @param {string} url - The url to send the request to.
	 * @param {object} data - The data to be sent.
	 * @param {Object} [options={}] - Additional fetch options.
	 * @returns {Promise<Object>} The response data as a JSON object.
	 * @throws Will throw an error if the request fails or if no token is available.
	 */
	async function postWithAuth(url, data, options = {}) {
		const headers = options.headers || {};
		// Check if token is available
		if (!token) {
			return Promise.reject(new Error("no auth token was available"));
		}

		const res = await fetch(import.meta.env.VITE_API_URL + url, {
			...options,
			headers: {
				...headers,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return res;
	}

	return postWithAuth;
}

export default function useFetch() {
	const get = useGet();
	const post = usePost();
	const postWithAuth = usePostWithAuth();

	return {
		get,
		post,
		postWithAuth,
	};
}
