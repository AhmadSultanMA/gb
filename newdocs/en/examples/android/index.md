## Tutorial Android
Dokumentasi ini membantu Anda untuk memasang Library Android. Jika Anda memerlukan bantuan atau menemukan informasi yang kurang, jangan ragu untuk menghubungi kami melalui support@antares.id

## Install dan Buat Project
### Prasyarat
* Java JDK. Belum menginstall? [Ikuti tutorial ini](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
* Android Studio IDE. Belum menginstall? [Ikuti tutorial ini](https://developer.android.com/studio/index.html).

### Langkah-langkah
1. Download Antares Library untuk Android dengan klik button di bawah. Simpan .jar library kedalam penyimpanan lokal komputer Anda.  
[Download](https://antares.id/assets/files/libraries/antares-http-api-0.9.jar)

2. Klik "Start a new Android Studio Project".  
![start1](https://antares.id/assets/img/android-library-tutorial-1.jpg)

3. Beri nama pada aplikasi Anda.
![start-2](https://antares.id/assets/img/android-library-tutorial-2.jpg)

4. Definisikan SDK target.
![start-3](https://antares.id/assets/img/android-library-tutorial-3.jpg)

5. Definisikan Activity Anda. Kami menyarankan Anda untuk memilih "Empty Activity".
![start-4](https://antares.id/assets/img/android-library-tutorial-4.jpg)

6. Beri nama Activity Anda. Kami menyarankan Anda untuk memilih pilihan default "MainActivity"
![start-6](https://antares.id/assets/img/android-library-tutorial-5.jpg)

7. Klik pada bagian "Android".
![start-7](https://antares.id/assets/img/android-library-tutorial-6.jpg)

8. Pindah layout ke "Project".
![start-8](https://antares.id/assets/img/android-library-tutorial-7.jpg)

9. Copy-Paste library jar yang telah didownload ke app -> libs.
![start-9](https://antares.id/assets/img/android-library-tutorial-8.jpg)

10. Selamat! Anda telah memasukkan library jar.
![start-10](https://antares.id/assets/img/android-library-tutorial-9.jpg)

## Coding Stuff
#### Data yang tersimpan di Antares
![data](https://antares.id/assets/img/android-library-tutorial-12.png)

#### Mendapatkan data terakhir dari device Anda melalui Android
### AndroidManifest.xml
Agar bisa mengeksekusi API Antares, dibutuhkan akses Internet dan agar bisa mengakses Internet di Android, kita harus tambahkan baris berikut di AndroidManifest.xml.

```xml
<!--- IMPORTANT!!!!!!! --->
<!--- Tambahkan line berikut di AndroidManifest.xml Anda --->
<!--- Setelah manifest --->
<uses-permission android:name="android.permission.INTERNET" />
<!--- Sebelum application --->
```

### activity_main.xml
Ubah **SEMUA** isi dari activity_main.xml dengan konten berikut ini:
```xml
<?xml version="1.0" encoding="utf-8"?>
<android.widget.LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity"
    android:orientation="vertical">

    <TextView
        android:id="@+id/txtData"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="No Data"
        android:textSize="24sp"/>

    <Button
        android:id="@+id/btnRefresh"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Refresh"/>

</android.widget.LinearLayout>
```

### MainActivity.java
```java
// !!!!------ IMPORTANT ---------!!!!//
// Ubah semua code setelah package nama.package.Anda dengan
// dengan Code berikut

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import org.json.JSONException;
import org.json.JSONObject;

import id.co.telkom.iot.AntaresHTTPAPI;
import id.co.telkom.iot.AntaresResponse;

public class MainActivity extends AppCompatActivity implements AntaresHTTPAPI.OnResponseListener{

    private Button btnRefresh;
    private TextView txtData;
    private String TAG = "ANTARES-API";
    private AntaresHTTPAPI antaresAPIHTTP;
    private String dataDevice;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // --- Inisialisasi UI yang digunakan di aplikasi --- //
        btnRefresh = (Button) findViewById(R.id.btnRefresh);
        txtData = (TextView) findViewById(R.id.txtData);

        // --- Inisialisasi API Antares --- //
        antaresAPIHTTP = AntaresHTTPAPI.getInstance();
        antaresAPIHTTP.addListener(this);

        btnRefresh.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                antaresAPIHTTP.getLastDataofDevice("your-access-key","your-application-name","your-device-name");
            }
        });
    }

    @Override
    public void onResponse(AntaresResponse antaresResponse) {
        // --- Cetak hasil yang didapat dari ANTARES ke System Log --- //
        Log.d(TAG,antaresResponse.toString());

        try {
            JSONObject body = new JSONObject(antaresResponse.getBody());
            dataDevice = body.getJSONObject("m2m:cin").getString("con");
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    txtData.setText(dataDevice);
                }
            });
            Log.d(TAG,dataDevice);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
```

### Hasil Tampilan
Kita dapat melakukan filter terhadap hasil log keluaran di Android. Silahkan isi di bagian seperti gambar berikut. Ketika tombol diklik, maka hasil output yang didapatkan juga bisa dilihat pada gambar di bawah ini.

![logcat-1](https://antares.id/assets/img/android-library-tutorial-13.png)

#### Selamat!! Anda telah membuat Android APP pertama Anda dengan menggunakan Library Antares.

![output](https://antares.id/assets/img/nbiot-android.png)
