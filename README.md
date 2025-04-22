# Full Stack Kütüphane Yönetim Sistemi

Bu proje React.js + Vite + TailwindCSS ile oluşturulmuş frontend ve ASP.NET Core Web API ile hazırlanmış backend içeren bir full-stack kütüphane yönetim sistemidir.

---

##  Kullanılan Teknolojiler

- Frontend:
  - React.js (Vite ile)
  - Tailwind CSS
  - React Router DOM

- Backend:
  - ASP.NET Core Web API
  - Entity Framework Core
  - MSSQL / SQL Server Express

---

## Proje Yapısı
library-app/ backend/ # ASP.NET Core Web API ||| frontend/ # React + Tailwind frontend


---

## ⚙️ Backend Kurulumu (ASP.NET Core)

1. SQL Server yüklü olmalı (Express veya LocalDb)
2. `appsettings.json` dosyasındaki Connection String kendi bilgisayarınıza göre ayarlanmalı:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=yourserver;Database=yourdb;Trusted_Connection=True;"
}

3- Terminalden aşağıdaki komutları çalıştırın:

cd backend
dotnet ef database update
dotnet run

4 - API https://localhost:5022/api/books üzerinden çalışacaktır.
Swagger arayüzü için: https://localhost:5022/swagger

Frontend Kurulumu (React + Tailwind)

cd frontend
npm install
npm run dev


Tarayıcıda otomatik olarak http://localhost:5173 açılır.
