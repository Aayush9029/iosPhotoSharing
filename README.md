
(c)Aayush Pokharel, 2020

# iosPhotoSharing
This is a early alpha photo sharing app for iOS I am working on.


> Feel free to look at my exposed api keys and spaghetti code.

> I will add an iOS app soon, and i will be working on an android app.



### what will it do ?

> Share image using BLE, WIFI, QRCODE, IPV6, Website and email.

> *It's a post once view everywhere kinda app*
*You know kinda like WUPHF* **From the OFFICE**

---
Here's what it looks like right now.</br>
<img src="https://raw.githubusercontent.com/Aayush9029/iosPhotoSharing/gh-pages/readmeImg/01.jpg" width="256">.   <img src="https://raw.githubusercontent.com/Aayush9029/iosPhotoSharing/gh-pages/readmeImg/02.jpg" width="256">

---
How does it work?
- Firebase storage stores the images
- Firebase realtime database stores images url 
- Webapplication displays the images as soon as it get's published.
- The iOS app then takes the url converts them into QR code and display as UIImage. 
