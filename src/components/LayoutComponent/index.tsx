import React from 'react';
import '../../App.css';

interface LayoutComponentComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentComponentProps> = (
    { children }: LayoutComponentComponentProps): JSX.Element => {
    return (
        <>
            <header className="App-header">
                ONLY.
            </header>

            {children}
        </>
    );
};
