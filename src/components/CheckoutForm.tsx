"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Course } from "@/data/courses";
import { 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowLeft,
  ChevronRight,
  Globe,
  Award,
  Zap,
  RefreshCcw,
  Loader2
} from "lucide-react";

interface CheckoutFormProps {
  course: Course;
}

const COUNTRY_CODES = [
  { code: "+1", country: "United States / Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+55", country: "Brazil" },
  { code: "+27", country: "South Africa" },
];

const REFERRAL_SOURCES = [
  "Free Course",
  "Instagram Reel",
  "YouTube Video",
  "WhatsApp Group",
  "Facebook",
  "Google Search",
  "Friend / Referral",
  "Other",
];

const INTEREST_REASONS = [
  "I want to improve my skills",
  "Career growth",
  "Start a business",
  "Get a better job",
  "Personal development",
  "Recommended by someone",
  "Other",
];

export default function CheckoutForm({ course }: CheckoutFormProps) {
  const router = useRouter();

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [interestReason, setInterestReason] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "upi">("card");

  // Mock Card State
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  // UI / Submission state
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [simulateFailure, setSimulateFailure] = useState(false);

  // Validate form
  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!phone.trim() || phone.trim().length < 6) {
      errs.phone = "Please enter your phone number.";
    }

    if (!referralSource) {
      errs.referralSource = "Please select where you came from.";
    }

    if (!interestReason) {
      errs.interestReason = "Please select what made you interested in this course.";
    }

    if (paymentMethod === "card") {
      if (!cardNumber.trim() || cardNumber.replace(/\s/g, "").length < 15) {
        errs.cardNumber = "Please enter a valid 16-digit card number.";
      }
      if (!cardExpiry.trim() || !/^\d{2}\/\d{2}$/.test(cardExpiry.trim())) {
        errs.cardExpiry = "Enter valid MM/YY format.";
      }
      if (!cardCvc.trim() || cardCvc.length < 3) {
        errs.cardCvc = "Enter 3 or 4 digit CVC.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").substring(0, 16);
    let formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").substring(0, 4);
    if (value.length >= 2) {
      value = `${value.substring(0, 2)}/${value.substring(2)}`;
    }
    setCardExpiry(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          countryCode,
          phone,
          referralSource,
          interestReason,
          courseSlug: course.slug,
          paymentMethod,
          simulateFailure,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(
          data.error || "Payment could not be completed. Please try again or use another payment method."
        );
        setIsProcessing(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Successful order
      if (data.redirectUrl) {
        router.push(data.redirectUrl);
      }
    } catch (err) {
      setErrorMessage(
        "Payment could not be completed due to a network connection error. Please try again."
      );
      setIsProcessing(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Top Back Navigation */}
      <div className="mb-8">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Course Details</span>
        </Link>
      </div>

      {/* Payment Failure Error Alert */}
      {errorMessage && (
        <div className="mb-8 p-6 rounded-2xl bg-rose-950/80 border border-rose-700 text-rose-100 shadow-2xl animate-shake">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-bold text-white">Payment could not be completed.</h4>
              <p className="text-sm text-rose-200">{errorMessage}</p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setErrorMessage(null);
                    setSimulateFailure(false);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors flex items-center gap-1.5"
                >
                  <RefreshCcw className="w-3.5 h-3.5" />
                  <span>Try Again</span>
                </button>
                <Link
                  href={`/courses/${course.slug}`}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:text-white bg-rose-900/50 hover:bg-rose-900 border border-rose-800 transition-colors"
                >
                  Back to Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Two-Column Layout (Left Form, Right Order Summary) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Customer & Payment Form */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
            
            {/* Step 1: Customer Information */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Customer Information</h3>
                  <p className="text-xs text-slate-400">Where we will deliver your course access & login</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none transition-all ${
                      errors.fullName
                        ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none transition-all ${
                      errors.email
                        ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                        : "border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500 mt-1">
                    Your course login credentials and receipt will be dispatched to this email.
                  </p>
                </div>

                {/* Phone Number with Country Code */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-36 px-3 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} ({c.country})
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      placeholder="e.g. 555 123 4567"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={`flex-1 px-4 py-3 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none transition-all ${
                        errors.phone
                          ? "border-rose-500 focus:ring-2 focus:ring-rose-500"
                          : "border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-400 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 2: Marketing Attribution Questions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Help Us Customize Your Experience</h3>
                  <p className="text-xs text-slate-400">Required marketing attribution details</p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {/* Question 1: Where did you come from? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    Where did you come from? <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {REFERRAL_SOURCES.map((source) => {
                      const isSelected = referralSource === source;
                      return (
                        <label
                          key={source}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            isSelected
                              ? "bg-indigo-600/20 border-indigo-500 text-white shadow-sm"
                              : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950"
                          }`}
                        >
                          <input
                            type="radio"
                            name="referralSource"
                            value={source}
                            checked={isSelected}
                            onChange={() => {
                              setReferralSource(source);
                              if (errors.referralSource) setErrors({ ...errors, referralSource: "" });
                            }}
                            className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 bg-slate-900 border-slate-700"
                          />
                          <span>{source}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.referralSource && (
                    <p className="text-xs text-rose-400 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.referralSource}
                    </p>
                  )}
                </div>

                {/* Question 2: What made you interested in this course? */}
                <div className="pt-4 border-t border-slate-800/80">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    What made you interested in this course? <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {INTEREST_REASONS.map((reason) => {
                      const isSelected = interestReason === reason;
                      return (
                        <label
                          key={reason}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            isSelected
                              ? "bg-indigo-600/20 border-indigo-500 text-white shadow-sm"
                              : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950"
                          }`}
                        >
                          <input
                            type="radio"
                            name="interestReason"
                            value={reason}
                            checked={isSelected}
                            onChange={() => {
                              setInterestReason(reason);
                              if (errors.interestReason) setErrors({ ...errors, interestReason: "" });
                            }}
                            className="text-indigo-600 focus:ring-indigo-500 h-4 w-4 bg-slate-900 border-slate-700"
                          />
                          <span>{reason}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.interestReason && (
                    <p className="text-xs text-rose-400 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.interestReason}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method & Details */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Select Payment Method</h3>
                    <p className="text-xs text-slate-400">Encrypted with 256-Bit SSL protection</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure</span>
                </div>
              </div>

              {/* Payment selector tabs */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3.5 rounded-2xl border text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
                    paymentMethod === "card"
                      ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-indigo-400" />
                  <span>Credit/Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-3.5 rounded-2xl border text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
                    paymentMethod === "paypal"
                      ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="font-extrabold text-blue-400 italic">P</span>
                  <span>PayPal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-3.5 rounded-2xl border text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
                    paymentMethod === "upi"
                      ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                      : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>UPI / NetBanking</span>
                </button>
              </div>

              {/* Credit Card Fields */}
              {paymentMethod === "card" && (
                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="4242 •••• •••• 4242"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm focus:outline-none transition-all ${
                          errors.cardNumber ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
                        }`}
                      />
                      <CreditCard className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    </div>
                    {errors.cardNumber && (
                      <p className="text-xs text-rose-400 mt-1">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardExpiry}
                        onChange={handleExpiryChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm focus:outline-none transition-all ${
                          errors.cardExpiry ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
                        }`}
                      />
                      {errors.cardExpiry && (
                        <p className="text-xs text-rose-400 mt-1">{errors.cardExpiry}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        CVC / CVV
                      </label>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ""))}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-white text-sm focus:outline-none transition-all ${
                          errors.cardCvc ? "border-rose-500" : "border-slate-800 focus:border-indigo-500"
                        }`}
                      />
                      {errors.cardCvc && (
                        <p className="text-xs text-rose-400 mt-1">{errors.cardCvc}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-slate-300 mb-2">
                    You will be directed to PayPal to complete your purchase securely.
                  </p>
                  <span className="text-xs text-indigo-400 font-semibold">
                    Instant return upon confirmation
                  </span>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                  <p className="text-xs text-slate-300 mb-2">
                    Supports Google Pay, PhonePe, Paytm, and all Indian Net Banking portals.
                  </p>
                  <span className="text-xs text-emerald-400 font-semibold">
                    Instant QR code verification
                  </span>
                </div>
              )}

              {/* Dev Simulation Toggle (Optional for testing payment failure flow) */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <label className="flex items-center gap-2 cursor-pointer hover:text-slate-300">
                  <input
                    type="checkbox"
                    checked={simulateFailure}
                    onChange={(e) => setSimulateFailure(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-800 text-rose-500 focus:ring-rose-500 h-3.5 w-3.5"
                  />
                  <span>Test payment decline error handling</span>
                </label>
              </div>

              {/* Submit CTA Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-2xl text-center text-base sm:text-lg font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing Secure Payment...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Pay ${course.salePrice} & Enroll Now</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>30-Day Money-Back Guarantee Included</span>
                </p>
              </div>
            </div>

          </form>
        </div>

        {/* Right Side: Order Summary & Purchase Box */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-28 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl shadow-indigo-950/60 backdrop-blur-xl">
            
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-300 mb-5 pb-3 border-b border-slate-800">
              Order Summary
            </h3>

            {/* Course Card Preview in Summary */}
            <div className="flex gap-4 mb-6">
              <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-800">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                  {course.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Instructor: {course.instructor.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Instant Access
                  </span>
                </div>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="flex flex-col gap-2.5 py-4 border-y border-slate-800 text-sm">
              <div className="flex items-center justify-between text-slate-400">
                <span>Course Original Price:</span>
                <span className="line-through">${course.price}.00</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400 font-semibold">
                <span>Promotional Discount:</span>
                <span>-${course.price - course.salePrice}.00</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Taxes & Processing:</span>
                <span className="text-slate-300">$0.00 (Included)</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-white font-extrabold text-xl">
                <span>Total Due Today:</span>
                <span className="text-emerald-400 font-black">${course.salePrice}.00</span>
              </div>
            </div>

            {/* What you get checklist */}
            <div className="pt-5 flex flex-col gap-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Included with Enrollment:
              </h5>
              <ul className="flex flex-col gap-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>Full lifetime access to all {course.lessonsCount} lessons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{course.downloadableResources} downloadable project files & assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span>Official Certificate of Completion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Private student alumni community invitation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free future module updates & lifetime support</span>
                </li>
              </ul>
            </div>

            {/* Guarantee badge */}
            <div className="mt-6 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white">You are making a secure purchase.</h5>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                  Try the masterclass completely risk-free for 30 days. If you don't love it, email us for a full 100% refund.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
