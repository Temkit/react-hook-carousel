## React Hook Carousel

[1]: https://github.com/Temkit/react-hook-carousel.git

_the lightest carousel you'll ever need_

#### Demo

[https://react-hook-carousel.now.sh/](https://react-hook-carousel.now.sh/)

#### Package Managers

```sh
# NPM
npm install react-hook-carousel
```

### Settings

| Option     | Type    | Default | Description                                                                                                    |
| ---------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| Items      | Array   |         | Array of elements containing images to slide. each element is an object containing two attributes, src and alt |
| groupBy    | number  | null    | the number of slider to show                                                                                   |
| effect     | string  | fade    | the effect used to slide                                                                                       |
| showDots   | boolean | false   | show dots                                                                                                      |
| showButton | boolean | false   | show previous and next dots                                                                                    |

##### How to use

Array Format Local images

```javascript
const slider = [
  { image: require("./images/slider/slider1.jpg"), alt: "alt image1" },
  { image: require("./images/slider/slider2.jpg"), alt: "alt image2" },
  { image: require("./images/slider/slider3.jpg"), alt: "alt image3" },
  { image: require("./images/slider/slider4.jpg"), alt: "alt image4" },
  { image: require("./images/slider/slider5.jpg"), alt: "alt image5" },
  { image: require("./images/slider/slider6.jpg"), alt: "alt image6" }
];
```

Array Format Remote images

```javascript
const slider = [
  {
    image: "https://s3.amazonaws.com/bucket/images/slider/slider1.jpg",
    alt: "alt image1"
  },
  {
    image: "https://s3.amazonaws.com/bucket/images/slider/slider2.jpg",
    alt: "alt image2"
  },
  {
    image: "https://s3.amazonaws.com/bucket/images/slider/slider3.jpg",
    alt: "alt image3"
  },
  {
    image: "https://s3.amazonaws.com/bucket/images/slider/slider4.jpg",
    alt: "alt image4"
  }
];
```

One Item to slide:

```javascript
<Carousel items={slider} groupBy={false} showDots={false} effect="fade" />
```

Multiple Items to slide

```javascript
<Carousel items={slider} groupBy={5} showDots={false} effect="fade" />
```

#### License

Copyright (c) 2020 Temkit Sidali

Licensed under the MIT license.

Free as in free Beer.

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="HCWYY8SR62PFJ" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_DZ/i/scr/pixel.gif" width="1" height="1" />
</form>
