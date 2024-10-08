
{/*import Shaik from '../../images/ShaikS.png';*/}
import house from '../../images/house.png';


function Talent() {
  return (
    <div className="p-4">
      <div className="mt-28 p-4">
        <h1 className="text-sm sm:text-3xl text-center font-semibold">ACCESS OUR IN-HOUSE TALENT</h1>
      </div>
      <div className="flex flex-col sm:flex-row p-4 mt-4 w-full">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="relative">
            <div>
             {/* <img src={Shaik} alt="Shaik" className="object-cover" />*/}
             <img src={house} alt="Shaik" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <h1 className="text-[14px] sm:text-[24px] sm:pr-40">Get access to our pool of in-house talent from anywhere in the world.</h1>
          <p className="dark:text-zinc-400 text-[10px] sm:text-[14px] pt-4 pb-3 sm:pb-5">No matter where you are in the world, you can benefit from full access to our in-house pool of highly experienced developers, engineers, marketers, and designers. Everything we do revolves around delivering reliable, secure, and scalable digital IT solutions that elevate your business above the competition and drive sustainable growth.</p>
          <button className="text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white hover:border-transparent transition duration-300 px-2 sm:px-4 py-1 sm:py-2 text-[7px] sm:text-[14px]">
            Learn More
          </button>

          {/* Four boxes section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-6">
            <div className="flex flex-col rounded-lg bg-slate-50 shadow-lg dark:bg-neutral-900 p-4">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-500">1,000+</h2>
                <p className="text-xs sm:text-sm text-gray-600">Clients located across the world</p>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-slate-50 shadow-lg dark:bg-neutral-900 p-4">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-500">15+</h2>
                <p className="text-xs sm:text-sm text-gray-600">Years of experience delivering measurable results</p>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-slate-50 shadow-lg dark:bg-neutral-900 p-4">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-500">5,000+</h2>
                <p className="text-xs sm:text-sm text-gray-600">Projects delivered on time and on budget</p>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-slate-50 shadow-lg dark:bg-neutral-900 p-4">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-blue-500">200+</h2>
                <p className="text-xs sm:text-sm text-gray-600">Team of qualified tech & marketing professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talent;
