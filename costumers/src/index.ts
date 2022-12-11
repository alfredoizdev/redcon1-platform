import express,{Request,Response} from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import nast,{Message} from 'node-nats-streaming';

const stanClient = nast.connect('myshop','12456',{
	url: 'http://nats-service:4222'
});

stanClient.on('connect',() => {
	console.log('connected to NAST');

	stanClient.on('close',() => {
		console.log('connected to NAST is close');
		process.exit();
	})

	const option = stanClient
			.subscriptionOptions()
			.setManualAckMode(true);

	const subcription = stanClient.subscribe(
		'test:channel',
		'orders-queue-group',
		option
		);
	subcription.on('message',(msg:Message) => {
		const data = msg.getData();

		if(typeof data === 'string') {
			console.log('#',msg.getSequence(),'Message recived',JSON.parse(data))
		}

		msg.ack();
	})
});

const app = express();

app.use(cors());
app.use(json());


app.get('/api/costumers',(req:Request, res:Response) => {
	res.send({message: "COSTUMERS OK"})
})

app.listen(3000,() => {
	console.log('order costumers on 3000')
});

process.on('SIGINT', () => stanClient.close());
process.on('SIGTERM', () => stanClient.close());