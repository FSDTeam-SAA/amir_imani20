"use client";

import { useState } from "react";

import { Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface NewsletterFormProps {
  className?: string;
}

export default function NewsletterForm({ className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setMessage("Failed to subscribe. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-3  ${className}`}
      noValidate
      aria-label="Newsletter subscription form"
    >
      <div className="flex gap-2">
        <Input
          type="email"
          name="newsletter-email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="grow rounded-full px-4 py-3 w-20 bg-white border-white/20 text-black placeholder-white/60 focus:ring-2 focus:ring-white/30"
          required
          aria-label="Email address"
          aria-describedby="newsletter-message"
          disabled={status === "loading"}
        />
        <Button
          type="submit"
          className="rounded-full px-6 whitespace-nowrap  text-white  transition-colors disabled:opacity-50"
          disabled={status === "loading"}
          aria-label="Subscribe to newsletter"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
      
      {message && (
        <p 
          id="newsletter-message"
          className={`text-sm ${
            status === "success" 
              ? "text-green-300" 
              : status === "error" 
              ? "text-red-300" 
              : "text-white/80"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  );
}