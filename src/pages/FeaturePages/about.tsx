
import PhoneIcon from '@mui/icons-material/Phone';

function About() {
    return (
      <div  className="px-2 py-8 sm:px-8 sm:py-4 flex items-center justify-center">
        <div className="flex flex-col w-full p-4 items-center justify-center  w-[350px] bg-rose-800 rounded-lg shadow-lg">
            <div className="flex flex-row w-full p-4 gap-2 items-center justify-center">
                <img src="" alt="saharaa" className='w-[88px] h-[88px]'/>
                <div className='flex flex-col gap-0 justify-center items-center'>
                    <h1 className='text-4xl text-white font-bold'>SAHARAA </h1>
                    <p className='text-[20px] text-zinc-50 font-bold pl-2'>GOLD DIAMONDS</p>
                </div>
            </div>
                <p className='text-[10px] text-gray-200 text-center'># 401, Akbar & Jalal Apt, Pillar No.45, Rethibowli, Mehdipatnam, Hyderabad, Telangana - 500 028</p>
                <p className='text-[12px] text-gray-200 text-center pt-2'><PhoneIcon  className='text-white text-center text-[10px]'/> +91 9391752019</p>
        </div>
      </div>
    )
  }
  
  export default About;