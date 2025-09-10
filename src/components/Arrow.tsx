"use client";

const ArrowSvg = ({ degree }: { degree: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 transform rotate-${degree}`}
      fill="none"
      viewBox="0 0 32 24" // even wider to fit
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 12h22m0 0l-4-4m4 4l-4 4"
      />
    </svg>
  );
};

export default ArrowSvg;
