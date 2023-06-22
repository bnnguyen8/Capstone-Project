import { Text, View, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import PostItem from "./PostItem";
import styles from "./styles";
import { useSelector } from "react-redux";


export default function PostList({
	navigation,
	route
}) {

	const posts = useSelector((state) => state.post.posts);

	const handleAddNotePress = () => {
		navigation.navigate("Add");
	};

	const handlePostPress = (post) => {
		navigation.navigate("Detail", {post: post});
	};

	return (
		<>
			<ScrollView>
				{posts.map((post, index) => {
					return (
						<Pressable key={index}  onPress={(() => handlePostPress(post))}>
							<PostItem 
								navigation={navigation}
								route={route}
								{...post}
							/>
						</Pressable>
					);
				})}
                <View style={{height: 90}}></View>
			</ScrollView>

			<View style={styles.addButtonContainer}>
				<Pressable onPress={handleAddNotePress}>
					<Text  style={styles.addButtonText}>+</Text>
				</Pressable>
			</View>
		</>
	);
}
