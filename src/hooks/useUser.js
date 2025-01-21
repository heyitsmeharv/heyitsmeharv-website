import { useEffect, useState } from "react";
import { nanoid } from "nanoid"

export const useUser = () => {
  const [userId, setUserId] = useState(null);
  const [componentMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    const id = nanoid();
    setUserId(id);
    setComponentMounted(true);
  }, []);

  return [userId, setUserId, componentMounted];
};