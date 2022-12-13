import React, { useEffect, useState, FunctionComponent } from 'react';


const Home: FunctionComponent = () => {

	const [data, setData] = useState<any | null>(null);

	useEffect(() => {


		const fetchData = async () => {
			const res = await fetch('/api/login');
			const resData = await res.json();
			console.log(resData);
			setData(resData);
		}
		fetchData();
	}, []);



	return (
		<>
			<h2>Home page</h2>
			<h2>My app</h2>
			<p>App create microservices</p>
			{data !== null && <b>{data?.message}</b>}
		</>
	);
};


export default Home