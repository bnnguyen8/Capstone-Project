// import React from 'react'
import { Text, View, Platform } from 'react-native'
import { appName, primaryColor, myFullName } from '../../includes/variables'
import styles from './styles'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {

    if (Platform.OS === 'android') {
        // do sth for Android devices
      } else {
        // do sth for iOS devices
      }

      const tagLine = Platform.OS === 'ios' ? 'for iOS' : 'for Android'
      
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
            <FontAwesome5 name="tasks" size={24} color={primaryColor} />
                <Text style={styles.title}>
                    {appName}
                </Text>
                <Text style={styles.titleRight}>
                    {myFullName}
                </Text>
            </View>
        </View>
    )
}