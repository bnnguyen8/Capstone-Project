import {View, Text, Button, Switch } from 'react-native'

import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'
import { useState } from 'react'


export default function Playground() {
    const [userName, setUserName] = useState('Marry')
    const [displayClassComp, setDisplayClassComp] = useState(false)
    const [displayFuncCom, setDisplayFuncComp] = useState(false)

    const handleUserNameChange = () => {
        setUserName('John')
    }

    // console.log('Playground Rendered')

    return (
        <View>
            <Text style={{ fontSize: 32 }}>Playground</Text>
            <Button style={{ fontSize: 32 }} title='Change User Name' onPress={() => handleUserNameChange()} />

            <View>
                <Text style={{ fontSize: 30, paddingTop: 30 }}>Class Component</Text>
                <Switch value={displayClassComp}
                    onValueChange={setDisplayClassComp}   
                />
                {displayClassComp && <CounterClass userName={userName} />}
            </View>

            <View>
                <Text style={{ fontSize: 30, paddingTop: 30 }}>Function Component</Text>
                <Switch value={displayFuncCom}
                    onValueChange={setDisplayFuncComp}   
                />
                {displayFuncCom && <CounterFunction userName={userName} />}
            </View>

        </View>
    )
}