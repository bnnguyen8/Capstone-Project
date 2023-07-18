// import { collection, addDoc, doc, getDocs, writeBatch, updateDoc, deleteDoc } from "firebase/firestore";
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs, writeBatch, commitBatch } from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
    try {
        const dbCollection = collection(db, "notes");
        const docRef = await addDoc(dbCollection, data);
        return docRef.id;
    } catch (e) {
        return null
    }
}

export async function update(id, data) {
    try {
        const docRef = doc(db, "notes", id);
        await updateDoc(docRef, data)
        return true
    } catch (e) {
        return false
    }
}

export async function remove(id) {
    try {
        const docRef = doc(db, "notes", id);
        await deleteDoc(docRef);
        return true
    } catch (e) {
        return false
    }
}

export async function removeAll(posts) {
    try {
        // - remove all documents from the "notes" collection

        // TODO: remove post from posts one by one
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            await remove(post.id)
        }

        return true;
    } catch (e) {
        console.log(e)
        return false
    }
}

/*
    Save the notification token to the database
*/
export async function addToken(token) {
    try {
        const dbCollection = collection(db, "tokens");
        const docRef = await addDoc(dbCollection, token);
        return docRef.id;
    } catch (e) {
        return null
    }
}

export async function removeToken(id) {
    try {
        const docRef = doc(db, "tokens", id);
        await deleteDoc(docRef);
        return true
    } catch (e) {
        return false
    }
}