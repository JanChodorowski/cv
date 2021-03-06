# CV SERVER

This project was created as a supplement to my job application as a Junior QA Engineer at Monterail.
It's purpose is to deliver fully functional web server in smallest form factor possible.

The battery should provide at least 2 hours of continuous usage.


<img src="documentation/final.jpg" alt="Final product" width="300"/>

## Hardware
1. ESP8266 WiFi SoC module - ESP-01S
2. Winbond 25Q32BVSIG 4MB Flash memory chip
3. TP4056 Lithium Battery Charger and Protection Module
4. 250mAh 3.7V Lithium Polymer Mini Rechargeable Battery
5. Bistable slide switch

Because ESP-01S modules come with 1MB of Flash memory, which was insufficient, the stock memory was desoldered and Winbond chip was soldered in it's place.

## Embedded Software
The software running the web server was written using Arduino in PlatformIO environment.

In order to build the software run the following command inside the terminal form the esp8266 folder:
```
platformio run --target upload
```
After building the frontend (covered later) run the following command to put the data form the "data" folder inside of the chip's filesystem.
```
platformio run --target uploadfs
```

## Frontend
The frontend was written using Preact.js – fast React.js alternative with small code footprint.
Because the device is battery-driven it was decided to not use any lazy loading. Upon request the user is provided with index.html which in turn requests bundle file. The bundle file was compressed using gzip.

The only files not bundled inline are the PDFs with CVs which are, because of their size, loaded only upon explicit request.

In order to build the frontend, run the following from the terminal inside the root of the document:
```
npm install
npm run build
```



<div>Icons made by 
  
  <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond"> Icon Pond </a>
  
  <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market"> Vectors Market </a>
  
  <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons"> Flat Icons </a>
  
 from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY</a></div>





## Case
The case for the server was designed in Rhino3d software and 3D printed on Creality Ender3 3D printer.

<img src="documentation/assembly.png" alt="Assembly" width="600"/>

## Instructions

### HOW TO USE “CV SERVER”
1.  Turn the device on by sliding the switch outwards.

<img src="documentation/instructions.png" alt="Instructions" width="400"/>

2.  Connect to “Jan Chodorowski” Access Point using either mobile device or computer.
3.  Open favorite web browser.
4.  Ignore the “no Internet” alerts if any.
5.  Navigate to 192.168.4.1.
6.  After using the device turn it off by reversing step 1.

*When navigating to github via link, user will be informed of the need of connecting to the WiFi with the access to the Internet.


### IN CASE OF RUNNING OUT OF BATTERY

1.  Make sure the power switch is in the OFF position.
2.  Connect provided microUSB cable to the device.
3.  Connect the cable to 5V power source.
4.  Wait until the red light on the bottom of the device turns blue indicating fully charged battery.
5.  Disconnect the cable form the power source and the device.

