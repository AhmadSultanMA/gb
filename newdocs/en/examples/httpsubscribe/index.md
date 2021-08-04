## Tutorial HTTP Subscribe & Notify Mechanism
Dokumentasi ini membantu Anda untuk menjelaskan bagaimana Subscribe pada sebuah Device dan mendapatkan notifikasi dari sebuah Event. Jika Anda memerlukan bantuan atau menemukan informasi yang kurang, jangan ragu untuk menghubungi kami melalui support@antares.id

## Prasyarat
1. Memiliki software NGROK. Jika Anda belum memilikinya, silakan buka link berikut [link. NGROK.](https://ngrok.com/)
2. Memiliki Node JS. Jika Anda belum memilikinya, silakan buka link berikut [link. Node JS.](https://nodejs.org/en/)
3. Memiliki POSTMAN. Jika Anda belum memilikinya, silakan buka link berikut [link. POSTMAN.](https://nodejs.org/en/)

## Langkah-langkah
1. Login akun Antares Anda melalui Antares Console https://console.antares.id
![login](https://antares.id/assets/img/mqtt-push-data-to-device-1.jpg)

2. Buat Aplikasi, jika Anda telah memilikinya, abaikan untuk melanjutkan ke proses berikutnya.
![make-app](https://antares.id/assets/img/mqtt-push-data-to-device-3.jpg)

3. Buat Device, jika Anda telah memilikinya, abaikan untuk melanjutkan ke proses berikutnya.
![make-device](https://antares.id/assets/img/mqtt-push-data-to-device-4.jpg)

4. Mulai dengan menuliskan kode program untuk mendapatkan data dari ANTARES. Anda dapat menggunakan kode program berikut ini: Copy kode program tersebut ke penyimpanan lokal komputer Anda kemudian simpan dalam format **.js extension**. Dalam tutorial ini, kami simpan dengan monitor.js

```javascript
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var util = require('util')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/monitor', function(req, res, next) {
  console.log(util.inspect(req.body, false, null));
  res.send('ack');
});


server.listen(9000, function() {
  console.log('App listening on port 9000');
});
```
![monitor.js](https://antares.id/assets/img/http-subscribe-notify-1.jpg)

5. Buka command prompt (windows) atau terminal (linux)
![cmd](https://antares.id/assets/img/http-subscribe-notify-3.jpg)

Masukkan direktori file kode program yang telah Anda simpan sebelumnya
![cd](https://antares.id/assets/img/http-subscribe-notify-4.jpg)

6. Jalankan kode program dengan melakukan sesuai dengan gambar dibawah ini.
![noderun](https://antares.id/assets/img/http-subscribe-notify-5.jpg)

Kode program yang berhasil dapat dilihat seperti pada gambar berikut ini.

![noderun-success](https://antares.id/assets/img/http-subscribe-notify-10.jpg)

Mendapatkan masalah? Jika ya, eksekusi sintaks berikut ini. Jika tidak, abaikan proses ini.  
![error](https://antares.id/assets/img/http-subscribe-notify-6.jpg)

Install paket yang belum terinstall.
![install](https://antares.id/assets/img/http-subscribe-notify-7.jpg)

![install-xml](https://antares.id/assets/img/http-subscribe-notify-8.jpg)

Lakukan Allow Access ketika sedang menjalakan kode program.
![allow-access](https://antares.id/assets/img/http-subscribe-notify-9.jpg)

7. Mulai menjalankan **NGROK**. **NGROK** akan membantu Anda untuk membuka localhost Anda ke public domain.
Pertama, masuk ke direktori NGROK. **Pastikan Anda sudah mengekstraknya, sehingga sudah dalam format file .exe**.

`cd download-path/`

Jalankan **NGROK** dengan menggunakan port 9000 dengan cara sebagai berikut:

`ngrok.exe port 9000`

![ngrok-run](https://antares.id/assets/img/http-subscribe-notify-11.jpg)

8. Buka Device yang telah Anda buat sebelumnya. Klik tombol Subscribe dan akan muncul menu pop up.
![sub-popup](https://antares.id/assets/img/http-subscribe-notify-2.jpg)
![sub-url](https://antares.id/assets/img/http-subscribe-notify-12.jpg)

Tambahkan /monitor pada akhir URL NGROK seperti dibawah ini.
![sub-monitor](https://antares.id/assets/img/http-subscribe-notify-13.jpg)

Ketika Anda telah berhasil mensubscribenya, akan muncul pop up.
![sub-success](https://antares.id/assets/img/http-subscribe-notify-14.jpg)

9. Mari periksa apakah server Anda mendapatkan notifikasi dengan perangkat emulator menggunakan POSTMAN. Silakan buka POSTMAN, dan isi semua parameter dengan informasi berikut ini.

| Field | Value |
|-------|-------|
| URL | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-project-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289` |
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin | `access-id:access-password` |
| Content-Type | `application/json;ty=4` |
| Accept | `application/json` |

**Body (JSON)**  

```json
{
  "m2m:cin": {
    "xmlns:m2m": "http://www.onem2m.org/xml/protocols",
    "cnf": "application/json",
    "con": "{\"temperature\":30.3, \"humidity\":35.1}"
  }
}
```

10. Selama Anda mengirimkan data, aplikasi server monitor Anda akan mendapatkan data yang server dapatkan. Data tersebut dapat dilihat seperti berikut ini.

![notif](https://antares.id/assets/img/http-subscribe-notify-15.jpg)

**Selamat!! Anda baru saja mendapatkan notifikasi data.**
