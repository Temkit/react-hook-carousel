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

| Option   | Type    | Default | Description                                                                                                    |
| -------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------- |
| Items    | Array   |         | Array of elements containing images to slide. each element is an object containing two attributes, src and alt |
| groupby  | number  | null    | the number of slider to show                                                                                   |
| effect   | string  | fade    | the effect used to slide                                                                                       |
| showDots | boolean | false   | show to dots                                                                                                   |

##### How to use

One Item to slide:

```javascript
<Carousel items={selider} groupBy={false} showDots={false} effect="fade" />
```

Multiple Items to slide

```javascript
<Carousel items={selider} groupBy={5} showDots={false} effect="fade" />
```

#### License

Copyright (c) 2020 Temkit Sidali

Licensed under the MIT license.

Free as in free Beer.
