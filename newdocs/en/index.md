# Getting Started

ANTARES is a Horizontal IoT Platform. What does it mean? We are trying to be as generic as possible so that your IoT Vertical Solution would be fit with the global architecture. There is a lot of possible use cases would fit with us, for example, smart home, smart metering, asset tracking, smart building, etc.  
This tutorial will show you how to store data of your sensor to ANTARES. Hence, there are 4 steps you have to follow:

1. Register for an account
2. Create an application
3. Add your device
4. Store data of your device

The detail steps found below. If you think there is a wrong information or not working regarding this tutorial, please do not hesitate to mail us at support@antares.id

## Register

Our console can be found at https://console.antares.id. If you already have an account, just login through that page. Otherwise you have to register an account in order to use ANTARES' services. Wanna register? Please find an account by visiting https://console.antares.id/register or clicking **"Register"** in the Console page.  

Once you finished filling all the informations. We will send you an email verification. Please click it to verify your account. If your verification email did not come, you can click “Resend Verification” as depicted in figure below.  

Since you already have your account then you can go to the Console as below.  

## Create App
Prior to creating an application, you have to **generate an access key**. This process only happens once when you are a new member. You can find the menu in the **Account -> Access Key -> Get Access Key**.

> Access key determines your account, please keep it safe.  

Then, we can start to create an appliation. Please go back to Applications. In the dashboard page, click “Create an Application”. This will forward you to this page.

In this example, we fill the information as figure below.  

**Yeaayy!! Congratulation you just made your first application**. You can find it in your dashboard.  

## Add device
Internet of Things is about Things. This step is dedicated to teach on how to create the things which we called “device” in our environment.

The UI below will appear, you just click the **“Add Device”**. You can also create the devices through the RESTFUL API. Specifically in Section **HTTP API**. You can also subscribe your device so later when there is any changes or new data coming, your monitor will be **notified**. You can utilize the information to create your own logic.  

Once it is successfully created, it will appear in your dashboard as follows.  

Great you just made your first device!! Now let’s start to store some data into it.  

## Store data
This process should be done using RESTFUL HTTP API. Please take a look at another section. Here is an example for our case  

**HTTP request - XML version**  

| Field  | Value |
|--------|-------|
| URL    | `https://platform.antares.id:8443/~/antares-cse/antares-id/SmartEye/SmartEye1` |
| Method | POST |

**Header**  

| Key          | Value                       |
|--------------|-----------------------------|
| X-M2M-Origin | `access-id:access-password` |
| Content-Type | `application/xml;ty=4`      |
| Accept       | `application/xml`           |

**Body**
```xml
<m2m:cin xmlns:m2m="http://www.onem2m.org/xml/protocols">
<con>
    &lt;num temperature="27.7"/&gt;
    &lt;num humidity="56.0"/&gt;
</con>
</m2m:cin>
```
