# Tutorial ESP8266

## Pendahuluan
Dokumentasi ini akan menjelaskan cara agar ESP8266 dapat membaca data dari beberapa sensor, kemudian data yang telah dibaca akan disimpan pada platform Antares.  

Untuk lebih lengkapnya, silahkan download modul workshop Antares.

[Modul Workshop ESP8266 Antares (pdf)](https://antares.id/assets/files/MODUL%20WORKSHOP%20ANTARES.pdf)

## Hardware
Untuk mengukur kondisi suhu dan intensitas cahaya, dibutuhkan beberapa perangkat elektronik. Berikut adalah beberapa perangkat yang akan digunakan pada contoh ini:

* ESP8266  
Perangkat untuk membaca data hasil pengukuran sensor. Board yang akan digunakan adalah WeMos D1 Mini
* DHT11  
Sensor untuk mengukur suhu dan kelembapan
* LDR  
Sensor untuk mengukur intensitas cahaya

## Software
Berikut adalah beberapa software yang dibutuhkan untuk menjalankan contoh-contoh pada dokumentasi ini:

* **Arduino IDE**  
Software utama yang akan digunakan untuk memprogram ESP8266.  
[Download Arduino IDE](https://www.arduino.cc/en/main/software)

* **Arduino ESP8266**  
Arduino IDE tidak mendukung board-board ESP8266 secara bawaannya, maka dari itu perlu dilakukan instalasi Arduino ESP8266 melalui Board Manager Arduino IDE  
[Download Arduino ESP8266](https://github.com/esp8266/Arduino)  
Panduan instalasi Arduino ESP8266 pada Arduino IDE terdapat pada Modul Workshop Antares.

* **Library Antares ESP8266**  
Komunikasi antara ESP8266 dengan database Antares dapat menggunakan HTTP maupun MQTT.
Instalasi masing-masing library HTTP maupun MQTT dapat dilakukan melalui Library Manager Arduino IDE, atau dengan mendownloadnya pada halaman GitHub.
  * [Antares ESP8266 HTTP](https://github.com/antaresdocumentation/antares-esp8266-http)
  * [Antares ESP8266 MQTT](https://github.com/vmasdani/antares-esp8266-mqtt)

* **Library DHT11**  
Library DHT11 dapat dipasang pada Arduino IDE melalui Library Manager atau halaman GitHub.  
[Download Library DHT Adafruit](https://github.com/adafruit/DHT-sensor-library)

## Program Dasar Arduino ESP8266
Segmen berikut bersi contoh-contoh program yang dapat anda coba untuk menjalankan beberapa fungsi pada ESP8266.

### Blink
Setiap board ESP8266 mempunyai **LED** di dalamnya yang bisa anda kontrol dengan mengakses dan memberi logika HIGH atau LOW pada pin **GPIO2** di board ESP8266. Perlu diingat bahwa LED di ESP8266 adalah Active Low, yang berarti jika diberi logika 1 (HIGH), LED akan mati. Sebaliknya, jika diberi logika 0 (LOW), LED akan menyala.

```arduino
#define led 2                 // Buat variabel "led" sebagai pin GPIO2

void setup() {
  pinMode(led, OUTPUT);       // Atur pin "led" sebagai OUTPUT
}

void loop() {
  digitalWrite(led, HIGH);    // Matikan LED
  delay(1000);                // Jeda 1 detik
  digitalWrite(led, LOW);     // Nyalakan LED
  delay(1000);                // Jeda 1 detik
}
```

### GPIO
GPIO pada board ESP8266 biasanya ditandai dengan huruf D, seperti D5, D4, D2, dan lain-lain. Silahkan ikuti rangkaian sambungan ESP8266 dengan LED sesuai gambar berikut: (NB. resistor bernilai sekitar 220 ohm)  
![circuit1](https://antares.id/assets/img/gpio-2.png)
![circuit2](https://antares.id/assets/img/gpio-1.png)
```arduino
#define led1 D2               // Buat variabel "led1" sebagai pin D2
#define led2 D4               // Buat variabel "led2" sebagai pin D4

void setup() {
  pinMode(led1, OUTPUT);      // Atur pin "led1" sebagai OUTPUT
  pinMode(led2, OUTPUT);      // Atur pin "led2" sebagai OUTPUT
}

void loop() {
  digitalWrite(led1, HIGH);   // Nyalakan LED 1
  digitalWrite(led2, LOW);    // Matikan LED 2
  delay(1000);                // Jeda 1 detik
  digitalWrite(led1, LOW);    // Matikan LED 1
  digitalWrite(led2, HIGH);   // Nyalakan LED 2
  delay(1000);                // Jeda 1 detik
}
```

### Serial Monitor
Serial monitor berfungsi untuk mengirim data dari ESP8266 ke port serial komputer untuk menampilkan data di komputer.

```arduino
void setup() {
  Serial.begin(115200);     // Buka komunikasi serial pada baudrate 115200
}

int angka = 0;              // Buat variabel angka dengan nilai 0

void loop() {
  Serial.print("Angka: ");  // Kirim angka ke serial monitor
  Serial.println(angka);
  angka++;                  // Tambah variabel angka +1
  delay(1000);              // Jeda 1 detik
}
```

### Sensor Cahaya
Silahkan gunakan rangkaian dengan LDR seperti berikut:  
![ldr](https://antares.id/assets/img/light-2.png)
![ldr2](https://antares.id/assets/img/light-1.png)

```arduino
void setup() {
  Serial.begin(115200);               // Buka komunikasi serial pada baudrate 115200
}

void loop() {
  int sensorCahaya = analogRead(0);   // Baca nilai sensor
  Serial.println(sensorCahaya);       // Kirim nilai sensor ke serial monitor
  delay(1000);                        // Jeda 1 detik
}
```

### Sensor Temperatur
Pada sensor temperatur DHT11, diperlukan library DHT11. Silahkan gunakan rangkaian seperti berikut:  
![temp1](https://antares.id/assets/img/temp-2.png)
![temp2](https://antares.id/assets/img/temp-1.png)

```arduino
#include "DHT.h"            // Inisiasi library DHT11
#define DHTPIN D2           // Buat variabel DHTPIN, mengarah pada pin D2
#define DHTTYPE DHT11       // Tentukan tipe DHT menjadi DHT11
DHT dht(DHTPIN, DHTTYPE);   // Buat objek dht

void setup() {
	Serial.begin(9600);      // Buka komunikasi serial pada baudrate 9600
	dht.begin();             // Inisiasi objek dht
}

void loop() {
	float hum = dht.readHumidity();      // Baca kelembapan
	float temp = dht.readTemperature();  // Baca temperatur
	if (isnan(hum) || isnan(temp)) {     // Cek jika sensor error
      Serial.println("Gagal Membaca DHT sensor!");
      return;
	}
	Serial.println("Humidity: " + (String)hum + " %");       // Print kelembapan (%)
	Serial.println("Temperature: " + (String)temp + " *C");  // Print temperatur (*C)
	delay(1000);
}
```

## Antares HTTP
Di bawah ini adalah beberapa contoh-contoh kode untuk mengirim dan menerima data melalui HTTP pada database Antares dengan ESP8266.

### Kirim Data
Contoh kode untuk pengiriman data ada di **File > Examples > Antares ESP8266 HTTP > AntaresStoreData**

```arduino
#include  <AntaresESP8266HTTP.h >   // Inisiasi library HTTP Antares

#define ACCESSKEY "your-access-key"       // Ganti dengan access key akun Antares anda
#define WIFISSID "your-wifi-ssid"         // Ganti dengan SSID WiFi anda
#define PASSWORD "your-wifi-password"     // Ganti dengan password WiFi anda

#define projectName "your-project-name"   // Ganti dengan application name Antares yang telah dibuat
#define deviceName "your-device-name"     // Ganti dengan device Antares yang telah dibuat

AntaresESP8266HTTP antares(ACCESSKEY);    // Buat objek antares

void setup() {
  Serial.begin(115200);     // Buka komunikasi serial dengan baudrate 115200
  antares.setDebug(true);   // Nyalakan debug. Set menjadi "false" jika tidak ingin pesan-pesan tampil di serial monitor
  antares.wifiConnection(WIFISSID,PASSWORD);  // Mencoba untuk menyambungkan ke WiFi
}

void loop() {
  // Isi variabel dengan nilai acak, dengan tipe data yang berbeda
  int temp = random(25,30) ;
  int hum = random(75,90);
  float windsp = float(random(20, 30))/3.33;
  float rainlv = float(random(0, 20))/6.99;
  String lat = "-6.8718189";
  String lon = "107.5872477";

  // Memasukkan nilai-nilai variabel ke penampungan data sementara
  antares.add("temperature", temp);
  antares.add("humidity", hum);
  antares.add("wind_speed", windsp);
  antares.add("rain_level", rainlv);
  antares.add("latitude", lat);
  antares.add("longitude", lon);

  // Kirim dari penampungan data ke Antares
  antares.send(projectName, deviceName);
  delay(10000);
}
```

### Ambil Data Terakhir
Kode ini akan mengambil data terakhir yang terekam di device project Antares anda.  
Contoh kodenya bisa dilihat pada **File > Examples > Antares ESP8266 HTTP > AntaresGetLatestData**

```arduino
#include  <AntaresESP8266HTTP.h >   // Inisiasi library HTTP Antares

#define ACCESSKEY "your-access-key"       // Ganti dengan access key akun Antares anda
#define WIFISSID "your-wifi-ssid"         // Ganti dengan SSID WiFi anda
#define PASSWORD "your-wifi-password"     // Ganti dengan password WiFi anda

#define projectName "your-project-name"   // Ganti dengan application name Antares yang telah dibuat
#define deviceName "your-device-name"     // Ganti dengan device Antares yang telah dibuat

AntaresESP8266HTTP antares(ACCESSKEY);    // Buat objek antares

void setup() {
  Serial.begin(115200);     // Buka komunikasi serial dengan baudrate 115200
  antares.setDebug(true);   // Nyalakan debug. Set menjadi "false" jika tidak ingin pesan-pesan tampil di serial monitor
  antares.wifiConnection(WIFISSID,PASSWORD);  // Mencoba untuk menyambungkan ke WiFi
}

void loop() {
  // Mengambil data terakhir ke penampungan data
  antares.get(projectName, deviceName);

  // Mendapatkan data individu
  int temp = antares.getInt("temperature");
  int hum = antares.getInt("humidity");
  float windsp = antares.getFloat("wind_speed");
  float rainlv = antares.getFloat("rain_level");
  String lat = antares.getString("latitude");
  String lon = antares.getString("longitude");

  // Kirim ke serial monitor
  Serial.println("Temperature: " + String(temp));
  Serial.println("Humidity: " + String(hum));
  Serial.println("Wind speed: " + String(windsp));
  Serial.println("Rain level: " + String(rainlv));
  Serial.println("Latitude: " + lat);
  Serial.println("Longitude: " + lon);
  delay(10000);
}
```

## Antares MQTT
Di bawah ini adalah beberapa contoh-contoh kode untuk mengirim dan menerima data melalui MQTT pada database Antares dengan ESP8266. Mendengarkan data (subscribe) dapat berupa real-time, yang berarti setiap ada masuk ke database Antares melalui topik MQTT, data tersebut akan dibaca oleh ESP8266 secara langsung.

### Kirim (Publish)
Contoh kode untuk pengiriman data ke topic akun antares anda ada di **File > Examples > Antares ESP8266 MQTT > AntaresMQTTPublish**

```arduino
#include <AntaresESP8266MQTT.h>     // Inisiasi library MQTT Antares

#define ACCESSKEY "your-access-key"       // Ganti dengan access key akun Antares anda
#define WIFISSID "your-wifi-ssid"         // Ganti dengan SSID WiFi anda
#define PASSWORD "your-wifi-password"     // Ganti dengan password WiFi anda

#define projectName "your-project-name"   // Ganti dengan application name Antares yang telah dibuat
#define deviceName "your-device-name"     // Ganti dengan device Antares yang telah dibuat

AntaresESP8266MQTT antares(ACCESSKEY);    // Buat objek antares

void setup() {
  Serial.begin(115200);     // Buka komunikasi serial dengan baudrate 115200
  antares.setDebug(true);   // Nyalakan debug. Set menjadi "false" jika tidak ingin pesan-pesan tampil di serial monitor
  antares.wifiConnection(WIFISSID,PASSWORD);  // Mencoba untuk menyambungkan ke WiFi
  antares.setMqttServer();  // Inisiasi server MQTT Antares
}

void loop() {
  /*
    Cek koneksi ke broker MQTT Antares. Jika disconnect,
    akan dicoba untuk menyambungkan lagi
   */
  antares.checkMqttConnection();

  // Inisiasi variabel
  int temp = random(25,30) ;
  int hum = random(75,90);
  float windsp = float(random(20, 30))/3.33;
  float rainlv = float(random(0, 20))/6.99;
  String lat = "-6.8718189";
  String lon = "107.5872477";

  // Tambahkan variabel ke penampungan data sementara
  antares.add("temperature", temp);
  antares.add("humidity", hum);
  antares.add("wind_speed", windsp);
  antares.add("rain_level", rainlv);
  antares.add("latitude", lat);
  antares.add("longitude", lon);

  // Publish data ke database Antares dan juga broker MQTT Antares
  antares.publish(projectName, deviceName);
  delay(5000);
}
```
### Mendengarkan (Subscribe)
Contoh kode untuk mendengarkan topic MQTT akun antares anda ada di **File > Examples > Antares ESP8266 MQTT > AntaresMQTTSubscribe**

```arduino
#include <AntaresESP8266MQTT.h>     // Inisiasi library MQTT Antares

#define ACCESSKEY "your-access-key"       // Ganti dengan access key akun Antares anda
#define WIFISSID "your-wifi-ssid"         // Ganti dengan SSID WiFi anda
#define PASSWORD "your-wifi-password"     // Ganti dengan password WiFi anda

#define projectName "your-project-name"   // Ganti dengan application name Antares yang telah dibuat
#define deviceName "your-device-name"     // Ganti dengan device Antares yang telah dibuat

AntaresESP8266MQTT antares(ACCESSKEY);    // Buat objek antares

/*
  Fungsi utama untuk mendapatkan topik dan payload dari setiap
  pesan MQTT yang diterima oleh ESP8266.
*/
void callback(char topic[], byte payload[], unsigned int length) {

  antares.get(topic, payload, length);  // Menyimpan topic dan payload ke penampungan data sementara

  Serial.println("New Message!");
  Serial.println("Topic: " + antares.getTopic());     // Print topic
  Serial.println("Payload: " + antares.getPayload()); // Print payload

  // Print data-data yang telah didapatkan
  Serial.println("Temperature: " + String(antares.getInt("temperature")));
  Serial.println("Humidity: " + String(antares.getInt("humidity")));
  Serial.println("Wind speed: " + String(antares.getFloat("wind_speed")));
  Serial.println("Rain level: " + String(antares.getFloat("rain_level")));
  Serial.println("Latitude: " + antares.getString("latitude"));
  Serial.println("Longitude: " + antares.getString("longitude"));
}

void setup() {
  Serial.begin(115200);     // Buka komunikasi serial dengan baudrate 115200
  antares.setDebug(true);   // Nyalakan debug. Set menjadi "false" jika tidak ingin pesan-pesan tampil di serial monitor
  antares.wifiConnection(WIFISSID,PASSWORD);  // Mencoba untuk menyambungkan ke WiFi
  antares.setMqttServer();  // Inisiasi server MQTT Antares
  antares.setCallback(callback);  // Set fungsi callback menjadi fungsi callback seperti di atas
}
void loop() {
  /*
    Cek koneksi ke broker MQTT Antares. Jika disconnect,
    akan dicoba untuk menyambungkan lagi
   */
  antares.checkMqttConnection();
}
```
