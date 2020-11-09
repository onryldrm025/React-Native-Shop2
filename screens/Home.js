import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { COLORS, icons, SIZES, FONTS, images } from '../contanst';


const Home = ({navigation}) => {

    const [data, setData] = React.useState([

        {
            id: '1',
            name: 'Dikto',
            fav: false,
            img: images.plant1
        },
        {
            id: "2",
            name: 'Luivas',
            fav: true,
            img: images.plant2
        },
        {
            id: "3",
            name: 'Jarks',
            fav: false,
            img: images.plant3
        },
        {
            id: "4",
            name: 'Jarks',
            fav: false,
            img: images.plant4
        },
        {
            id: "5",
            name: 'Jarks',
            fav: false,
            img: images.plant5
        }

    ])

    const [profile, setProfile] = React.useState([

        {
            id: 0,
            img: images.profile1,
        },
        {
            id: 2,
            img: images.profile2,
        },
        {
            id: 3,
            img: images.profile3,
        },
        {
            id: 4,
            img: images.profile4,
        },
        {
            id: 5,
            img: images.profile5,
        },


    ])


    const renderItem = ({ item }) => {
        return (
            <View style={{ marginHorizontal: SIZES.base }}>
                <TouchableOpacity >
                    <Image source={item.img} style={{ width: SIZES.width * 0.2, height: '95%', borderRadius: 15 }} />
                </TouchableOpacity>
                <View style={{
                    position: 'absolute',
                    right: 0,
                    bottom: '18%',
                    backgroundColor: COLORS.primary, padding: 3,
                    borderTopStartRadius: 10,
                    borderBottomStartRadius: 10
                }}>
                    <Text style={{
                        ...FONTS.body3,
                        color: COLORS.white,
                        marginLeft: 5
                    }}>{item.name}</Text>
                </View>

                <TouchableOpacity style={{
                    position: 'absolute',
                    left: '10%',
                    top: '10%'
                }}
                    onPress={() => {
                        let index = data.indexOf(item)
                        data[index].fav = !data[index].fav
                        return setData([...data]
                        )
                    }}
                >
                    <Image source={item.fav ? icons.heartred : icons.hearticon} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>

            </View>
        )

    }

    const renderProfile = () => {

        if (profile.length == 0) {
            return (
                <View></View>
            )
        }
        else if (profile.length <= 3) {
            return (
                <View style={{ flexDirection: 'row' }}>
                    {profile.map((item, index) => {
                        return (

                            <View
                                key={index}
                                style={index == 0 ? {} : { marginLeft: -20 }}
                            >
                                <Image
                                    source={item.img}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        borderWidth: 2,
                                        borderColor: COLORS.primary,
                                        resizeMode: 'cover'
                                    }}
                                />
                            </View>
                        )
                    })}
                </View>
            )

        }
        else {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {profile.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <View
                                    key={index}
                                    style={index == 0 ? {} : { marginLeft: -20 }}>
                                    <Image
                                        source={item.img}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            borderWidth: 2,
                                            borderColor: COLORS.primary,
                                            resizeMode: 'cover'
                                        }} />
                                </View>
                            )
                        }
                    }
                    )}
                    <Text style={{ marginLeft: 10, ...FONTS.body4, color: COLORS.secondary }}>+{profile.length - 3} More</Text>
                </View>
            )
        }


    }

    return (
        <View style={styles.container}>
            <View style={{ height: '30%', backgroundColor: COLORS.white }}>
                <View style={{
                    flex: 1,
                    margin: SIZES.base,
                    backgroundColor: COLORS.primary,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    borderTopStartRadius: 25,
                    borderTopEndRadius: 25,
                    padding: SIZES.padding
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h2
                        }}>New Plants</Text>

                        <Image
                            source={icons.focus}
                            style={{
                                width: 25,
                                height: 25
                            }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <FlatList
                            data={data}
                            horizontal
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
            <View style={{ height: '50%', backgroundColor: COLORS.white, borderBottomStartRadius: 30, borderBottomEndRadius: 30 }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: '4%',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            ...FONTS.h2,
                            color: COLORS.secondary
                        }}
                        >Today's Share</Text>
                        <TouchableOpacity
                            
                        >
                            <Text style={{
                                ...FONTS.body3,
                                color: COLORS.secondary
                            }}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: COLORS.white,
                        flexDirection: 'row',
                        borderRadius: 50

                    }}>
                        <View
                            style={{
                                flex: 1
                            }}>
                            <TouchableOpacity 
                            onPress={()=>navigation.navigate('PlantDetails')}
                            style={{
                                flex: 1,
                                padding: '8%'
                            }}>

                                <Image
                                    source={images.plant5}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20
                                    }}
                                    resizeMode='cover'
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>navigation.navigate('PlantDetails')}
                            style={{ flex: 1, padding: '8%' }}>
                                <Image
                                    source={images.plant6}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 20
                                    }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('PlantDetails')}
                        style={{ flex: 1.3, marginHorizontal: '3%', marginVertical: 15 }}>
                            <Image
                                source={images.plant1}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 20
                                }} />

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{
                height: '20%',
                backgroundColor: COLORS.lightGray,
                marginLeft: '5%',
                justifyContent: 'center'
            }}>
                <View >
                    <Text style={{ ...FONTS.h3 }}>Added Friends</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>{profile.length} total </Text>
                </View>
                <View style={{ marginTop: '1%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    {renderProfile()}
                    <View style={{ flexDirection: 'row', marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{color:COLORS.secondary,...FONTS.body4}}>Add New </Text>
                        <TouchableOpacity source={icons.plus} style={{
                            width: 40,
                            height: 40,
                            backgroundColor: COLORS.gray,
                            borderRadius: 10,
                            alignItems:'center',
                            justifyContent:'center'
                        }}

                        >
                            <Image source={icons.plus} style={{
                                width:20,
                                height:20,
                                resizeMode:'contain'

                                }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default Home;