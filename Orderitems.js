 import {
     Box,
     Button,
     Center,
     FlatList,
     HStack,
     Image,
     Pressable,
     Text,
     VStack,
} from "natve-base";

import React from 'react';
import Colors from "../color";
import produts from "../data/Products";

const OrderItems = () =>{
    return(
        <FlatList 
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({item}) =>(
            <Pressable>
                <Box mb={3}>
                    <HStack 
                      alignItems="center"
                      bg={Colors.white}
                      shadow={1}
                      rounded={10}
                      overflow="hidden"
                      >
                    <Center w="25%" bg={Colors.deepGray}>
                        <Image 
                        source={{uri: item.name}}
                        alt={item.name}
                        w="full"
                        h={24}
                        resizeMode="contain"/>
                </Center>
                <VStack w="60%" px={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={12}>
                        {item.name}
                    </Text>
                    <Text  color={Colors.lightblack} mt={2} bold >
                        ${item.price}
                    </Text>
                </VStack>
                <Center>
                    <Button 
                     bg={Colors.main}
                     _presses={{bg:Colors.main}}
                     _text={{
                        color:Colors.white
                     }}
                     >
                        5
                     </Button>
                </Center>

                      </HStack>
                </Box>
            </Pressable>
        ) }
        />

    );
};

export default OrderItems;
