import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Option } from "../components/options";
import { Transaction } from "../components/transaction";
import { useTheme } from "../components/themeContext";

const HomeScreen = () => {
    const { isDarkTheme } = useTheme();
    return(
        <ScrollView style={[styles.container, isDarkTheme && styles.darkContainer]} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image source={require('../assets/image.png')} style={styles.image}/>
                <View style={styles.textblock}>
                    <Text style={styles.welcome}>Welcome Back</Text>
                    <Text style={[styles.name, isDarkTheme && styles.darkname]}>Kadia Dellor</Text>
                </View>
               <View style={styles.search}>
               <Image source={require('../assets/search.png')} style={styles.searchicon}/>
                </View> 
            </View>

            <Image source={require('../assets/Card.png')} style={styles.card}/>

            <View style={styles.options}>
                <Option icon={require('../assets/send.png')} name={'Send'}/>
                <Option icon={require('../assets/recieve.png')} name={'Receive'}/>
                <Option icon={require('../assets/loan.png')} name={'Loan'}/>
                <Option icon={require('../assets/topUp.png')} name={'TopUp'}/>
            </View>

            <View style={styles.titleView}>
                <Text style={[styles.title, isDarkTheme && styles.darkname]}>Transaction</Text>
                <Text style={styles.more}>See All</Text>
            </View>

            <View>
                <Transaction
                 icon={require('../assets/apple.png')} 
                 name={'Apple Store'}
                 type={'Entertainment'}
                 cost={'-$5,99'}
                  />
                  <Transaction
                 icon={require('../assets/spotify.png')} 
                 name={'Spotify'}
                 type={'Music'}
                 cost={'-$12,99'}
                  />
                  <Transaction
                 icon={require('../assets/moneyTransfer.png')} 
                 name={'Money Transfer'}
                 type={'Transaction'}
                 cost={'$300'}
                  />
                  <Transaction
                 icon={require('../assets/grocery.png')} 
                 name={'Grocery'}
                 type={'Grocery'}
                 cost={'-$88'}
                  />
            </View>

        </ScrollView>
    )}


const styles = StyleSheet.create({
    container:{
        padding: '20px',
    },
    darkContainer: {
        backgroundColor: '#000020',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    image: {
        width: '60px',
        height: '60px',
    },
    textblock: {
        flex: 1.5,
        marginLeft: '50px',
    },
    welcome:{
        fontWeight: 'semibold',
        color: 'gray',
        fontSize: '15px',
    },
    name: {
        fontWeight: 'bold',
        fontSize: '30px',
    },
    darkname: {
        color: 'white',
    },
    search: {
        width: '60px',
        height: '60px',
        backgroundColor: 'lightgray',
        borderRadius: '50%', 
        justifyContent: 'center',
        alignItems: 'center',

    },
    searchicon: {
        width: '30px',
        height: '30px',
    },
    card: {
        width: '100%',
        height: '250px',
        borderRadius: '25px',
        marginTop: '30px',
        marginBottom: '30px',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '35px',
    },
    titleView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '20px',
        alignContent: 'center',
    },
    title:{
        fontSize: '24px',
        fontWeight: 'bold',
    },
    more: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '18px',
        alignSelf: 'center',
    },
})
export default  HomeScreen;