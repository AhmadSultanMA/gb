## Tutorial Raspberry Pi
This documentation helps you to install Raspberry Pi (Integrated Development Environment). If you still need any assistance or found any misinformation, don't hesitate to mail us at support@antares.id
## Mengirim Data Menggunakan NodeJS
### Pendahuluan
Raspberry Pi adalah mini komputer yg mempunyai input output digital port seperti pada board microcontroller. Kelebihan Rasberry Pi dibanding board microcontroller yg lain diantaranya yaitu mempunyai Port/koneksi untuk display berupa TV atau Monitor PC serta koneksi USB untuk Keyboard serta Mouse. Raspberry Pi dibuat di inggris oleh Raspberry Pi Foundation. Pada awalnya Raspberry Pi ditunjukan untuk modul pembelajaran ilmu komputer disekolah. Untuk dapat menyimpan data pada ANTARES dapat menggunakan NodeJS Request. Berikut adalah langkah-langkanya:

### Install Raspberry Pi OS
Pertama-tama anda harus memiliki Raspberry Pi yang sudah memiliki OS. Jika anda belum memiliki Raspberry Pi yang memiliki OS, anda dapat mengikuti tutorial pada halaman https://www.raspberrypi.org/documentation/installation/installing-images/. Jika anda sudah memiliki Raspberry Pi lengkap dengan OS nya, maka anda bisa langsung melanjutkan ke step berikutnya.

### Install Librari
Aktifkan Raspberry Pi dan buka jendela terminal. Setelah jendela terminal terbuka, input syntax di bawah ini untuk menginialisasi library npm seperti yang ditunjukkan pada gambar 2.

![npm](https://antares.id/assets/img/raspi1.png)

Setelah menginputkan syntax diatas, tekan enter dan jika proses inialisasi berhasil maka tampilan jendela terminal akan seperti gambar 3.

![npm-2](https://antares.id/assets/img/raspi2.png)

Jika sudah berhasil menginiaslisasi NPM library maka selanjutnya install NPM library dengan menggunakan syntax di bawah ini seperti yang ditunjukkan pada gambar 4./p>

![npm-3](https://antares.id/assets/img/raspi3.png)

Setelah menginputkan syntax diatas, tekan enter dan jika proses instalisasi berhasil maka tampilan jendela terminal akan seperti gambar 5.

![npm-4](https://antares.id/assets/img/raspi4.png)

Jika tampilan sudah sesuai dengan gambar 5 maka proses instalasi library npm sudah selesai.

### Membuat NodeJS Request

Setelah berhasil menghinstall library npm, selanjutnya adalah membuat file dengan format NodeJS. Untuk membuat file pada Raspberry Pi, anda dapat menggunakan syntax dibawah ini. File ini digunakan untuk menyimpan data pada Platform ANTARES.

`sudo nano your-file-name.js`

![node](https://antares.id/assets/img/raspi5.png)

Jika sudah masuk ke dalam file NodeJS Reqeust yang akan dibuat. Masukkan list di bawah ini dan
> jangan lupa inputkan URL Device anda dan juga Access Key anda.

| Field | Value |
|-------|-------|
| URL | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289` |
| Method | `POST` |

**Header**

| Key | Value |
|-----|-------|
| X-M2M-Origin | `access-id:access-password` |
| Content-Type | `application/xml;ty=4` |
| Accept | `application/xml` |



**Kode NodeJS**
```js
var request = require("request");
var options = { method: 'POST',
  url: 'URL',
  headers:
   { 'Cache-Control': 'no-cache',
     'Content-Type': 'application/xml;ty=4',
     'X-M2M-Origin': 'access-id:access-password' },
  body: '<m2m:cin xmlns:m2m=\"http://www.onem2m.org/xml/protocols\">\r\n  <cnf>message</cnf>\r\n  <con>\r\n    &lt;obj&gt;\r\n     &lt;int name="data" val="16"/&gt;\r\n      &lt;int name="unit" val="watt"/&gt;\r\n    &lt;obj&gt;\r\n  \r\n' };

request(options, function (error, response, body){
  if (error) throw new Error(error);

  console.log(body);  
}

```

Jika sudah diinputkan, maka tampilan akan sama seperti pada gambar 7.

![nano-req](https://antares.id/assets/img/raspi6.png)

Untuk menyimpan file NodeJS Request anda, anda perlu menekan Ctrl+X > Enter > Y.

### Cek Data pada Device di ANTARES
Anda dapat mengecek data yang anda simpan pada Device pada ANTARES dengan membuka URL device anda.

![antares-device](https://antares.id/assets/img/raspi8.png)

## (Python) Monitoring Suhu dan Kelembaban Menggunakan Sensor DHT11
### Pendahuluan
Pada tutorial ini, Anda akan membuat suatu sistem monitoring suhu dan kelembaban menggunakan Raspberry Pi, sensor DHT11 dan ANTARES. Sensor DHT11 akan mengukur suhu dan kelembaban di sekitar ruangan, lalu akan mengirimkan data tersebut sehingga dapat dimonitor melalui device pada ANTARES.

### Alat dan Bahan
Alat dan bahan yang digunakan yaitu:

1. Raspberry Pi
2. Sensor DHT11
3. Resistor 10k ohm
4. Breadboard
5. Kabel jumper

![raspi-1](https://antares.id/assets/img/dht1.jpg)

### Rangkaian Hardware
![hw](https://antares.id/assets/img/dht2.png)
Hubungkan kaki VCC sensor DHT11 ke pin 3.3V RaspberryPi, kaki GND sensor DHT11 ke pin GND RaspberryPi, kaki data sensor DHT11 ke GPIO 4 RaspberryPi dan pull up resistor seperti pada gambar.

### Install Library DHT11
Sebelum memulai proses pada software, Anda perlu menginstall Library DHT11 pada RaspberryPi yang Anda gunakan. Pada tutorial ini, Anda akan menggunakan Library DHT11 dari Szazo. Buka jendela Terminal lalu ketik kode berikut untuk memulai instalasi.

`git clone https://github.com/szazo/DHT11_Python.git`

Setelah proses instalasi selesai, akan muncul folder DHT11_Python.

### Kode Program
Setelah proses instalasi library selesai, Anda akan membuat kode program untuk membaca sensor dan mengirimkan data sensor ke Device Antares. Sebelum memulai, pastikan Anda telah membuat Aplikasi serta Device pada console Antares milik Anda.  

Selanjutnya, masuk ke direktori folder DHT11_Python lalu buka file dht11_example.py menggunakan Python. Kemudian akan terbuka jendela text editor Python, lalu ketik kode program seperti berikut

```python
import RPi.GPIO as GPIO
import dht11
import time
import datetime
import request
import json

#initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

#read data using pin 4
instance = dht11.DHT11(pin=4)

while True:
  result = instance.read()
  if result.is_valid():
  print("Last valid input: " + str(datetime.datetime.now()))
  print("Temperature: %d C" % result.temperature)
  print("Humidity: %d %%" % result.humidity)
  data = '\r\n{\r\n  "m2m:cin": {\r\n    "cnf": "message",\r\n    "con": "\r\n      {\r\n      \t \\"Temperature\\": \\"'+str(result.temperature)+'\\",\r\n         \\"Humidity\\": \\"'+str(result.humidity)+'\\"\r\n'
  url = 'https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name'
  headers = {'cache-control':'no-cache','content-type':'application/json;ty=4','x-m2m-origin':'Your-Acces-Key'}
  r = request.post(url,headers=headers,data=data)
  time.sleep(2)
```

Simpan file tersebut, kemudian buka jendela Terminal lalu ketik kode berikut:

`cd DHT11_Python && python dht11_example.py`

lalu akan muncul tampilan seperti berikut:

![dht-code](https://antares.id/assets/img/dht3.png)  
Gambar 12. Tampilan pada Terminal  


Tampilan tersebut menunjukkan bahwa sensor mulai mengukur suhu dan kelmbaban. Selanjutnya silakan periksa data yang masuk pada Device Antares yang telah Anda buat sebelumnya. Jika berhasil maka tampilan pada Device Anda akan seperti berikut ini:

![showcase-data](https://antares.id/assets/img/dht4.png)  
Gambar 13. Tampilan Device pada ANTARES
