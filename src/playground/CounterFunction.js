// import React from 'react'
import { View, Text, Button } from 'react-native';
import { useState, useEffect } from "react";
import countPrimeNumbers from './prime';
// function CounterFunction(props) {
// export default function CounterFunction({
//     question, 
//     urgent
// }) {

export default function CounterFunction( {userName} ) {

    const [count, setCount] = useState(0)
    const [lastAction, setLasAction] = useState('None')
    const [maxNumber, setMaxNumber] = useState(null)
    const [primeNumbers, setPrimeNumbers] = useState(null)
    const [isCalculating, setIsCalculating] = useState(true)

    useEffect(() => {
        console.log('Only when mounted')

        setTimeout(() => {  
            const maxNumber = 20000
            const primeNumbers = countPrimeNumbers(maxNumber)
            setIsCalculating(false)
            setMaxNumber(maxNumber)
            setPrimeNumbers(primeNumbers)
        }, 10)

        let count = 0
        const timer = setInterval(() => {
            count++
            console.log('count: ' + count)
        }, 1000)
 
        return () => {
            clearInterval(timer)
            console.log('Function component unmounted')
        }
    }, [])

    useEffect(() => {
        console.log('Variable count changed')
        return () => {
            // console.log('useEffect count destroyed')
        }
    }, [count])

    useEffect(() => {
        console.log('Last action changed to ' +  lastAction)
        return () => {
            // console.log('useEffect lastAction destroyed')
        }
    }, [lastAction])

    useEffect(() => {
        // console.log('Variable counter and/or lastAction changed')
        return () => {
            // console.log('useEffect lastAction destroyed')
        }
    }, [count, lastAction])

    useEffect(() => {
        // console.log('useEffect triggered')
    })

    const handIncreasePess = () => {
        setCount(count + 1)
        setLasAction('Increased')
    }

    const handDecreasePess = () => {
        setCount(count - 1)
        setLasAction('Decreased')
    }

    // console.log('Function Component Rendered')

    return (
        <>
            {isCalculating && (<Text>Calculating prime numbers. Please, wait ...</Text>)}

            {primeNumbers !== null && (
                <Text style={{ fontSize: 25 }}>There are {primeNumbers} prime numbers between 2 and {maxNumber}</Text>
            )}
            <Text>
                Func Counter for {userName}: {count}
            </Text>
            <Text>
                Last Action: {lastAction}
            </Text>
            <Button title='Func Increase' onPress={handIncreasePess} />
            <Button title='Func Decrease' onPress={handDecreasePess} />
        </>
    )

    // console.log(props)
    // const {question, urgent} = props
    // const isUrgent = props.urgent

    // const handleButtonPress = function () {
    //     console.log("handleButtonPress", question)
    // }

    // const handleAnotherButtonPress = () => {
    //     console.log("handleAnotherButtonPress", question)
    // }

    // return (
    //     <>
    //     <Text>
    //         Func: {question} | 
    //         Urgent: {urgent ? 'Yes' : 'No'}
    //     </Text>
    //     <Button title='Press here' onPress={handleButtonPress} />
    //     <Button title='Press another' onPress={handleAnotherButtonPress} />
    //     </>
    // )
}

// function handleButtonPress() {
//     console.log("handleButtonPress")
// }
