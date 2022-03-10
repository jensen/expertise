import { useState, useCallback } from "react";

export default function useModal() {
  const [showing, setShowing] = useState(false);

  const open = useCallback(() => setShowing(true), []);
  const close = useCallback(() => setShowing(false), []);

  return { showing, open, close };
}
