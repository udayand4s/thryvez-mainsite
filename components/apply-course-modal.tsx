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

interface ApplyCourseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  courseName?: string;
}

export function ApplyCourseModal({
  open,
  onOpenChange,
  courseName,
}: ApplyCourseModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    discountCode: '',
    referralCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Course Application:', {
      course: courseName,
      ...form,
    });

    // 🔗 Hook backend / CRM / Supabase later
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-w-xl bg-black/85 backdrop-blur-xl
          border border-white/10 text-white
          rounded-2xl
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl ">
            Apply for {courseName ?? 'this course'}
          </DialogTitle>
          <p className="text-white/90 text-sm mt-1">
            Fill in your details and our team will reach out shortly.
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 mt-6">
          <Input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="email"
            type="email"
            placeholder="Email Address"
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
            name="college"
            placeholder="College / School Name"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="discountCode"
            placeholder="Discount Code (optional)"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="referralCode"
            placeholder="Referral Code (optional)"
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            className="bg-[#E2F310] text-black hover:bg-[#cddc39]"
            onClick={handleSubmit}
          >
            Submit Application
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
