import React from "react";
import { useRouter } from "next/router";

const Back = () => {
  const router = useRouter();
  const goToPreviousPage = () => {
    router.back();
  };
  return (
    <div
      onClick={goToPreviousPage}
      className="back-btn d-flex align-center pointer"
    >
      {/* to back html icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
      Back
    </div>
  );
};

export default Back;
