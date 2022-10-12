import { Image, StyleSheet, Text, View } from 'react-native'


const MarginTop = () => <View style={{ marginTop: 10 }} />
export default function Profile({ route }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>
                    Welcome to Profile Pages
                </Text>
                <Text>
                    {route.params.name}
                </Text>
            </View>
            <MarginTop />
            <View style={{ alignItems: "center" }}>
                <Text style={{fontSize: 15, color:"#256D85"}}>
                    Muhammad Anwar Firdaus
                </Text>
                <Text style={{fontSize: 15, color:"#256D85"}}>
                    RCTN-KS05-010
                </Text>
            </View>
            <Image
                source={{
                    uri: "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/5146d1dbf9146c4d12a7249e72065a58.png"
                }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FE3CF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#002B5B',
        fontSize: 30
    },
    rowButton: {
        flexDirection: 'row',
        margin: 1
    },
});

