import Teams from '../../images/teams.png';
import Model from '../../images/model.png';

function Work() {
  return (
    <div className="p-4">
      <div className="mt-28 p-4">
        <h1 className="text-sm sm:text-3xl text-center font-semibold">HOW TO WORK WITH US</h1>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col sm:flex-row p-4 mt-4 w-full items-center justify-center">
        <div className="w-full sm:w-3/5 lg:w-2/5 p-2 sm:p-4">
          <h1 className="text-[14px] sm:text-[24px] dark:text-zinc-300">Dedicated Teams</h1>
          <p className="text-zinc-400 text-[10px] sm:text-[16px] pt-4">
            Build your own dedicated team of qualified specialists to handle your projects remotely from our premises. 
            You’ll benefit from total control of your resources without the additional admin so you can focus on boosting 
            productivity and profitability.
          </p>
        </div>
        <div className="w-full sm:w-2/5 lg:w-1/3 p-2 sm:p-4 flex justify-center">
          <img src={Teams} alt="Teams" className="object-cover w-full sm:w-3/4 rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row p-4 mt-4 w-full items-center justify-center">
        <div className="w-full sm:w-2/5 lg:w-1/3 p-2 sm:p-4 flex justify-center order-last sm:order-first">
          <img src={Model} alt="Teams" className="object-cover w-full sm:w-3/4 rounded-lg shadow-lg" />
        </div>
        <div className="w-full sm:w-3/5 lg:w-2/5 p-2 sm:p-4">
          <h1 className="text-[14px] sm:text-[24px] dark:text-zinc-300">Fixed Price Model</h1>
          <p className="text-zinc-400 text-[10px] sm:text-[16px] pt-4">
          We’ll start by outlining the deliverables and expectations to ensure your project runs seamlessly. Thereafter, we’ll arrange your specialist in-house team and an account manager to deliver your projects on a fixed timeline and to a fixed budget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
