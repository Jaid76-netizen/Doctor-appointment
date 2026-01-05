
const DoctorCard = ({image, name, desc}) => {
  return (
    <div className='shadow rounded overflow-hidden bg-white'>
      <div className="body">
        <div className="image w-full">
            <img src={image} alt="doctor image" className="w-[300px] h-[200px]" />
        </div>
        <h3 className="px-4 py-2 text-2xl tracking-wider font-semibold">{name}</h3>
        <p className="px-4 py-2 text-sm font-extralight tracking-wider">{desc}</p>
      </div>
      <div className="footer p-4 flex justify-end">
        <button className="p-2 rounded shadow cursor-pointer bg-white text-xs">Read more</button>
      </div>
    </div>
  )
}

export default DoctorCard
