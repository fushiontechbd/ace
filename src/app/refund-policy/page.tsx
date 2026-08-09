import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Refund policy — Ace Money Transfer",
  description:
    "Refund and cancellation policy for money transfers and airtime top-up, based on ACE Money Transfer UK terms.",
};

export default function RefundPolicyPage() {
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
                Refund policy
              </h1>

              <div className="prose prose-slate mt-8 max-w-none prose-headings:scroll-mt-24">
                <p className="text-sm text-slate-600">
                  This page summarises refund and cancellation rules for our
                  services. The legally binding wording is in our{" "}
                  <a
                    href="https://acemoneytransfer.com/terms-and-conditions/uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms &amp; Conditions (United Kingdom)
                  </a>
                  .
                </p>

                <h3>Money transfers</h3>

                <h4>Uncollected transfers</h4>
                <p>
                  We may cancel money transfers that are not collected by the
                  Receiver within <strong>60 days</strong> of availability. We
                  will make reasonable efforts to refund the transfer amount to
                  your original payment method. Our payment processing partners
                  may require additional steps to complete the refund. If a
                  refund cannot be processed through the payment method you used
                  for the transaction, we may ask you to provide an alternate
                  bank account number and account statement so we can process
                  the refund.
                </p>
                <p>
                  We may deduct processing fees or charges incurred during the
                  refund process from the total amount refunded.
                </p>

                <h4>Cancelling a transfer</h4>
                <p>
                  You can cancel a transaction at any time{" "}
                  <strong>before</strong> we receive the funds and provide a
                  confirmation notice. Where that applies, you may cancel
                  through the option in your profile; if we have not received
                  funds, no refund is due and the transfer order will be
                  cancelled.
                </p>
                <p>
                  If we have received the funds and issued a confirmation, you
                  may still be able to cancel and apply for a refund if we have{" "}
                  <strong>not</strong> already completed the service.
                </p>
                <p>
                  You cannot cancel once the service is complete or we have
                  sent instructions to our partners to deliver the service, for
                  example when:
                </p>
                <ul>
                  <li>
                    Funds are deposited into the Receiver&apos;s designated bank
                    account, wallet, or mobile number; or
                  </li>
                  <li>
                    The Receiver has already accessed or collected the
                    transferred funds.
                  </li>
                </ul>
                <p>
                  Once delivery instructions are sent to the pay-out partner, the
                  transaction cannot be cancelled unless we receive confirmation
                  from the partner that the funds are still available. If the
                  partner confirms the Receiver has collected or accessed the
                  funds, the transaction is final.
                </p>

                <h4>Refunds when cancellation is possible</h4>
                <p>
                  Where we can cancel the transaction, we will refund the
                  transfer amount in full or in part to the payment method used
                  for that transaction, except as below.
                </p>
                <p>
                  If you request cancellation, we may deduct reasonable costs we
                  incur (for example administrative fees, currency conversion
                  losses, or third-party charges), except where the law does not
                  allow such deductions for refunds you are legally entitled to.
                  Any refund may therefore be <strong>net</strong> of those
                  deductions.
                </p>
                <p>
                  We may need to contact you to confirm your cancellation request
                  before we cancel and refund. If we cannot reach you using the
                  contact details you provided, we may not be able to cancel;
                  the transaction may stay active until we receive confirmation.
                  We are not liable for delay or failure to cancel where
                  confirmation cannot be obtained.
                </p>

                <h4>Errors and overpayments</h4>
                <p>
                  We may cancel a transaction not yet paid to the Receiver if an
                  error beyond our control causes the transaction or payout amount
                  to exceed what was authorised, to prevent excess disbursement.
                </p>
                <p>
                  If excess funds are paid to the Receiver because of such an
                  error, we may recover the overpaid amount. You agree to
                  co-operate with us; failure to assist may lead to enforcement
                  or legal action to recover the excess.
                </p>

                <h3>Airtime top-up</h3>
                <p>
                  You must enter the correct mobile number; if you enter the
                  wrong number, the top-up may still be sent and{" "}
                  <strong>cannot</strong> be reclaimed or redirected after we
                  process the payment instruction.
                </p>
                <p>
                  If the receiver&apos;s country applies taxes on airtime top-ups,
                  tax may be deducted from the transaction amount, so the payee
                  may receive less than sent.
                </p>
                <p>
                  Once airtime is sent to a mobile number, it generally{" "}
                  <strong>cannot</strong> be refunded or removed from the phone.
                  You <strong>cannot</strong> cancel an airtime top-up after we
                  receive your instruction.
                </p>
                <p>
                  We sell non-tangible, irrevocable digital goods: we do{" "}
                  <strong>not</strong> issue refunds once the order is completed
                  and airtime is delivered. Abuse or fraud may be investigated;
                  we may refuse orders and not issue credit or codes where
                  suspected.
                </p>

                <h3>Contact</h3>
                <p>
                  Questions about refunds:{" "}
                  <a href="mailto:support@acetransfer.com">
                    support@acetransfer.com
                  </a>
                </p>
                <p>
                  Complaints:{" "}
                  <a href="mailto:complaints@acemoneytransfer.com">
                    complaints@acemoneytransfer.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://acemoneytransfer.com/file-a-complaint"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://acemoneytransfer.com/file-a-complaint
                  </a>
                  .
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
