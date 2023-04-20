import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  const sliderImages = [
    'slider-1.jpeg',
    'slider-2.jpeg',
    'slider-3.jpeg',
    'slider-4.jpeg',
  ];

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
              {/* Add source elements with media queries if needed */}
              <img src={image} alt={`Slider ${index + 1}`} />
            </picture>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Slider;
