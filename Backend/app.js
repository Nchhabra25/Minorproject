const express=require("express")
const app= express()
const router=require("./router/auth-router");
const connectdb=require("./utils/db")
const cors=require("cors")

const options={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, PATCH, HEAD",
    credentials:true
}
app.use(cors(options))

app.use(express.json());
app.use("/", router);

const port=3000

connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    });
}).catch((err) => {
    console.error('Failed to connect to the database:', err);
});