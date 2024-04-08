import '../styles/LoadingIcon.css'

const LoadingIcon = () => {
  return (
    <div className="loading-icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="32"
        height="32"
        style={{ animation: "rotate 2s linear infinite" }}
      >
        <rect width="32" height="32" fill="none" />
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="64"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="224"
          y1="128"
          x2="192"
          y2="128"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="195.88"
          y1="195.88"
          x2="173.25"
          y2="173.25"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="128"
          y1="224"
          x2="128"
          y2="192"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="60.12"
          y1="195.88"
          x2="82.75"
          y2="173.25"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="32"
          y1="128"
          x2="64"
          y2="128"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="60.12"
          y1="60.12"
          x2="82.75"
          y2="82.75"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </div>
  );
};

export default LoadingIcon;
