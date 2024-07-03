import { useMemo } from "react";

const useDescription = (description) => {
  return useMemo(() => {
    if (!description) return "";
    return description.length > 100
      ? `${description.slice(0, 100)}...`
      : description;
  }, [description]);
};

export default useDescription;
