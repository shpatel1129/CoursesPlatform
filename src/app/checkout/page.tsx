import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/CheckoutForm";
import { courses, getCourseBySlug } from "@/data/courses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | ApexSkills",
  description: "Complete your enrollment securely with 256-bit encryption and a 30-day money-back guarantee.",
};

interface CheckoutPageProps {
  searchParams: Promise<{ course?: string }>;
}

async function CheckoutContent({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const courseSlug = params.course || courses[0].slug;
  const course = getCourseBySlug(courseSlug) || courses[0];

  return <CheckoutForm course={course} />;
}

export default async function CheckoutPage(props: CheckoutPageProps) {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading secure checkout...</div>}>
          <CheckoutContent searchParams={props.searchParams} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
