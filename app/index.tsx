import React, {useState} from "react";
import {Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View} from "react-native";
import {theme} from "@/theme";
import SafeAreaView from "react-native-safe-area-view";
import {CalendarIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"
import {CalendarDaysIcon, MapPinIcon} from "react-native-heroicons/solid";

const Home = () => {
    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([1, 2, 3]);

    const handleLocation = (loc) => {
        console.log('location: ', loc)
    }
  return (
    <View className="flex-1 relative">
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../assets/images/bg.png')}
        blurRadius={70}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
          {/* Search Section */}
        <View style={{ height:'7%', marginTop: '10%' }} className="relative mx-4 z-50">
            <View className="flex-row items-center justify-end rounded-full" style={{backgroundColor: showSearch? theme.bgWhite(0.2): 'transparent'}}>
                {
                    showSearch? (
                        <TextInput
                            placeholder="Search City"
                            placeholderTextColor={'lightgray'}
                            className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                        />
                    ): null
                }

                <TouchableOpacity
                    onPress={() => toggleSearch(!showSearch)}
                    style={{backgroundColor: theme.bgWhite(0.3)}}
                    className="rounded-full p-3 m-1"
                >
                    <MagnifyingGlassIcon size="25" color="white" />
                </TouchableOpacity>
            </View>
            {
                locations.length > 0 && showSearch ? (
                    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                        {
                            locations.map((loc, index) => {
                                let showBorder = index+1 != locations.length;
                                let borderClass = showBorder? ' border-b-2 border-b-gray-400': '';
                                return (
                                    <TouchableOpacity
                                        onPress={() => handleLocation(loc)}
                                        key={index}
                                        className={"flex-row items-center border-0 p-3 mx-4 mb-1" +borderClass}
                                    >
                                        <MapPinIcon size="20" color="gray" />
                                        <Text className="text-black text-lg ml-2">London, United Kingdom</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                ): null
            }
        </View>

        {/* Forecast Section */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
            {/* Location */}
            <Text className="text-white text-center text-2xl font-bold">
                London,
                <Text className="text-lg text-gray-300 font-semibold">
                    United Kingdom
                </Text>
            </Text>
            {/* weather image */}
            <View className="flex-row justify-center">
                <Image
                    source={require('../assets/images/partlycloudy.png')}
                    className=" h-52 w-52"
                />
            </View>
            {/* degree celsius */}
            <View className="space-y-2">
                <Text className="text-white font-bold text-center text-6xl ml-5">
                    23&#176;
                </Text>
                <Text className="text-white text-center text-xl tracking-widest">
                    Partly Cloud
                </Text>
            </View>
            {/* other stats */}
            <View className="flex-row justify-between mx-4">
                <View className="flex-row space-x-2 items-center">
                    <Image source={require('../assets/icons/wind.png')} className="h-6 w-6" />
                    <Text className="text-white text-base font-semibold">
                        22km
                    </Text>
                </View>
                <View className="flex-row space-x-2 items-center">
                    <Image source={require('../assets/icons/drop.png')} className="h-6 w-6" />
                    <Text className="text-white text-base font-semibold">
                        23%
                    </Text>
                </View>
                <View className="flex-row space-x-2 items-center">
                    <Image source={require('../assets/icons/sun.png')} className="h-6 w-6" />
                    <Text className="text-white text-base font-semibold">
                        6:05 AM
                    </Text>
                </View>
            </View>
        </View>

        {/* forecast for next days */}
        <View className="mb-2 space-y-3">
            <View className="flex-row items-center mx-5 space-x-2">
                <CalendarDaysIcon size="22" color="white" />
                <Text className="text-white text-base">Daily forecast</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}
            >
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                  style={{backgroundColor: theme.bgWhite(0.15)}}
                >
                    <Image source={require('../assets/images/heavyrain.png')}
                       className="h-11 w-11" />
                    <Text className="text-white">Monday</Text>
                    <Text className="text-white">
                        13&#176;
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                      style={{backgroundColor: theme.bgWhite(0.15)}}
                >
                    <Image source={require('../assets/images/heavyrain.png')}
                           className="h-11 w-11" />
                    <Text className="text-white">Tuesday</Text>
                    <Text className="text-white">
                        13&#176;
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                      style={{backgroundColor: theme.bgWhite(0.15)}}
                >
                    <Image source={require('../assets/images/heavyrain.png')}
                           className="h-11 w-11" />
                    <Text className="text-white">Wednesday</Text>
                    <Text className="text-white">
                        13&#176;
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                      style={{backgroundColor: theme.bgWhite(0.15)}}
                >
                    <Image source={require('../assets/images/heavyrain.png')}
                           className="h-11 w-11" />
                    <Text className="text-white">Thursday</Text>
                    <Text className="text-white">
                        13&#176;
                    </Text>
                </View>
                <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                      style={{backgroundColor: theme.bgWhite(0.15)}}
                >
                    <Image source={require('../assets/images/heavyrain.png')}
                           className="h-11 w-11" />
                    <Text className="text-white">Friday</Text>
                    <Text className="text-white">
                        13&#176;
                    </Text>
                </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
