import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
                {/* Text is being passed as props */}
            </View>

            <View style={styles.circle}></View>

        </View>
    )
}

const styles = StyleSheet.create({
item: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 5,

},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
square: {
    height: 24,
    width: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    marginRight: 15,
},
itemText: {
    maxWidth: '80%',
},
circle: {
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
}
});

export default Task;