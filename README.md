# Skincare Recommendation System using AWS

This project is a simple serverless skincare recommendation engine built using **AWS DynamoDB**, **AWS Lambda**, **Amazon SES**, and a **static HTML form**. It helps users receive personalized skincare product suggestions based on their skin concerns.

## 🚀 Features

- HTML form for user input (Skin type, concern, email, etc.)
- AWS Lambda function to process input and query a DynamoDB table for matching products
- Sends product recommendations via Amazon SES to the user’s email
- Built using only AWS Free Tier resources

## 🧰 Technologies Used

- AWS Lambda (Python runtime)
- Amazon API Gateway
- AWS DynamoDB
- Amazon Simple Email Service (SES)
- HTML + JavaScript (Fetch API)

---

## 🛠️ Project Setup

### 1. Create DynamoDB Table

- Table name: `SkincareProducts`
- Partition key: `ProductId` (String)
- Sample Item Format:

```json
{
  "ProductId": { "S": "SKU-001-CETAPHIL-CLEANSER" },
  "ProductName": { "S": "CeraVe Foaming Facial Cleanser" },
  "Issue": { "S": "Oily and acne-prone skin" },
  "Brand": { "S": "CeraVe" },
  "Category": { "S": "Cleanser" },
  "Price": { "N": "12.99" },
  "SkinType": { "SS": ["Oily", "Combination", "Acne-prone"] },
  "KeyIngredients": { "SS": ["Ceramides", "Niacinamide", "Hyaluronic Acid"] },
  "Description": { "S": "Gentle foaming cleanser that removes excess oil and impurities while maintaining the skin's natural barrier" },
  "InStock": { "BOOL": true },
  "CreatedAt": { "S": "2024-07-24T10:30:00Z" }
}
```

---

### 2. Create Lambda Function

- Runtime: Python 3.12
- Role: Attach permissions for SES, DynamoDB (Read access)
- Paste the `lambda_function.py` code
- Environment variables required:
  - `DYNAMODB_TABLE_NAME`
  - `SENDER_EMAIL`
- Deploy function

---

### 3. Configure Amazon SES

- Verify the sender email address (sandbox mode or request production access)
- Add the verified email in the Lambda environment variable `SENDER_EMAIL`

---

### 4. Setup API Gateway

- Create an HTTP API
- Integrate it with the Lambda function
- Enable CORS if you're using the form on a separate domain
- Deploy and copy the invoke URL

---

### 5. Create the HTML Form

- Update the `action` or `fetch()` URL in `skincare_recommendation_form.html` with your API Gateway endpoint.
- Example:

```js
fetch('https://your-api-url.amazonaws.com/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

## ✅ Testing

1. Open the HTML file in your browser
2. Fill the form and submit
3. Check your email inbox for the product suggestions

---

## 📁 Folder Structure

```
├── skincare_recommendation_form.html
├── lambda_function.py
├── sample_product_item.json
└── README.md
```

---

## 🧠 Future Improvements

- Add user authentication
- Store user submissions in DynamoDB
- Add UI feedback for success/error
- Export product list to JSON or Excel

---

## 🧑‍💻 Author

**Uche Sosthenes Ugochukwu**  
Email: [usosthenes@gmail.com](mailto:usosthenes@gmail.com)

---

## 📄 License

This project is open-sourced under the MIT License.