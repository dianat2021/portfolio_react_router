import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCRWeN209IdTvJbquRChfXpcRPn8dzGk8Q",
  authDomain: "reza-s-portfolio.firebaseapp.com",
  projectId: "reza-s-portfolio",
  storageBucket: "reza-s-portfolio.appspot.com",
  messagingSenderId: "878318714731",
  appId: "1:878318714731:web:0b214615931c425fd6162e",
};

export const firebaseTest = () => {
  initializeApp(firebaseConfig);
  const appDatabse = getFirestore();
  const colReference = collection(appDatabse, "userMessages");
  getDocs(colReference).then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc)=>{
      users.push({
        ...doc.data(), id:doc.id
      })
    })
    console.log(users)
  });
  
};

firebaseTest()