# CloudFire Project

This project is divided into a frontend and a backend.

## Structure

- `/frontend`: React application built with Vite and Tailwind CSS.
- `/backend`: FastAPI application built with Python.

## Getting Started

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. (Optional) Activate the virtual environment:
   ```bash
   .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the FastAPI server:
   ```bash
   python main.py
   ```
   Or using uvicorn directly:
   ```bash
   uvicorn main:app --reload
   ```

The backend will be available at `http://localhost:8000`.
The interactive API documentation will be at `http://localhost:8000/docs`.
