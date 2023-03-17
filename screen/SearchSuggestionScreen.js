import { useState } from "react"
import { FlatList, Text, TextInput, View } from "react-native"
import { Icon } from "react-native-elements"

import tw from "twrnc"
import search from "../assets/data/search"

const SearchSuggestionScreen = () => {

    const [searchInput, setSearch] = useState('')

    return (
        <View style={tw`p-4 text-sm`}>
            <TextInput
                style={tw`m-5 text-sm`}
                placeholder="Where are you going ..."
                value={searchInput}
                onChange={setSearch} />

            <FlatList
                data={search}
                renderItem={({ item }) => (
                    <View style={tw`flex-row items-center p-2 border-b border-gray-100`}>
                        <Icon  style={tw`w-10 rounded-md bg-gray-200 p-2 mr-5`}type="Entypo" name="location-pin"  size={25}/>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />

        </View>

    )

}

export default SearchSuggestionScreen