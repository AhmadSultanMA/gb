## Tutorial MQTT
Dokumentasi ini membantu Anda untuk mengirim data ke perangkat. Oleh karena itu, data akan diolah lalu dijadikan perintah untuk mengontrol perangkat. Jika Anda memerlukan bantuan atau menemukan informasi yang kurang, jangan ragu untuk menghubungi kami melalui support@antares.id

## Prasyarat
Memiliki software MQTT FX. Jika Anda belum memilikinya, silakan buka link berikut [link. MQTT FX](http://mqttfx.jensd.de/).

## Langkah-langkah
1. Login akun Antares Anda melalui Antares Console https://console.antares.id
![login](https://antares.id/assets/img/mqtt-push-data-to-device-1.jpg)

2. Simpan Access Key Anda untuk digunakan kemudian.Dapatkan Access Key Anda di Account -> Access Key
![accesskey](https://antares.id/assets/img/mqtt-push-data-to-device-2.jpg)

3. Buat Aplikasi, jika Anda telah memilikinya, abaikan untuk melanjutkan ke proses berikutnya.
![appli](https://antares.id/assets/img/mqtt-push-data-to-device-3.jpg)

4. Buat Device, jika Anda telah memilikinya, abaikan untuk melanjutkan ke proses berikutnya.
![add-device](https://antares.id/assets/img/mqtt-push-data-to-device-4.jpg)

5. Buka software MQTT FX. Antarmuka pengguna ditunjukkan pada gambar berikut.
![mqttfx](https://antares.id/assets/img/mqtt-push-data-to-device-5.jpg)

6. Pertama, Anda perlu mengonfigurasi agar Anda dapat terhubung dengan MQTT Broker kami. Konfigurasi ditunjukkan seperti dibawah ini.
![config-mqttfx-broker](https://antares.id/assets/img/mqtt-push-data-to-device-6.jpg)

7. Ketika Anda berhasil terhubung, akan muncul ikon berwarna hijau pada sebelah kanan atas.  
![online-icon](https://antares.id/assets/img/mqtt-push-data-to-device-7.jpg)

8. Klik Subscribe, kemudian jalankan subscribe a topic dengan mengikuti format berikut:
`/oneM2M/resp/antares-cse/your-access-key/choose-a-serialization-format`
Parameter `choose-a-serialization-format` dapat mempunyai 2 nilai:

  * `xml` untuk format XML
  * `json` untuk format JSON

Pada langkah ini berarti Anda akan mendapatkan pesan/notifikasi ketika terdapat suatu perubahan yang terjadi pada akun Anda. Pada tutorial ini, kita menggunakan MQTT FX tools untuk subscribe, tetapi pada skenario kasus nyata, itu akan menjadi perangkat yang subscribe ke topik tersebut.

![subs](https://antares.id/assets/img/mqtt-push-data-to-device-8.jpg)

9. Langkah ini, kami akan meniru permintaan yang berasal dari aplikasi seluler. Ia juga menggunakan MQTT FX sebagai alat.. Mulai mempublish ke topik berikut :
`/oneM2M/req/your-access-key/antares-cse/choose-a-serialization-format`
The `choose-a-serialization-format` parameter can have 2 values:

  * `xml` for XML format
  * `json` for JSON format

Contoh
Topik: `/oneM2M/req/your-access-key/antares-cse/json`
Isi

```json
{
  "m2m:rqp": {
    "fr": "your-access-key",
    "to": "/antares-cse/antares-id/project-name/device-name",
    "op": 1,
    "rqi": 123456,
    "pc": {
      "m2m:cin": {
        "cnf": "message",
        "con": "on"
      }
    },
    "ty": 4
  }
}
```
Semua data didalam "con" ditentukan oleh Anda sendiri. Anda dapat membuat data format milik Anda.  

![get](https://antares.id/assets/img/mqtt-push-data-to-device-9.jpg)

**Selamat!! Anda baru saja mendapatkan request pertama dengan menggunakan MQTT API.**
