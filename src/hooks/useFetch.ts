"use client";
import { useEffect, useState, useCallback } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0); // trigger refetch

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const json: T = await res.json();
      setData(json);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData, reload]);

  // 🔹 refetch triggers a new run
  const refetch = () => setReload((c) => c + 1);

  return { data, loading, error, refetch };
}
