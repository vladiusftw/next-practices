import Shop from '@/components/Shop'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <Link href={'/test'}>click me</Link>
        </>
    )
}

export default page
