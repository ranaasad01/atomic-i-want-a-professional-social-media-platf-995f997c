"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    headline: "",
    location: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push("/onboarding");
  };

  const passwordStrength = () => {
    const p = formData.password;
    if (p.length === 0) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  };

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColor = ["", "bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];
  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <header className="bg-[var(--card)] border-b border-[var(--border)] px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-brand">ProConnect</span>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-[var(--muted)]">Already on ProConnect?</span>
            <Link href="/login" className="btn-outline text-sm">Sign in</Link>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
              Make the most of your professional life
            </h1>
            <p className="text-[var(--muted)]">
              Join 50 million professionals on ProConnect.
            </p>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors " + (step >= s ? "bg-brand text-white" : "bg-[var(--accent)] text-[var(--muted)]")}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 2 && <div className={"h-0.5 w-12 transition-colors " + (step > s ? "bg-brand" : "bg-[var(--border)]")} />}
              </div>
            ))}
            <span className="text-xs text-[var(--muted)] ml-2">Step {step} of 2</span>
          </div>

          <div className="card p-8">
            {step === 1 && (
              <form onSubmit={handleStep1} className="space-y-5">
                <h2 className="text-lg font-semibold mb-4">Create your account</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="First name"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="Last name"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="Enter your email"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Password (6+ characters)</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => update("password", e.target.value)}
                      placeholder="Create a password"
                      className="input-field pr-12"
                      minLength={6}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className={"h-1 flex-1 rounded-full transition-colors " + (strength >= i ? strengthColor[strength] : "bg-[var(--border)]")} />
                        ))}
                      </div>
                      <p className="text-xs text-[var(--muted)]">Password strength: {strengthLabel[strength]}</p>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-brand"
                    required
                  />
                  <label htmlFor="agree" className="text-xs text-[var(--muted)] leading-relaxed">
                    I agree to ProConnect&apos;s{" "}
                    <span className="text-brand hover:underline cursor-pointer">User Agreement</span>,{" "}
                    <span className="text-brand hover:underline cursor-pointer">Privacy Policy</span>, and{" "}
                    <span className="text-brand hover:underline cursor-pointer">Cookie Policy</span>.
                  </label>
                </div>

                <button type="submit" className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-base">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleStep2} className="space-y-5">
                <h2 className="text-lg font-semibold mb-4">Tell us about yourself</h2>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Professional headline</label>
                  <input
                    type="text"
                    value={formData.headline}
                    onChange={(e) => update("headline", e.target.value)}
                    placeholder="e.g. Software Engineer at Google"
                    className="input-field"
                    required
                  />
                  <p className="text-xs text-[var(--muted)] mt-1">This appears below your name on your profile.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => update("location", e.target.value)}
                    placeholder="e.g. San Francisco, CA"
                    className="input-field"
                    required
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-medium text-brand mb-1">🎉 Almost there!</p>
                  <p className="text-xs text-[var(--muted)]">
                    After creating your account, we&apos;ll help you complete your profile, find connections, and discover job opportunities tailored to you.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 btn-ghost border border-[var(--border)] py-3"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 btn-primary py-3 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>Create account</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-[var(--muted)] mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-brand hover:text-brand-dark font-semibold transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
