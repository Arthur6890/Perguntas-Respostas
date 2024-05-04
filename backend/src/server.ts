import express, { Request, Response } from 'express';
const app = express();

app.get("/questions", (req: Request, res: Response) => {
	res.send("Bem vindo à minha primeira API!");
});

app.post("/questions", (req: Request, res: Response) => {
	res.status(200).json({ data: "deucerto" });
})

app.listen(8080, () => {
	console.log("Server running on port 8080");
});

