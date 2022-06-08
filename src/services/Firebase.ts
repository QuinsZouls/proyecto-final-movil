import {
  collection,
  getDocsFromServer,
  QuerySnapshot,
  DocumentData
} from 'firebase/firestore';

import { FirestoreDB } from '../environment/firebase';

export const getCollectionByName = async (
  collectionName: string
): Promise<QuerySnapshot<DocumentData>> => {
  const collectionRef = collection(FirestoreDB, collectionName);
  return await getDocsFromServer(collectionRef);
};
