# TASKFLOW- Görev ve Proje Yönetim Sistemi API

# Proje Hakkında
TASKFLOW, ekip içerisindeki görevlerin oluşturulması, listelenmesi, detaylarının görülmesi, güncellenmesi ve silinmesi için geliştirilmiş basit bir REST API projesidir.
Proje Node.js ve Express.js kullanılarak hazırlanmıştır. API istekleri Postman üzerinden test edilmiştir.

# Kullanılan Teknolojiler
-Node.js
-Express.js
-JavaScript
-REST API
-Postman

# Proje çıktıları
1. Proje klasörüne girin
Terminalde proje klasörünü açın:
cs taskflow-api
2. Bağımlılıkları yükleyin
npm install
3. sunucuyu başlatın
node server.js
Sunucu 3001 Portunda çalışır.
http://localhost:3001

# API Endpoint'leri

GET/tasks : Tüm görevleri listeler
GET/tasks/:id  : Belirli bir görevin detayını getirir.
POST/tasks  : Yeni görev oluşturur.
PUT/tasks/:id   : Mevcut görevi günceller
DELETE/tasks/:id  : Görevi siler.

# POST Örneği
Postmanda aşağıdki isteği kullanabilirsiniz
Post http://localhost:3001/tasks
Body - raw - json

# PUT Örneği
Put http://localhost:3001/tasks/1
Body - raw - json

# Logger Middleware
Projede gelen API isteklerini konsola kaydeden temel bir Logger Middleware bulunmaktadır. İstek metodu, endpoint ve zaman bilgisi terminalde görüntülenebilir.
Örnek:
GET /task - 16.08.2026 18:40:25

# Test
Temel CRUD işlemleri Postman üzerinden test edilmiştir.
- görev ekleme
- görev listeleme
- görevdetayını görüntüleme
- görev güncelleme
- görev silme

# Proje Dosyaları
taskflow-api/
- node_modules/
- package-lock.json
- package.json
- server.js