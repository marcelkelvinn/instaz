const BASE_URL = "http://54.83.131.137";

// Helper: Ambil token dari localStorage
function getToken() {
  return localStorage.getItem("token");
}

// Helper: Set token ke localStorage
function setToken(token) {
  localStorage.setItem("token", token);
}

// Helper: Logout dan redirect ke login
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// Helper: Redirect kalau tidak login
function ensureAuthenticated() {
  const token = getToken();
  if (!token) {
    alert("Silakan login terlebih dahulu.");
    window.location.href = "index.html";
  }
}

// Helper: Cek apakah user admin
async function ensureAdmin() {
  const user = await fetchCurrentUser();
  if (user.role !== "admin") {
    alert("Akses ditolak. Halaman ini hanya untuk admin.");
    window.location.href = "profile.html";
  }
  return user;
}

// Helper untuk fetch dengan token otomatis
async function fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json"
    }
  });
}

// Ambil data user yang sedang login
async function fetchCurrentUser() {
  try {
    const res = await fetchWithAuth(`$BASE_URL}/users/me`);
    if (!res.ok) {
      const error = await res.text();
      alert("Sesi login habis atau tidak valid. Silakan login ulang.\n" + error);
      logout();
    }
    return await res.json();
  } catch (err) {
    alert("Gagal mengambil data user. Coba lagi nanti.");
    logout();
  }
}

// ---------------------- LOGIN ----------------------
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const username = form.username.value;
  const password = form.password.value;
  const button = form.querySelector("button");

  if (!username || !password) {
    alert("Username dan password tidak boleh kosong.");
    return;
  }

  button.disabled = true;
  try {
    const res = await fetch(`$BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) throw new Error("Login gagal");

    const data = await res.json();
    setToken(data.token);
    window.location.href = "profile.html";
  } catch (err) {
    alert("Login gagal. Periksa username dan password.");
  } finally {
    button.disabled = false;
  }
});

// ---------------------- REGISTER ----------------------
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const username = form.username.value;
  const password = form.password.value;
  const role = form.role?.value || "user";
  const button = form.querySelector("button");

  if (!username || !password) {
    alert("Username dan password tidak boleh kosong.");
    return;
  }

  button.disabled = true;
  try {
    const res = await fetch(`$BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role })
    });

    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg);
    }

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "index.html";
  } catch (err) {
    alert("Gagal registrasi: " + err.message);
  } finally {
    button.disabled = false;
  }
});

// ---------------------- LOGOUT ----------------------
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  logout();
});