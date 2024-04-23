'use client'
import React, { useState } from 'react'

type Props = {}

const Calculator = (props: Props) => {
    type Numbers = {
        num1: number | null
        num2: number | null
    }

    const [numbers, setNumbers] = useState<Numbers>({
        num1: 0,
        num2: 0,
    })

    const getSum = (numbers: Numbers) => {
        if (!numbers.num1 || !numbers.num2) return 0
        return numbers.num1 + numbers.num2
    }

    return (
        <>
            <div className="flex items-center gap-4 p-10">
                <input
                    placeholder="num1"
                    type="number"
                    className="border border-black p-2"
                    value={numbers.num1 ?? ''}
                    onChange={(e) => {
                        setNumbers((prev) => ({
                            ...prev,
                            num1: parseInt(e?.target?.value) ?? '',
                        }))
                    }}
                />
                <span>+</span>
                <input
                    placeholder="num2"
                    type="number"
                    className="border border-black p-2"
                    value={numbers.num2 ?? ''}
                    onChange={(e) => {
                        setNumbers((prev) => ({
                            ...prev,
                            num2: parseInt(e?.target?.value) ?? '',
                        }))
                    }}
                />
                <button className="bg-black text-white  px-4 py-2">
                    Submit
                </button>
            </div>

            <p>{`Sum of ${numbers.num1 ? numbers.num1 : '0'} and ${
                numbers.num2 ? numbers.num2 : '0'
            } is: ${getSum(numbers)}`}</p>
        </>
    )
}

export default Calculator
