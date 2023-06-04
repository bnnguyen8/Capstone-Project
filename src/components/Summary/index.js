import { Button, Modal, Pressable, Text, View } from "react-native";
import styles from "./styles";
import Form from "../Form";
import { useSelector } from "react-redux";
import { useState } from "react";


export default function Summary() {
	const [showModal, setShowModal] = useState(false);

	const posts = useSelector((state) => state.post.posts);

	const publisedPosts = posts.filter((post) => post.published);
	const publisedPostsCount = publisedPosts.length;

	const unpublistedPosts = posts.filter((post) => !post.published);
	const unpublisedPostsCount = unpublistedPosts.length;

	const totalPostsCount = posts.length;

	const handleModalToggle = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.label}>
					Published Posts:
					<Text style={styles.count}> {publisedPostsCount}</Text>
				</Text>
				<Pressable onPress={handleModalToggle}>
					<Text style={styles.moreInfo}>More info ...</Text>
				</Pressable>
			</View>
			<Modal visible={showModal} animationType="fade" transparent={true}>
				<View style={styles.modalContainer}>
					<View style={styles.modalBox}>
                        <Text>Summary Details</Text>
						<Text>Published Posts: {publisedPostsCount}</Text>
						<Text>Unpublished Posts: {unpublisedPostsCount}</Text>
						<Text>Total Posts: {totalPostsCount}</Text>

						<Button title="Close" onPress={handleModalToggle} />
					</View>
				</View>
			</Modal>
		</>
	);
}
