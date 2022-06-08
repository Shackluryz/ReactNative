import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/43302793?v=4';
const urlToMyGithub = 'https://github.com/Shackluryz';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo');
            await Linking.openURL(urlToMyGithub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content}>
            <Image 
                accessiblilitylabel='Foto de Perfil: Lucas' 
                style={style.avatar} 
                source={{uri: imageProfileGithub}}
            />
            <Text 
                accessiblilitylabel='Nome: Lucas Rodrigues'
                style = {[style.defaultText, style.name]}
            >
                Lucas Rodrigues
            </Text>
            <Text 
                accessiblilitylabel='Nickname: Shackluryz'
                style = {[style.defaultText, style.nickname]}
            >
                Shackluryz
            </Text>
            <Text 
                accessiblilitylabel='Descrição: Software Engineer Student | Fullstack, Mobile e Game Developer'
                style = {[style.defaultText, style.description]}
            >
                Software Engineer Student | Fullstack, Mobile e Game Developer
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
                <View style = {style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
            </Pressable>
        </View>
        </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 30,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});