import hero from "../assets/hero.png"

const Home = () => {
  return (
    <div className='flex justify-between items-center py-4 mt-4'>
      <div className='w-1/2 flex flex-col items-start justify-center gap-3'>
        <h1 className="text-6xl font-semibold">Online doctor appointment booking system.</h1>
        <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam eius est cumque asperiores sit.</p>
        <button className="cursor-pointer py-2 px-4 bg-[var(--primary-color)] hover:bg-[var(--primary-color-hover)] transition duration-500 rounded shadow text-white mt-4">Book Appointment</button>
      </div>
      <div className='w-1/2 flex justify-end'>
        <img src={hero} alt="hero" />
      </div>
    </div>
  )
}

export default Home
