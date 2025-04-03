# Kambio POS Payment System Guide

This guide covers all payment features in Kambio POS, including setup instructions and usage guidelines.

## Available Payment Methods

Kambio POS supports multiple payment methods to fit your business needs:

1. **Cash Payments**: Record cash transactions with change calculation
2. **Card Payments**: Accept credit/debit cards through Stripe integration
3. **Bank Transfers**: Display your account details for direct transfers
4. **QR Code Payments**: Generate QR codes for customers to scan (including CoDi support)
5. **Proximity Payments**: Send payment requests to nearby devices

## Setting Up Payment Methods

### 1. Configuring Stripe (for Card Payments)

Follow these steps to enable credit/debit card processing:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. In your Stripe Dashboard, go to Developers → API keys
3. Copy your Publishable Key (`pk_test_...`) and Secret Key (`sk_test_...`)
4. In Kambio POS, go to Settings → Payments
5. Toggle "Stripe Integration" to ON
6. Enter your API keys in the appropriate fields
7. Save your settings

For detailed Stripe setup instructions, see [STRIPE_SETUP.md](./STRIPE_SETUP.md)

### 2. Setting Up Bank Transfer Details

To allow customers to pay via bank transfer:

1. Go to Settings → Payments → Bank Transfer Details
2. Enter your beneficiary name (required)
3. Add your bank name
4. Enter your account number (minimum 10 digits)
5. For Mexican banks, enter your CLABE (18 digits)
6. Save your settings

### 3. Configuring CoDi (Mexican Digital Payments)

To enable CoDi QR code payments:

1. Register with Banco de México's CoDi program through your bank
2. Obtain your merchant certificate and private key
3. In Settings → Payments, toggle "CoDi Integration" to ON
4. Enter your Merchant ID
5. Add your certificate path and private key information
6. Save your settings

## Processing Payments

### Cash Payments

1. Add products to the cart
2. Tap "Pay" and select "Cash"
3. Enter the amount received from the customer
4. The app will calculate the change amount
5. Confirm the payment to complete the transaction

### Card Payments

1. Add products to the cart
2. Tap "Pay" and select "Card"
3. The app will display the card entry form
4. Customer enters their card details
5. Tap "Process Payment" to complete the transaction
6. A receipt will be generated upon successful payment

### Bank Transfers

1. Add products to the cart
2. Tap "Pay" and select "Bank Transfer"
3. The app displays your bank account details
4. Customer initiates the transfer from their bank
5. Once confirmed, mark the transaction as complete

### QR Code Payments

1. Add products to the cart
2. Tap "Pay" and select "QR Code"
3. The app generates a payment QR code
4. Customer scans the QR with their banking app
5. Payment is processed automatically
6. Transaction completes when payment is confirmed

### Proximity Payments

1. Add products to the cart
2. Tap "Pay" and select "Send Payment Request"
3. Choose one of three sharing methods:
   - QR Code: Display a QR code for the customer to scan
   - Payment Link: Share a payment URL via messaging apps
   - Nearby Devices: Send directly to another Kambio POS user nearby
4. Customer completes payment on their device
5. Transaction is marked as complete

## Proximity Payment Technology

Kambio POS implements several technologies for close proximity payments:

### NFC (Near Field Communication)

When using Apple Pay or Google Pay through Stripe, customers can tap their phone to NFC-enabled payment terminals. This requires compatible hardware.

### Bluetooth Low Energy (BLE)

The "Nearby Devices" feature uses Bluetooth to discover other Kambio POS users in close proximity (typically within 10 meters). This creates a seamless payment experience between vendor and customer.

### QR Code Scanning

This visual method works by generating a unique QR code containing the payment information. The customer scans this with their device camera to process the payment.

### Direct Share

Payment links can be shared via messaging apps, email, or SMS for customers who prefer traditional digital communication.

## Offline Payments

Kambio POS supports offline payment processing:

1. Enable "Offline Mode" in Settings
2. Process payments as normal
3. Transaction data is stored locally
4. When connectivity returns, data syncs automatically
5. Stripe payments require connectivity to process

## Security Features

- All payment data is encrypted in transit and at rest
- Stripe integration uses tokenization to secure card details
- Bank account information is protected by database security policies
- Access to payment settings requires authentication
- Sensitive keys are never exposed to the client

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Payment declined | Verify card details and available funds |
| Stripe integration not working | Check API keys and internet connectivity |
| QR code not scanning | Ensure adequate lighting and camera focus |
| Nearby devices not found | Verify both devices have Bluetooth enabled |
| Bank transfer not confirmed | Ask customer for transfer confirmation |

## Best Practices

1. Always issue receipts for all payment types
2. Verify payment confirmation before completing transactions
3. Keep your Stripe and banking details up to date
4. Regularly check transaction history for accuracy
5. Use test mode in Stripe when setting up or troubleshooting

For additional support, contact Kambio POS support team.