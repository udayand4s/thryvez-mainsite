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

interface TalkToExpertModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TalkToExpertModal({
  open,
  onOpenChange,
}: TalkToExpertModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Expert Callback Request:', form);

    // 🔗 Hook CRM / WhatsApp / backend later
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-black/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Talk to an Expert
          </DialogTitle>
          <p className="text-sm text-white/70 mt-1">
            Leave your details and we’ll call you shortly.
          </p>
        </DialogHeader>

        <div className="grid gap-4 mt-6">
          <Input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />

          <Input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
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
            Request Call
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
