import {
	Text,
	View,
    TextInput,
    Button,
	Switch,
    ScrollView,
    ActivityIndicator
} from "react-native";
import styles from './styles'
import { useEffect, useState } from "react";
import { loadById } from "../../database";
import { primaryColor } from "../../includes/variables";

export default function Detail({navigation, route}) {

    const {id, title} = route.params
    const [description, setDescription] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        (async () => {
            navigation.setOptions({ title: title })
            const data = await loadById(id);
            setLoadingData(false)
            if(data){
                setDescription(data.description)
            }else{
                setNotFound(true)
            }
        })();
    }, [])

    return (
        <View style={styles.container}> 
            <Text style={styles.id}>Id: {id}</Text>
            {
                loadingData ? (
                    <ActivityIndicator size="large" color={ primaryColor } />
                ) : (
                    notFound ? (
                        <Text style={styles.notFound}>Data Not Found</Text>
                        ) : (
                            <>
                                <View style={styles.body}> 
                                    <ScrollView>
                                        <Text style={styles.description}>{description}</Text>
                                    </ScrollView>
                                </View>
                            </>
                        )
                )
            }
        </View>
    )
}