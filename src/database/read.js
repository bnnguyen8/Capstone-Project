// import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where, doc, getDoc, orderBy, QuerySnapshot } from "firebase/firestore";
import { db } from "./config";

/**
 * Loads all documents from the "notes" collection
 * returns an array with notes 
 */
export async function load() {
    const q1 = query(
        collection(db, "notes"), 
        where("important", "==", true),
        orderBy("important", "desc")
    );
    const querySnapshot1 = await getDocs(q1);
    const data1 = processQuerySnapshot(querySnapshot1);
    // return data1

    const q2 = query(
        collection(db, "notes"), 
        orderBy("modified", "desc")
    );
    const querySnapshot2 = await getDocs(q2);
    const data2 = processQuerySnapshot(querySnapshot2);

    const notesNotInData1 = data2.filter(note2 => {
        return !data1.some(note1 => note1.id === note2.id);
    });

    return [...data1, ...notesNotInData1]
}

export async function loadByCreated() {
    const q1 = query(
        collection(db, "notes"), 
        where("important", "==", true),
        orderBy("important", "desc")
    );
    const querySnapshot1 = await getDocs(q1);
    const data1 = processQuerySnapshot(querySnapshot1);
    // return data1

    const q2 = query(
        collection(db, "notes"), 
        orderBy("created", "desc")
    );
    const querySnapshot2 = await getDocs(q2);
    const data2 = processQuerySnapshot(querySnapshot2);

    const notesNotInData1 = data2.filter(note2 => {
        return !data1.some(note1 => note1.id === note2.id);
    });

    return [...data1, ...notesNotInData1]
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