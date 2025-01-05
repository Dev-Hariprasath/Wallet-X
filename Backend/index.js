const express = require('express');
require('dotenv').config();
const sequelize = require('./config/db'); // Correct import
const accountRouter = require('./routes/account');

const app = express();
app.use(express.json());

app.use('/account', accountRouter);

sequelize.sync().then(() => {
    console.log('✅ Database synchronized');
    app.listen(process.env.PORT || 3000, () => {
        console.log(`✅ Server running on port ${process.env.PORT || 3000}`);
    });
}).catch(err => {
    console.error('❌ Failed to synchronize database:', err);
});
