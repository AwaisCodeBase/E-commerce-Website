import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-1'>
        <Title text1={'SABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur recusandae fugiat aperiam adipisci vitae sint voluptatem accusantium mollitia illum alias?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui sint debitis quaerat quo recusandae culpa voluptate veniam eos a hic perspiciatis, autem voluptas nesciunt tempora nihil assumenda voluptatem quod error!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, neque quis ipsa laboriosam, vel ab inventore repellat error, fugit quo at ratione aspernatur perferendis. Laboriosam, corporis, quae voluptates blanditiis, amet velit accusantium magnam ducimus atque ipsam suscipit aperiam! Perspiciatis, iste.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border  px-10 md:-x-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, consectetur!</p>
        </div>
        <div className='border  px-10 md:-x-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, consectetur!</p>
        </div>
        <div className='border  px-10 md:-x-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>EXceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, consectetur!</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About