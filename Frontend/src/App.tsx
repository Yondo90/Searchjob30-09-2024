function App() {
  return( 
  <div>
    <div className=" bg-[#f4f6f8] h-screen w-full">
      <div className=" bg-[url(desktop/bg-pattern-header.svg)] h-40 w-full rounded-bl-[100px] ">
        <div className="  h-24 ml-24 pt-16 flex items-center justify-between">
          <div className="text-[#fff] text-3xl font-semibold">devjobs</div>
          <div className="bg-[#fff] flex items-center justify-center space-x-3 mr-24">
            <div className="p-2">item1</div>
            <div className="p-0 pl-1 pr-2 h-5 w-12 bg-green-300 rounded-full flex items-center justify-start"><div className=" bg-pink-400 h-4 w-4 rounded-full"></div></div>
            <div className="p-2">item3</div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default App;
