// app/components/Logo.tsx
export default function Logo() {
    return (
      <svg
        className="logo"
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#1a1a1a", stopOpacity: 1 }} />
          </linearGradient>
          <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.3"
            />
          </filter>
        </defs>
        <text
          x="20"
          y="80"
          fontFamily="Inter, sans-serif"
          fontSize="52"
          fontWeight="700"
          fill="url(#logoGradient)"
          filter="url(#logoShadow)"
        >
          Core-
        </text>
        <text
          x="20"
          y="140"
          fontFamily="Inter, sans-serif"
          fontSize="40"
          fontWeight="300"
          fontStyle="italic"
          fill="url(#logoGradient)"
          filter="url(#logoShadow)"
        >
          Sense
        </text>
        <path
          d="M10 160 L60 120"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />
      </svg>
    );
  }
  