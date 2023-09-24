import { FirebaseApp, getApp, initializeApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  addDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};
export let app: FirebaseApp;
try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

export const db = getFirestore(app);

export class Database {
  constructor(db: Firestore) {
    this.db = db;
  }
  private readonly db: Firestore;

  //   addDoc will generate id
  async addData<T extends object>(collections: string, createData: T) {
    return addDoc(collection(this.db, collections), createData);
  }

  //   to check data if it exists or not
  async getData(collections: string, key: string, value: string) {
    const querySnapshot = await getDocs(
      query(collection(db, collections), where(key, "==", value))
    );

    // initialize results
    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }

  //   get all data from documents
  async getAllData(collections: string) {
    const querySnapshot = await getDocs(collection(this.db, collections));

    let result: any = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });

    return result;
  }
}
