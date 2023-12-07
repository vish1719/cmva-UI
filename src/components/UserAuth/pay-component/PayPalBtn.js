import { PayPalButton } from "react-paypal-button-v2";
import React from 'react';

export function PayPalBtn(props) {
  const { amount, currency, createSubscription, onApprove, catchError,onError, onCancel} = props;
  const paypalKey = "AZqU9vysDOzvECnl5-Hxms3Afvpb3coiBHUemK22_lqczTaKpaQRIp94c4sYI8LrdYOQvHuFcTwU_ntl"
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
      onApprove={(data, details) => onApprove(data, details)}
      onError={(err) => onError(err)}
      catchError={(err) => catchError(err)}
      onCancel={(err) => onCancel(err)}
      options={{
        clientId: paypalKey,
        vault:true
      }}
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'subscribe',
      }}
    />
  );
}

export default PayPalBtn;