"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function ContactUsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border border-white/10 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Us</DialogTitle>
          <DialogDescription className="text-white/70">
            Fill in your details and our team will get back to you.
          </DialogDescription>
        </DialogHeader>

        {/* FORM */}
        <div className="space-y-4 mt-4">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="tel" placeholder="WhatsApp Number" />
          <Textarea placeholder="How can we help you?" rows={4} />

          <Button className="w-full mt-2">
            Submit Request
          </Button>
        </div>

        {/* ALTERNATE CONTACT */}
        <div className="mt-6 border-t border-white/10 pt-4 space-y-3">
          <p className="text-sm text-white/60">
            Prefer reaching us directly?
          </p>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-[#E2F310]" />
            <span>+91 89045 40133</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <MessageCircle className="w-4 h-4 text-[#E2F310]" />
            <span>WhatsApp: +91 89045 40133</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-[#E2F310]" />
            <span>hello@thryvez.in</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
