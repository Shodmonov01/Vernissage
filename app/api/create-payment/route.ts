// app/api/create-payment/route.js
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount, currency, description, returnUrl } = await req.json();

  const shopId = process.env.YOOMONEY_SHOP_ID;
  const apiKey = process.env.YOOMONEY_API_KEY;
  const idempotenceKey = Date.now().toString();

  const auth = "Basic " + Buffer.from(`${shopId}:${apiKey}`).toString("base64");

  const paymentData = {
    amount: {
      value: amount,
      currency: currency,
    },
    capture: true,
    confirmation: {
      type: "redirect",
      return_url: returnUrl,
    },
    description: description,
  };

  try {
    const response = await fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
        "Idempotence-Key": idempotenceKey,
      },
      body: JSON.stringify(paymentData),
    });
    const result = await response.json();
    console.log("niamir", result);
    if (result.error) {
      return NextResponse.json(
        { message: result.error.description },
        { status: 400 }
      );
    }

    return NextResponse.json({
      confirmationUrl: result.confirmation.confirmation_url,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Payment request failed", error: error.message },
      { status: 500 }
    );
  }
}
