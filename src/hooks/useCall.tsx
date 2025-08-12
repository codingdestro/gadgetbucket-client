import { useState } from "react";

type callback = () => Promise<void>;
export const useCall = (cb: callback) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const callApi = async () => {
    try {
      setIsLoading(true);
      await cb();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error as Error);
    }
  };

  return { isLoading, error, callApi };
};
