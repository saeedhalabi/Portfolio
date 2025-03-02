import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device is a touch device
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

    const updateCursor = e => {
      if (!isTouchDevice) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, [isTouchDevice]);

  if (isTouchDevice) return null; // Don't render the cursor on touch devices

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CustomCursor;
