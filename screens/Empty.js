import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Empty= () => {
    return (
        <View style={styles.container}>
            <Text>Merhaba</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default Empty;