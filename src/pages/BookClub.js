import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/Card'
import Testimonials from '../components/Testimonials'
import Footer from '../components/footer'

function BookClub() {
  const data = [
    {
      image: "https://www.aisd.net/wp-content/files/book-swap.jpg",
      event: "Book Club and Social",
      description: "Join us for a casual afternoon of book swapping and socializing at Literary Latte. Bring a gently used book from your personal collection to exchange with fellow book club members, and discover new reads to add to your shelf. Enjoy complimentary refreshments, engage in lively conversations about your favorite books, and make new literary connections in a relaxed and welcoming atmosphere."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbcJhwT9ua9Kdo5timBWNljJgCVLx8lzMbw&usqp=CAU",
      event:"Literary Trivia Night",
      description:"Test your literary knowledge and compete for prizes at our virtual Literary Trivia Night! Gather your friends, form a team, and prepare to answer questions on classic literature, contemporary bestsellers, and everything in between. Whether you're a bookworm or just enjoy a good challenge, this fun-filled event promises an evening of laughter, friendly competition, and bookish camaraderie."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cfLepLSgQQyl1nzQZs6GxUMqY2uC0JVzoQ&usqp=CAU",
      event:"Cook-Book!!!",
      description:"Indulge your literary and culinary passions with a book-themed cooking class at Literary Latte! Join us for an interactive culinary experience where participants will learn to prepare delicious dishes inspired by their favorite books. Under the guidance of a skilled chef, you'll recreate iconic recipes mentioned in beloved novels, such as Harry Potter's Butterbeer, the Mad Hatter's tea party treats from Alice in Wonderland, or decadent desserts from Joanne Harris' Chocolat."
    }
  ]

  const Testimonial =[
    {
      figure:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      name:"Karen Nelson",
      hightlight: "Transformative experience",
      quote: "I've discovered new authors, made lifelong friends, and engaged in thought-provoking discussions that have expanded my literary horizons. It's more than just a book club; it's a community of kindred spirits united by a shared love of reading."
    },
    {
      figure:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      name:"Roberta Casas",
      highlight: "Feels like home",
      quote: "I've been a member of many book clubs over the years, but none compare to the warmth and camaraderie of Literary Latte. The moderators are knowledgeable and inclusive, the discussions are lively and insightful, and the events are always a delight. Whether online or in-person, Literary Latte feels like home for book lovers like me."
    },
    {
      figure:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" ,
      name:"Jese Leos",
      highlight: "Reignited my passion ",
      quote: "As a busy professional, finding time to read can be challenging. But Literary Latte's book club has reignited my passion for reading and provided a welcoming space to connect with fellow book lovers. The diverse book selections and engaging events have enriched my reading journey and inspired me to explore new genres and perspectives."
    },
    {
      figure:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      name:"Joseph McFall",
      highlight: "Friendships",
      quote: "Joining Literary Latte's book club was one of the best decisions I've ever made. Not only have I discovered incredible books that I might not have picked up on my own, but I've also found a community of fellow readers who share my passion for literature. The friendships I've formed and the memories I've made at Literary Latte will stay with me forever."
    }
  ]
  return (
    <div className='text-brown overflow-hidden'>
      <Navbar />
      <h1 className='text-6xl text-center mt-14 sm:text-7xl md:text-8xl'>Book Club</h1>
      <p className='text-lg m-8 sm:text-xl sm:m-16 md:text-2xl md:m-20'>Our book club at Literary Latte is a welcoming community of readers who come together to explore the rich tapestry of literature. Through engaging discussions, thought-provoking events, and a shared love of books, we celebrate the joy of reading and the power of storytelling. With a diverse selection of monthly reads, inclusive gatherings, and a vibrant online presence, we invite book enthusiasts of all backgrounds to join us on our literary journey. Whether you're seeking inspiration, connection, or simply a good book recommendation, Literary Latte offers a warm and inviting space where readers can connect, learn, and grow together.
      </p>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/06092030733855.5630b5a4e392e.jpg" className='rounded-xl hover:scale-105 duration-300 p-4 md:p-12 md:translate-x-16'></img>
      <h1 className='text-6xl text-center mt-14 sm:text-7xl md:text-8xl'>Upcoming events</h1>
      <Card image={data[0].image} event={data[0].event} description={data[0].description}></Card>
      <Card image={data[1].image} event={data[1].event} description={data[1].description}></Card>
      <Card image={data[2].image} event={data[2].event} description={data[2].description}></Card>
      <h1 className='text-6xl text-center my-14 sm:text-7xl md:text-8xl'>Testimonials</h1>
      <Testimonials figure={Testimonial[0].figure} name={Testimonial[0].name} highlight={Testimonial[0].hightlight} quote={Testimonial[0].quote}></Testimonials>
      <Testimonials figure={Testimonial[1].figure} name={Testimonial[1].name} highlight={Testimonial[1].hightlight} quote={Testimonial[1].quote}></Testimonials>
      <Testimonials figure={Testimonial[2].figure} name={Testimonial[2].name} highlight={Testimonial[2].hightlight} quote={Testimonial[2].quote}></Testimonials>
      <Testimonials figure={Testimonial[3].figure} name={Testimonial[3].name} highlight={Testimonial[3].hightlight} quote={Testimonial[3].quote}></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default BookClub