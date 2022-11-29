import { Pressable, VStack, Input, Heading, Box, Image, Button, Text } from 'native-base';
import React from 'react';
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';


function RegisterScreen() {
    return (
        <Box flex={1} bg={Colors.black}>
            <Image 
            flex={1} 
            alt="Logo" 
            resizeMode = "cover"
            size="lg"
            w="full"
            source={require("../../assets/cover.png")}
            />
            <Box 
            w="full" 
            h="full" 
            position="absolute" 
            top="0" 
            px="6"
            justifyContent="center" 
            bg={Colors.deepestGray}
            >
                <Heading>SIGN UP</Heading>
                <VStack space={8} pt="6">
                    {/* USERNAME*/}
                    <Input
                    InputLeftElement={
                        <FontAwesome name="user" size={24} color={Colors.main} />
                    }
                     variant="underlined" 
                     placeholder="Ram Pradhan"
                     w="70%" 
                     pl={2}
                     type="text"
                     color={Colors.main}
                     borderBottomColor={Colors.underline} 
                    />
                    {/* EMAIL */}
                    <Input
                    InputLeftElement={
                        <MaterialIcons name="email" size={24} color={Colors.main} />
                    }
                     variant="underlined" 
                     placeholder="user@gmail.com"
                     w="70%" 
                     pl={2}
                     type="text"
                     color={Colors.main}
                     borderBottomColor={Colors.underline} 
                    />
                    {/* PASSWORD*/}
                    <Input
                    InputLeftElement={
                        <Ionicons name="eye" size={24} color={Colors.main} />
                    }
                     variant="underlined" 
                     placeholder="*********"
                     w="70%" 
                     type="password"
                     pl={2}
                     color={Colors.main}
                     borderBottomColor={Colors.underline} 
                    />
                </VStack>
                <Button 
                 _pressed={{
                    bg: Colors.main
                 }}
                 my={30} 
                 w="40%" 
                 rounded={50} 
                 bg={Colors.main}
                >
                    SIGN UP
                </Button>
                <Pressable mt={4}>
                    <Text 
                    color={Colors.blue}
                    >
                        LOGIN
                    </Text>
                </Pressable>
            </Box>
        </Box>
    );
}

export default RegisterScreen;