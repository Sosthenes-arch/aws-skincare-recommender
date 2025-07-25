
# AWS Skincare Recommendation System

This is a real-world AWS-based skincare recommendation form for websites. Clients submit their skin concerns, and the system recommends a suitable product from DynamoDB and sends it via SES.

## Deployment Steps

1. Deploy the Lambda function using code in `lambda/index.js`
2. Use Amazon DynamoDB to store products
3. Use SES for sending email (verify sender/receiver emails)
4. Setup API Gateway to invoke Lambda with POST requests
5. Link the frontend `index.html` to the API endpoint

## Test Example

Skin Concern: dryness  
Recommended Product: Hydrating Facial Cleanser
