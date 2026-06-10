import {
  useEffect,
} from "react";

function BasicEffect() {
  useEffect(() => {
    console.log(
      "Component mounted"
    );
  }, []);

  return <h2>Home</h2>;
}

export default BasicEffect;