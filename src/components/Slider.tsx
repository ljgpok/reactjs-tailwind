import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  const sliderImages = [
    'slider-1.jpeg',
    'slider-2.jpeg',
    'slider-3.jpeg',
    'slider-4.jpeg',
  ];

  const imageWidth = 1200;
  const imageHeight = 600;

  return (
    <section className='relative shadow-2xl max-w-screen-2xl mx-auto'>
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {sliderImages.map((image, index) => (
          <div key={index}>
            <picture>
              {/* Add source element with type attribute for WebP format */}
              <source
                srcSet={`${process.env.PUBLIC_URL}/${image.replace('.jpeg', '.webp')}`}
                type='image/webp'
              />
              <img
                src={`${process.env.PUBLIC_URL}/${image}`}
                alt={`Slider ${index + 1}`}
                width={imageWidth}
                height={imageHeight}
              />
            </picture>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Slider;
