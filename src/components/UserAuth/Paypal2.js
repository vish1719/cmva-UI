/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react';


const planA = 'P-59M1017976970682PLZYGALA';
const planB = 'P-1JN05705K53953236LZYGBYA';

paypal.Buttons({
  style: {
    color: 'gold',
    shape: 'pill',
    label: 'subscribe'
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      'plan_id': document.getElementById('selectPlan').value === 'planA' ? planA : planB,
      'application_context': {
        'shipping_preference': 'NO_SHIPPING'
      }
    });
  },
  onApprove: function(data, actions) {
    alert(data.subscriptionID);
  }
}).render('#paypal-buttons');


paypal.Buttons({
  style: {
    color: 'silver',
    shape: 'pill',
    label: 'subscribe'
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      'plan_id': planA,
      'application_context': {
        'shipping_preference': 'NO_SHIPPING'
      }
    });
  },
  onApprove: function(data, actions) {
    alert(data.subscriptionID);
  }
}).render('#paypal-buttons-plan-a');



paypal.Buttons({
  style: {
    color: 'blue',
    shape: 'pill',
    label: 'subscribe'
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      'plan_id': planB,
      'application_context': {
        'shipping_preference': 'NO_SHIPPING'
      }
    });
  },
  onApprove: function(data, actions) {
    alert(data.subscriptionID);
  }
}).render('#paypal-buttons-plan-b');


function Paypal() {
  const product = {
    price: 777.77,
    name: 'comfy chair',
    description: 'fancy chair, like new',
   
  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default Paypal;