## Tutorial Postman
Dokumentasi ini akan menjelaskan cara menggunakan Postman sebagai Virtual Device untuk mengirim data (POST) ke ANTARES dan menerima data (GET) dari ANTARES. Jika anda membutuhkan informasi lebih lanjut, jangan ragu hubungi kami di support@antares.id

## Pendahuluan
Postman adalah sebuah aplikasi yang berfungsi sebagai REST Client untuk uji coba REST API. Postman biasa digunakan oleh developer pembuat API sebagai tools untuk menguji API yang telah mereka buat.

### Instalasi Postman
1. Download Postman
Hal yang harus dilakukan pertama yaitu [Download Postman](https://www.getpostman.com/apps). Pilih sesuai dengan Sistem Operasi laptop/komputer anda.

2. Setelah selesai download, klik file yang didownload tadi. Anda akan masuk ke landing page install Postman. Anda bisa buat akun Postman atau login jika sudah punya akun, bisa juga skip tanpa harus membuat akun Postman.

![account](https://antares.id/assets/img/installpm1.png)

Setelah itu, pilih pengaturan Postman sesuai kebutuhan. Sebelah kiri untuk fitur Postman yang akan diaktifkan, sebelah kanan untuk desain tampilan Postman.  

![design](https://antares.id/assets/img/installpm2.png)  

Selanjutnya, jika anda mempunyai tim maka anda bisa menambahkan anggota tim anda dengan memasukkan email mereka untuk menbentuk kolaborasi.  

![collab](https://antares.id/assets/img/installpm3.png)  

Setelah proses install selesai, maka anda akan menuju landing page Postman seperti di bawah ini.  

![landing](https://antares.id/assets/img/installpm4.png)

## Hubungkan ke ANTARES
Berikut ini tutorial cara mengirim data (Post) ke ANTARES dan cara megambil data (Get) dari ANTARES dengan menggunakan aplikasi Postman.

### Kirim Data (Post)
1. Masuk ke halaman utama tab Postman, lalu pilih menu POST.
![post1](https://antares.id/assets/img/postdatapm1.png)

2. Setelah itu masuk ke console ANTARES. Masuk ke Application dan pilih Device yang sesuai. Copy link yang terdapat pada Hierarchical URI dan Paste pada kolom "Enter request URL" di Postman.
![post2](https://antares.id/assets/img/postdatapm2.png)
![post3](https://antares.id/assets/img/postdatapm3.png)
Access Key dapat dilihat pada console ANTARES bagian Account.
![post4](https://antares.id/assets/img/postdatapm4.png)

3. Selanjutnya pindah ke tab Header dan Body pada Postman. Ikuti format pengisian sebagai berikut:

| Field | Value |
|-------|-------|
| URL | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289` |
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin | `access-id:access-password` |
| Content-Type | `application/xml;ty=4` (XML)<br>or<br>`application/json;ty=4` (JSON) |
| Accept | `application/xml` (XML)<br>or<br>`application/json` (JSON) |

**Body (XML)**  
```xml
<m2m:cin xmlns:m2m="http://www.onem2m.org/xml/protocols">
<con>&lt;obj&gt;
        &lt;num key1="value1"/&gt;
        &lt;str key2="value2"/&gt;
        &lt;bool keyN="valueN"/&gt;
&lt;/obj&gt;</con>
</m2m:cin>
```

**Body (JSON)**  
```json
{
  "m2m:cin": {
    "con": "{\"key1\":integer-value, \"key2\":\"string-value\", \"keyN\":\"valueN\"}"
  }
}
```

**Note!!  
Key adalah nama variable sedangkan value adalah nilai dari variable tersebut.**  

Berikut ini adalah contoh pengisian Header dan Body pada Postman:  

![headerbody-1](https://antares.id/assets/img/postdatapm5.png)
![headerbody-2](https://antares.id/assets/img/postdatapm6.png)

4. Setelah semuanya terisi lengkap pada Postman, klik Send. Lalu ke console ANTARES untuk melihat hasilnya jika berhasil dikirim.  
![post-success](https://antares.id/assets/img/postdatapm7.png)  

### Terima Data (Get)
1. Masuk ke halaman utama tab Postman, lalu pilih menu GET.  
![get-1](https://antares.id/assets/img/getdatapm1.png)

2. Setelah itu masuk ke console ANTARES. Masuk ke Application dan pilih Device yang sesuai. Copy link yang terdapat pada Hierarchical URI ditambahkan /la pada akhirannya dan Paste pada kolom "Enter request URL" di Postman.
![get-2](https://antares.id/assets/img/getdatapm2.png)

Access Key dapat dilihat pada console ANTARES bagian Account.

![accesskey](https://antares.id/assets/img/postdatapm4.png)  

3. Selanjutnya pindah ke tab Header pada Postman. Ikuti format pengisian sebagai berikut:  

| Field | Value |
|-------|-------|
| URL | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289` |
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin | `access-id:access-password` |
| Content-Type | `application/xml;ty=4` (XML)<br>or<br>`application/json;ty=4` (JSON) |
| Accept | `application/xml` (XML)<br>or<br>`application/json` (JSON) |

Berikut ini adalah contoh pengisian Header Postman:

![get-2](https://antares.id/assets/img/getdatapm3.png)

4. Setelah semuanya terisi, lalu klik Send. Lihat hasil data yang diterima Postman dari ANTARES pada bagian Body.  

![body](https://antares.id/assets/img/getdatapm4.png)
