const express = require('express');
const issuesRoutes = require('./routes/issuesRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// استخدام ملف المسارات
app.use('/api/issues', issuesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

