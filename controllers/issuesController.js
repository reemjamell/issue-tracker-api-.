// مصفوفة تجريبية للبيانات
let issues = [
  { id: 1, title: 'First Issue', status: 'open' }
];

// دالة جلب المشكلات
const getAllIssues = (req, res) => {
res.status(200).json({
    Success: true,
    Data: issues
  });
};

// دالة إنشاء مشكلة جديدة
const createIssue = (req, res) => {
  const { title } = req.body;

  // التحقق من المدخلات (Validation)
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Title is required'
    });
  }

  const newIssue = {
    id: issues.length + 1,
    title: title.trim(),
    status: 'open'
  };

  issues.push(newIssue);

  res.status(201).json({
    success: true,
    data: newIssue
  });
};

module.exports = {
  getAllIssues,
  createIssue
};
