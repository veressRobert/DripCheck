import { router } from 'expo-router';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


    export const signIn = async (email: string, password: string) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            if (user) {
                router.replace('/screens/loginScreen');
            }
        }
        catch (error: any) {
            alert('Sign in failed doue to' + error.message);
        }
    }

export const register = async (email: string, password: string) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        if (user) {
            router.replace('/screens/loginScreen');
        }
    }
    catch (error: any) {
        alert('Registration failed due to ' + error.message);
    }
}
