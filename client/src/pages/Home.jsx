import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { ImArrowRight2 } from "react-icons/im";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-8 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-sm sm:text-xl'>
          <span className='text-red-500 text-xl font-semibold'>Apnaasiyana </span>
          is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-xl text-blue-800 font-bold hover:underline '
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[700px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}
      
        <div className='max-w-8xl items-center mx-auto p-3 flex flex-col gap-8 my-10'>
          {offerListings && offerListings.length > 0 && (
              <div className=''>
                <div 
                  className =' flex flex-row relative m-0 p-4 mb-10 items-center my-5 '
                >
                  <h2 
                    className='flex absolute text-2xl text-slate-600 top-0 left-0 mt-4 m-0 font-bold py-2 px-4 '
                  >
                  Recent offers
                  </h2>
                    <Link 
                      className='flex absolute items-center gap-1 text-lg font-semibold text-red-600 mt-4 top-0 right-0 mr-4 py-2 px-4 hover:scale-105 '
                      to={'/search?offer=true'}>
                      Show all
                      <span className='mt-1'>
                        <ImArrowRight2 />
                      </span>
                    </Link>
                </div>

                {/* <Swiper navigation>
                  {offerListings &&
                    offerListings.length > 0 &&
                    offerListings.map((listing) => (
                      <SwiperSlide>
                        <div
                          style={{
                            background: `url(${listing.imageUrls[0]}) center no-repeat`,
                            backgroundSize: 'cover',
                          }}
                          className='h-[700px]'
                          key={listing._id}
                        ></div>
                      </SwiperSlide>
                    ))}
                </Swiper> */}

                    <div className='flex flex-wrap gap-4'>
                      {offerListings.map((listing) => (
                        <ListingItem listing={listing} key={listing._id} />
                      ))}
                    </div>
              </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div className=''>
              <div className='flex flex-row relative m-0 p-4 mb-10 items-center my-5'>
                <h2 className='flex absolute text-2xl text-slate-600 top-0 left-0 mt-4 m-0 font-bold py-2 px-4'>
                  Recent places for rent
                </h2>
                <Link 
                  className='flex absolute items-center gap-1 text-lg font-semibold text-red-600 mt-4 top-0 right-0 mr-4 py-2 px-4 hover:scale-105' 
                  to={'/search?type=rent'}>
                  Show all
                  <span className='mt-0.75'>
                  <ImArrowRight2 />
                  </span> 
                </Link>
                
              </div>
              <div className='flex flex-wrap gap-4'>
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div className=''>
              <div className='flex flex-row relative m-0 p-4 mb-10 items-center my-5'>
                <h2 className='flex absolute text-2xl text-slate-600 top-0 left-0 mt-4 m-0 font-bold py-2 px-4'>
                  Recent places for sale
                </h2>
                <Link 
                  className='flex absolute items-center gap-1 text-lg font-semibold text-red-600 mt-4 top-0 right-0 mr-4 py-2 px-4 hover:scale-105' 
                  to={'/search?type=sale'}>
                  Show all
                  <span className='mt-0.75'>
                    <ImArrowRight2 />
                  </span> 
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
    </div>
  );
}