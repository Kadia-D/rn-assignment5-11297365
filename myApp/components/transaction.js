import { View, StyleSheet, Text, Image } from "react-native";
import { useTheme } from "./themeContext";

export function Transaction ({icon, name, type, cost}) {

    const getColorStyle = (value) => {
        return value.startsWith('-') ? [styles.negativeText, isDarkTheme && styles.darkname, ]: styles.positiveText;
      };

      const { isDarkTheme } = useTheme();
    return(
        <View style={styles.transactionContainer}>
            <View style={styles.icon}>
                <Image source={icon} style={styles.iconImg}/>
            </View>
            <View style={styles.details}>
                <Text style={[styles.name, isDarkTheme && styles.darkname]}>{name}</Text>
                <Text style={styles.type}>{type}</Text>
            </View>
            <View>
                <Text style={[styles.cost , getColorStyle(cost)]}>{cost}</Text>
            </View>
        </View>
    )}


const styles = StyleSheet.create({
    transactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        height: '75px',
        alignItems: 'center',
        marginBottom: '15px',
    },
    icon: {
        backgroundColor: 'lightgray',
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    iconImg: {
        width: '28px',
        height: '30px',
    },
    details: {
        flex: 1.5,
        marginLeft: '30px',
        height: '100%',
        alignItems: 'baseline',
        
    },
    name: {
        fontSize: '22px',
        fontWeight: 'bold',
        flex: 1,
    },
    darkname: {
        color: 'white',
    },
    type: {
        fontSize: '19px',
        fontWeight: 'semibold',
        color: 'grey',
        flex: 1,
    },
    cost: {
        fontSize: '24px',
        fontWeight: 'bold',
        height: '100%',
    },
    positiveText: {
        color: 'blue',
      },
      negativeText: {
        color: 'black',
      },
})