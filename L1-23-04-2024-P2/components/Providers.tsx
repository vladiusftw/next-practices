'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
    children: React.ReactNode
}

const client = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 35 * (60 * 1000), // 30 minutes
            staleTime: 30 * (60 * 1000),
            refetchOnWindowFocus: false,
        },
    },
})

const Providers = ({ children }: Props) => {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default Providers
