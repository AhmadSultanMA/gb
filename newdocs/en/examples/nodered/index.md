## Tutorial Node RED
Dokumentasi ini membantu Anda untuk menggunakan Node-RED dalam melakukan pengiriman dan penerimaan data. Jika Anda memerlukan bantuan atau menemukan kesalahan dalam penyampaian informasi, jangan ragu untuk menghubungi kami pada support@antares.id

## Pendahuluan
### Menjalankan Node-RED
Pertama-tama Anda harus memasang Node.js dan Node-RED di komputer/perangkat Anda. Jika anda belum memiliki Node.js dan Node-RED, Anda dapat mengikuti tutorial pada halaman https://nodejs.org/en/ dan https://nodered.org/docs/getting-started/installation.

Node-RED adalah suatu alat pemograman untuk menghubungkan perangkat-perangkat keras, API, dan layanan online dengan cara yang baru dan menarik. Node-RED memberikan editor berbasis browser yang memudahkan pengguna untuk menghubungkan flow dengan penggunaan node yang luas di dalam palette yang dapat langsung diterapkan dengan satu klik. Node-RED digunakan bersama dengan Antares, MQTT, dan platform/protokol lain. Setelah terpasang, Node-RED dapat dijalankan dengan mengetik “node-red” pada command prompt.

![nodered](https://antares.id/assets/img/node-red-launch.png)  

Pengguna dapat mengetik “localhost:1880” atau “Alamat-IPv4:1880” di browser untuk mengakses Node-RED.  

### Bagian-bagian Node-RED
![nodered-parts](https://antares.id/assets/img/Node-Red-bagian.png)  

Pada Node-RED, terdapat bagian bernama nodes dan flows. Nodes adalah bagian-bagian yang digunakan untuk membuat program. Ada beberapa jenis nodes: input, output, function, dan lain-lain. Nodes tersebut dapat diunduh di menu “Manage palette”

![nodered-parts-2](https://antares.id/assets/img/Managepalette.png)  

Sebuah jendela akan muncul. Menu “nodes” menunjukkan nodes yang sudah terpasang, sementara menu “install” menunjukkan nodes yang dapat diunduh dan dipasang.  

![usersettings-1](https://antares.id/assets/img/nodes.png)
![usersettings-2](https://antares.id/assets/img/install.png)

Flow adalah tempat untuk memasang nodes. Pada satu jendela Node-RED, bisa saja terdapat lebih dari 1 flow. Flows tidak bergantung satu sama lain.  

## Menggunakan MQTT
### Node MQTT
Node MQTT sudah terpasang pada saat pemasangan Node-RED. Ada dua tipe node MQTT: input MQTT dan output MQTT.

![mqtt](https://antares.id/assets/img/mqtt.png)

### Pengaturan Broker MQTT
Node MQTT memiliki bentuk seperti ini:  
![mqttnode-1](https://antares.id/assets/img/input.png)  

Penambahan broker baru dapat dilakukan dengan memilih “add new mqtt-broker” dan mengklik ikon sebelah kanan. Pengaturan broker dapat dilakukan hanya dengan mengklik ikon sebelah kanan.  

![mqttnode-2](https://antares.id/assets/img/addbroker.png)  

Pengguna dapat menamai broker baru dan mengatur server serta port yang digunakan.  

![mqttnode-3](https://antares.id/assets/img/antares.png)  

### Mengirimkan dan Menerima Data
Simulasi data masukan dari devais dapat dilakukan dengan penggunaan node “inject”.  

![inject](https://antares.id/assets/img/inject.png)  

Node “inject” dapat diubah untuk memberikan tipe data lain. Pada kasus ini, tipe data yang digunakan adalah JSON.  

![inject-1](https://antares.id/assets/img/editinject.png)  

Program dapat ditulis dengan mengklik ikon “...”.  

![inject-2](https://antares.id/assets/img/jsoninject.png)  

Node “debug” dapat digunakan untuk melihat pesan yang dikirim.

![inject-3](https://antares.id/assets/img/output.png)  

Pengguna dapat melihat pesan yang diterima di panel "debug".  

![inject-4](https://antares.id/assets/img/debug.png)
