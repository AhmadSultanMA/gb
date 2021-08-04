## Tutorial LoRa
Dokumentasi ini membantu Anda untuk menggunakan modul Arduino LoRa Antares. Jika membutuhkan informasi lebih lanjut, jangan ragu hubungi kami melalui support@antares.id

Silakan download modul Workshop LoRa Antares.  
[Klik Modul Workshop LoRa Antares](https://antares.id/assets/files/MODUL%20WORKSHOP%20LORA%20ANTARES.pdf)

## Pendahuluan
Pada tutorial ini, Anda akan menggunakan LoRa untuk mengirim data sederhana ke Antares. Modul yang digunakan pada tutorial ini adalah modul Arduino LoRa Antares.

![lora-antares](https://antares.id/assets/img/loramodul.png)

## Prasyarat
Sebelum memulai, pastikan Anda telah memenuhi syarat sebagai berikut:

1. Install Arduino IDE pada komputer Anda. Klik [Software Arduino IDE](https://www.arduino.cc/en/Main/Software) jika Anda belum menginstall.

2. Download Library Loraid pada Arduino IDE. Klik Download Library [Loraid](https://antares.id/assets/files/loraid%202.zip)

3. Membuat aplikasi dan device pada console Antares akun Anda.

## Langkah-langkah Install Library Loraid
Sebelum memulai proses pada software, Anda perlu menginstall Library Loraid pada Arduino IDE yang Anda gunakan. Pada Arduino IDE, buka add .ZIP Library dengan klik **Sketch > Include Library > add .ZIP Library**.

![include](https://antares.id/assets/img/libantaresws2.png)

Kemudian pilih file zip Library Loraid pada direktori penyimpanan yang telah Anda download sebelumnya. Lalu klik Open.

![include-2](https://antares.id/assets/img/libraryloraid.png)

## Konfigurasi

1. Masuk pada laman console Antares akun Anda. Klik pada device yang telah Anda buat sebelumnya. Kemudian klik Set LoRa seperti pada gambar berikut.

![setlora-1](https://antares.id/assets/img/setlora1.png)  

Lalu akan muncul kotak dialog Set LoRa Device seperti gambar di bawah. Pada pilihan Select LoRa Device Class, pilih Class A > Set LoRa.

![setlora-2](https://antares.id/assets/img/setlora2.png)

2. Pada Arduino IDE, konfigurasikan Arduino Pro or Pro Mini sebagai board yang akan Anda gunakan. Klik **Tools > Board > Arduino Pro or Pro Mini**.

3. Pada Arduino IDE, konfigurasikan Processor ATmega328P (3.3 V,8 MHz) sebagai processor yang akan Anda gunakan. Klik **Tools > Processor > ATmega328P (3.3 V,8 MHz)**.

4. Pada Arduino IDE, konfigurasikan Port sesuai dengan Board Arduino LoRa yang Anda gunakan. Klik Tools > Port > COM ....

## Mengirim Data Sederhana ke Antares

Setelah Anda selesai melakukan konfigurasi, saatnya membuat kode program untuk mengirim data sederhana ke device pada console Antares yang telah Anda buat sebelumnya. Kode Program dapat Anda dapatkan di direktori example pada folder library Loraid yang telah Anda download sebelumnya atau dengan mudah Anda dapatkan dengan klik **File > Examples > LoraID > loraid-send-class-A** pada Arduino IDE.  

Kode program loraid-send-class-A seperti berikut. Jangan lupa untuk ketik Access Key dan Device Id yang Anda gunakan pada console Antares akun Anda. Setelah itu upload program dan tunggu beberapa detik.

```arduino
#include <loraid.h>

long interval = 10000;    // 10 s interval to send message
long previousMillis = 0;  // will store last time message sent
unsigned int counter = 0;     // message counter

void setup() {
  // Setup loraid access
  lora.init();

  // Set LoRaWAN Class
  lora.setDeviceClass(CLASS_A);

  // Set Data Rate
  lora.setDataRate(2);

  // Put Antares Key and DevAddress here
  lora.setAccessKey("your Access Key");
  lora.setDeviceId("your Device Id");
}

void loop() {
  // put your main code here, to run repeatedly:
  char myStr[50];
  char outStr[255];
  int recvStatus = 0;

  unsigned long currentMillis = millis();

  // Check interval overflow
  if(currentMillis - previousMillis > interval) {
    previousMillis = currentMillis;

    sprintf(myStr, "Ini data LoRa ke-%d", counter);
    lora.sendToAntares((unsigned char *)myStr, strlen(myStr), 0);
  }

  recvStatus = lora.readData(outStr);
  if(recvStatus) {
    Serial.println(outStr);
  }

  // Check Lora RX
  lora.update();
}
```

Setelah proses upload kode program selesai, silakan periksa data yang masuk pada Device Antares yang telah Anda buat sebelumnya. Jika berhasil maka tampilan pada Device Anda akan seperti berikut ini:

![lorasend](https://antares.id/assets/img/setlora3.png)

## Menggunakan Shield Workshop Antares
### Pendahuluan
Silakan download modul Workshop LoRa Antares. [Klik Modul Workshop LoRa Antares](https://antares.id/assets/files/MODUL%20WORKSHOP%20LORA%20ANTARES.pdf)

Pada bagian ini, Anda akan menggunakan Shield Workshop Antares pada modul Arduino LoRa. Pada Shield Workshop Antares ini terdapat sensor suhu dan kelembaban (DHT11), relay, LED dan push button. Pada tutorial ini, Anda akan melakukan monitoring suhu dan kelembaban melalui console Antares menggunakan Modul Arduino LoRa.

![antares-shield](https://antares.id/assets/img/shieldworkshop.jpg)

### Alat dan Bahan

Alat dan bahan yang digunakan diantaranya:
1. Modul Arduino LoRa
2. Shield Workshop Antares
3. Kabel Mini USB

### Kirim Data Sensor
Sebelumnya, pastikan Anda telah memasang Shield Workshop Antares pada Modul Arduino LoRa dengan benar.  
Kode program ditunjukkan seperti dibawah ini. Jangan lupa untuk ketik Access Key dan Device Id yang Anda gunakan pada console Antares akun Anda. Setelah itu upload program dan tunggu beberapa detik.

```arduino
#include
#include "DHT.h"
#define DHTPIN 4
#define DHTTYPE DHT11

long interval = 10000; // 10 s interval to send message
long previousMillis = 0; // will store last time message sent
unsigned int counter = 0; // message counter
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // Setup loraid access
  lora.init();
  // Set LoRaWAN Class
  lora.setDeviceClass(CLASS_A);
  // Set Data Rate
  lora.setDataRate(2);

  // Put Antares Key and DevAddress here
  lora.setAccessKey("your-access-key");
  lora.setDeviceId("dev addr lora");
  dht.begin();
}

void loop() {
  char myStr[50];
  char outStr[255];
  int recvStatus = 0;
  unsigned long currentMillis = millis();

  if(currentMillis - previousMillis > interval) {
    float h = round(dht.readHumidity());
    float t = round(dht.readTemperature());

    if (isnan(h) || isnan(t)) {
      h = 0;
      t = 0;
    }

    previousMillis = currentMillis;

    String dataKirim = lora.makeData(1, 2, 0, (String)t,(String)h,"");
    Serial.println((String)dataKirim);
    dataKirim.toCharArray(myStr, dataKirim.length()+1);
    lora.sendToAntares((unsigned char *)myStr, strlen(myStr), 0);
  }

  recvStatus = lora.readData(outStr);

  if(recvStatus) {
    Serial.println(outStr);
  }

  lora.update();
}
```

Setelah proses upload kode program selesai, silakan periksa data yang masuk pada Device Antares yang telah Anda buat sebelumnya. Jika berhasil maka tampilan pada Device Anda akan seperti berikut ini:

![lora-check](https://antares.id/assets/img/setlora4.png)
