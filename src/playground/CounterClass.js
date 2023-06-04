import React from 'react'
import { Text, Button } from 'react-native'
import countPrimeNumbers from './prime'

export default class CounterClass extends React.Component {
   constructor() {
        super()
        this.state = {
            count: 3,
            lastAction: 'None',
            maxNumber: null,
            primeNumbers: null,
            isCalculating: false,
        }

        console.log('Class Component Constructor')  
    }

    componentDidMount() {
        // setTimeout(() => {  
        //     const maxNumber = 200
        //     const primeNumbers = countPrimeNumbers(maxNumber)
        //     this.setState({ 
        //         isCalculating: false,
        //         maxNumber: maxNumber, 
        //         primeNumbers: primeNumbers
        //     }) 
        // }, 10)

        let count = 0
        this.timer = setInterval(() => {
            count++
            console.log('count: ' + count)
        }, 1000)

        console.log('Class Component Did Mount')
    }

    componentWillUnmount() {
        console.log('Class Component destroyed')
        clearInterval(this.timer)
        // never update state in componentWillUnmount
        // this.setState({lastAction: 'Unmounted'})
    }

    render() {

        const handleUserNameChange = () => {
            setUserName('John')
        }
    
        const handleIncreasePress = () => {
            this.setState({
                count: this.state.count + 1,
                lastAction: 'Increased'
            })
            // console.log(this.state.count)
        }

        const handleDecreasePress = () => {
            this.setState({
                count: this.state.count - 1,
                lastAction: 'Decreased'
            })
            // console.log(this.state.count)
        }
            
        

        console.log('Class Component Rendered')

        return (
            <>
                {this.state.isCalculating && (<Text>Calculating prime numbers. Please, wait ...</Text>)}

                {this.state.primeNumbers !== null && (
                    <Text style={{ fontSize: 25 }}>There are {this.state.primeNumbers} prime numbers between 2 and {this.state.maxNumber}</Text>
                )}
                
                

                <Text>
                Class Count for {this.props.userName}:  {this.state.count}
                </Text>
                <Text>
                    Last Action: {this.state.lastAction}
                </Text>

                <Button title='Increase' onPress={handleIncreasePress} />
                <Button title='Decrease' onPress={handleDecreasePress} />
            </>
        )
    }

    componentDidUpdate(prevProps, prevState) { 
        console.log('Class Component Did Updated')
        // console.log('Prev Props:', prevProps)
        // console.log('Prev State:', prevState)
        if (this.state.lastAction !== prevState.lastAction) {
            console.log('Count Changed')
            this.setState({ displaySavedMessage: true })
        }
    }
}