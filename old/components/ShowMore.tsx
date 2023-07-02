"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomeButton from "./CustomeButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {};

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomeButton
          title="Show More"
          btnType="button"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
