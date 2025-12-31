import { Footer } from "@/components/footer";

export const metadata = {
  title: "Refund & Return Policy | ThryveZ",
  description:
    "Payment terms and refund policy governing purchases made on the ThryveZ platform.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <article className="space-y-12">

          {/* Header */}
          <header className="space-y-4 border-b border-white/10 pb-8">
            <h1 className="text-4xl text-white">Refund &amp; Return Policy</h1>
          </header>

          {/* Payment Terms */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">Payment Terms</h2>

            <p className="text-white/80 leading-relaxed">
              Our platform offers paid learning plans and courses. By enrolling,
              you agree to pay the fees for the plan or course you select and
              authorize us to charge your chosen payment method. Payments are
              processed through trusted third-party gateways such as cards, net
              banking, or wallets. These gateways operate under their own terms
              and conditions, and by using them, you also agree to those terms.
            </p>

            <p className="text-white/80 leading-relaxed">
              It is your responsibility to ensure timely payment of fees and
              applicable taxes. Please make sure your payment details are valid
              and up to date. The company is not responsible for unauthorized use
              of your card or account, failed transactions, or amounts lost
              during payment processing.
            </p>

            <p className="text-white/80 leading-relaxed">
              The company may revise its pricing from time to time. Any changes
              in fees will be effective immediately once updated on our website
              or notified to you.
            </p>

            <p className="text-white/80 leading-relaxed">
              Please note that payments made for workshops are non-refundable.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-white/10" />

          {/* Return & Refund Policy */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">Return and Refund Policy</h2>

            <p className="text-white/80 leading-relaxed">
              We want you to make the most of your learning journey. However,
              once a course or plan is purchased, payments are final and
              non-refundable. We encourage you to carefully review all course
              details, structure, and requirements before making a payment
              decision.
            </p>

            <p className="text-white/80 leading-relaxed">
              By completing a payment, you confirm your acceptance of this
              no-refund policy as well as all other terms and conditions on our
              platform.
            </p>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
