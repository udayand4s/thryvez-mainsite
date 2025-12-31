import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | ThryveZ",
  description:
    "Privacy Policy explaining how ThryveZ collects, uses, and protects user data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <article className="space-y-12">

          {/* Header */}
          <header className="space-y-4 border-b border-white/10 pb-8">
            <h1 className="text-4xl text-white">Privacy Policy</h1>
          </header>

          {/* Intro */}
          <section className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              At Thryve Z (accessible from https://thryvez.in/),
              protecting the privacy of our learners and community members is a
              top priority. This Privacy Policy explains what data we collect,
              how we use it, and the choices you have.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">Information We Collect</h2>

            <p className="text-white/80 leading-relaxed">
              We collect information you provide directly while engaging with
              Thryve Z, such as:
            </p>

            <p className="text-white/80">
              <strong>Account details:</strong> name, email, phone number, and
              organization details (if applicable).
            </p>

            <p className="text-white/80">
              <strong>Course activity:</strong> submissions, projects, case study
              interactions, reviews, and community discussions.
            </p>

            <p className="text-white/80">
              <strong>Communication info:</strong> messages you send us, along
              with any attachments.
            </p>

            <p className="text-white/80 leading-relaxed">
              We also automatically collect certain technical data, including:
            </p>

            <p className="text-white/80">
              <strong>Log data:</strong> IP address, browser type, device info,
              referring pages, date/time of access.
            </p>

            <p className="text-white/80">
              <strong>Cookies:</strong> preferences and activity patterns (you
              can manage these in your browser settings).
            </p>
          </section>

          {/* How We Use Information */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">How We Use Your Information</h2>

            <p className="text-white/80">We use your information to:</p>

            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Operate and improve the Thryve Z platform.</li>
              <li>Personalize content, recommendations, and services.</li>
              <li>
                Develop new features, track learning progress, and analyze
                platform usage.
              </li>
              <li>
                Communicate important updates about enrollments, certificates,
                or new opportunities (with your consent for promotions).
              </li>
              <li>Send essential administrative notifications.</li>
              <li>Detect and prevent fraud or misuse.</li>
            </ul>
          </section>

          {/* Sharing */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">Sharing of Information</h2>

            <p className="text-white/80 leading-relaxed">
              We do not sell or share your personal information except in these
              cases:
            </p>

            <p className="text-white/80">
              <strong>Service Partners:</strong> with trusted providers who help
              us operate the platform (e.g., payment, analytics, hosting).
            </p>

            <p className="text-white/80">
              <strong>Legal Compliance:</strong> if required by law, to protect
              our rights, or to safeguard the safety of our learners and
              community.
            </p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Data Retention</h2>
            <p className="text-white/80 leading-relaxed">
              We keep your personal data only as long as necessary for the
              purposes outlined in this policy, unless a longer retention
              period is required by law.
            </p>
          </section>

          {/* Rights */}
          <section className="space-y-6">
            <h2 className="text-2xl text-white">Your Rights</h2>

            <p className="text-white/80">You may request at any time to:</p>

            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Access or update your personal information.</li>
              <li>Request deletion of your account/data.</li>
              <li>Restrict how we process your information.</li>
              <li>Object to specific types of processing.</li>
              <li>Request a copy of your data (data portability).</li>
            </ul>
          </section>

          {/* Children */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Children’s Privacy</h2>
            <p className="text-white/80 leading-relaxed">
              Thryve Z is not directed toward children under 13, and we do not
              knowingly collect their data. If you believe a child has submitted
              personal information, please contact us so we can remove it.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Contact Us</h2>
            <p className="text-white/80">
              For questions or concerns about this Privacy Policy, please reach
              us at:{" "}
              <a
                href="mailto:contact@thryvez.in"
                className="underline underline-offset-4"
              >
                contact@thryvez.in
              </a>
            </p>
          </section>

          {/* Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Updates to This Policy</h2>
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time. Any revisions
              will be posted on this page with the updated date.
            </p>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
