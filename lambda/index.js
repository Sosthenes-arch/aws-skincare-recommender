
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES({ region: "us-east-1" });

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { name, email, concern } = body;

  const params = {
    TableName: "SkincareProducts",
    FilterExpression: "contains (concerns, :c)",
    ExpressionAttributeValues: { ":c": concern }
  };

  try {
    const data = await docClient.scan(params).promise();
    if (!data.Items.length) throw new Error("No product found");

    const product = data.Items[0];
    const emailParams = {
      Destination: { ToAddresses: [email] },
      Message: {
        Body: {
          Text: {
            Data: `Hi ${name},

We recommend: ${product.name}
${product.description}
Price: $${product.price}`,
          }
        },
        Subject: { Data: "Your Skincare Recommendation" }
      },
      Source: "your_verified_email@example.com"
    };

    await ses.sendEmail(emailParams).promise();
    return { statusCode: 200, body: "Email sent successfully!" };
  } catch (err) {
    return { statusCode: 500, body: `Error: ${err.message}` };
  }
};
