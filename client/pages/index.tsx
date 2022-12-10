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


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


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