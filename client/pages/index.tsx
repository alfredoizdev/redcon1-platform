import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next'
import axiosClient from '../axios/axiosClient';


interface Props {
	data: any;
}


const Home: FunctionComponent<Props> = ({ data }) => {
	return (
		<>
			<h1>App microservice change</h1>
			<p>This data coming from service orders {data?.message}</p>
			<p>Also is amitted an message to using NAST Streaming Service</p>
		</>
	);
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {

	try {
		const { data } = await axiosClient(ctx)
			.get('/api/orders')
		return {
			props: {
				data
			}
		}
	} catch (error) {
		return {
			props: {
				data: null
			}
		}
	}
}

export default Home