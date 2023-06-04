import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { addToken, removeToken } from '../../database/write';

export default function PushNotification() {

    const [docId, setdocId] = useState(null);

    const handleReceivePress = async () => {
        if (!docId) {
            const id = await enablePushNotifications();
            if (id) {
                setdocId(id);
            }
        } else {
            const removed = await removeToken(docId);
            if (removed) {
                setdocId(null);
            }
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Message:</Text>
                <Text style={styles.description}>Receive information from our partner:</Text>

                <View style={styles.options.container}>
                    <Switch
                        value={docId !== null}
                        onValueChange={handleReceivePress}
                    />
                    <Pressable onPress={handleReceivePress}>
                        <Text style={styles.options.label}>Receive Notifications</Text>
                        <Text> - Doc Id: {docId}</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

async function enablePushNotifications() {

    // check permission
    const permission = await Notifications.getPermissionsAsync();
    if(!permission.granted) {
        const request = await Notifications.requestPermissionsAsync({
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true,
                allowAnnouncements: true,
            },
        });
        if(!request.granted) {
            console.log("Permission not granted");
            return null;
        }
    }

    // Get the device token
    // const token = await Notifications.getDevicePushTokenAsync();
    const token = await Notifications.getExpoPushTokenAsync();
    const docId = await addToken(token);

    // DONE
    return docId;
}
