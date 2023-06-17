const express = require('express');
const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const cloudFrontPrivateKey = fs.readFileSync("./private_key.pem", { encoding: "utf-8" });

const s3 = new AWS.S3();
const cloudFront = new AWS.CloudFront.Signer(process.env.CLOUDFRONT_ID,cloudFrontPrivateKey);

const params = {
  url: `https://d12td6olj368tx.cloudfront.net/goa.jpg`,
  expires: Math.floor(Date.now() / 1000) + 300
};

const signedUrl = cloudFront.getSignedUrl(params);

console.log('Signed URL:', signedUrl);

app.get('/', async (req, res) => {
  res.send(signedUrl);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});