import BookTable from '@/src/components/BookTable'
import DestinationPage from '@/src/components/Destination/page'
import DestinationReviews from '@/src/components/Reviews'
import SpotlightCarousel from '@/src/components/SwiperCarousel'


function page() {
  return (
    <>
    <DestinationPage/>
    <SpotlightCarousel/>
    <BookTable/>
    {/* <DestinationReviews/> */}
    </>
  )
}

export default page