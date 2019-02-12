#include <FS.h>
#include "ESPAsyncTCP.h"
#include "ESPAsyncWebServer.h"

AsyncWebServer server(80);

const char *ssid = "Jan Chodorowski";

void setup()
{
  delay(50);
  SPIFFS.begin();
  WiFi.mode(WIFI_AP);
  WiFi.softAP(ssid);

  server.on("/bundle.js", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/bundle.js");
  });

  server.on("/CV-pl.pdf", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/CV-pl.pdf");
  });

  server.on("/CV-en.pdf", HTTP_GET, [](AsyncWebServerRequest *request) {
    request->send(SPIFFS, "/CV-en.pdf");
  });

  // Serving static resources from /www/
  server.serveStatic("/favicon.ico", SPIFFS, "/www/favicon.ico");

  // Serving all other get requests with "/www/index.htm"
  // OPTIONS get a straight up 200 response
  server.onNotFound([](AsyncWebServerRequest *request) {
    if (request->method() == HTTP_GET)
    {
      request->send(SPIFFS, "/index.html");
    }
    else if (request->method() == HTTP_OPTIONS)
    {
      request->send(200);
    }
    else
    {
      request->send(404);
    }
  });

  server.begin();
}

void loop()
{
}
