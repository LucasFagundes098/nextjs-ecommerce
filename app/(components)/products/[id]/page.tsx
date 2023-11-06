// * Firebase
import {
  collection,
  where,
  query,
  getDocs,
  QuerySnapshot,
  DocumentSnapshot,
} from "firebase/firestore/lite";
import { db } from "../../../firebase/firebase-config";

// * Types
import { Product } from "@/app/types/types";

async function fetchDataFromFirestore(id : number) {
  const querySnapshot = await getDocs(collection(db, "product"));

  const data: Product[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as unknown as Product);
  });

  const item = data.find((product) => product.id === id);
  console.log('item', item);

  return item;
}

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const product = await fetchDataFromFirestore(params.id);  

  return(
    <h1>
      {product ? (
        <h1>
          {product.name}
        </h1>
      ) : (
        <p>Produto não encontrado.</p>
      )}
    </h1>
  );
}
