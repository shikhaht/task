// app.js
const express = require('express');
const app = express();
const signupRoutes = require('./routes/signupRoutes');

app.use(express.json());
app.use('/api', signupRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
