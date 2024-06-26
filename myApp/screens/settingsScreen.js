import { View,StyleSheet, Text, Switch } from "react-native";
import { Settings } from "../components/settingsOptions";
import { useTheme } from '../components/themeContext';


const SettingsScreen = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return(
        <View style={[styles.settings, isDarkTheme && styles.darkSettings]}>
            <Text style={[styles.settingsHeader, isDarkTheme && styles.darksettingsHeader]}>Settings</Text>
            <Settings setting={'Language'}/>
            <Settings setting={'My Profile'}/>
            <Settings setting={'Contact Us'}/>
            <Settings setting={'Change Password'}/>
            <Settings setting={'Privacy Policy'}/>
            <View style={styles.themeView}>
                <Text style={[styles.theme, isDarkTheme && styles.darksettingsHeader]}>Theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "lightgreen" }}
                    onValueChange={toggleTheme}
                    value={isDarkTheme}
                    style={styles.switch}
                />
            </View>
            
        </View>
    )}


const styles = StyleSheet.create({
    settings:{
        flex: 1,
        padding: '20px',
        paddingTop: '40px',
    },
    darkSettings: {
        backgroundColor: '#000020',
    },
    settingsHeader:{
        fontSize: '25px',
        marginBottom: '50px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    darksettingsHeader:{
        color: 'white'
    },
    themeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '50px',
    },
    theme: {
        fontSize: '25px',
        fontWeight: 'bold',
        letterSpacing: '1.5px',
    },
    switch: {
        height: '30px'
    },
})
export default SettingsScreen;