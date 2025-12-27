'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface GetStartedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetStartedModal({
  open,
  onOpenChange,
}: GetStartedModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    study: '',
    qualification: '',
    experience: '',
    address: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Lead captured:', form);
    // 🔗 connect API / CRM / Supabase / Firebase here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-2xl bg-black/80 backdrop-blur-xl
          border border-white/10 text-white
          rounded-2xl
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Get Started
          </DialogTitle>
          <p className="text-white/70 text-sm mt-1">
            Tell us a bit about yourself — we’ll personalize your learning journey.
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="occupation"
            placeholder="Occupation"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="study"
            placeholder="School/College Name"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />


        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#E2F310] text-black hover:bg-[#cddc39]"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
