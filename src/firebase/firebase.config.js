import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAPaeIxgIyGCkfNm-hSa_7r7bH35TPQnaw",
  authDomain: "trackshop-e2f38.firebaseapp.com",
  projectId: "trackshop-e2f38",
  storageBucket: "trackshop-e2f38.appspot.com",
  messagingSenderId: "685049874145",
  appId: "1:685049874145:web:08d512f07d93d32fa759a0"
}

export const app = initializeApp(firebaseConfig)