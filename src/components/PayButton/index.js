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
                        ? ['#52b788', '#2d6a4f']
                        : ['#00fc6c', '#00ac4a']
                }
            >
                <MaterialIcons
                    name="attach-money"
                    size={30}
                    color='#fff'
                />
                <Label>Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    );
}

export default PayButton