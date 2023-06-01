const express = require('express')
const ImgProxy = require('imgproxy').default
const app = express()
const port = process.env.PORT ?? 3000

const imgproxy = new ImgProxy({
  baseUrl: process.env.IMGPROXY_BASE_URL,
  key: process.env.IMGPROXY_KEY,
  salt: process.env.IMGPROXY_SALT,
  encode: true
})

app.get('/api/posts', (req, res) => {
  return res.json({
    data: {
      items: [
        {
          title: "first title",
          cover: imgproxy.builder().resize('fill', 400, 300, false).generateUrl('http://nginx:9000/image/Wallpaper%20Mix%202017.03%20-%2001.jpg')
        },
        {
          title: "this is my car",
          cover: imgproxy.builder().resize('fit', 800, 600, true).sharpen(0.5).generateUrl('http://nginx:9000/image/Wallpaper%20Mix%202017.03%20-%2014.jpg')
        }
      ]
    }
  })
})

app.listen(port, () => {
  console.log(`backend app listening on port ${port}`)
})