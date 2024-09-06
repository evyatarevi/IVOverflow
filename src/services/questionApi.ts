import { db } from "../config/firebaseConfig";
import questionData from "../data/questionsData";
import { setDoc, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { type Question } from "../types/Question";

const DOCUMENT_ID = "uRRJfLuyPanAjdRDGJx8";

export const createDB = async () => {
  try {
    const questionRef = await addDoc(collection(db, "questions"), {
      questionData,
    });
    return questionRef;
  } catch (error) {
    throw new Error("Failed to create DB");
  }
};

export const getQuestions = async () => {
  try {
    const docRef = doc(db, "questions", DOCUMENT_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().questionData;
    }
  } catch (error) {
    throw new Error("Failed to fetch questions");
  }
};

export const setQuestions = async (data: Question[]) => {
  try {
    const docRef = doc(db, "questions", DOCUMENT_ID);
    await setDoc(docRef, {
      questionData: data,
    });
  } catch (error) {
    throw new Error("Failed to add answer");
  }
};

// Update elements in an array
// If your document contains an array field, you can use arrayUnion() and arrayRemove() to add and remove elements.
//  arrayUnion() adds elements to an array but only elements not already present. arrayRemove() removes all instances
//  of each given element:

// import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
// const washingtonRef = doc(db, "cities", "DC");
// // Atomically add a new region to the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayUnion("greater_virginia"),
// });

// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayRemove("east_coast"),
// });

// import { doc, setDoc } from "firebase/firestore";

// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });

// If the document does exist, its contents will be overwritten with the newly provided data,
// unless you specify that the data should be merged into the existing document, as follows:
// const cityRef = doc(db, "cities", "BJ");
// setDoc(cityRef, { capital: true }, { merge: true });

// // Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);

// Add new rating to given restaurant's `ratings/` subcollection
//   await addDoc(
//     collection(db, `restaurants/${restaurantId}/ratings`),
//     newRating
//   );
// };
