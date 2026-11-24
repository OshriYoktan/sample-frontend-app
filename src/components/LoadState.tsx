import { Alert, CircularProgress } from '@mui/material';
import type { ReactNode } from 'react';
import type { AsyncState } from '../hooks/useAsync';

/** Renders a spinner, an error, or the children: every page uses this instead of its own loading logic. */
export default function LoadState<T>({ state, children }: { state: AsyncState<T>; children: (data: T) => ReactNode }) {
  if (state.loading) return <CircularProgress aria-label="loading" />;
  if (state.error) return <Alert severity="error">{state.error}</Alert>;
  return <>{children(state.data as T)}</>;
}
