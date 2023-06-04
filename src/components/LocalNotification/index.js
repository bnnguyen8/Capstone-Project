import { View, Text, Switch, Platform, Pressable } from "react-native";
import { useEffect, useState } from "react";
import styles from "./styles";
import * as Notifications from "expo-notifications";

export default function LocalNotification() {
	const [reminder, setReminder] = useState(false);
    const [schedule, setSchedule] = useState([]);

	const handleReminderPress = async () => {
		if (!reminder) {
			const scheduled = await scheduleReminder();
            if (scheduled) { 
                setReminder(true);
                setSchedule(await getSchedule());
            }
			
		} else {
            const cancelled = await cancelReminder();
            if (cancelled) { 
                setReminder(false);
                setSchedule(await getSchedule());
            }
		}
	};

    useEffect(() => {
        (async () => {
            const previouslyScheduled = await getSchedule();
            setSchedule(previouslyScheduled);
            if (previouslyScheduled.find((item) => item.type === "reminder")) {
                setReminder(true);
            }
        })();
    }, [])

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>Notifications</Text>
				<Text style={styles.description}>
					Send me a reminder to post on my diary:
				</Text>
			</View>

			{/* Options */}
			<View style={styles.options.container}>
				<Switch value={reminder} onValueChange={handleReminderPress} />
				<Pressable onPress={handleReminderPress}>
					<Text style={styles.options.label}>Set Daily Reminder</Text>
				</Pressable>
			</View>

			{/* Logs */}
			<View style={styles.logs.container}>
				<Text style={styles.logs.title}>
					Scheduled Notifications: {schedule.length}
				</Text>
                {schedule.map((item, index) => (
				<Text key={index} style={styles.logs.text}>
                    {item.type}: {item.id}
                </Text>
                ))}
			</View>
		</>
	);
}

async function scheduleReminder() {
	console.log("Reminder scheduled ", Platform.OS);
	try {
		// Check for permissions
		const permissions = await Notifications.getPermissionsAsync();
		if (!permissions.granted) {
			const request = await Notifications.requestPermissionsAsync({
				ios: {
					allowAlert: true,
					allowBadge: true,
					allowSound: true,
					allowAnnouncements: true,
				},
			});
			if (!request.granted) {
				return false;
			}
		}

		// https://docs.expo.io/versions/latest/sdk/notifications/#notificationtrigger
		const id = await Notifications.scheduleNotificationAsync({
			content: {
				title: "Daily Reminder",
				body: "Don't forget to post on your diary today!",
                sound: true,
                subtitle: "Do not forget to today!",
                color: "#FF0000",
                priority: Notifications.AndroidNotificationPriority.HIGH,
                badge: 0,
                data: {
                    userId: 123,
                    userName: "John Doe",
                    type: "reminder",
                }
			},
			trigger: { 
				hour: 8,
				minute: 0,
				repeats: true,
				// seconds: 5,
			},
		});

		console.log("Schedule Id: ", id);
		if (!id) {
			return false;
		}

		return true;
	} catch (error) {
		console.log("Error: ", error);
		return false;
	}
}

async function cancelReminder() {
	console.log("Reminder cancelled ", Platform.OS);

    let cancelled = false;
    const schedule = await getSchedule();

    for (const item of schedule) {
        if (item.type === "reminder") {
            await Notifications.cancelScheduledNotificationAsync(item.id);
            cancelled = true;
        }
    }
    return cancelled
}

async function getSchedule() {
    console.log("Getting schedule ", Platform.OS);
    const scheduledNotifications = await Notifications.getAllScheduledNotificationsAsync();

    const schedule = []
    scheduledNotifications.forEach((scheduledNotification) => {
        schedule.push({
            id: scheduledNotification.identifier,
            type: scheduledNotification.content.data.type,
        });
    });

    return schedule;
}
