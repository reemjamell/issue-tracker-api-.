const express = require('express');
const app = express();
const PORT = 3000;

// لقراءة بيانات الـ JSON في الطلبات القادمة
app.use(express.json());

// مصفوفة تجريبية لتخزين المشكلات (Issues)
let issues = [
  { id: 1, title: 'First Issue', status: 'open' }
];

// 1. مسار جلب جميع المشكلات (GET)
app.get('/api/Issues', (req, res) => {
  res.status(200).json({
    success: true,
    data: issues
  });
});

// 2. مسار إضافة مشكلة جديدة (POST) مع التحقق من المدخلات (Validation)
app.post('/api/issues', (req, res) => {
  const { title } = req.body;

  // التحقق من وجود العنوان
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Title is required'
    });
  }

  const newIssue = {
    id: issues.length + 1,
    title: title.trim(),
    Status: 'open'
  };

  issues.push(newIssue);

  // الرد برمز النجاح 201
  res.status(201).json({
    Success: true,
    Data: newIssue
  });
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
