import {Button,Center,HStack,Modal,Text,VStack} from "native-base";
import React, {useState} from "react";
import Buttone from'./Buttone';
import Colors from"../color";

const OrderInfos=[
    {
        title:"Products",
        price:125.77,
        color:"black"
    },
    {
        title:"Shipping",
        price:34.00,
        color:"black"
    },
    {
        title:"Tax",
        price:235.89,
        color:"black"
    },
    {
        title:"Total Amount",
        price:4566.00,
        color:"main"
    }
]
const PlaceOrderModel = () =>{
    const [showMode,setModel]= useState(false)
    return(
        <Center>
            <Buttone 
            onPress={() => setShowModel(true)}
            bg={Colors.black}
            color={Colors.white}
            mt={5}
            >
                SHOW TOTAL
            </Buttone>
            <Modal 
            isOpen={showModel}
            onClose={() => setShowModel(false)}
            size="lg">
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton/>
                    <Modal.Header>Ordee</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {OrderInfos.map((i,index) => (
                        <HStack key={index} alignItems="center" justifyContent="space-between">
                            <Text fontWeight="medium">Product</Text>
                            <Text color={i.color==="main" ? Colors.main: Colors.black}  bold>${i.price}</Text>
                        </HStack>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button flex={1} bg={Colors.main} h={45} _text={{color:Colors.white}}
                        onPress={() => setShowModel(false)}
                        _pressed={{ bg:Colors.main,}}>
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>

    );
};

export default PlaceOrderModel;