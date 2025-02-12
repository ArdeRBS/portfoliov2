import { type PropsWithChildren } from "react";

interface HeroOrbitProps {
  size: number;
}

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start"
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className=""
          style={{
            transform: `rotate(-${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// minute 56:09 weiter machen https://youtu.be/ELssXP1sTC8?si=eMTBW5sKCNCd2eXg&t=3369
