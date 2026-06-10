import {
  useEffect,
} from "react";

function CleanupEffect() {
  useEffect(() => {
    const timer =
      setInterval(() => {
        console.log(
          "Running"
        );
      }, 1000);

    return () => {
      clearInterval(
        timer
      );
    };
  }, []);

  return <h2>Timer</h2>;
}

export default CleanupEffect;