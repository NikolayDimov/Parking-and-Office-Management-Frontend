import { ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export type { ErrorBoundaryProps, ErrorBoundaryState };
