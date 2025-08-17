import React from 'react';
export default function PrivacyTerms() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <section>
        <h1 className="text-3xl font-pacifico text-brandGold mb-4">Privacy Policy</h1>
        <p className="text-sm leading-relaxed">We respect your pack's privacy. We only store the data needed to process orders and improve our treats. No selling of data to third parties. You can request deletion anytime by contacting us.</p>
      </section>
      <section>
        <h2 className="text-2xl font-pacifico text-brandGold mb-2">Terms & Conditions</h2>
        <p className="text-sm leading-relaxed">By using Drooling Tails you agree not to misuse the site. All products are pet consumables; supervise your dog while enjoying treats. Payments processed via secure gateways. Refunds or replacements handled case-by-case for quality issues.</p>
      </section>
    </div>
  );
}
