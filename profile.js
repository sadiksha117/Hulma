import { Box, FormControl, Input, ScrollView, VStack} from "native-base";
import React from "react";
import Colors from "../../color";

const Inputs=[
    {
        label:"USERNAME",
        type:"text",
    },
    {
        label:"EMAIL",
        type:"text",
    }, 
    {
        label:"NEW PASSWORD",
        type:"password",
    },
    {
        label:"CONFRIM PASSWORD",
        type:"password",
    },

];


const Profile =() => {
    return(
        <Box h="full" bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicators={false}>
                <VStack space={10} mt={5} pb={10}>
                    {Inputs.map((i,index)) => (
                            <FormControl key={index}>
                                <FormControl.label
                                 _text={{
                            fontSize:"12px",
                            FontWeight:"bold",
                        }}
                        >
                           {i.label}
                        </FormControl.Label>
                        <Input
                        borderWidth={0.2}
                        bg={Colors.subGreen}
                        borderColor={Colors.main}
                        py={4}
                        type={i.type}
                        color={Colors.main}
                        fontSize={15}
                        _focus={{
                         bg:Colors.subGreen,
                         borderColor:Colors.main,
                         borderWidth:1,
                        }}
                        />
                    </FormControl>
                        ))}
                        <Buttone bg={Colors.main} color={Colors.white}>
                            UPDATE PROFILE
                        </Buttone>
                </VStack>
            </ScrollView>
            </Box>
    
    );
}

export default Profile;