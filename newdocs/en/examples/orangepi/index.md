## Tutorial Orange Pi
Dokumentasi ini berisi mengenai pemanfaatan Orange Pi Zero dalam Komunikasi Data menggunakan HTTP RestFUL API dan pengintegrasian Orange Pi Zero dengan platform Antares. Jika membutuhkan informasi lebih lanjut, jangan ragu hubungi kami melalui support@antares.id

## Pendahuluan
Orange Pi merupakan suatu open source single-board computer. Orange Pi sama sistem kerjanya dengan varian-varian Pi yang lain, seperti Raspberry Pi, Nano Pi, dst. Orange Pi dapat dipasangkan sistem operasi Android, Ubuntu, Debian, dan Raspbian.

![orangepi](https://antares.id/assets/img/orange-pi-zero.jpg)  

Pin-Pin di dalam Orange Pi memiliki pengaturan sebagai berikut:  

![orangepi-pinout](https://antares.id/assets/img/pinout.jpg)  

## Instalasi Sistem Operasi

### Format Kartu
Sediakan kartu microSD yang akan digunakan/dipasang. Sebelumnya, kartu SD tersebut harus diformat. Langkah-langkah format yang dilakukan adalah sebagai berikut:  

1. Klik kanan direktori kartu microSD yang akan digunakan, lalu pilih menu format.

![format](https://antares.id/assets/img/formatdisk.png)

2. Pastikan menu format seperti gambar di bawah. Kemudian, klik start

![format-start](https://antares.id/assets/img/menuformat.png)

### Menambahkan Sistem Operasi
Sebelum masuk ke langkah selanjutnya, unduh aplikasi Win32DiskImager, kemudian download file image di https://www.armbian.com/orange-pi-zero/ dengan pilihan "bionic" dan extract isinya. Langkah-angkah instalasi sistem operasi adalah sebagai berikut:

1. Buka aplikasi Win32DiskImager

2. Cari file image yang sudah di-extract sebelumnya. Pastikan juga devais yang muncul pada menu Win32DiskImager adalah kartu MicroSD (meskipun biasanya sudah otomatis).

![win32](https://antares.id/assets/img/diskimager.png)

3. Pilih pilihan "Write"

### Konfigurasi Awal
Untuk mengakses Orange Pi Zero, pengguna dapat menghubungkan Orange Pi Zero terlebih dahulu ke komputer (dengan menggunakan USB to TTL atau FTDI, dengan memperhatikan RX, TX, dan GND) serta menggunakan aplikasi PUTTY. Setelah tersambung, langkah-langkah yang harus dilakukan adalah

1. Mengecek port yang digunakan Orange Pi Zero dengan Membuka Device Manager

![deviceman](https://antares.id/assets/img/portcom5.png)

2. Mengatur Konfigurasi dalam aplikasi PUTTY sebagai berikut:
![putty](https://antares.id/assets/img/putty.png)

3. Ketika sudah dijalankan, maka program akan meminta pengguna untuk memasukkan username dan password. Username yang digunakan adalah “root”, sedangkan password awal yang digunakan adalah 1234. Setelah itu, pengguna akan diminta memasukkan password yang baru.
![login](https://antares.id/assets/img/gantipassword.png)

4. Setelah itu, pengguna akan diminta untuk memasukkan informasi yang diperlukan. Silahkan mengisi informasi yang diperlukan, jika tidak langsung dilewat saja dengan menekan tombol ENTER.
![putty-enter](https://antares.id/assets/img/username.png)

5. Tampilan umum Orange Pi yang akan muncul seperti biasanya adalah:
![putty-intro](https://antares.id/assets/img/tampilanawal.png)

6. Perbarui versi OS yang ada dengan menggunakan
`sudo apt-get update`
`sudo apt-gat upgrade`

## Pemograman Python
Pada bagian ini, akan diberikan tutorial mengenai pembacaan temperatur dan kelembaban ruangan dengan menggunakan sensor DHT22, Orange Pi Zero, Antares, dan HTTP RestFUL API

1. Install terlebih dahulu python dan “pip” dengan menggunakan:  
`sudo apt-get install python`  
`sudo apt-get install python-pip`

2. Setelah itu, pengguna dapat mengambil basis untuk pemograman dengan dengan menggunakan perintah:  
`git clone https://github.com/ionutpi/DHT22-Python-library-Orange-PI`

3. Untuk memudahkan, program yang terdapat di dalam folder yang “dikloning” dapat dipindahkan ke bagian home dengan perintah:  
`cp /root/DHT22-Python-library-Orange-PI/dht22.py`

4. Pengecekan apakah program tersebut berjalan dapat dilakukan dengan (pastikan juga sensor terpasang di port yang benar):  
`python dht22.py`

5. Didapatkan hasil sebagai berikut:
![sendtemphum](https://antares.id/assets/img/hasilsensor.png)

6. Setelah itu, buka aplikasi POSTMAN (Bisa cek kembali tutorial STORE DATA OF A PARTICULAR DEVICE). Setelah mengisi semua yang diperlukan (dalam JSON), klik bagian code.

![postman-code](https://antares.id/assets/img/kodepostman.png)

7. Pilih bahasa yang akan digunakan (pastikan jenis Python yang Anda pakai dengan mengetik "python -V"). Bahasa pemograman lain juga dapat digunakan (selama tersedia).

![pythonreq](https://antares.id/assets/img/kodepostman2.png)
![pythonreq-2](https://antares.id/assets/img/kodepostman3.png)

8. Program yang didapat tersebut kemudian dipindahkan ke dalam suatu file program baru dan diedit. Tujuannya untuk mendapatkan data temperatur dan kelembaban setiap 1 detik lalu mengirimkannya ke Antares. Maka, didapatkan

```python
from pyA20.gpio import gpio
from pyA20.gpio import port

#import RPi.GPIO as GPIO
import dht22
import time
import datetime
import requests
# initialize GPIO
#gpio.setwarnings(False)
#gpio.setmode(GPIO.BCM)
PIN2 = port.PA6
gpio.init()
#gpio.cleanup()


# read data using pin 14
instance = dht22.DHT22(pin=PIN2)

while True:
    result = instance.read()
    if result.is_valid():
        print("Last valid input: " + str(datetime.datetime.now()))
        print("Temperature: %.2f C" % result.temperature)
        print("Humidity: %.2f %%" % result.humidity)

    time.sleep(1)

	url = "https://platform.antares.id:8443/~/antares-cse/antares-id/SmartCoba/SmartS1"

	payload = "{\r\n  \"m2m:cin\": {\r\n    \"con\": \"{\\\"key1\\\":"+str(datetime.datetime.now())+", \\\"key2\\\":\\\""+str(result.temperature)+"\\\", \\\"keyN\\\":\\\""+str(result.humidity)+"\\\"}\"\r\n  }\r\n}"
	headers = {
		'X-M2M-Origin': "access-id:access-password",
		'Content-Type': "application/json;ty=4",
		'Accept': "application/json",
		'Cache-Control': "no-cache",
		'Postman-Token': "0314aaab-c1bf-4b4c-90c8-7b2865e26965"
		}

	response = requests.request("POST", url, data=payload, headers=headers)

	print(response.text)
```

Jika ketika program tersebut dieksekusi dan terdapat kekurangan modul (library) Python tertentu, maka pengguna dapat mengunduh library tersebut dengan:

`pip install “module_name”`

9. Hasil di Orange PI dan di Antares didapatkan sebagai berikut:

![orangepi-result](https://antares.id/assets/img/hasil.png)
![orangepi-result2](https://antares.id/assets/img/datadapat.png)
