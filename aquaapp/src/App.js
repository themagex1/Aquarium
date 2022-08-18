import './App.css';
import { useState } from "react";
function App() {
  const [lightToggle, setlightToggle] = useState(false);
  const [heaterToggle, setheaterToggle] = useState(false);
  const [waterToggle, setwaterToggle] = useState(false);


  return (
    <div className="App text-xl md:text-3xl lg:text-[2.5rem] bg-bgColor text-textColor border-4 border-borderColor min-h-screen">
      <div className='grid grid-cols-2 mt-8'>
        <span className='grid grid-cols-2 gap-0 text-left ml-8 md:mb-2 md:text-2xl md:flex md:space-x-3'>
          <span className=''>Sunrise:</span>
          <span className=''>04:50</span>
        </span>
        <span className='text-right mr-8 md:text-2xl'>
          Time: 19:51
        </span>
      </div>
      <div className='grid grid-cols-2'>
        <span className='grid grid-cols-2 gap-0 text-left ml-8 md:text-2xl md:flex md:space-x-4'>
          <span className=''>Sunset:</span>
          <span className=''>19:57</span>
        </span>
      </div>
      <div className='my-8 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]'>
        Smart Aquarium
      </div>

      <div className='flex flex-col md:grid md:grid-cols-2'>
        <div className='leftColumn mx-auto md:mt-8'>
          <div className=''>
            <span className='text-[1.8rem] lg:text-[2.5rem]'>Temperature</span>
            <div className='mt-2 mb-4 md:text-2xl lg:text-[2rem] lg:mt-4'>
              27 °C
            </div>
          </div>
          <div className=''>
            <div className='flex mx-auto'>
              <div className='flex flex-col w-1/3 md:text-xl lg:text-2xl'>
                <span>
                  Max
                </span>
                <span>
                  30 °C
                </span>
              </div>
              <div className='flex flex-col w-1/3 md:text-xl lg:text-2xl'>
                <span>
                  Min
                </span>
                <span>
                  24 °C
                </span>
              </div>
              <div className='flex flex-col w-1/3 md:text-xl lg:text-2xl'>
                <span>
                  Average
                </span>
                <span>
                  26 °C
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-[1.8rem] lg:text-[2.5rem] mt-8'>
              Set light activity duration
            </span>
            <div className='flex mx-auto space-x-6 mt-4 lg:mt-8'>
              <input className='textField w-[10rem] h-[2.5rem] my-auto placeholder: italic placeholder: text-sm' placeholder='Time max. 300 [min]'>

              </input>
              <button className='button h-[2.5rem] w-[6rem] md:text-xl bg-buttonColor active:bg-spareColor active:text-bgColor font-bold'>
                SET
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-[1.8rem] mt-8'>
              Date
            </span>
            <div className='flex mt-4 space-x-6 mx-auto'>
              <input type='date' className='w-[10rem] textField'>
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
          </div>
          <div className='flex mt-8 mx-auto'>
            CHART
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;