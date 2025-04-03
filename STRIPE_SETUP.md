# Stripe Integration Guide for Kambio POS

This guide will walk you through setting up Stripe for payment processing in your Kambio POS system.

## Step 1: Create a Stripe Account

1. Visit [stripe.com](https://stripe.com) and click "Start now" to create an account
2. Fill in your email, full name, and set a password
3. Verify your email address
4. Complete your business details:
   - Business name
   - Business type 
   - Business address
   - Tax ID or personal ID
   - Website/app information

## Step 2: Get Your API Keys

1. From your Stripe Dashboard, click "Developers" in the left sidebar
2. Navigate to the "API keys" tab
3. You'll see two types of keys:
   - **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for production)
   - **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for production)
4. For development and testing, use the test mode keys
5. Copy both keys - you'll need them for Kambio POS configuration

## Step 3: Configure Kambio POS Settings

1. In your Kambio POS app, go to Settings
2. Find the "Payments" section
3. Enable "Stripe Integration" toggle
4. Enter your Publishable Key and Secret Key in the provided fields
5. If you want to accept Apple Pay or Google Pay, enable those options as well
6. Save your settings

## Step 4: Test the Integration

1. Create a new transaction
2. Add items to the cart
3. Select "Card" as the payment method
4. For testing, use these test card numbers:
   - Visa: `4242 4242 4242 4242`
   - Mastercard: `5555 5555 5555 4444`
   - Amex: `3782 822463 10005`
   - Discover: `6011 1111 1111 1117`
5. For the expiration date, use any future date (e.g., 12/25)
6. For CVC, use any 3 digits (4 digits for Amex)
7. Complete the transaction and verify it appears in your Stripe Dashboard

## Step 5: Going Live

1. When you're ready to accept real payments, go back to Settings
2. Replace your test API keys with your live API keys
3. Process a small real transaction to verify everything works correctly
4. Monitor your Stripe Dashboard for transaction details

## Close Proximity Payment Options

Kambio POS supports several methods for close proximity payments:

### Apple Pay / Google Pay
These digital wallets use NFC (Near Field Communication) technology to enable tap-to-pay functionality. When configured in Stripe, customers can simply tap their phones to your device to pay.

### QR Code Payments (CoDi)
The app generates QR codes that customers can scan with their banking apps to make instant payments. This is particularly useful for the Mexican market through the "CoDi" (Cobro Digital) system by Banco de México.

### Setting Up CoDi:
1. Register with Banco de México's CoDi program through your bank
2. Obtain your merchant certificate and private key
3. Enter your CoDi Merchant ID and certificate details in the Payment Settings

## Sharing Payment Links

To send payment requests to customers with the same app:

1. Create a transaction in your POS
2. Select "Share Payment Link" option
3. Choose how to share (WhatsApp, email, text, etc.)
4. The customer will receive a secure link they can open in their Kambio app
5. They can complete the payment using their preferred method

## Troubleshooting

- **Keys Not Working**: Verify you're using the correct API keys for your environment (test vs. live)
- **Payment Failing**: Check your connection and ensure Stripe account is properly verified
- **Apple Pay/Google Pay Issues**: Verify your device supports NFC and has it enabled

For more information, visit [stripe.com/docs](https://stripe.com/docs) or contact Kambio POS support.