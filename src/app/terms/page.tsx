import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Jeani',
  description: 'Jeani terms and conditions - the legal agreement governing your use of the Jeani service.',
};

export default function TermsOfService() {
  return (
    <div>

      <section className="shell py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="mb-10">
            <p className="eyebrow">Legal</p>
            <h1 className="headline h-hero mt-3">Terms &amp; Conditions</h1>
          </div>

          <div>
            <div>
              <p className="small-note mb-10">Last updated: April 20, 2026</p>

              <div className="mb-8">
                <h2 className="headline h-sub mb-3">Overview</h2>
                <ul className="copy space-y-2 list-disc pl-5">
                  <li>Jeani provides wellness &amp; performance insights, not medical advice, and is not for emergencies.</li>
                  <li>You must be 16+ to use Jeani.</li>
                  <li>We process movement/sensor and related data to run and improve the app with strong confidentiality and security safeguards.</li>
                  <li>If you join a team/organization, we will show you exactly what data is shared before you accept.</li>
                  <li>Our maximum aggregate liability to you is $500.</li>
                  <li>You can export or delete your data as described in our <Link href="/privacy" className="text-accent underline transition-colors hover:text-cobalt">Privacy Policy</Link>.</li>
                </ul>
              </div>

              <div className="copy space-y-8">
                <section>
                  <h2 className="headline h-sub mb-3">1. Who we are</h2>
                  <p>These Terms are between you and Jeani Inc., a Delaware corporation, 1702 Woodburn Rd, Durham, NC 27705 (&quot;Jeani,&quot; &quot;we,&quot; &quot;us&quot;). They govern your use of the Jeani mobile app, firmware, websites, dashboards, APIs, and related services (the &quot;Service&quot;). Your use of the Service is also governed by our <Link href="/privacy" className="text-accent underline transition-colors hover:text-cobalt">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">2. Eligibility &amp; account</h2>
                  <p>You must be 16 years of age or older to use the Service. You are responsible for your account credentials and for the accuracy of information you provide. If you access the Service through a school, team, club, or employer (&quot;Organization&quot;), additional Organization terms may apply.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">3. Wellness only — no medical advice; not for emergencies</h2>
                  <p className="mb-3">Jeani provides wellness and performance insights. Jeani does not provide medical advice, diagnosis, or treatment and is not a medical device unless we expressly say otherwise following regulatory clearance. Always consult a qualified clinician for medical questions. Do not use Jeani for emergencies — call your local emergency number.</p>
                  <p className="font-semibold text-cobalt">AI-generated content.</p>
                  <p>The Service may include AI-generated outputs, including chatbot responses and insights. AI Output may contain errors or inaccuracies. You assume sole responsibility for any decisions you make based on AI Output. Never rely on AI Output as a substitute for professional medical, legal, or financial advice.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">4. Data protection</h2>
                  <p className="mb-3">We implement reasonable security measures to protect your personal data. Full details on data categories, collection methods, uses, sharing, retention, and your rights are set out in our <Link href="/privacy" className="text-accent underline transition-colors hover:text-cobalt">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>

                  <p className="mb-3 font-semibold text-cobalt">Your confidential information.</p>
                  <p className="mb-4">We treat your personal data and Movement Data, team associations, and other non-public information generated via the Service as Confidential Information. We protect it using encryption in transit, role-based access controls, logging/monitoring, and least-privilege access. We do not sell your personal data.</p>

                  <p className="mb-3 font-semibold text-cobalt">Our confidential information.</p>
                  <p className="mb-4">You agree to keep Jeani non-public materials (e.g., pre-release features, diagnostic tools, security documentation) confidential and not disclose them except as permitted by these Terms.</p>

                  <p className="mb-3 font-semibold text-cobalt">Incident response.</p>
                  <p>If we become aware of a security incident that materially affects your personal data, we will notify you without undue delay (target within 72 hours) with available details and mitigation steps, subject to legal restrictions.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">5. Organization/Team spaces</h2>
                  <p>When you join an Organization space, designated admins/coaches may view data only within the scope shown to you during the join flow (e.g., weekly movement scores, symptom check-ins, trends). You can leave any time; data shared while a member may remain with that Organization per its policies.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">6. Acceptable use</h2>
                  <p>You agree not to: (a) misuse or interfere with the Service; (b) reverse engineer, copy, or resell except as allowed; (c) upload unlawful or infringing content; (d) attempt to access others&apos; data without authorization; or (e) use the Service to profile or discriminate against others.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">7. Intellectual property &amp; license</h2>
                  <p>The Service is owned by Jeani and its licensors. Subject to these Terms, we grant you a limited, revocable, non-transferable license to use the Service for personal wellness purposes (or as permitted by your Organization agreement). You retain ownership of your content; you grant Jeani a worldwide, royalty-free license to host, process, and display it solely to operate and improve the Service.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">8. Feedback</h2>
                  <p>If you provide feedback or suggestions, you grant Jeani a perpetual, irrevocable, royalty-free license to use it without any obligation to you.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">9. Beta features</h2>
                  <p>You may receive early/beta features. They are provided &quot;as is,&quot; may contain errors, and may be modified or discontinued at any time. We may collect diagnostics and feedback to improve them.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">10. Subscriptions, trials, and refunds</h2>
                  <p>If you purchase a paid plan: (a) plans auto-renew until canceled in Settings; (b) free trials convert to paid subscriptions unless canceled before the trial end date; (c) applicable taxes may apply; (d) no refunds are provided for partial billing periods except as required by applicable law.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">11. Third-party services &amp; hardware</h2>
                  <p>Jeani may integrate with third-party apps/devices. Jeani is not responsible for third-party terms, privacy practices, or malfunctions. Review their policies before connecting.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">12. Disclaimers</h2>
                  <p className="uppercase text-sm leading-relaxed">To the maximum extent permitted by law, the Service is provided &quot;as is&quot; and &quot;as available.&quot; Jeani disclaims all warranties, express or implied, including fitness for a particular purpose, non-infringement, and accuracy of any insights, metrics, or AI-generated outputs. Jeani does not provide medical advice and the Service is not a substitute for a medical professional or emergency services.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">13. Assumption of risk &amp; release</h2>
                  <p className="mb-4">You understand that physical activity involves inherent risks. You voluntarily assume all risks arising from your activities and your use of the Service, including decisions you make based on app insights or AI-generated outputs.</p>
                  <p>To the fullest extent permitted by law, you release Jeani Inc. and its affiliates, officers, employees, and agents from any and all claims and liabilities for personal injury or harm arising out of or related to your use of the Service, including training decisions, technique changes, or activity choices, whether based in contract, tort (including negligence), strict liability, or otherwise. Some jurisdictions do not allow certain liability exclusions; if so, this clause applies to the maximum extent permitted.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">14. Indemnification</h2>
                  <p>You agree to defend, indemnify, and hold harmless Jeani and its affiliates from claims, damages, and costs (including reasonable attorneys&apos; fees) arising out of your misuse of the Service, your content, or your breach of these Terms or applicable law.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">15. Limitation of liability</h2>
                  <p className="uppercase text-sm leading-relaxed">To the maximum extent permitted by law, Jeani&apos;s total aggregate liability to you for any claims arising from or related to the Service or these Terms shall not exceed $500. In no event shall Jeani be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">16. Governing law &amp; dispute resolution</h2>
                  <p>These Terms are governed by the laws of the State of North Carolina, excluding conflict-of-law rules. Any dispute arising from or relating to these Terms or the Service that cannot be resolved informally shall be resolved by binding individual arbitration under applicable arbitration rules. You waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">17. Changes to the Service and Terms</h2>
                  <p>We may update the Service and these Terms. Material changes will be notified in-app or by email at least 30 days before taking effect. Continued use after the effective date constitutes acceptance of the updated Terms.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">18. Termination</h2>
                  <p>You may stop using the Service at any time. We may suspend or terminate your access for breach, legal risk, or other legitimate reasons. Upon termination, your license ends. Sections intended to survive termination (including confidentiality, intellectual property, disclaimers, releases, indemnification, and limitation of liability) shall continue in full force.</p>
                </section>

                <section>
                  <h2 className="headline h-sub mb-3">19. Contact</h2>
                  <p>
                    Jeani Inc.<br />
                    1702 Woodburn Rd, Durham, NC 27705<br />
                    <a href="mailto:privacy@jeanihealth.com" className="text-accent underline transition-colors hover:text-cobalt">privacy@jeanihealth.com</a><br />
                    857-204-7608
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
