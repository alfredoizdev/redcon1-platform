import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next'
import axiosClient from '../axios/axiosClient';


interface Props {
	data: any;
}


const Costumers: FunctionComponent<Props> = ({ data }) => {
	return (
		<>
			<h1>App microservice</h1>
			<p>This data coming from service Costumers <b>{data?.message}</b></p>
			<p>Also is recived an message from Orders service using NAST Streaming Service</p>
		</>
	);
};


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async (ctx) => {

	try {
		const { data } = await axiosClient(ctx)
			.get('/api/costumers')
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

export default Costumers