'use client'
import { getShopItems } from '@/utils/data'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

type Props = {}

const Shop = (props: Props) => {
    const { data, isLoading } = useQuery(['shopItems'], () => getShopItems())

    return (
        <>
            {isLoading ? (
                <p>Loading in progress...</p>
            ) : (
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>price</th>
                            <th>category</th>
                            <th>description</th>
                            <th>image</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((shopItem) => {
                            return (
                                <tr>
                                    <td>{shopItem?.title}</td>
                                    <td>{shopItem?.price}</td>
                                    <td>{shopItem?.category}</td>
                                    <td>{shopItem?.description}</td>
                                    <td>
                                        <Image
                                            width={150}
                                            height={150}
                                            src={shopItem?.image}
                                            alt="Image"
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Shop
