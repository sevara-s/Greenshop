import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate()
    return(
    <div className=" container flex flex-col items-center justify-center py-10 px-4 text-center">
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 bg-[#f0f0f0] rounded-full flex items-center justify-center">
          <svg 
            className="w-24 h-24 text-[#A5A5A5]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md border border-[#e0e0e0]">
          <svg 
            className="w-8 h-8 text-[#A5A5A5]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-medium text-[#333] mb-2">Your Cart is Empty</h3>
      <p className="text-[#727272] text-sm sm:text-base max-w-md mb-6">
        It looks like you haven't added any items to your cart yet. Explore our collection and find something you love!
      </p>
      <button 
      onClick={()=>navigate("/")}
        className="bg-[#46A358] text-white px-6 py-2 rounded-md 
          hover:bg-[#3a8a4a] transition-all duration-300 
          shadow-md hover:shadow-lg transform hover:-translate-y-0.5
          border border-[#46A358] hover:border-[#3a8a4a]"
      >
        Continue Shopping
      </button>
    </div>
    )
};

  export default EmptyCart