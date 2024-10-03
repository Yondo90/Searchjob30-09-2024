import express ,{Express} from "express"


const app:Express = express();
const PORT = 5003;

app.use(express.json());

app.listen(PORT, () =>{console.log("SERVER RUNNING")});

