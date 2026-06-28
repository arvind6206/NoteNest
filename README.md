# 📝 NoteNest

A secure and feature-rich Notes Management Backend built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **JWT Authentication**, and **Bcrypt**.

Users can securely create and manage their personal notes with authentication and features like pinning, archiving, trashing, and restoring notes.

---

## 🚀 Features

### Authentication
- User Signup
- User Login
- Password Hashing using Bcrypt
- JWT Authentication
- Protected Routes

### Notes
- Create Note
- Update Note
- Delete Note
- Pin Note
- Archive Note
- Trash Note
- Restore Note

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## 📁 Project Structure

```
NoteNest/
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── user.model.js
│   └── note.model.js
│
├── routes/
│   └── user.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/arvind6206/NoteNest.git
```

Go inside the project

```bash
cd NoteNest
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Start the server

```bash
npm run dev
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/user/signup` | Register User |
| POST | `/api/v1/user/signin` | Login User |

---

### Notes

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/user/create` | Create Note |
| PUT | `/api/v1/user/note/:id` | Update Note |
| DELETE | `/api/v1/user/note/:id` | Delete Note |
| PATCH | `/api/v1/user/note/:id/pin` | Pin Note |
| PATCH | `/api/v1/user/note/:id/archive` | Archive Note |
| PATCH | `/api/v1/user/note/:id/trash` | Move Note to Trash |
| PATCH | `/api/v1/user/note/:id/restore` | Restore Note |

---

## 🔒 Authentication

Protected routes require a JWT token.

Example Header

```
token: <your_jwt_token>
```

---

## 📌 Note Schema

```js
{
    title: String,
    content: String,
    userId: ObjectId,
    isPinned: Boolean,
    isArchived: Boolean,
    isTrashed: Boolean,
    createdAt: Date,
    updatedAt: Date
}
```

---

## 👨‍💻 Future Improvements

- Search Notes
- Pagination
- Sort Notes
- Tags
- Reminder Feature
- Rich Text Notes
- Note Sharing
- Favorite Notes
- File Attachments

---

## 📬 Author

**Arvind Vishwkarma**

GitHub: https://github.com/arvind6206

---

## ⭐ Show your support

If you like this project, consider giving it a ⭐ on GitHub.
