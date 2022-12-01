

import {Box,Center,Text,FormControl,Input,ScrollView,VStack} from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import Colors from "../color";

 const ShippingInputs = [
    {
        label:"ENTER CITY",
        type:"text",
    },
    
    {
        label:"ENTER COUNTRY",
        type: "text",
    },
    {
        label:"ENTER POSTAL CODE",
        type:"text",
    },
    {
        label:"ENTER ADDRESS",
        type:"text",
    },
];

function ShippingScreen() {
    return (
        <Box flex={1} safeArea bg={COlors.main} py={5}>
            {/*Header */}
            <Center pb={15}>
            <Text color ={Colors.white} fontSize={14} bold>
                DELIVERY ADDRESS
            </Text>
            </Center>
            {/*inputs */}
            <Box h="full" bg={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {ShippingInputs.map((i,index) => (
                          <FormControl key={index}>
                          <FormControl.label 
                          _text={{
                              fontSize:"12px",
                              fontWeight:"bold",
                          }}
                          >
                      {i.label}
                              </FormControl.label>
                              <Input 
                              borderWidth={0.2}
                               borderColor={Colors.main}
                                bg={Colors.subGreen}
                                 py={4}
                                 type={i.type}
                                  color={Colors.main}
                                  _focus={{
                                      bg:Colors.subGreen,
                                      borderWidth:1,
                                      borderColor:Colors.main,
                                   }} />

                      </FormControl>  
                        ))}
                         <Buttone bg={Colors.main} color={Colors.white}>
                            CONTINUE
                        </Buttone>
                    </VStack>
                </ScrollView>
            </Box>
           
        </Box>
    );
}

export default ShippingScreen;