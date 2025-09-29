import Card from '@mui/material/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Main() {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <Card className='w-25rem h-25rem'></Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
