# 🩺 Medical Appointment Viewer

A full-stack web application to view and manage medical appointments, with filtering options, doctor listing, and more.

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion  
- **Backend:** Django, Django REST Framework, PostgreSQL  
- **Deployment:** Vercel (frontend), Render (backend)  
- **Editor Used:** [Cursor Code Editor](https://www.cursor.sh)

---

## 🔧 Setup Instructions

### 🚀 Frontend (React)

> Located in: `appointment-frontend/`

#### 1. Navigate to the frontend folder:
```bash
cd appointment-frontend
```

#### 2. Install dependencies:
```bash
npm install
```

#### 3. Create a `.env` file and add your backend API base URL:
```env
BACKEND_URL= https://appointment-backend-n3zk.onrender.com
```

#### 4. Start the development server:
```bash
npm run dev
```

#### 5. Access the frontend:
```env
FRONTEND_URL= [https://medical-appointment-viewer.vercel.app/](https://medical-appointment-viewe-siddheshneharkar70-gmailcoms-projects.vercel.app/)
---
```
### 🛠️ Backend (Django + PostgreSQL):

> Located in: `appointment-backend/`

#### 1. Navigate to the backend folder:
```bash
cd appointment-backend
```

#### 2. Create and activate a virtual environment:
```bash
python -m venv env
# For Windows:
env\Scripts\activate
# For Mac/Linux:
source env/bin/activate
```

#### 3. Install dependencies:
```bash
pip install -r requirements.txt
```

#### 4. Set up PostgreSQL database:
Make sure PostgreSQL is installed and running. Then create a database.

#### 5. Configure `.env` or `settings.py` with database credentials:
Example `.env`:
```env
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
```

#### 6. Run migrations and start the server:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

#### 7. Access the backend:
Visit https://appointment-backend-n3zk.onrender.com

---

## 🧪 API Endpoints (Sample)

- `GET /api/doctors/` → List all doctors  
- `POST /api/appointments/` → Create appointment  
- `GET /api/appointments/` → List appointments  
- `GET /api/appointments/?date=2024-01-01` → Filter appointments by date

---

## 🌐 Deployment

### ✅ Frontend on Vercel
- Automatically deploys on push to `main` branch

### ✅ Backend on Railway/Render
- Add environment variables in Render dashboard
- Make sure CORS is enabled to allow frontend requests

---

## 📸 Screenshots

## 📸 Screenshots

![Doctor Banner](https://drive.google.com/uc?export=view&id=1AtiJB7Rf6-WFxCSfo3zyJbLmQwHMJ4_a)




---

## 🙋‍♂️ Author

**Siddhesh Neharkar**  
React & Full Stack Developer  
🔗 [LinkedIn](https://linkedin.com/in/siddheshneharkar)

---

## 📄 License

This project is licensed under the **MIT License**.

---

_Last updated: 2025-06-09_
