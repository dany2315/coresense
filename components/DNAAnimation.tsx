'use client';

export default function DNAAnimation() {
  return (
    <div className="dna-container relative w-32 h-32 lg:w-48 lg:h-48">
      <div className="dna-helix relative w-full h-full">
        {/* DNA Strands */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background glow */}
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>
          
          <circle cx="100" cy="100" r="80" fill="url(#glow)" filter="url(#blur)" />
          
          {/* DNA Double Helix */}
          {Array.from({ length: 20 }, (_, i) => {
            const y = 10 + (i * 9);
            const phase = (i * 0.5) % (2 * Math.PI);
            const x1 = Number(100 + 30 * Math.sin(phase));
            const x2 = Number(100 + 30 * Math.sin(phase + Math.PI));
            
            return (
              <g key={i}>
                {/* Base pairs */}
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="1"
                />
                {/* Nucleotides */}
                <circle
                  cx={x1}
                  cy={y}
                  r="2"
                  fill="white"
                  opacity="0.8"
                />
                <circle
                  cx={x2}
                  cy={y}
                  r="2"
                  fill="white"
                  opacity="0.8"
                />
              </g>
            );
          })}
          
          {/* Helix strands */}
          <path
            d="M 70 10 Q 130 50 70 90 Q 130 130 70 190"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 130 10 Q 70 50 130 90 Q 70 130 130 190"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}