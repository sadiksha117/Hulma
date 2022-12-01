import {
    Box,
    ScrollView,
    Text,
    View,
} from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "./Orderinfo";
import{FontAwesome,FontAwesome5,Ionicons} from "@expo/vector-icons";
import OrderItems from "./Orderitems";
import PlaceOrderModel from "./PlaceOrderModel";

function PlaceOrderScreen(){
    return(
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                    <OrderInfo 
                    title="CUSTOMER"
                    subTitle="XYZ Sharma"
                    text="admin@example.com"
                    icon={<FontAwesome name="user" size={30}color={Colors.white}/>}
                    />
                    <OrderInfo 
                    title="SHIPPING INFO"
                    subTitle="Shipping: Chitwan"
                    text="Pay Method: eSewa"
                    icon={<FontAwesome5 name="shipping-fast" size={30}color={Colors.white}/>}
                    />
                    <OrderInfo 
                    title="DELIVER TO"
                    subTitle="Address:"
                    text="ABC Shrestha, Basundhara"
                    icon={<Ionicons name="location-sharp" size={30}color={Colors.white}/>}
                    />
                </ScrollView>
            </Box>
            {/* Oeder Item */}
            <Box  x={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderItems/>
                {/* total */}
                <PlaceOrderModel/>
            
            </Box>
        </Box>

    );
};

export default PlaceOrderScreen;