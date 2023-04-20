import { useState, useEffect } from "react";
import Image from "next/image";

export default function Loading() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsHidden(true);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className={`bg-white dark:bg-dark ${isHidden ? "hidden" : ""}`} id="loading">
      <Image width={150} height={150} src={require("dizeto/assets/loading/loading.svg")} alt="" />
    </div>
  );
}
