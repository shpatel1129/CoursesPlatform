import { NextRequest, NextResponse } from "next/server";
import { getCourseBySlug } from "@/data/courses";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      fullName, 
      email, 
      phone, 
      countryCode,
      referralSource, 
      interestReason, 
      courseSlug, 
      paymentMethod,
      simulateFailure 
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 6) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (!referralSource) {
      return NextResponse.json(
        { error: "Please select where you came from." },
        { status: 400 }
      );
    }

    if (!interestReason) {
      return NextResponse.json(
        { error: "Please select what made you interested in this course." },
        { status: 400 }
      );
    }

    // Security check: Verify the course and its authentic price on the server
    const course = getCourseBySlug(courseSlug);
    if (!course) {
      return NextResponse.json(
        { error: "Invalid course selected or course not found." },
        { status: 404 }
      );
    }

    // Simulated failure test toggle
    if (simulateFailure === true) {
      return NextResponse.json(
        { error: "Payment was declined by the card issuer. Please try another card or payment method." },
        { status: 402 }
      );
    }

    // Generate unique order ID
    const orderId = `APX-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Order payload ready for payment gateway integration (Stripe / Razorpay / PayPal webhook)
    const orderRecord = {
      orderId,
      courseSlug: course.slug,
      courseTitle: course.title,
      amountCharged: course.salePrice,
      originalPrice: course.price,
      currency: "USD",
      customer: {
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: `${countryCode || "+1"} ${phone.trim()}`,
        referralSource,
        interestReason,
      },
      paymentMethod: paymentMethod || "card",
      status: "COMPLETED",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      order: orderRecord,
      redirectUrl: `/success?orderId=${orderId}&course=${course.slug}&email=${encodeURIComponent(
        email.trim().toLowerCase()
      )}&name=${encodeURIComponent(fullName.trim())}&amount=${course.salePrice}`,
    });
  } catch (err: any) {
    console.error("Checkout API error:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred during checkout. Please try again." },
      { status: 500 }
    );
  }
}
