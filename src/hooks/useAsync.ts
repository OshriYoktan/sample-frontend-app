import { useEffect, useState } from 'react';

export interface AsyncState<T> {
  data: T | undefined;
  loading: boolean;
  error: string | undefined;
}

/** Loads data when `deps` change; ignores responses that arrive after the component unmounted or deps changed. */
export function useAsync<T>(load: () => Promise<T>, deps: unknown[]): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: undefined, loading: true, error: undefined });

  useEffect(() => {
    let active = true;
    setState({ data: undefined, loading: true, error: undefined });
    load()
      .then((data) => active && setState({ data, loading: false, error: undefined }))
      .catch((e: unknown) => active && setState({ data: undefined, loading: false, error: e instanceof Error ? e.message : String(e) }));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
