import { useEffect } from "react";
import * as database from "../../database"
import * as SplashScreen from "expo-splash-screen";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/postSlice";

export default function AppLoader() {
    const dispatch = useDispatch();

    const sortModified = useSelector((state) => state.sortnotes.sortModified)

    useEffect(() => {
		(async () => {
            if(sortModified){
                var posts = await database.load();
            } else {
                var posts = await database.loadByCreated();
            }
                
            dispatch(setPosts(posts));
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