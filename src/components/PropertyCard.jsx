import { useState } from "react";

const PropertyCard = ({ property, className }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="relative w-[344px] h-[364px] bg-white">
      <div className="">
        <div
          className={`absolute w-[344px] h-[364px] top-0 left-0 bg-neutral-0 rounded-lg border border-solid border-neutral-200 transition-shadow duration-300 hover:shadow-[0px_4px_40px_0px_rgba(230,230,237,1)] z-10`}
        />

        <div
          onClick={toggleLike}
          className={`absolute w-12 h-12 top-[232px] left-[276px] bg-neutral-0 ${liked ? "bg-[rgba(139,138,255,1)]" : ""} rounded-3xl border-[1.5px] border-solid border-neutral-200 z-1000 hover:shadow-[0px_4px_40px_0px_rgba(230,230,237,1)] ${className}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "rgba(139,138,255,1)" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`size-6 absolute w-6 h-6 top-3 left-[12px] text-[rgba(104,81,255,1)] ${liked ? "text-white" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>

        <div className="absolute w-[223px] top-[272px] left-6 font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-main-colorblack text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
          {property.name}
        </div>

        <p className="absolute w-[296px] top-[316px] left-6 opacity-50 font-body-medium-150-medium font-[number:var(--body-medium-150-medium-font-weight)] text-main-colorblack text-[length:var(--body-medium-150-medium-font-size)] tracking-[var(--body-medium-150-medium-letter-spacing)] leading-[var(--body-medium-150-medium-line-height)] [font-style:var(--body-medium-150-medium-font-style)]">
          {property.location}
        </p>

        <div className="flex gap-1 absolute top-[232px] left-6">
          <div className="relative w-fit [font-family:'Plus_Jakarta_Sans-ExtraBold',Helvetica] text-lightPurple font-extrabold text-secondary-500 text-2xl leading-9 whitespace-nowrap">
            ${property.price.toLocaleString("en-US")}
          </div>
          <div className="flex items-center opacity-50 font-body-medium-150-medium font-[number:var(--body-medium-150-medium-font-weight)]">
            /month
          </div>
        </div>

        <img
          className="absolute w-[344px] h-[200px] object-cover rounded-t-lg"
          alt="Property"
          src={property.image}
        />

        <div
          className={`absolute w-fit h-8 top-[184px] -left-2 px-3 bg-lightPurple rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-none z-20 ${className}`}
        >
          <div className="flex items-center gap-1 top-2 left-0">
            <img
              className="relative w-4 h-4 m-2"
              alt="Icon"
              src={"/stars.svg"}
            />
            <div className="relative w-fit mt-[-1.00px] mr-2 [font-family:'Plus_Jakarta_Sans-Bold',Helvetica] font-bold text-white text-xs tracking-[0.50px] leading-4 whitespace-nowrap">
              {property.type.toUpperCase()}
            </div>
          </div>
        </div>
        <div
          className={`absolute w-2 h-2 top-[218px] -left-2 bg-lightPurple z-20 ${className}`}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        ></div>
      </div>
    </div>
  );
};

export default PropertyCard;
