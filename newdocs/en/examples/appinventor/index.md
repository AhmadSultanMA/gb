## Tutorial MIT App Inventor
Dokumentasi ini menjelaskan cara membuat aplikasi Android (apk) dan menghubungkannya ke ANTARES. Jika anda membutuhkan informasi lebih lanjut, jangan ragu hubungi kami melalui email support@ANTARES.id

## MIT App Inventor
#### Penjelasan
MIT App Inventor merupakan platform untuk memudahkan proses pembuatan aplikasi sederhana tanpa harus mempelajari atau menggunakan bahasa pemrograman yang terlalu banyak. Kita dapat mendesain aplikasi android sesuai keinginan dengan menggunakan berbagai macam layout dan komponen yang tersedia.

Berikut di bawah ini cara menggunakan MIT App Inventor. Jika anda membutuhkan bantuan dan menemukan kekurangan pada tutorial ini, bisa menghubungi kami melalui support@ANTARES.id

## Tampilan MIT App Inventor
Pada MIT App Inventor terdapat dua halaman utama, yaitu halaman designer dan halaman blocks. Halaman designer digunakan untuk mendesain tampilan aplikasi dengan berbagai komponen dan layout yang disediakan sesuai dengan keinginan. Sedangkan halaman blocks digunakan untuk memprogram jalannya aplikasi android sesuai dengan tujuan.

![mit-1](https://antares.id/assets/img/halamandesigner.png)

![mit-2](https://antares.id/assets/img/halamanblocks.png)

## Halaman Designer
Pada halaman designer terdapat beberapa jendela seperti Palette, Viewer, Components, Media, dan Properties. Tools tersebut berfungsi untuk mendesain tampilan aplikasi android sesuai keinginan.

1. Palette merupakan jendela tempat mengambil komponen-komponen yang dikategorikan dalam beberapa kategori untuk dimasukkan dalam aplikasi yang dibuat. Terdapat kategori User Interface, Layout, Media, Drawing and Animation, Maps, Sensors, Social, Storage, Connectivity, LEGO MINDSTORMS, Experimental, dan Extension.
2. Viewer merupakan tempat untuk mengatur tampilan komponen pada aplikasi nantinya.
3. Components merupakan tempat untuk mengatur komponen-komponen yang telah diletakkan di viewer, seperti misalnya mengganti nama komponen, dan menghapus komponen.
4. Properties merupakan tempat untuk mengatur properti layar, dan komponen-komponen yang digunakan pada aplikasi yang sedang dibuat seperti lebar, tinggi, warna latar, besar huruf, dll.
5. Media merupakan tempat untuk mengunggah gambar untuk digunakan pada aplikasi yang sedang dibuat.
Pada bagian Palette terdapat komponen penyusun untuk mendesain aplikasi, berikut adalah komponen penyusunnya:

### User Interface
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![butt](https://antares.id/assets/img/buttonmit.png) | Button | Dapat mendeteksi ketukan, hold down ketika pengguna menekan tombol, atau ketika pengguna melepas tombol. Ketika button mendeteksi salah satu dari hal tersebut, button akan menjalankan perintah. |
| ![check](https://antares.id/assets/img/checkboxmit.png) | Checkbox | Dapat mendeteksi ketukan dari pengguna dan mengganti state-nya menjadi true/false (boolean). |
| ![datepick](https://antares.id/assets/img/datepickermit.png) | Date Picker | Memunculkan kalender untuk memilih tanggal. |
| ![image](https://antares.id/assets/img/imagemit.png) | Image | Memasukkan gambar dalam aplikasi. |
| ![label](https://antares.id/assets/img/labelmit.png) | Label | Menampilkan teks dalam aplikasi. |
| ![listpicker](https://antares.id/assets/img/listpickermit.png) | List Picker | Menampilkan list yang dapat dipilih oleh pengguna ketika pengguna menekan list. |
| ![listview](https://antares.id/assets/img/listviewmit.png) | List View | Menampilkan list. |
| ![notifier](https://antares.id/assets/img/notifiermit.png) | Notifier | Memunculkan pesan/peringatan pop-up pada aplikasi. Pesan dapat hilang secara otomatis, atau harus menerima input dari pengguna terlebih dahulu baru menghilang. |
| ![password](https://antares.id/assets/img/passwordtextboxmit.png) | Password Text Box | Memunculkan pesan/peringatan pop-up pada aplikasi. Pesan dapat hilang secara otomatis, atau harus menerima input dari pengguna terlebih dahulu baru menghilang. |
| ![slider](https://antares.id/assets/img/slidermit.png) | Slider | Menyediakan progress bar yang dapat digeser. |
| ![spinner](https://antares.id/assets/img/spinnermit.png) | Spinner | Menampilkan pop-up list dengan elemen yang dapat dipilih ketika ditekan. |
| ![textbox](https://antares.id/assets/img/textboxmit.png) | Text Box | Menyediakan area untuk mengetik teks. |
| ![timepicker](https://antares.id/assets/img/timepickermit.png) | Time Picker | Memunculkan jam untuk memilih waktu. |
| ![webview](https://antares.id/assets/img/webviewermit.png) | Web Viewer | Menyediakan area yang dapat menampilkan laman web. |

### Layout
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![horz](https://antares.id/assets/img/horizontalarrangementmit.png) | Horizontal Arrangement | Menyusun komponen secara horizontal. |
| ![horzscroll](https://antares.id/assets/img/horizontalscrollarrangementmit.png) | Horizontal Scroll Arrangement | Menyusun komponen secara horizontal, namun jika lebar komponen melebihi lebar komponen ini, maka dapat digeser (scroll). |
| ![table-arrangement](https://antares.id/assets/img/tablearrangementmit.png) | Table Arrangement | Membuat tabel. |
| ![vert](https://antares.id/assets/img/verticalarrangementmit.png) | Vertical Arrangement | Menyusun komponen secara vertikal. |
| ![vertscroll](https://antares.id/assets/img/verticalscrollarrangementmit.png) | Vertical Scroll Arrangement | Menyusun komponen secara vertikal, namun jika tinggi komponen melebihi tinggi komponen ini, maka dapat digeser (scroll). |

### Media
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![camcorder](https://antares.id/assets/img/camcordermit.png) | Camcorder | Mengaktifkan kamera HP dan merekam. |
| ![cam](https://antares.id/assets/img/cameramit.png) | Camera | Mengaktifkan kamera HP dan memotret. |
| ![imgpicker](https://antares.id/assets/img/imagepickermit.png) | Image Picker | Menampilkan galeri pada aplikasi. Pengguna dapat memilih gambar yang akan disimpan dari galeri yang ditampilkan. |
| ![player](https://antares.id/assets/img/playermit.png) | Player | Memainkan musik/audio dan mengatur vibrasi HP. |
| ![sound](https://antares.id/assets/img/soundmit.png) | Sound | Memainkan musik/audio dan mengatur vibrasi HP dalam interval waktu tertentu. |
| ![soundrec](https://antares.id/assets/img/soundrecordermit.png) | Sound Recorder | Merekam suara. |
| ![speechrec](https://antares.id/assets/img/speechrecognizermit.png) | Speech Recognizer | Mengkonversi suara menjadi teks menggunakan fitur speech recognition pada HP. |
| ![texttospeech](https://antares.id/assets/img/texttospeechmit.png) | Text to Speech | Mengkonversi teks menjadi suara. Pitch dan kecepatan pembacaan dapat diatur. |
| ![vidplayer](https://antares.id/assets/img/videoplayermit.png) | Video Player | Memutar video serta menampilkan pengaturannya. |
| ![yandextrans](https://antares.id/assets/img/yandextranslatemit.png) | Yandex Translate | Menerjemahkan teks dari satu bahasa ke bahasa yang lainnya. |

### Drawing and Animation
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![ball](https://antares.id/assets/img/ballmit.png) | Ball | Sprite bola yang dapat berinteraksi pada sentuhan dan tarikan, serta berinteraksi dengan sprite lainnya pada kanvas. |
| ![canvas](https://antares.id/assets/img/canvasmit.png) | Canvas | Kanvas tempat sprite berinteraksi dengan pengguna atau dengan sprite lainnya, atau tempat pengguna menggambar. |
| ![imgsprite](https://antares.id/assets/img/imagespritemit.png) | Image Sprite | Sprite gambar yang dapat berinteraksi pada sentuhan dan tarikan, serta berinteraksi dengan sprite lainnya pada kanvas. |

### Maps
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![circle](https://antares.id/assets/img/circlemit.png) | Circle | Memvisualisasikan lingkaran dengan radius tertentu (dalam meter) pada koordinat tertentu. Dapat juga digunakan untuk menjalankan program ketika pengguna berada di suatu area. |
| ![featurecollect](https://antares.id/assets/img/featurecollectionmit.png) | Feature Collection | Mengelompokkan fitur-fitur Maps. Event yang terjadi pada salah satu komponen pada kelompok tersebut, akan memicu event pada komponen-komponen lainnya. |
| ![linestring](https://antares.id/assets/img/linestringmit.png) | Line String | Menggambar garis pada peta. |
| ![map](https://antares.id/assets/img/mapmit.png) | Map | Menampilkan peta pada layar aplikasi. |
| ![marker](https://antares.id/assets/img/markermit.png) | Marker | Memberi tanda pada suatu lokasi di peta. |
| ![polygon](https://antares.id/assets/img/polygonmit.png) | Polygon | Membuat perimeter pada peta. |
| ![rectangle](https://antares.id/assets/img/rectanglemit.png) | Rectangle | Merupakan polygon dengan garis lintang dan garis bujur untuk batas utara, selatan, timur, dan barat. Jika sudut segiempat dipindahkan, maka informasi koordinat akan diperbaharui. |

### Sensors
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![accelero](https://antares.id/assets/img/acceleromit.png) | Accelerometer Sensor | Mendeteksi goyangan dan percepatan dalam m/s2. |
| ![barcode-scan](https://antares.id/assets/img/barcodemit.png) | Barcode Scanner | Membaca barcode. |
| ![gyro](https://antares.id/assets/img/gyroscopemit.png) | Gyroscope Sensor | Mengukur kecepatan sudut dalam derajat/detik. |
| ![location](https://antares.id/assets/img/locationmit.png) | Location Sensor | Menyediakan informasi geografis seperti koordinat, ketinggian, kecepatan, dan alamat. Dapat juga mengkonversi alamat menjadi koordinat. |
| ![nearfield](https://antares.id/assets/img/nearfieldmit.png) | Near Field | Memungkinkan aplikasi mengaktifkan fitur komunikasi jarak dekat (NFC). |
| ![orient](https://antares.id/assets/img/orientationmit.png) | Orientation | Menentukan orientasi HP. |
| ![pedometer](https://antares.id/assets/img/pedometermit.png) | Pedometer | Menentukan banyaknya langkah, dan jarak yang ditempuh. |
| ![proximity](https://antares.id/assets/img/proximitymit.png) | Proximity Sensor | Mengukur jarak antara objek dengan layar HP. |

### Social
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![contact](https://antares.id/assets/img/contactpickermit.png) | Contact Picker | Menampilkan list berisi kontak ketika ditekan. |
| ![email](https://antares.id/assets/img/emailpickermit.png) | Email Picker | Menampilkan list berisi email ketika pengguna mengetikkan kata kunci ataupun email dari orang yang dituju. |
| ![phone](https://antares.id/assets/img/phonecallmit.png) | Phone Call | Melakukan panggilan telepon. |
| ![phonenumpick](https://antares.id/assets/img/phonenumberpickermit.png) | Phone Number Picker | Menampilkan list berisi nomor kontak pada layar HP. |
| ![sharing](https://antares.id/assets/img/sharingmit.png) | Sharing | Memungkinkan pertukaran berkas atau pesan antara satu aplikasi dengan aplikasi lainnya yang terdapat pada HP. |
| ![texting](https://antares.id/assets/img/textingmit.png) | Texting | Mengirim pesan teks ke suatu nomor kontak. |
| ![twitter](https://antares.id/assets/img/twittermit.png) | Twitter | Memungkinkan komunikasi dengan Twitter sehingga pengguna dapat membuat tweet, melihat tweet, dll. |

### Storage
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![file](https://antares.id/assets/img/filemit.png) | File | Menerima atau mengirim berkas. Dapat juga digunakan untuk membaca atau menulis berkas. |
| ![fusiontables](https://antares.id/assets/img/fusiontablesmit.png) | Fusiontables Control | Memungkinkan komunikasi dengan Google Fusion Table. Google Fusion Table dapat menyimpan, membagikan, query, dan memvisualisasikan tabel data. |
| ![tinydb](https://antares.id/assets/img/tinydbmit.png) | TinyDB | Menyimpan data untuk aplikasi sehingga ketika aplikasi ditutup, dan kemudian dibuka kembali, data masih tersimpan. |
| ![tinywebdb](https://antares.id/assets/img/tinywebdbmit.png) | Tiny Web DB | Menyimpan data pada web. |

### Connectivity
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![activitystarter](https://antares.id/assets/img/activitystartermit.png) | Activity Starter | Memanggil aplikasi lain. |
| ![btclient](https://antares.id/assets/img/bluetoothclientmit.png) | Bluetooth Client | Membuat aplikasi sebagai Bluetooth client. |
| ![btserver](https://antares.id/assets/img/bluetoothservermit.png) | Bluetooth Server | Membuat aplikasi sebagai Bluetooth server. |
| ![web](https://antares.id/assets/img/webmit.png) | Web | Memungkinkan aplikasi untuk berinteraksi dengan web dan menyediakan fungsi untuk HTTP GET, POST, PUT, dan DELETE. |


### Experimental
| Simbol | Nama | Fungsi |
|--------|------|--------|
| ![clouddb](https://antares.id/assets/img/clouddbmit.png) | CloudDB | Memungkinkan pengguna aplikasi untuk saling bertukar data pada database dengan software Redis. |
| ![firebasedb](https://antares.id/assets/img/firebasedbmit.png) | FirebaseDB | Memungkinkan pengguna aplikasi untuk saling bertukar data pada database dengan Firebase. |

## Halaman Blocks
Pada halaman blocks terdapat beberapa codeblock yang berfungsi untuk memprogram aplikasi android sesuai yang diinginkan. Pada halaman block terdapat beberapa komponen seperti Control, Logic, Math, Text, Lists, Colors, Variables, dan Procedures. Berikut adalah komponen yang terdapat pada halaman blocks:

### Control
| Blok Kode | Fungsi |
|-----------|--------|
| ![if](https://antares.id/assets/img/controlmit1.png) | If kondisional. Jika “if” memenuhi syarat, maka blok yang ada setelah “then” dieksekusi. |
| ![for](https://antares.id/assets/img/controlmit2.png) | Looping dari angka pertama hingga angka terakhir dengan suatu interval. Maka gambar disamping berarti loop dari angka 1 hingga 5 dengan interval 1: 1, 2, 3, 4, 5. |
| ![foreach](https://antares.id/assets/img/controlmit3.png) | For bertingkat. Untuk setiap objek dalam list, dilakukan looping. |
| ![while](https://antares.id/assets/img/controlmit4.png) | Jika nilai test true, maka loop while berjalan. |

### Logic
| Blok Kode | Fungsi |
|-----------|--------|
| ![bool](https://antares.id/assets/img/logicmit1b.png) | Boolean true/false. |
| ![not](https://antares.id/assets/img/logicmit2.png) | Jika dipasangkan dengan true/false maka true menjadi false, dan false menjadi true. |
| ![equal](https://antares.id/assets/img/logicmit3.png) | Memeriksa apakah satu objek sama dengan/tidak sama dengan objek di kanan. Jika sesuai kriteria, maka blok akan bernilai true, dan false jika tidak sesuai. |
| ![andor](https://antares.id/assets/img/logicmit4.png) | Pada logika and jika kedua syarat terpenuhi, maka nilainya menjadi true. Sedangkan pada logika or, jika salah satu syarat atau keduanya terpenuhi, maka nilainya menjadi true. |

### Math
| Blok Kode | Fungsi |
|-----------|--------|
| ![num](https://antares.id/assets/img/mathmit1.png) | Digunakan untuk menginput angka. |
| ![compare](https://antares.id/assets/img/mathmit2.png) | Digunakan untuk membandingkan dua angka. Perbandingan dapat berupa sama dengan, tidak sama dengan, lebih dari, kurang dari, lebih dari sama dengan, dan kurang dari sama dengan. |
| ![operator](https://antares.id/assets/img/mathmit3.png) | Operasi matematika dasar, yaitu tambah, kurang, kali, bagi, pangkat, dan modulus. |
| ![randint](https://antares.id/assets/img/mathmit4.png) | Mengambil nilai integer secara acak dari range yang ditentukan. |
| ![trigono](https://antares.id/assets/img/mathmit5.png) | Operasi trigonometri sin, cos, tan. |

### Text
| Blok Kode | Fungsi |
|-----------|--------|
| ![empty](https://antares.id/assets/img/textmit1.png) | Teks kosong. |
| ![join](https://antares.id/assets/img/textmit2.png) | Menggabungkan dua atau lebih teks. |
| ![isempty](https://antares.id/assets/img/textmit3.png) | Memeriksa jika teks kosong atau tidak. |
| ![contains](https://antares.id/assets/img/textmit4.png) | Memeriksa apakah ada bagian tertentu dalam suatu teks. |
| ![split](https://antares.id/assets/img/textmit5.png) | Memisahkan teks pada penanda tertentu dan membuatnya menjadi list. |

### List
| Blok Kode | Fungsi |
|-----------|--------|
| ![emptylist](https://antares.id/assets/img/listmit1.png) | Membuat list kosong. |
| ![makelist](https://antares.id/assets/img/listmit2.png) | Membuat list. |
| ![additems](https://antares.id/assets/img/listmit3.png) | Menambahkan elemen pada list. |
| ![isinlist](https://antares.id/assets/img/listmit4.png) | Memeriksa apakah ada elemen tertentu pada list. |
| ![length](https://antares.id/assets/img/listmit5.png) | Memeriksa banyaknya elemen pada list. |
| ![islistempty](https://antares.id/assets/img/listmit6.png) | Memeriksa apakah list kosong atau tidak. |
| ![select](https://antares.id/assets/img/listmit7.png) | Mengambil elemen dari suatu list. |
| ![remove](https://antares.id/assets/img/listmit8.png) | Menghapus elemen dari suatu list. |

### Colors
| Blok Kode | Fungsi |
|-----------|--------|
| ![colors](https://antares.id/assets/img/colorsmit1.png) | Pilihan warna yang disediakan MIT AI. |
| ![makecolor](https://antares.id/assets/img/colorsmit2.png) | Membuat warna sendiri dengan menggunakan kode RGB warna. |

### Variables
| Blok Kode | Fungsi |
|-----------|--------|
| ![initialize](https://antares.id/assets/img/variablesmit1.png) | Membuat suatu variabel global. |
| ![getvar](https://antares.id/assets/img/variablesmit2.png) | Mengambil variabel global. |
| ![modifyvar](https://antares.id/assets/img/variablesmit3.png) | Memodifikasi isi dari variabel global. |

### Procedure
| Blok Kode | Fungsi |
|-----------|--------|
| ![makeprocedure](https://antares.id/assets/img/proceduremit1.png) | Membuat suatu prosedur. |
| ![procedurefunc](https://antares.id/assets/img/proceduremit2.png) | Membuat suatu fungsi yang mengembalikan hasil tertentu. |

## Menghubungkan ke ANTARES
Setelah kita mengetahui tentang MIT App Inventor dan fitur-fitur yang ada, selanjutnya kita akan membuat sebuah aplikasi yang akan terhubung ke server ANTARES untuk mengirim dan menerima data.

### Kirim Data ke Server
Kirim data (post) pada bagian MIT App Inventor, merupakan perintah yang digunakan dalam aplikasi MIT App Inventor untuk dapat melakukan post data secara manual dari data yang kita input dalam “text box” MIT App Inventor ke Platform ANTARES. Sebelum membuat code blocks untuk aplikasi Post, dapat dilakukan dengan membuat desain terlebih dahulu. Desain komponen yang telah kita buat tersebut, berfungsi sebagai tools yang akan membantu pengguna untuk dapat menjalankan aplikasi yang telah dibuat. Contoh desain untuk aplikasi Post Data dari MIT App Inventor ke ANTARES sebagai berikut:

![postsimple](https://antares.id/assets/img/postdatamit.png)  

Desain di atas menggunakan beberapa komponen, yaitu:  

| No. | Palette | Komponen | Nama Komponen |
|-----|---------|----------|---------------|
| 1 | User Interface | Label | Header |
| 2 | User Interface | Label | Temperature |
| 3 | User Interface | Label | Humidity |
| 4 | User Interface | TextBox | TextBox1 |
| 5 | User Interface | TextBox | TextBox2 |
| 6 | User Interface | Button | PostButton |
| 7 | Layout | HorizontalArrangement | HorizontalArrangement1 |
| 8 | Layout | HorizontalArrangement | HorizontalArrangement2 |
| 9 | Connectivity | Web | Web1 |

Setelah kita membuat desain tampilan aplikasi, langkah selanjutnya yang harus dilakukan yaitu membuat program untuk menjalankan aplikasi sesuai dengan tujuan. Untuk memprogramnya kita gunakan code blocks yang terdapat pada halaman blocks.  

Untuk dapat mengirim data ke server ANTARES, format pengiriman data menggunakan format JSON. Berikut di bawah ini adalah format JSON beserta code blocks:  


```json
{
	"m2m:cin":{
		"con":"{\"key1\":integer-value, \"key2\":\"string-value\", \"keyN\":\"valueN\"}"
		}
}
```

![block1](https://antares.id/assets/img/codeblockpostmit.png)  

Setelah kita membuat desain dan program untuk aplikasinya, selanjutnya kita akan melihat data yang dikirim ke server melalui console ANTARES (https://console.antares.id/dashboard/application). Berikut adalah data yang ditampilkan pada console ANTARES:  

![console](https://antares.id/assets/img/consolepostmit.png)

### Menerima Data dari Server
Aplikasi Get data dengan MIT App Inventor merupakan aplikasi sederhana yang akan menampilkan data yang kita ambil dari suatu platform melalui URL dan Header. Dalam proses Get Data ini menggunakan platform ANTARES. Contoh yang kami buat ini, mencoba untuk melakukan get data dari documentations ANTARES “Retrieve Latest Data”. Sebelum membuat aplikasi Get Data pada MIT App Inventor, terlebih dahulu kita buat desain untuk aplikasinya seperti berikut :

![simpleget](https://antares.id/assets/img/desaingetdatamit.png)  

Desain di atas menggunakan beberapa komponen, yaitu:  

| No. | Palette | Komponen | Nama Komponen |
|-----|---------|----------|---------------|
| 1 | User Interface | Button | Button |
| 2 | User Interface | Label | Header |
| 3 | User Interface | Web | Web1 |

Setelah kita membuat desain aplikasinya, selanjutnya kita program dengan menggunakan code blocks yang tersedia sebagai berikut:

![block2](https://antares.id/assets/img/codeblockgetmit.png)  

Setelah kita mendesain dan memprogram aplikasinya, maka kita dapat melihat hasilnya pada aplikasi android yang kita buat tadi. Data yang ditampilkan yaitu data terakhir dari console di ANTARES yang memiliki format JSON. Berikut adalah tampilan hasilnya:

![resultget](https://antares.id/assets/img/hasilgetdatamit.png)  

### Menerima Data Realtime
Pada bagian ini, dibuat sebuah aplikasi yang dapat mengambil data dari Antares, menampilkannya pada layar, dan memperbaharui data yang ditampilkan secara otomatis apabila pengguna ingin mendapatkan live measurement. Data yang diambil merupakan data temperatur dan kelembaban yang didapat dengan menggunakan sensor DHT11. UI pada aplikasi ini terdiri dari 3 bagian, yaitu bagian instruksi, bagian hasil, dan bagian preview. Berikut pengaturan user interface yang dibuat pada tab “Designer” MIT App Inventor (AI):

![realtime](https://antares.id/assets/img/desainrealtimemit.png)  

Desain di atas menggunakan beberapa komponen, yaitu:  

| No. | Palette | Komponen | Nama Komponen |
|-----|---------|----------|---------------|
| 1 | User Interface | Label | Label1 |
| 2 | Layout | HorizontalArrangement | HorizontalArrangement1 |
| 3 | User Interface | Button | BGet |
| 4 | User Interface | CheckBox | CBLiveMeasurement |
| 5 | User Interface | Label | LRC |
| 6 | User Interface | Label | Label2 |
| 7 | Layout | HorizontalArrangement | HorizontalArrangement2 |
| 8 | User Interface | Label | Label5 |
| 9 | User Interface | Label | LTemp |
| 10 | Layout | HorizontalArrangement | HorizontalArrangement3 |
| 11 | User Interface | Label | Label6 |
| 12 | User Interface | Label | LHum |
| 13 | User Interface | Label | Label3 |
| 14 | User Interface | Label | LRaw |
| 15 | User Interface | Label | Label4 |
| 16 | User Interface | HorizontalArrangement | HorizontalArrangement4 |
| 17 | User Interface | HorizontalArrangement | HorizontalArrangement5 |
| 18 | User Interface | HorizontalArrangement | HorizontalArrangement6 |
| 19 | User Interface | Label | Label7 |
| 20 | User Interface | Label | LJSON1 |
| 21 | User Interface | Label | Label9 |
| 22 | User Interface | Label | LJSON2 |
| 23 | User Interface | Label | Label11 |
| 24 | User Interface | Label | LJSON3 |
| 25 | User Interface | Label | LParsed |
| 26 | Connectivity | Web | Web1 |
| 27 | Sensors | Clock | Clock1 |

Setelah kita membuat desain aplikasinya, selanjutnya kita program dengan menggunakan code blocks yang tersedia sebagai berikut:  

![block3](https://antares.id/assets/img/codeblockrealtimemit1.png)  

Setelah kita mendesain dan memprogram aplikasinya, maka kita dapat melihat hasilnya pada aplikasi android yang kita buat. Data yang ditampilkan yaitu data terakhir dan akan terus merefresh otomatis. Berikut adalah tampilan hasilnya:  

![resultget2](https://antares.id/assets/img/datarealtime1.png)
![resultget3](https://antares.id/assets/img/datarealtime2.png)
