import React from "react";

export function LikeIcon() {
   return (
      <svg
         width="28"
         height="26"
         viewBox="0 0 28 26"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g filter="url(#filter0_d_2_1214)">
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M18.3167 2.66699C22.015 2.66699 24.5 6.14366 24.5 9.38699C24.5 15.9553 14.1867 21.3337 14 21.3337C13.8133 21.3337 3.5 15.9553 3.5 9.38699C3.5 6.14366 5.985 2.66699 9.68333 2.66699C11.8067 2.66699 13.195 3.72866 14 4.66199C14.805 3.72866 16.1933 2.66699 18.3167 2.66699Z"
               stroke="white"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               shapeRendering="crispEdges"
            />
         </g>
         <defs>
            <filter
               id="filter0_d_2_1214"
               x="0.5"
               y="0.666992"
               width="27"
               height="24.667"
               filterUnits="userSpaceOnUse"
               colorInterpolationFilters="sRGB"
            >
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
               />
               <feOffset dy="1" />
               <feGaussianBlur stdDeviation="1" />
               <feComposite in2="hardAlpha" operator="out" />
               <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
               />
               <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_1214"
               />
               <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_1214"
                  result="shape"
               />
            </filter>
         </defs>
      </svg>
   );
}
