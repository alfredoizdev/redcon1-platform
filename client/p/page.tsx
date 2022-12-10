import React from "react";
import axiosClient from "../axios/axiosClient";

async function getData() {
	try {
		const res = await fetch(
			'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/orders',
			{ cache: 'no-store' }
		);
		// The return value is *not* serialized
		// You can return Date, Map, Set, etc.

		return res.json();

	} catch (error) {
		console.log(error)
		return null;
	}
}


export default async function Page(ctx) {
	console.log(ctx);
	const data = await getData();

	return <>
		{data ? <h1>This data to show {data.message}</h1> : <h1>No Data Found</h1>}
	</>;
}