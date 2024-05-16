'use client';
import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export function AppProvider({ children }) {
    return (
        <SessionProvider>
                {children}
        </SessionProvider>
    );
}