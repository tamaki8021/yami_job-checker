import React from 'react';

type Props = {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
};

const RightArrowIcon: React.FC<Props> = ({
  fill = 'currentColor',
  size,
  height,
  width,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width || 24}
    height={size || height || 24}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M9.293 7.293L14.586 12l-5.293 5.293 1.414 1.414L17.414 12l-6.707-6.707-1.414 1.414z"
    />
  </svg>
);

export default RightArrowIcon;
