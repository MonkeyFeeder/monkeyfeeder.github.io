import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyA3hVtxPO9SiAS2CS-YBh1Cy7Q3EMJcn-4",
    authDomain: "mael-landrin.firebaseapp.com",
    databaseURL: "https://mael-landrin.firebaseio.com",
    projectId: "mael-landrin",
    storageBucket: "mael-landrin.appspot.com",
    messagingSenderId: "985005520082",
    appId: "1:985005520082:web:60e004e2f3b7fecd39a90b"
};

export const addExperience = async (name, description, url, fileExperience) => {
    const experienceSnapshot = await firestore.collection('experiences').doc(name).get();

    if(!experienceSnapshot.exists) {
        // First, taking care of the uploading of the file
        const storageRef = firebase.storage().ref(fileExperience.name);

        // Uploading file
        const uploadFile = await storageRef.put(fileExperience);

        // Get file URL to put it in the database
        const fileUrl = await storageRef.getDownloadURL();

        // Then, creating a new document for this experience
        await firestore.collection('experiences').doc(name).set({
            name,
            url,
            description,
            fileUrl
        });

        return "Experience successfully added";
    } else {
        return "There's already an experience for this project";
    }
}


export const getExperiences = async () => {
    const experiencesSnapshot = await firestore.collection('experiences').get();

    let experiences = [];

    if(!experiencesSnapshot.empty) {
        experiencesSnapshot.docs.map(doc => {
            experiences.push(doc.data());
        });

        return experiences;
    }
}


firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;