import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	Button,
	SafeAreaView,
	ScrollView,
	TextInput,
	Switch,
	Pressable,
	TouchableHighlight,
	TouchableOpacity,
	Image,
	Platform,
} from "react-native";
import { useEffect, useState } from "react";
import {
	primaryColor,
	appName,
	secondaryColor,
} from "./src/includes/variables";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from "./src/components/Header";
import PostList from "./src/components/PostList";
import Summary from "./src/components/Summary/";
import Detail from "./src/components/Detail";
import Form from "./src/components/Form/";

import HomeScreen from "./src/screens/HomeScreen";
import PostsScreen from "./src/screens/PostsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import { Ionicons } from '@expo/vector-icons';
import styles from "./src/styles/structure";
import uuid from "react-uuid";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/redux/store";
import * as database from "./src/database"
import AppLoader from "./src/components/AppLoader";
import * as Notifications from "expo-notifications";

SplashScreen.preventAutoHideAsync()
	.then((prevented) => {
		// console.log(`Prevented: ${prevented}`);
	})
	.catch((error) => {
		// console.warn(`Prevented failed: ${error}`);
	});

// Handle notification display
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true,
	}),
	handleSuccess:  (notificationId) => {
		console.log("Handler success: ", notificationId);
	},
	handleError:  (notificationId, error) => {
		console.log("Notification error: ", error);
	},
});
  
const Tab = createBottomTabNavigator();

// Create the stack controller
const Stack = createStackNavigator();

export default function App() {

	// Listen for received notifications
	useEffect(() => {
		const subscription = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log("Notification received: ", notification);
			}
		);

		return () => {
			subscription.remove();
		}
	}, []);

	// Listen for interacted notifications
	useEffect(() => {
		const subscription = Notifications.addNotificationResponseReceivedListener(
			response => {
				console.log("Tap Response: ", response);
			}
		);
		return () => {
			subscription.remove();
		}
	}, []);

	return (
		<Provider store={store}>
			<AppLoader/>
			<NavigationContainer>
				<View style={styles.container}>
					<StatusBar style="auto" />
					
					<Header />

					<Tab.Navigator screenOptions={{
								headerTintColor: '#fff',
								headerTitleStyle: {
									fontWeight: 'bold',
								},
								headerStyle: {
									backgroundColor: primaryColor
								},
							}}>
						<Tab.Screen name="PostsScreen" 
						component={PostsScreen}  	
						options={{
							title: 'Notes',
							tabBarIcon: ({ color, size }) => {
								return (
								<MaterialCommunityIcons 
									name='post'
									size={size} 
									color={color} />
								)
							}
						}} />

						<Tab.Screen name="SettingsScreen" 
							component={SettingsScreen} 
							options={{
								title: 'Settings',
								tabBarIcon: ({ color, size }) => {
									return (
									<Ionicons name="settings-sharp"
										size={size} 
										color={color} />
									)
								}
						}} />
					</Tab.Navigator>
				</View>
			</NavigationContainer>
		</Provider>
	);
}
