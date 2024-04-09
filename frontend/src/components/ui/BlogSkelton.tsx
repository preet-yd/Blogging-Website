
export function BlogSkelton() {
  return (<div role="status" className="animate-pulse">
    <div className="p-4 pr-8 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>
      <div className="text-md font-thin">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>
      <div className=" relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
      </div>
      {/* <div className="text-slate-500 text-sm font-thin pt-4">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div> */}
    </div>
    <span className="sr-only">Loading...</span>
  </div>
  )
}