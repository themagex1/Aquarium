import './App.css';
import { useState } from "react";
import DateTime from './Timer';


function App() {
  const [lightToggle, setlightToggle] = useState(false);
  const [heaterToggle, setheaterToggle] = useState(false);
  const [waterToggle, setwaterToggle] = useState(false);

  return (
    <div className="App text-xl md:text-3xl lg:text-[2.5rem] bg-bgColor text-textColor border-4 border-borderColor min-h-screen">
      <div className='grid grid-cols-2 mt-8'>
        <span className='grid grid-cols-2 gap-0 text-left ml-8 md:mb-2 md:text-2xl md:flex md:space-x-3'>
          <span className=''>Sunrise:</span>
          <span className='text-borderColor'>04:50</span>
        </span>
        <span className='text-right mr-8 md:text-2xl'>
          Time: <DateTime></DateTime>
        </span>
      </div>
      <div className='grid grid-cols-2'>
        <span className='grid grid-cols-2 gap-0 text-left ml-8 md:text-2xl md:flex md:space-x-4'>
          <span className=''>Sunset:</span>
          <span className='text-borderColor'>19:57</span>
        </span>
      </div>
      <div className='my-8 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] animate-bounce'>
        Smart Aquarium
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2 lg:px-8 xl:px-10 2xl:px-48'>
        <div className='leftColumn mx-auto md:mt-8'>
          <div className='border-b border-dashed border-textColor'>
            <div className=''>
              <span className='text-[1.8rem] lg:text-[2.5rem] font-semibold'>
                Temperature

              </span>
              <div className='mt-2 mb-4 md:text-2xl lg:text-[2rem] lg:mt-4 text-borderColor'>
                27 °C
              </div>
            </div>
            <div className=''>
              <div className='flex mx-auto py-4 divide-x divide-dashed divide-textColor border-t border-dashed border-textColor'>
                <div className='flex flex-col w-1/3 md:text-xl lg:text-2xl'>
                  <span className='font-semibold'>
                    Max
                  </span>
                  <span className='text-borderColor'>
                    30 °C
                  </span>
                </div>
                <div className='flex flex-col w-1/3 md:text-xl lg:text-2xl'>
                  <span className='font-semibold'>
                    Min
                  </span>
                  <span className='text-borderColor'>
                    24 °C
                  </span>
                </div>
                <div className='flex flex-col w-1/3 md:text-xl lg:text-2xl'>
                  <span className='font-semibold'>
                    Average
                  </span>
                  <span className='text-borderColor'>
                    26 °C
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <span className='text-[1.8rem] lg:text-[2.5rem] mt-8 mb-2'>
              Set light activity duration
            </span>
            <div className='flex mx-auto space-x-6 mt-4 lg:mt-8'>
              <input type='number' min='1' max='300' className='textField border-2 bg-bgColor text-textColor border-borderColor  w-[10rem] h-[2.5rem] my-auto placeholder: italic placeholder:text-center placeholder: text-sm' placeholder='Time max. 300 [min]'>

              </input>
              <button className='button h-[2.5rem] w-[6rem] md:text-xl bg-buttonColor active:bg-spareColor active:text-bgColor font-bold'>
                SET
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-[1.8rem] mt-8 mb-2'>
              Date
            </span>
            <div className='flex mt-4 space-x-6 mx-auto'>
              <input type='date' className='w-[10rem] textField border-2 bg-bgColor text-textColor border-borderColor'>
              </input>
              <button className='button h-[2.5rem] w-[6rem] md:text-xl bg-buttonColor active:bg-spareColor active:text-bgColor font-bold'>
                SEND
              </button>
            </div>
          </div>

        </div>

        <div className='rightColumn mx-auto'>
          <div className='flex flex-col'>
            <div className='grid grid-cols-2 gap-9 md:mt-0 mx-auto md:mx-0 md:text-left'>
              <span className='mt-8 text-[1.5rem] lg:text-[2rem]'>Light</span>
              <div className='flex mt-9 md:p-1 ml-5'>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={lightToggle}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setlightToggle(!lightToggle);
                    }}
                    className="border-2 border-spareColor w-11 h-6 lg:w-16 lg:h-8 bg-bgColor rounded-full peer   peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-borderColor  after:border-gray-300 after:border after:rounded-full after:h-5 lg:after:h-7 after:w-5 lg:after:w-7 after:transition-all peer-checked:bg-buttonColor"
                  >
                  </div>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-9 mx-auto md:mx-0 md:text-left'>
              <span className='mt-8 text-[1.5rem] lg:text-[2rem]'>Heater</span>
              <div className='flex mt-9 ml-5 md:p-1'>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={heaterToggle}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setheaterToggle(!heaterToggle);
                    }}
                    className="border-2 border-spareColor w-11 h-6 lg:w-16 lg:h-8 bg-bgColor rounded-full peer    peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-borderColor  after:border-gray-300 after:border after:rounded-full after:h-5 lg:after:h-7 after:w-5 lg:after:w-7 after:transition-all peer-checked:bg-buttonColor"
                  >
                  </div>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-9 mx-auto'>
              <span className='mt-8 text-[1.5rem] lg:text-[2rem]'>Water level</span>
              <div className='flex mt-9 ml-5 md:p-1'>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={waterToggle}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setwaterToggle(!waterToggle);
                    }}
                    className="border-2 border-spareColor w-11 h-6 lg:w-16 lg:h-8 bg-bgColor rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-borderColor  after:border-gray-300 after:border after:rounded-full after:h-5 lg:after:h-7 after:w-5 lg:after:w-7 after:transition-all peer-checked:bg-buttonColor"
                  >
                  </div>
                </label>
              </div>
            </div>

            <div className={`${waterToggle ? "grid grid-cols-2 mt-4 gap-3 mx-auto visible transition-all duration-500 scale-y-1" : "invisible scale-y-0 h-0"} `}>
              <span className='lg:text-[1.7rem] '>Current</span>
              <span className='my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto text-borderColor" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className='hidden my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </span>
              <span className='hidden my-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </span>
            </div>

          </div>
          <div className='flex mt-8 mx-auto mb-10'>
            CHART
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
