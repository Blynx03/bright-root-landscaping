import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';
import estimateRoutes from './routes/estimateRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
}));

app.use(express.json());

app.get('/api/health', (_req, res) => {
    res.status(200).json({ message: 'BrightRoot API is running' });
});

app.use('/api/contact', contactRoutes);
app.use('/api/estimate', estimateRoutes);

app.post('/api/contact', (_req, res) => {
    res.status(200).json({ message: 'Contact details successfully received. One of our service representatives will contact you as soon as possible.'})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});