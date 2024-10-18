import React from 'react'
import Header from "../../components/Header/Header"
import Carousel from '../../components/Carousel/Carousel'
import Internet from '../../components/Internet/Internet'
import Cam from '../../components/Cam/Cam'
import Television from '../../components/Television/Television'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <div>
      <Header/>
      <Carousel />
      <Internet />
      <Cam />
      <Television />
      <Footer/>
    </div>
  )
}

export default HomePage