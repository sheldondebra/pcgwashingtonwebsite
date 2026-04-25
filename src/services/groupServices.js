import { db } from "../utils/firebase";
import { collection , addDoc , getDoc} from "firebase/firestore";


export const addGroupMember = async (data) => {
  return await addDoc(collection(db, 'groups'),data)
};

export const getGroupMemebrs = async () => {
  const snapshot = await getDoc(collection(db,'groups'))
  return snapshot.docs.map(doc =>({
    id:doc.id,
    ...doc.data()
  }));
}