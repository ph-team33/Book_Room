import React from "react";

const PreLoader = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", background: "#fff", display: "block" }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50,50)">
          <circle
            cx={0}
            cy={0}
            r="8.333333333333334"
            fill="none"
            stroke="#e15b64"
            strokeWidth={4}
            strokeDasharray="26.179938779914945 26.179938779914945"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="1s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin={0}
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={0}
            cy={0}
            r="16.666666666666668"
            fill="none"
            stroke="#f47e60"
            strokeWidth={4}
            strokeDasharray="52.35987755982989 52.35987755982989"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="1s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.2"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={0}
            cy={0}
            r={25}
            fill="none"
            stroke="#f8b26a"
            strokeWidth={4}
            strokeDasharray="78.53981633974483 78.53981633974483"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="1s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.4"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={0}
            cy={0}
            r="33.333333333333336"
            fill="none"
            stroke="#abbd81"
            strokeWidth={4}
            strokeDasharray="104.71975511965978 104.71975511965978"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="1s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.6"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={0}
            cy={0}
            r="41.666666666666664"
            fill="none"
            stroke="#849b87"
            strokeWidth={4}
            strokeDasharray="130.89969389957471 130.89969389957471"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="1s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.8"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default PreLoader;
