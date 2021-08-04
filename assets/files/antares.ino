
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include "ANTARES.h"
#include <ESP8266HTTPClient.h>

ESP8266WiFiMulti WiFiMulti;
Antares antares;
void setup() {

    Serial.begin(115200);
   // USE_SERIAL.setDebugOutput(true);

    Serial.println();
    Serial.println();
    Serial.println();
    
    for(uint8_t t = 4; t > 0; t--) {
        Serial.printf("[SETUP] WAIT %d...\n", t);
        Serial.flush();
        delay(1000);
    }

    WiFiMulti.addAP("your-ssid", "your-ssid-password");

}

void loop() {
    // wait for WiFi connection
   String projectName= "your-project-name";
   String sensorName = "your-sensor-name"; 
   String accessKey = "access-key";
   antares.GetASensor(projectName, sensorName, accessKey);
   delay(10000);
}

 
