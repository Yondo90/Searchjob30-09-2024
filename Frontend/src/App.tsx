function App() {
  return (
    <div>
      <div className=" bg-[#f4f6f8] min-h-screen w-full relative">
        <div className=" bg-[url(desktop/bg-pattern-header.svg)] h-40 w-full rounded-bl-[100px] ">
          <div className="  h-24 ml-44 pt-7 flex items-center justify-between">
            <div className="text-[#fff] text-3xl font-semibold">devjobs</div>
            <div className=" flex items-center justify-center space-x-3 mr-40">
              <div className="p-2 ">
                <img src="public\desktop\icon-sun.svg" alt="icone soleil" />
              </div>
              <div className="p-0 pl-1 pr-2 h-5 w-12 bg-[#f4f6f8] rounded-full flex items-center justify-start">
                <div className=" bg-[#5964e0] cursor-pointer h-4 w-4 rounded-full"></div>
              </div>
              <div className="p-2 ">
                <img src="public\desktop\icon-moon.svg" alt="icone la lune" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#fff] h-16 divide-x-2 divide-[#9daec2] w-3/4 absolute rounded-lg flex items-center justify-between">
            <div className=" h-7 ml-7  w-96 flex items-center justify-center">
              <img
                className="mr-4 h-6 w-6"
                src="public\desktop\icon-search.svg"
                alt="icone search"
              />
              <input
                type="text"
                placeholder="Filter by title,companies,expertise..."
                className=" outline outline-none w-full"
              />
            </div>
            <div className=" h-full w-64 flex items-center justify-center">
              <img
                className="mr-4 h-6 w-4"
                src="public\desktop\icon-location.svg"
                alt="icone search"
              />
              <input
                type="text"
                placeholder="Filter by location..."
                className="h-6 outline outline-none"
              />
            </div>
            <div className=" h-full w-72 mr-3 flex items-center justify-between">
              <input type="checkbox" className="h-5 w-5 ml-4" />
              <p className="font-semibold">Full Time Only</p>
              <div className="bg-blue-600 h-11 w-28 rounded-lg cursor-pointer font-semibold flex items-center justify-center text-white ">
                Search
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-44 mt-32 flex space-x-5 ">
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
        </div>
        <div className=" ml-44 mt-16 flex space-x-5 ">
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
        </div>
        <div className=" ml-44 mt-16 flex space-x-5 ">
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
          <div className="bg-[#fff] h-48 w-80 rounded-lg">
            <div className="bg-yellow-300 h-12 w-12 absolute -mt-6 ml-6 rounded-xl flex items-center text-xs justify-center">
              <img src="public\desktop\logo.svg" alt="logo" className="p-1" />
            </div>
            <div className=" ml-6 mt-8 text-sm text-[#6e8098] flex items-center ">
              5h ago
              <div className="ml-2 mr-2 flex h-1 w-1 bg-slate-400 rounded-full"></div>
              <div> Full Time</div>
            </div>
            <div className="ml-6 mt-3 font-bold text-lg">
              Senior Software Engineer
            </div>
            <div className="ml-6 mt-3 text-sm text-[#6e8098]">Scoot</div>
            <div className="ml-6 mt-6 text-xs text-[#5964e0] font-bold">
              United Kingdom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
