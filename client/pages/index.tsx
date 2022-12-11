import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next'
import axiosClient from '../axios/axiosClient';


interface Props {
	data: any;
}


const Home: FunctionComponent<Props> = ({ data }) => {
	return (
		<><h1>The data {data?.message}</h1></>
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