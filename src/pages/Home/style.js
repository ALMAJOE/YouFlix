import { StyleSheet } from 'react-native';

/**
 * Constante responsável pela estilização da página Home (Inicial)
 */
const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: '15%',
        alignItems: 'center',
    },

    title: {
        color: '#808e9b',
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: 26,
        alignItems: 'center',
        marginBottom: '10%'
    },

    logo: {
        width: '65%',
        height: '15%',
        resizeMode: 'stretch',
        marginBottom: '2%'
    },
    
    categoryButton: {
        borderTopColor: '#05c46b',
        borderTopWidth: 1,
        borderBottomColor: '#05c46b',
        borderBottomWidth: 1,
        padding: '5%',
        alignItems: 'center'
    },

    titleButtonCategory: {
        color: '#808e9b'
    },

    list: {
        width: '100%',
    }
});

export default Styles;