import React, { useState } from 'react';
import { View, Button, Alert, Image, ActivityIndicator, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { firebaseStorage } from '@/firebaseConfig'; 
import { ref, uploadBytesResumable } from 'firebase/storage'; 
import * as FileSystem from 'expo-file-system';
import { globalStyles } from '../styles/styles';

const UploadMedia = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadImage = async () => {
        if (!image) {
            Alert.alert("No image selected!");
            return;
        }

        setUploading(true);
        const filename = image.substring(image.lastIndexOf('/') + 1);
        const storageRef = ref(firebaseStorage, `creator_pictures/${filename}`);
        const response = await fetch(image);
        const blob = await response.blob();

        const uploadTask = uploadBytesResumable(storageRef, blob);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log("Uploading...", snapshot.bytesTransferred, "/", snapshot.totalBytes);
            },
            (error) => {
                console.error(error);
                Alert.alert("Upload failed", error.message);
                setUploading(false);
            },
            () => {
                Alert.alert("Upload Successful");
                setImage(null);
                setUploading(false);
            }
        );
    };

    return (
        <View>
            <Pressable title="Pick an Image" style={{
                        borderRadius: 10,
                        backgroundColor: '#FC9104',
                        width: '80%',
                        alignSelf: 'center',
                        padding: 10,
                    }}
                onPress={pickImage}>
                    <Text style={{ color: 'white' }}>Choose Image</Text>
            </Pressable>
            <View style={{height:10}}></View>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            {uploading ? (
                
                <ActivityIndicator size="large" color="#0000ff" />
            ) :  (   
                    <Pressable title="Upload Image" style={{
                        borderRadius: 10,
                        backgroundColor: '#FC9104',
                        width: '80%',
                        alignSelf: 'center',
                        padding: 10,
                    }} onPress={uploadImage}><Text style = {{color: 'white'}}>Upload Image</Text></Pressable>
            )}
            <View style={{ height: 10 }}></View>
        </View>
    );
};

export default UploadMedia;