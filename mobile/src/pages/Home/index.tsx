import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
    return (
        <ImageBackground
            source={require('../../assets/home-background.png')}
            style={styles.container}
            resizeMode="contain"
            imageStyle={{ width: 274, height: 368 }}

        >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}> Seu marketplace de coleta de residuos.</Text>
                <Text style={styles.description}> Ajudamos pessoas encontrarem ponto de coleta de forma eficiente.</Text>
            </View>
            <View>
                <RectButton style={styles.button} onPress={() => { }}>
                    <View style={styles.buttonIcon}>
                        <Text > 
                            >
                            {/* <Icon name="arrow-right" color="#fff" size={24}/> */}
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#f0f0f5'
    },

    main: {
        flex: 1,
        justifyContent: 'center',


    },

    title: {
        color: '#322153',
        fontSize: 32,
        maxWidth: 260,
        marginTop: 64,

    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        maxWidth: 260,
        lineHeight: 24,
    },
    footer: {},
    select: {},

    input: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 5,
        paddingHorizontal: 24,
        fontSize: 16
    },

    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
    }


})

export default Home;