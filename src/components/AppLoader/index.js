import { useEffect } from "react";
import * as database from "../../database"
import * as SplashScreen from "expo-splash-screen";
import { useDispatch } from "react-redux";
import { setPosts } from "../../redux/postSlice";

export default function AppLoader() {
    const dispatch = useDispatch();

    useEffect(() => {
        // IIFE - Immediately Invoked Function Expression
		(async () => {
            // Load the database
            const posts = await database.load();
            dispatch(setPosts(posts));

            // Hides SplashScreen that was prevented to auto hide
            SplashScreen.hideAsync()
                .then((hidden) => {
                    // console.log(`hidden: ${hidden}`);
                })
                .catch((error) => {
                    // console.log(`hidden error: ${error}`);
                });
        })();
	}, []);
}