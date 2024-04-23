'use client'
import React, { useRef, useState } from 'react'

type Props = {}

const Calculator = (props: Props) => {
    type Numbers = {
        num1: number | null
        num2: number | null
    }

    const num1Ref = useRef<HTMLInputElement>(null!)
    const num2Ref = useRef<HTMLInputElement>(null!)

    const [answer, setAnswer] = useState(0)

    const getSum = () => {
        if (!num1Ref?.current?.value || !num2Ref?.current?.value) return 0
        return (
            parseInt(num1Ref?.current?.value) +
            parseInt(num2Ref?.current?.value)
        )
    }

    return (
        <>
            <div className="flex items-center gap-4 p-10">
                <input
                    placeholder="num1"
                    type="number"
                    className="border border-black p-2"
                    ref={num1Ref}
                />
                <span>+</span>
                <input
                    placeholder="num2"
                    type="number"
                    className="border border-black p-2"
                    ref={num2Ref}
                />
                <button
                    onClick={() => setAnswer(getSum())}
                    className="bg-black text-white  px-4 py-2"
                >
                    Submit
                </button>
            </div>

            <p>{`Sum of ${num1Ref?.current?.value ?? '0'} and ${
                num2Ref?.current?.value ?? '0'
            } is: ${answer}`}</p>
        </>
    )
}

export default Calculator
