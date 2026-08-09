import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms & conditions — Ace Money Transfer UK",
  description:
    "ACE Money Transfer UK terms and conditions governing use of our services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-white py-14 sm:py-18">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                Help
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Terms &amp; Conditions (United Kingdom)
              </h1>

              <div className="prose prose-slate mt-8 max-w-none prose-headings:scroll-mt-24">
                <p className="text-sm text-slate-600">
                  Effective From: <strong>November 27, 2025</strong>
                </p>

                <h4>Introduction</h4>
                <p>
                  This document, together with any documents referred to in it
                  (the Terms &amp; Conditions), constitutes the terms and
                  conditions upon which ACE Money Transfer Limited provides the
                  Services via its Channels.
                </p>

                <h4>Interpretation and definitions</h4>
                <ul>
                  <li>
                    <strong>ACE / We / Us / Our</strong>: ACE Money Transfer
                    Limited
                  </li>
                  <li>
                    <strong>Channels</strong>: the ACE Money Transfer Website
                    and/or the ACE Money Transfer mobile application (“App”)
                  </li>
                  <li>
                    <strong>Services</strong>: money transfer services and
                    airtime top up services provided through the Channels
                  </li>
                  <li>
                    <strong>Sender</strong>: the person who initiates a money
                    transfer
                  </li>
                  <li>
                    <strong>Receiver</strong>: the person named as the
                    beneficiary of the money transfer
                  </li>
                  <li>
                    <strong>Transaction</strong>: every money transfer or
                    Airtime top up you initiate through the Service
                  </li>
                </ul>

                <h4>1. About us and our services</h4>
                <p>
                  ACE Money Transfer is registered in the United Kingdom
                  (company number 04502952). We are regulated by the Financial
                  Conduct Authority (FCA) (reference number 506692) to provide
                  payment services. More information about the FCA is available
                  at{" "}
                  <a
                    href="https://www.fca.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.fca.org.uk
                  </a>
                  .
                </p>

                <h4>2. Accessing and utilising our services (summary)</h4>
                <p>
                  Our Services are prohibited for use in connection with illegal
                  activity. We may refuse, suspend, or terminate access and may
                  report suspected illegal activity to the appropriate
                  authorities where required.
                </p>

                <h4>3. Communications</h4>
                <p>
                  Communications may be conducted via our Channels and/or email.
                  You can contact Customer Services at{" "}
                  <a href="mailto:help@acemoneytransfer.com">
                    help@acemoneytransfer.com
                  </a>{" "}
                  or via{" "}
                  <a
                    href="https://acemoneytransfer.com/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://acemoneytransfer.com/contact-us
                  </a>
                  .
                </p>

                <h4>9. Cancelling transactions and refunds (summary)</h4>
                <p>
                  You may be able to cancel a Transaction subject to timing and
                  whether the Service has been completed. Where permitted, any
                  refund issued may be net of reasonable costs incurred.
                </p>

                <h4>11. Complaints</h4>
                <p>
                  If you are not happy with our Services you can contact our
                  customer support team at{" "}
                  <a href="mailto:complaints@acemoneytransfer.com">
                    complaints@acemoneytransfer.com
                  </a>{" "}
                  or file a complaint here:{" "}
                  <a
                    href="https://acemoneytransfer.com/file-a-complaint"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://acemoneytransfer.com/file-a-complaint
                  </a>
                  . If you are not happy with how we handle your complaint, you
                  can contact the Financial Ombudsman Service:{" "}
                  <a
                    href="https://www.financial-ombudsman.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.financial-ombudsman.org.uk
                  </a>
                  .
                </p>

                <h4>12. Data protection and privacy</h4>
                <p>
                  The processing of personal information is governed by our
                  privacy policy, available here:{" "}
                  <a
                    href="https://acemoneytransfer.com/privacy-policy/uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://acemoneytransfer.com/privacy-policy/uk
                  </a>
                  .
                </p>

                <h4>19. Governing law and jurisdiction</h4>
                <p>
                  These Terms &amp; Conditions are governed by and construed in
                  accordance with the laws of United Kingdom. The courts of
                  England and Wales shall have exclusive jurisdiction, subject
                  to rights under Applicable Law.
                </p>

                <p className="text-sm text-slate-600">
                  Source:{" "}
                  <a
                    href="https://acemoneytransfer.com/terms-and-conditions/uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://acemoneytransfer.com/terms-and-conditions/uk
                  </a>
                </p>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

