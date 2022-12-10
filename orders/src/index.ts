import express,{Request,Response} from 'express';
import { json } from 'body-parser';
import nast from 'node-nats-streaming';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

const stanClient = nast.connect('myshop','abc',{
	url: 'http://nats-service:4222'
});

stanClient.on('connect',() => {
	console.log('connected to NAST');


	const data = JSON.stringify({
		id: '123',
		title: 'some title',
		price: 20
	});

	app.get('/api/orders',(req:Request, res:Response) => {
		res.json({message: "ORDERS OK"});
		console.log("sending messages");
		stanClient.publish('test:channel',data);
	})
	
	
	

});


app.listen(3000,() => {
	console.log('order service on 3002')
})