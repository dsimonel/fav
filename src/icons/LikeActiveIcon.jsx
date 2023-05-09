import React from "react";

export function LikeActiveIcon() {
   return (
      <svg
         width="26"
         height="25"
         viewBox="0 0 26 25"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g filter="url(#filter0_d_2_1276)">
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M17.3167 2.66699C21.015 2.66699 23.5 6.14366 23.5 9.38699C23.5 15.9553 13.1867 21.3337 13 21.3337C12.8133 21.3337 2.5 15.9553 2.5 9.38699C2.5 6.14366 4.985 2.66699 8.68333 2.66699C10.8067 2.66699 12.195 3.72866 13 4.66199C13.805 3.72866 15.1933 2.66699 17.3167 2.66699Z"
               fill="#FF1E5E"
            />
         </g>
         <defs>
            <filter
               id="filter0_d_2_1276"
               x="0.5"
               y="1.66699"
               width="25"
               height="22.667"
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
                  result="effect1_dropShadow_2_1276"
               />
               <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_1276"
                  result="shape"
               />
            </filter>
         </defs>
      </svg>
   );
}
