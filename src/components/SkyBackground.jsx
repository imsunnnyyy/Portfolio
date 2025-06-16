import { useEffect, useState } from "react";

export const SkyBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    generateClouds();

    const handleResize = () => {
      generateClouds();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateClouds = () => {
    const numberOfClouds = Math.floor(window.innerWidth / 200);
    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 50,
        size: Math.random() * 0.5 + 0.75, // 0.75x to 1.25x size
        duration: Math.random() * 30 + 30, // 30s–60s
      });
    }

    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Sky glow */}
      <div className="sky-glow" />

      {/* Sun */}
      <div
        className="sun"
        style={{
          width: "100px",
          height: "100px",
          left: "50%",
          top: "10%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            transform: `scale(${cloud.size})`,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}
    </div>
  );
};