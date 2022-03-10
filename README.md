## Purpose

This project was completed as part of a group learning exercise. This landing page describes a subscription plan for on demand software development assistance.

## Demo

![Hero Image](https://user-images.githubusercontent.com/14803/157603655-09d6fde5-207f-4067-b5f0-01b629c69001.png)

[https://expertise.netlify.app/](https://expertise.netlify.app/)

## Project Features

### User Stories

1. ✅ User can see the page with the product
2. ✅ User can see a list with all the features of the product
3. ✅ User can see how this product will improve ther life
4. ✅ User can fill out a contact form

## Technical

### Dependencies

- typescript
- react
- remix
- tailwindcss
- filebase

### Contact Form

Normally a contact form isn't very exciting. With this form we are storing the submitted data using an S3 compatible object storage. The API is provided by [https://filebase.com/](https://filebase.com/) and is backed by an open source decentralized storage network called Sia.

When the form is submitted, a `POST` request is sent to `/contact`.

```html
<Form method="post" action="/contact">
```

> Note: This is a remix `Form` component that wraps a regular `form`.

We handle that request and send the submitted data to Filebase. This is using the [@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3) package.

```javascript
/* Create an object with using the body data */
const data = {
  email: body.get("email"),
  reason: body.get("reason"),
};

await client.send(
  new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: `waitlist/${uuidv4()}.json`,
    /* Convert the data object to store it. */
    Body: JSON.stringify(data, null, 2),
  })
);
```

### Development

The Netlify CLI starts your app in development mode, rebuilding assets on file changes.

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

### Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build

# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
