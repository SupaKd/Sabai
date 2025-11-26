import { useEffect } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{ position: "fixed", top: 10, right: 10, background: "#eee", padding: "10px", border: "1px solid #000" }}>
      {message}
    </div>
  );
}

export default Toast;
