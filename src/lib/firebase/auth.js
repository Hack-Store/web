import { getAuth } from "firebase/auth";
import firebaseApp from "./app";

const auth = getAuth(firebaseApp);

export default auth;