# API | HTTP

## Pendahuluan
Antares menggunakan approach RESTful dalam mengembangkan API sehingga API yang disediakan lebih representatif dan mudah digunakan user. Sebuah API terdiri atas URL dan parameter.

#### URL
URL merupakan kependekan dari Uniform Resource Locator. URL dalam bahasa sederhana adalah link. URL tersusun dari domain dan diikuti port. Dalam banyak kasus, https tidak terlihat portnya, ketika server tersebut menggunakan port default (443). Oleh karena itu, server yang tidak menggunakan port default, harus dicantumkan portnya, contoh  

`https://platform.antares.id:8443`  

Penjelasan lebih detail terkait RESTful API bisa didapatkan di https://www.restapitutorial.com/

#### Parameter
Parameter digunakan ketika ingin menginputkan sesuatu melalui API. Parameter bisa terdapat di Headers, Path, dan Query String Parameter.  

**Header Parameter**  
```
X-M2M-Origin:{{access-key}}
Content-Type:application/json;ty=3
Accept:application/json
```

**Path Parameter**  
`https://platform.antares.id:8443/~/antares-cse/antares-id/{{your-application-name}}`  

**Query String Parameter**  
Query string parameters digunakan dengan simbol tanda tanya (?) di URLnya. Setelah tanda tanya (?) adalah parameter dan nilainya yang dihubungkan dengan simbol sama dengan (=). Setiap query string parameter dipisahkan dengan simbol (&).  

`https://platform.antares.id:8443/~/antares-cse/antares-id/{{your-application-name}}?fu=1&ty=3&lim=5`  

Penjelasan lebih detail terkait parameters silahkan dapatkan di https://idratherbewriting.com/learnapidoc/docapis_doc_parameters.html

## List Query String Parameter

| Parameter | Value | Keterangan          |
|-----------|-------|---------------------|
| fu        | 0     | Non-aktifkan Filter |
| fu        | 1     | Aktfikan Filter     |
| lim       | 2     | Jumlah response yang diharapkan |

## Device

### Create
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-project-ID`<br><br>Note: `your-project-ID` must be starting with `CAE`. e.g. `CAE760571675`|
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=3` (XML) <br> or <br> `application/json;ty=3` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

**Body (XML)**
```xml
<m2m:cnt xmlns:m2m="http://www.onem2m.org/xml/protocols" rn="your-device-name">
</m2m:cnt>
```
**Body (JSON)**
```json
{
  "m2m:cnt": {
    "rn": "your-device-name"
  }
}
```

### Retrieve All Devices
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name?fu=1&ty=3`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-project-ID?fu=1&ty=3`<br><br>Note: `your-project-ID` must be starting with `CAE`. e.g. `CAE760571675`|
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

### Retrieve a Device
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

### Delete  
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289`|
| Method | `DELETE` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

## Data of Device
### Store
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289`|
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=4` (XML) <br> or <br> `application/json;ty=4` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

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

### Retrieve All
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name?fu=1&ty=4&drt=1`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID?fu=1&ty=4&drt=1`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |


### Retrieve a Data
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/data-of-device-ID`<br><br>Note `data-of-device-ID` is the one you got while **Retrieving All Data of Device ID (See above)** it must be starting with `cin` e.g `cin_122882447`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

### Retrieve Latest
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name/la` |
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=4` (XML) <br> or <br> `application/json;ty=4` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

### Retrieve Oldest
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name/ol` |
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=4` (XML) <br> or <br> `application/json;ty=4` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

## Grouping
### Create Group of Devices
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-project-ID`<br><br>Note: `your-project-ID` must be starting with `CAE`. e.g. `CAE760571675`|
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=9` (XML) <br> or <br> `application/json;ty=9` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

**Body (XML)**
```xml
<m2m:grp xmlns:m2m="http://www.onem2m.org/xml/protocols" rn="group-name">
    <mt>3</mt>
    <mid>/antares-cse/your-device-id-1 /antares-cse/your-device-id-2</mid>
    <mnm>10</mnm>
</m2m:grp>
```
**Body (JSON)**
```json
{
  "m2m:grp": {
    "rn": "group-name2",
    "mt": "3",
    "mid": ["/antares-cse/cnt-516560931","/antares-cse/cnt-639303104"],
    "mnm": "10"
  }
}
```
### Retrieve Group Info
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-group-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-group-ID`<br><br>Note: `your-group-ID` must be starting with `grp`. e.g. `grp-123456789`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=9` (XML) <br> or <br> `application/json;ty=9` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

### Retrieve Devices Info of a Group
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-group-name/fopt`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=9` (XML) <br> or <br> `application/json;ty=9` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

### Delete Group of Devices
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-group-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-group-ID`<br><br>Note: `your-group-ID` must be starting with `grp`. e.g. `grp-123456789`|
| Method | `DELETE` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=9` (XML) <br> or <br> `application/json;ty=9` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

## Subscriber
### Create Sub of Project
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-project-ID`<br><br>Note: `your-project-ID` must be starting with `CAE`. e.g. `CAE760571675`|
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=23` (XML) <br> or <br> `application/json;ty=23` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

**Body (XML)**
```xml
<m2m:sub xmlns:m2m="http://www.onem2m.org/xml/protocols" rn="your-subscriber-name">
	<nu>your-server-address</nu>
	<nct>2</nct>
</m2m:sub>
```
**Body (JSON)**
```json
{
  "m2m:sub": {
    "rn": "your-subscriber-name",
    "nu": "your-server-hostname-or-ip",
    "nct": 2
  }
}
```

### Create Sub of Device
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289`|
| Method | `POST` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml;ty=23` (XML) <br> or <br> `application/json;ty=23` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)           |

**Body (XML)**
```xml
<m2m:sub xmlns:m2m="http://www.onem2m.org/xml/protocols" rn="your-subscriber-name">
	<nu>your-server-address</nu>
	<nct>2</nct>
</m2m:sub>
```
**Body (JSON)**
```json
{
  "m2m:sub": {
    "rn": "your-subscriber-name",
    "nu": "your-server-hostname-or-ip",
    "nct": 2
  }
}
```
### Retrieve All Subscribers of Project
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/application-name?fu=1&ty=23`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-project-ID?fu=1&ty=23`<br><br>Note: `your-project-ID` must be starting with `CAE`. e.g. `CAE760571675`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)     |

### Retrieve Particular Subscriber of Project
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/subscriber-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-subscriber-ID`<br><br>Note: `your-subscriber-ID` must be starting with `sub`. e.g. `sub-123456789`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)     |

### Retrieve  All Subscribers of Device
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/application-name/device-name?fu=1&ty=23`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-device-ID?fu=1&ty=23`<br><br>Note: `your-device-ID` must be starting with `CNT`. e.g. `CNT-842419289`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)     |

### Retrieve Particular Subscriber of Device
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name/subscriber-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-subscriber-ID`<br><br>Note: `your-subscriber-ID` must be starting with `sub`. e.g. `sub-123456789`|
| Method | `GET` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)     |

### Delete Sub of Project
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/subscriber-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-subscriber-ID`<br><br>Note: `your-subscriber-ID` must be starting with `sub`. e.g. `sub-123456789`|
| Method | `DELETE` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)     |


### Delete Sub of Device
| Field | Value |
|-------|-------|
| URL   | `https://platform.antares.id:8443/~/antares-cse/antares-id/your-application-name/your-device-name/subscriber-name`<br>or<br>`https://platform.antares.id:8443/~/antares-cse/your-subscriber-ID`<br><br>Note: `your-subscriber-ID` must be starting with `sub`. e.g. `sub-123456789`|
| Method | `DELETE` |

**Header**  

| Key | Value |
|-----|-------|
| X-M2M-Origin	| `access-id:access-password` |
| Content-Type	| `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
| Application   | `application/xml` (XML) <br> or <br> `application/json` (JSON)     |
