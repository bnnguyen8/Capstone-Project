import { Text, View, ScrollView, Pressable, TextInput } from "react-native";
import { useState } from "react";
import PostItem from "./PostItem";
import styles from "./styles";
import { useSelector } from "react-redux";

export default function PostList({
	navigation,
	route
}) {

	const [searchTerm, setSearchTerm] = useState("");

	const posts = useSelector((state) => state.post.posts);
	

	const handleAddNotePress = () => {
		navigation.navigate("Add");
	};

	const handlePostPress = (post) => {
		navigation.navigate("Detail", {post: post});
	};

	// Filter the posts based on the searchTerm
	var filteredPosts =  posts;
	if (searchTerm.length > 0) {
		filteredPosts = posts.filter((post) =>
			post.description.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	// Filter the posts based on the modified attribute
	// const sortModified = useSelector((state) => state.sortnotes.sortModified)
	// if (!sortModified) {
	// 	// TODO: Sort by created descending
	// 	filteredPosts.sort((a, b) => b.created - a.created); // Sort by created descending
	// }
	
	
	return (
		<>
			<TextInput
                style={[styles.textInput]}
                placeholder='Search notes'
				value={searchTerm}
                onChangeText={setSearchTerm} // Use setSearchTerm directly as the onChangeText handler
            />
			<ScrollView>
				{filteredPosts.map((post, index) => {
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
