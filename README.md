# Issue Tracker API

خدمة Backend خفيفة لإدارة وتتبع المشكلات (Issues)، تم بناؤها باستخدام Node.js و Express باتباع مبادئ الـ Clean Code ومعايير RESTful API.


## 1. فكرة الخدمة
تتيح الخدمة للأنظمة والتطبيقات إدارة المشكلات وتتبعها عبر مسارات برمجية خفيفة وسريعة، وتعتمد في تخزين البيانات مؤقتاً على الذاكرة مع التحقق من صحة المدخلات (Validation) وإرجاع الردود بصيغة JSON.


## 2. كيفية تشغيل الخدمة محلياً (Local Setup)

1.	تثبيت الحزم والمكتبات:
Npm install

2.	تشغيل الخادم:
Node server.js

*يعمل السيرفر افتراضياً على الرابط: 
http://localhost:3000*


## 3. كيفية استخدام الـ API (API Endpoints)

### أ. جلب جميع المشكلات
* المسار: GET /api/issues
* رمز الحالة: 200 OK
* الرد (Response):
{
  "success": true,
  "data": [
    { "id": 1, "title": "First Issue", "status": "open" }
  ]
}

### ب. إضافة مشكلة جديدة
* المسار: POST /api/issues
* رمز الحالة: 201 Created
* جسم الطلب (Request Body):
{
  "title": "Fix login bug"
}

* في حال إرسال عنوان فارغ (Validation Error):
  * رمز الحالة: 400 Bad Request
  * الرد:
{
  "success": false,
  "message": "Title is required"
}


## 4. كيفية تشغيلها باستخدام Docker

1.	بناء الصورة (Build Image):
Docker build -t issue-tracker-api .

2.	تشغيل الحاوية (Run Container):
Docker run -p 3000:3000 Issue-tracker-api


