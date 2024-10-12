import axios from 'axios';

const PAYPAL_API_URL = process.env.PAYPAL_API_URL;
const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

export const createPayPalOrder = async (amount: number) => {
  try {
    const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders`, {
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: 'USD',
          value: amount.toString()
        }
      }]
    }, {
      auth: {
        username: PAYPAL_CLIENT_ID!,
        password: PAYPAL_SECRET!
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    throw error;
  }
};

export const capturePayPalOrder = async (orderId: string) => {
  try {
    const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`, {}, {
      auth: {
        username: PAYPAL_CLIENT_ID!,
        password: PAYPAL_SECRET!
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error capturing PayPal order:', error);
    throw error;
  }
};