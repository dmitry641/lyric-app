import { useEffect } from "react";

export default function useUpadateLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
