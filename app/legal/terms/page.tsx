import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms & Condition | ThryveZ",
  description:
    "Terms and Conditions governing the use of the ThryveZ platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <article className="space-y-12">

          {/* Page Header */}
          <header className="space-y-4 border-b border-white/10 pb-8">
            <h1 className="text-4xl text-white">Terms &amp; Condition</h1>
          </header>

          {/* Intro */}
          <section className="space-y-4">
            <p className="text-white/90 leading-relaxed">
              Welcome to our website. By using this site, you agree to follow the
              Terms and Conditions listed below. When we say “we,” “us,” or
              “our,” we mean Institution 1. When we say “you” or “user,” we
              mean anyone visiting or using this site. If you do not agree
              with any of these terms, we kindly ask that you stop using the
              site.
            </p>

            <p className="text-white/90 leading-relaxed">
              We may update these Terms and Conditions from time to time to keep
              them relevant and clear. Any changes will be reflected on this
              page, so we encourage you to check back occasionally. By
              continuing to use the site, you accept the updated terms.
            </p>
          </section>

          {/* Use of Content */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Use of Content</h2>
            <p className="text-white/90 leading-relaxed">
              All names, logos, marks, labels, shapes, and other content on this
              site belong to us or our associated partners unless otherwise
              stated. They may be owned by us or used with permission. You are
              welcome to view and use the content for personal learning
              purposes, but you may not copy, modify, sell, display, or
              distribute it for commercial or public use without our written
              approval.
            </p>
          </section>

          {/* Acceptable Use */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">
              Acceptable Use of the Website
            </h2>

            <div className="space-y-2">
              <p className="text-white/90 leading-relaxed">
                <strong>Security:</strong> For everyone’s safety, users must not
                try to break into restricted areas of the site, test
                vulnerabilities, interfere with how the site works, or send
                unauthorized emails. Such actions may lead to legal
                consequences, and we may work with authorities if needed.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-white/90 leading-relaxed">
                <strong>General Use:</strong> Users must not share or store
                content on this website that is illegal, violates intellectual
                property rights, or contains harmful or offensive material. We
                want this space to remain safe and welcoming for all learners.
              </p>
            </div>
          </section>

          {/* Indemnity */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Indemnity</h2>
            <p className="text-white/90 leading-relaxed">
              By using the site, you agree to protect and hold harmless the
              company, its team, and partners from any claims, losses, or
              damages that may arise from misuse of the site or a breach of
              these terms.
            </p>
          </section>

          {/* Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Liability</h2>
            <p className="text-white/90 leading-relaxed">
              While we aim to provide smooth and reliable service, the company
              and its team will not be responsible for any direct or indirect
              damages that may come from using the site. This includes issues
              like data loss, interruptions, or actions of third parties.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">
              Disclaimer of Consequential Damages
            </h2>
            <p className="text-white/90 leading-relaxed">
              In no case will the company or its associates be liable for
              damages caused by your use, or inability to use, the website.
              This applies even if such damages were possible or foreseeable.
            </p>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
