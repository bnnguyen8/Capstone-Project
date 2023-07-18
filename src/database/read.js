// import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where, doc, getDoc, orderBy, QuerySnapshot } from "firebase/firestore";
import { db } from "./config";

/**
 * Loads all documents from the "notes" collection
 * returns an array with notes 
 */
export async function load() {
    // const querySnapshot = await getDocs(collection(db, "notes"));
    // return processQuerySnapshot(querySnapshot);

    const q = query(collection(db, "notes"), orderBy("modified", "desc"));
    const querySnapshot = await getDocs(q);
    return processQuerySnapshot(querySnapshot);
}
export async function loadByCreated() {
    // const querySnapshot = await getDocs(collection(db, "notes"));
    // return processQuerySnapshot(querySnapshot);

    const q = query(collection(db, "notes"), orderBy("created", "desc"));
    const querySnapshot = await getDocs(q);
    return processQuerySnapshot(querySnapshot);
}

/**
 * Converts a Firebase query snapshot into an array of notes
 * @param {object} querySnapshot
 * @returns 
 *  An array with data
 */
function processQuerySnapshot(querySnapshot) {
    const data = []
    querySnapshot.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        });
        
    })
    return data;
}

export async function loadById(id) {
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}