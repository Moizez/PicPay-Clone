import React from 'react';
import { TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Button, Label } from './styles'

const PayButton = ({ onPress, focused }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                colors={
                    focused
                        ? ['#fff', '#ccc']
                        : ['#00fc6c', '#00ac4a']
                }
            >
                <MaterialIcons
                    name="attach-money"
                    size={30}
                    color={focused ? '#000' : '#fff'}
                />
                <Label focused={focused}>Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    );
}

export default PayButton