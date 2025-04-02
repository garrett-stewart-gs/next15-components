import React from "react";

import defaultStyles from "./BulletWrapper.module.css";

export default function BulletWrapper({ parentStyles, children }) {
  const firstChild = React.Children.toArray(children)[0];

  return (
    <svg
      className={`
          ${defaultStyles.bulletWrapper}
          ${parentStyles?.bulletWrapper}  
        `}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 12.389796,72.756905 A 49.290192,49.289551 0 0 1 47.229981,12.393333 49.290192,49.289551 0 0 1 107.60403,47.216269 49.290192,49.289551 0 0 1 72.797439,107.59922 49.290192,49.289551 0 0 1 12.404023,72.809882" />

      {
        typeof firstChild === "string" || typeof firstChild === "number" ?
          (
            <text
              x="60"
              y="68"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {firstChild}
            </text>
          )
          :
          (
            firstChild
          )
          
      }
    </svg>
  );
}