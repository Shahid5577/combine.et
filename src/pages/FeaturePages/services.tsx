import ux from '../../images/ux.png';
import web from '../../images/web.png';
import dev from '../../images/dev.png';
import it from '../../images/it.png';
import mar from '../../images/mar.png';
import hire from '../../images/hire.png';
import qa from '../../images/qa.png';
import ai from '../../images/aiml.png';
import iot from '../../images/iot.png';

function services() {
  return (
    <div>
    <div className="mt-32 p-4">
        <h1 className="text-sm sm:text-3xl text-center font-semi-bold">OUR SERVICES</h1>
        <p className="text-center pt-2 text-xs sm:text-sm text-zinc-500 font-semi-bold">Where ideas become reality</p>
      </div>

      <div className="w-full p-4 flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="flex flex-col gap-2 w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
              <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
                  <img src={ux} alt="uxImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
              </div>
              <div className="w-full h-auto flex flex-col justify-between">
                  <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">UX/UI Design</h1>
                  <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                      Amplify your user engagement through specialist UX/UI services that cover everything from design to prototyping and product validation to produce the most intuitive interfaces.
                  </p>
              </div>
          </div>

        <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
            <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
                <img src={web} alt="webImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
            </div>
            <div className="w-full h-auto flex flex-col justify-between">
                <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">Website Development</h1>
                <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                    We leverage the latest digital technologies to deliver future-proof web development solutions that provide exceptional user experiences and grow with your business.
                </p>
            </div>
        </div>

    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={dev} alt="devImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">DevOps</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                Our leading DevOps services help to streamline your operations by securely deploying new features and products at higher velocity while increasing quality and reliability.
            </p>
        </div>
    </div>
</div>

<div className="w-full p-4 flex flex-col sm:flex-row gap-3 sm:gap-6">
    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={it} alt="itImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">IT Consultancy</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                Align your technology strategy with your business or process strategies through expert consulting services that help you optimize your IT environment.
            </p>
        </div>
    </div>

    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={mar} alt="marImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">Marketing</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                We offer a range of online marketing solutions that increase your visibility, enhance your brand image, and connect your business with high-quality leads.
            </p>
        </div>
    </div>

    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={hire} alt="hireImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">Hire Developers</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                Need specialist developers for a unique project? Easily build your own dedicated team for short, long, or permanent projects from your vetted pool of experienced software engineers.
            </p>
        </div>
    </div>
</div>

<div className="w-full p-4 flex flex-col sm:flex-row gap-3 sm:gap-6">
    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={qa} alt="qaImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">QA Services</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                Our proactive QA services go above and beyond testing. We save you time and money, prevent defects, and give you ultimate confidence in the success of your solutions.
            </p>
        </div>
    </div>

    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={ai} alt="aiImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">AI/ML</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                Realize your full business potential through next-gen artificial intelligence and machine learning solutions that take productivity and performance to new heights.
            </p>
        </div>
    </div>

    <div className="w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer">
        <div className="w-full h-auto p-4 mt-4 flex justify-center items-center">
            <img src={iot} alt="iotImage" className="h-[100px] sm:h-[150px] w-[60%]"/>
        </div>
        <div className="w-full h-auto flex flex-col justify-between">
            <h1 className="text-center text-sm sm:text-lg text-neutral-500 pt-2">IoT</h1>
            <p className="text-[10px] sm:text-[14px] p-4 text-center dark:text-zinc-400">
                Take advantage of expert IoT development services that deliver comprehensive business insights, which help to boost efficiencies, control, and visibility.
            </p>
        </div>
    </div>

</div>
</div>
  )
}

export default services;