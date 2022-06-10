import {
  collection,
  doc,
  getDocsFromServer,
  QuerySnapshot,
  DocumentData,
  getDocFromServer
} from 'firebase/firestore';

import { FirestoreDB } from '../environment/firebase';

export const getCollectionByName = async (
  collectionName: string
): Promise<QuerySnapshot<DocumentData>> => {
  const collectionRef = collection(FirestoreDB, collectionName);
  return await getDocsFromServer(collectionRef);
};

export const getDocumentByPath = async (collectionName: string) => {
  const documentReft = doc(FirestoreDB, collectionName);
  return await getDocFromServer(documentReft);
};
