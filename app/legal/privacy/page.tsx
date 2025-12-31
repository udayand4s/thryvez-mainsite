import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | ThryveZ",
  description:
    "Learn how ThryveZ collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <article className="space-y-10">
          {/* Page Header */}
          <header className="space-y-4">
            <h1 className="text-4xl text-white">Privacy Policy</h1>
            <p className="text-white/90 leading-relaxed">
              At ThryveZ, protecting the privacy of our learners and community
              members is a top priority. This Privacy Policy explains what data
              we collect, how we use it, and the choices you have.
            </p>
          </header>

          {/* Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Information We Collect</h2>

            <p className="text-white/90 leading-relaxed">
              We collect information you provide directly while engaging with
              ThryveZ, including:
            </p>

            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>
                <strong>Account details:</strong> name, email address, phone
                number, and organization details (if applicable).
              </li>
              <li>
                <strong>Course activity:</strong> submissions, projects, case
                study interactions, reviews, and community discussions.
              </li>
              <li>
                <strong>Communication information:</strong> messages you send
                us and any attachments.
              </li>
            </ul>

            <p className="text-white/90 leading-relaxed">
              We also automatically collect certain technical information such
              as:
            </p>

            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>
                <strong>Log data:</strong> IP address, browser type, device
                information, referring pages, and timestamps.
              </li>
              <li>
                <strong>Cookies:</strong> preferences and usage patterns (you
                can control cookies through your browser settings).
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">How We Use Your Information</h2>

            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Operate, maintain, and improve the ThryveZ platform.</li>
              <li>Personalize content, recommendations, and services.</li>
              <li>
                Develop new features and analyze platform usage and learning
                progress.
              </li>
              <li>
                Communicate important updates related to enrollments,
                certificates, or new opportunities (with consent for
                promotional messages).
              </li>
              <li>Send essential administrative notifications.</li>
              <li>Detect, prevent, and address fraud or misuse.</li>
            </ul>
          </section>

          {/* Sharing of Information */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Sharing of Information</h2>

            <p className="text-white/90 leading-relaxed">
              We do not sell your personal information. We only share data in
              the following cases:
            </p>

            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>
                <strong>Service partners:</strong> trusted providers who assist
                with payments, analytics, hosting, or platform operations.
              </li>
              <li>
                <strong>Legal compliance:</strong> when required by law or to
                protect the rights, safety, and security of our users and
                platform.
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Data Retention</h2>
            <p className="text-white/90 leading-relaxed">
              We retain personal information only for as long as necessary to
              fulfill the purposes described in this policy, unless a longer
              retention period is required by law.
            </p>
          </section>

          {/* User Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Your Rights</h2>

            <p className="text-white/90 leading-relaxed">
              You may request at any time to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Access or update your personal information.</li>
              <li>Request deletion of your account or personal data.</li>
              <li>Restrict or object to certain types of data processing.</li>
              <li>Request a copy of your data (data portability).</li>
            </ul>
          </section>

          {/* Children */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Children’s Privacy</h2>
            <p className="text-white/90 leading-relaxed">
              ThryveZ is not intended for children under the age of 13. We do
              not knowingly collect personal information from children. If you
              believe a child has provided personal data, please contact us so
              we can promptly remove it.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">Contact Us</h2>
            <p className="text-white/90 leading-relaxed">
              If you have any questions or concerns regarding this Privacy
              Policy, you can contact us at:
            </p>
            <p className="text-white font-medium">
              contact@thryvez.in
            </p>
          </section>

          {/* Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl text-white">
              Updates to This Policy
            </h2>
            <p className="text-white/90 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page along with the updated date.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
