import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css';
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpUpHIVGwe_b-hZcWXXBlsYwq6zZ6aC5A",
  authDomain: "comision-react-10c29.firebaseapp.com",
  projectId: "comision-react-10c29",
  storageBucket: "comision-react-10c29.appspot.com",
  messagingSenderId: "682277310287",
  appId: "1:682277310287:web:c3f8b5c441dbc01139ff3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
