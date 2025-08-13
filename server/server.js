// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './configs/mongodb.js'
// import { clerkWebhooks } from './controllers/Webhooks.js'

// // initialize Express
// const app = express();

// // Connect to database
// await connectDB();

// // Middlewares
// app.use(cors());

// // Routes
// app.get('/', (req, res) => {
//     res.send("API Working...")
// });

// app.post('/clerk', express.json(), clerkWebhooks);

// // Port
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/Webhooks.js'

const app = express();

await connectDB();

app.use(cors());

// IMPORTANT: use raw body for Clerk webhooks
app.post('/clerk', express.raw({ type: 'application/json' }), clerkWebhooks);

app.get('/', (req, res) => {
    res.send("API Working...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
