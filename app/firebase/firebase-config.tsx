// * Types
import { Product } from "@/app/types/types";

// * Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB9bhGS81PVNnnu5P3689RbXYjbxT928HM",
  authDomain: "nextjs-ecommerce-f74c5.firebaseapp.com",
  projectId: "nextjs-ecommerce-f74c5",
  storageBucket: "nextjs-ecommerce-f74c5.appspot.com",
  messagingSenderId: "1073000851410",
  appId: "1:1073000851410:web:31b2fff7ef6608e09e0a0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchAllData() {
  const querySnapshot = await getDocs(collection(db, "product"));

  const data: Product[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as unknown as Product);
  });

  return data;
}

async function getProductPage(id: number): Promise<Product | undefined> {
  try {
    const data = await fetchAllData();
    const item = data.find((product) => product.id === id);
    if (item) {
      return item;
    } else {
      return undefined;
    }
  } catch (error) {
    throw new Error(`Erro ao buscar produto: ${error}`);
  }
}


export { fetchAllData, getProductPage };
