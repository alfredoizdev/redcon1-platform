import express,{Request,Response} from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());
app.get('/api/login',(req:Request, res:Response) => {
	res.send({message: "AUTH OK"})
})

app.listen(3000,() => {
	console.log('auth service on 3000')
})