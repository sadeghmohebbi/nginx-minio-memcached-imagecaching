# nginx-minio-memcached-imagecaching
Image Caching and Serving scenario with nginx + minio + memcached
<br>
note: replace image_filter with imgproxy in picture below

![nginx-minio-memcached-imagecaching diagram](https://raw.githubusercontent.com/sadeghmohebbi/nginx-minio-memcached-imagecaching/master/assets/diagram.jpg)

## How it works
first install docker and compose plugin. then simply run:
```
sudo docker compose up -d --build
```
for more detailed description, read this article on virgool (farsi)
[پیاده سازی کش عکس توزیع شده با nginx و minio و memcached](https://vrgl.ir/sGQrY)

## Contribution

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request