### Problem Statement
Create an S3 bucket which is private and accessible only via a cloudfront distribution. To do this, do the following:
* Create a private S3 bucket.
* Create a cloudfront distribution which has the above S3 bucket as origin.
* Upload an image file on this S3 bucket.
* Write an express server which does the following:
    * makes an api call to the above cloudfront distribution to obtain a signed URL with expiry time of 5 minutes, to the above image file uploaded on S3, and
    * logs this URL on the console.
    * Note: If this signed URL is copy-pasted on a browser, one must be able to view the image file. After 5 minutes, on reload, the same link should stop showing the image and must instead lead to an access-denied page.

## Prerequisites
* Clone repo using ```git clone```
* Run ```npm install```
* Copy paste your ```private_key.pem``` file into root folder.
* Create ```.env``` file. Enter the ```PORT``` and ```CLOUDFRONT_ID```

Example: 
```
PORT=3000
CLOUDFRONT_ID='YOUR_CLOUDFRONT_ID'
```
* Run ```node index.js```