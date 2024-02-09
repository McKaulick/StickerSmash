import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderSource }) {
    return (
        <Image source={placeholderSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
});