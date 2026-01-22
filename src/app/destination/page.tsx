import BookTable from '@/src/components/BookTable'
import DestinationPage from '@/src/components/Destination/page'
import SpotlightCarousel from '@/src/components/SwiperCarousel'


function page() {
  return (
    <>
    <DestinationPage/>
    <SpotlightCarousel/>
    <BookTable/>
    </>
  )
}

export default page