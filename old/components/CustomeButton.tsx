"use client";

import Image from "next/image";
import { CustomeButtonProps } from "@/types";

const CustomeButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
  isDisabled,
}: CustomeButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="rigt icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomeButton;
