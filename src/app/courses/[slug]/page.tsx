import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseHero from "@/components/CourseHero";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import ReviewSection from "@/components/ReviewSection";
import CourseCard from "@/components/CourseCard";
import { courses, getCourseBySlug } from "@/data/courses";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight, 
  FileText, 
  Download, 
  Sparkles, 
  Layers, 
  HelpCircle,
  Clock,
  Zap,
  Lock
} from "lucide-react";
import type { Metadata } from "next";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | ApexSkills",
    };
  }

  return {
    title: `${course.title} | ApexSkills`,
    description: `${course.headline} — ${course.description}`,
    openGraph: {
      title: `${course.title} — Online Masterclass`,
      description: course.description,
      images: [course.image],
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter((c) => c.slug !== course.slug && (c.category === course.category || true))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* 1. Course Hero with Sticky Purchase Card */}
        <CourseHero course={course} />

        {/* 2. Detailed Course Content Breakdown */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-14">
              
              {/* What You'll Learn Checkmarks Box */}
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    What You'll Learn
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Long Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Course Overview</h3>
                <p className="text-base text-slate-300 leading-relaxed font-normal mb-6">
                  {course.longDescription}
                </p>

                {/* Requirements */}
                <div className="mt-8 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Prerequisites & Requirements
                  </h4>
                  <ul className="flex flex-col gap-2 text-sm text-slate-300">
                    {course.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="mt-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Who Is This Course For?
                  </h4>
                  <ul className="flex flex-col gap-2 text-sm text-slate-300">
                    {course.targetAudience.map((aud, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Course Curriculum Section */}
              <div id="curriculum">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                    Course Curriculum
                  </h2>
                  <p className="text-sm text-slate-400">
                    {course.modules.length} structured modules covering all practical steps and real projects.
                  </p>
                </div>

                <CurriculumAccordion modules={course.modules} />
              </div>

              {/* 4. Course Features / What's Included */}
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight mb-6">
                  Everything Included in This Program
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-indigo-400 font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Meet Your Instructor */}
              <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
                <h2 className="text-2xl font-extrabold text-white tracking-tight mb-6">
                  Meet Your Instructor
                </h2>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-indigo-500/40 flex-shrink-0">
                    <Image
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-white">
                      {course.instructor.name}
                    </h3>
                    <p className="text-sm text-indigo-300 font-semibold mb-3">
                      {course.instructor.role}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-1 font-bold text-amber-400">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="text-white">{course.instructor.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-indigo-400" />
                        <span>{course.instructor.studentsCount.toLocaleString()} Students</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400">
                        <Award className="w-4 h-4" />
                        <span>{course.instructor.experience}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Course Specific Reviews */}
              <ReviewSection
                title={`Student Reviews for ${course.title}`}
                subtitle={`Hear from verified students who completed this masterclass.`}
                customReviews={course.reviews}
                courseTitle={course.title}
                isCoursePage={true}
              />

            </div>

            {/* Right Column: Mini Sticky Quick Action for Mobile/Tablet */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Enrollment Guarantee
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">30-Day Money Back</h5>
                    <p className="text-[11px] text-slate-400">100% refund guarantee</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Try the complete course, watch the lectures, and review the materials. If you are not thrilled with your progress, you can request a full refund within 30 days.
                </p>
                <Link
                  href={`/checkout?course=${course.slug}`}
                  className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors block"
                >
                  Enroll Now — ${course.salePrice}
                </Link>
              </div>

              {/* Verified Certificate Card */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-violet-400" />
                  <h4 className="text-sm font-bold text-white">Official Certificate</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  Upon completion, receive a verifiable digital credential with your unique verification code to share on LinkedIn and resume.
                </p>
                <div className="text-[11px] text-slate-500">
                  Credential ID: APX-{course.id}-VERIFIED
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 7. Related Courses Recommendation */}
        {relatedCourses.length > 0 && (
          <section className="py-16 bg-slate-950/60 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    You Might Also Like
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Complement your learning with other top-rated masterclasses
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>All Courses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 8. Sticky Bottom Bar on Mobile for Instant Conversion */}
        <div className="md:hidden fixed bottom-0 inset-x-0 bg-slate-950/95 border-t border-slate-800 p-4 z-40 backdrop-blur-xl flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-white">${course.salePrice}</span>
              <span className="text-xs text-slate-500 line-through">${course.price}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold">50% Discount Applied</span>
          </div>

          <Link
            href={`/checkout?course=${course.slug}`}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-indigo-600 shadow-lg shadow-emerald-500/20"
          >
            Buy Now
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
