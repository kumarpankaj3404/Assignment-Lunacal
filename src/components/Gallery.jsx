import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef,useState } from 'react';



const Gallery = () => {
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);

    const handleFileAdd = (event) => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            
            reader.onloadend = () => {
                const newImage = {
                    id: Date.now(),
                    url: reader.result,
                };
                setImages(prevImages => [...prevImages, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };
    const scrollContainerRef = useRef(null);
    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 200; 

            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    
  return (
    <div className=' relative border border-gray-600 lg:w-[44svw] md:w-[44svw] lg:h-[37svh] rounded-2xl p-3  bg-[#32343B] main-box '>
        <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/jpeg, image/gif" // Only accept images
        />
        <FaRegQuestionCircle className='text-gray-400 text-xl absolute left-1 top-3'/>
        <div className='flex items-center justify-between lg:pl-10 md:pl-5 lg:pt-4'>
            <div className=' text-xl text-center rounded-2xl bg-black text-white lg:px-5 md:px-2 lg:py-3 lg:w-32 md:w-24'>
                Gallery
            </div>
            <div className='flex items-center lg:gap-5 md:gap-3'>
                <button onClick={handleFileAdd} className='text-xs font-semibold bg-[#404249] lg:px-7 md:px-3 lg:py-3 md:py-1 rounded-2xl shadow-[5px_5px_10px_rgba(0,0,0,0.5),-2px_-2px_5px_rgba(255,255,255,0.5)]  text-white '>
                    +ADD IMAGE
                </button>
                <div onClick={()=>{handleScroll("left")}} className='bg-black/30 rounded-full lg:p-3 md:p-1 text-slate-500  shadow-arrow hover:bg-black/50'>
                    <FaArrowLeft/>
                </div>
                <div onClick={()=>{handleScroll("right")}} className='bg-black/30 rounded-full lg:p-3 md:p-1 text-slate-500  shadow-arrow hover:bg-black/50'>
                    <FaArrowRight/>
                </div>
            </div>
        </div>
        <div 
                ref={scrollContainerRef}
                className={`mt-6 p-4 h-[24svh] rounded-xl bg-[#32343B] flex gap-4 overflow-x-auto scroll-smooth no-scrollbar`}
            >
                
                {images.map((image) => (
                    <div 
                        key={image.id} 
                        className={`shrink-0 max-w-46 max-h-36 rounded-xl bg-gray-800 image-transition overflow-hidden`}
                    >
                        <img 
                            src={image.url} 
                            alt="Uploaded"
                            className="w-full h-full object-fill filter grayscale hover:grayscale-0 " 
                        />
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="w-full h-36 flex items-center justify-center text-gray-400">
                        Click "+ ADD IMAGE" to get started
                    </div>
                )}
            </div>
    </div>
  )
}

export default Gallery