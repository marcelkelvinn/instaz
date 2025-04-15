# 📸 InstaZ - Photo Sharing App

InstaZ adalah aplikasi berbagi foto yang memungkinkan pengguna untuk mendaftar, login, mengupload foto, dan melihat foto yang diunggah oleh pengguna lain. Aplikasi ini juga memiliki panel admin untuk mengelola pengguna.

## 🚀 Fitur Utama

- **Pendaftaran & Login**: Pengguna dapat mendaftar akun baru dan login untuk mengakses aplikasi.
- **Upload Foto**: Pengguna dapat mengupload foto ke aplikasi.
- **Profil Pengguna**: Pengguna dapat melihat profil pribadi mereka dan foto-foto yang telah diupload.
- **Profil Publik**: Pengguna dapat melihat profil dan foto dari pengguna lain secara publik.
- **Admin Panel**: Admin dapat menambah, mengedit, dan menghapus pengguna, serta mengelola foto yang diupload.
  
## 🔧 Teknologi yang Digunakan

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js dengan Express
- **Database**: MySQL (dengan Amazon RDS)
- **Autentikasi**: JSON Web Token (JWT)
- **File Storage**: Foto disimpan di EC2 Volume (Amazon AWS)
- **File Upload**: Menggunakan Multer untuk menyimpan foto ke server

---

## 📥 Cara Menjalankan

### 1. Setup Backend (Express + MySQL)

- Pastikan kamu sudah memiliki backend yang berjalan. Backend dapat ditemukan di folder `backend/` pada repository ini.
- Untuk menjalankan backend, ikuti langkah-langkah berikut:

```bash
# Install dependencies
cd backend
npm install

# Pastikan kamu sudah mengonfigurasi `.env` dengan benar (lihat di bawah)
# Menjalankan server backend
npm start

### 2. Konfigurasi Backend

Setelah menginstall dependencies, kamu perlu mengonfigurasi file `.env` di folder `backend/`. Buat file `.env` di dalam folder `backend/` dengan konfigurasi berikut:

```env
DB_HOST=your-rds-endpoint.amazonaws.com   # Endpoint untuk RDS MySQL di AWS
DB_USER=your-database-username           # Username untuk database
DB_PASS=your-database-password           # Password untuk database
DB_NAME=your-database-name               # Nama database yang digunakan
JWT_SECRET=your-jwt-secret               # Secret key untuk JWT
PORT=5000                                # Port untuk menjalankan server (bisa diganti sesuai kebutuhan)

### 3. Menjalankan Backend

Setelah mengonfigurasi file `.env` dan memastikan pengaturan AWS RDS dan EC2 sudah benar, jalankan server backend menggunakan perintah berikut:

```bash
cd backend
npm start

### 4. Setup Frontend

Untuk menjalankan frontend, ikuti langkah-langkah berikut:

#### Instalasi Dependencies
Masuk ke folder `frontend/` dan install dependencies yang dibutuhkan:

```bash
cd frontend
npm install

### 5. Menjalankan Frontend

Jalankan server frontend menggunakan perintah berikut:

```bash
npm run serve

## 🌐 Cara Menggunakan Aplikasi

### 1. Pendaftaran Pengguna
- Buka halaman Register (`register.html`).
- Isi username, password, dan klik tombol "Register".
- Setelah berhasil, kamu akan otomatis diarahkan ke halaman login.

### 2. Login
- Buka halaman Login (`index.html`).
- Masukkan username dan password yang sudah didaftarkan.
- Jika berhasil, kamu akan diarahkan ke halaman profil kamu.

### 3. Upload Foto
- Setelah login, pergi ke halaman Upload (`upload.html`).
- Pilih foto yang ingin diupload dan klik "Upload".
- Foto yang berhasil diupload akan muncul di profil kamu.

### 4. Lihat Profil Pengguna
- Buka halaman Profile (`profile.html`).
- Kamu bisa melihat foto-foto yang telah diupload.

### 5. Lihat Profil Pengguna Lain
- Buka halaman Users (`users.html`).
- Lihat semua profil pengguna dan foto mereka.

### 6. Panel Admin (Hanya untuk Admin)
- Admin bisa mengakses halaman Admin (`admin.html`).
- Di sini, admin bisa:
  - Menambah pengguna baru.
  - Mengedit data pengguna.
  - Menghapus pengguna.

## 📦 Dependencies

### Backend
- **express**: Framework untuk membangun server.
- **mysql2**: Library untuk berkomunikasi dengan MySQL.
- **bcryptjs**: Untuk hashing password.
- **jsonwebtoken**: Untuk membuat dan memverifikasi JWT.
- **multer**: Untuk menangani upload file (foto).
- **cors**: Untuk mengizinkan cross-origin requests.
- **dotenv**: Untuk mengelola variabel lingkungan.

###

