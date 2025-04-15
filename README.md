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

 
