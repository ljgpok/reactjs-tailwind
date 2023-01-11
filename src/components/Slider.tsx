import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
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
        <div>
          <img loading='lazy' src='slider-1.jpeg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='slider-2.jpeg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='slider-3.jpeg' alt='' />
        </div>
        <div>
          <img loading='lazy' src='slider-4.jpeg' alt='' />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
