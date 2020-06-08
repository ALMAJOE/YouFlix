import { StyleSheet } from 'react-native';

/**
 * Constante responsável pela estilização da página Playlist
 */
const Styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: '15%',
        alignItems: 'center',
    },

    title: {
        color: '#05c46b',
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
    
    videoButton: {
        borderTopColor: '#05c46b',
        borderTopWidth: 1,
        borderBottomColor: '#05c46b',
        borderBottomWidth: 1,
        padding: '5%',
        flexDirection: 'row'
    },

    titleVideo: {
        color: '#485460',
        marginLeft: '2%',
        fontSize: 15,
        fontWeight: 'bold'
    },

    channelName: {
        color: '#d3d3d3',
        fontSize: 12
    },

    list: {
        width: '100%',
    },

    thumb: {
        width: 120,
        height: 90,
        resizeMode: 'stretch',
        borderRadius: 150
    }
});

export default Styles;