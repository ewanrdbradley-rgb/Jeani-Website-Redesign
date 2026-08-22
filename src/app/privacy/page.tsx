import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jeani',
  description: 'Jeani privacy policy - how we collect, use, and protect your personal and movement data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bone">

      <section className="py-16 md:py-24 px-6 max-md:min-h-[100vh] pt-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 pt-8 text-center">
            <h1 className="t90 font-black text-4xl text-cobalt md:text-6xl">Privacy Policy</h1>
          </div>

          <div>
            <div>
              <p className="mb-10 text-xs font-semibold tracking-[0.2em] text-cobalt/55">Last updated: April 20, 2026</p>

              <div className="mb-8">
                <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-4">Summary</h2>
                <ul className="text-cobalt/80 space-y-2 list-disc pl-5">
                  <li>We collect account info, device usage, and movement/sensor data (&quot;Movement Data&quot;) to run and improve Jeani.</li>
                  <li>We apply strong confidentiality and security measures and never sell your personal data.</li>
                  <li>You control Organization/team sharing; we&apos;ll show you exactly what&apos;s shared before you accept.</li>
                  <li>You can request data export or deletion as described below.</li>
                </ul>
              </div>

              <div className="space-y-8 text-cobalt/80">
                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">1. Who we are &amp; scope</h2>
                  <p>This Privacy Policy describes how Jeani Inc., a Delaware corporation, 1702 Woodburn Rd, Durham, NC 27705 (&quot;Jeani,&quot; &quot;we,&quot; &quot;us&quot;), processes personal data when you use our mobile app, firmware, websites, dashboards, APIs, and related services (the &quot;Service&quot;). By using the Service, you agree to the collection and use of information in accordance with this Policy.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">2. Age</h2>
                  <p>The Service is intended for individuals 16 years of age and older. We do not intentionally collect personal data from persons under 16. If you are under 16, do not use the Service.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">3. Data we collect</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li><span className="font-semibold text-cobalt">Account &amp; contact data:</span> name, email, profile details, settings.</li>
                    <li><span className="font-semibold text-cobalt">Transaction data:</span> subscription and billing information (processed by third-party payment providers).</li>
                    <li><span className="font-semibold text-cobalt">Communications:</span> messages, support tickets, feedback, and AI chatbot interactions.</li>
                    <li><span className="font-semibold text-cobalt">Device &amp; usage data:</span> device identifiers, OS/app version, events, diagnostics, crash logs, browser type.</li>
                    <li><span className="font-semibold text-cobalt">Movement &amp; activity data (&quot;Movement Data&quot;):</span> IMU/sensor signals, derived metrics, sleep data, training context, symptoms you log.</li>
                    <li><span className="font-semibold text-cobalt">Context &amp; relationships:</span> Organizations/teams you join, your role, coaches/admins associated.</li>
                    <li><span className="font-semibold text-cobalt">Support &amp; feedback:</span> help tickets, surveys, beta feedback, in-app messages.</li>
                    <li><span className="font-semibold text-cobalt">Cookies &amp; tracking:</span> limited cookies and SDKs for authentication, analytics, and performance. We do not currently respond to Do Not Track (DNT) signals.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">4. How we collect data</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Directly from you (account sign-up, logs, settings, entries).</li>
                    <li>Automatically from your device (events, performance, sensors with permissions).</li>
                    <li>From Organization administrators, when you join a team space (only within the scope shown to you).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">5. How we use data</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Provide, operate, and secure the Service (accounts, syncing, insights, support).</li>
                    <li>Personalize your experience and generate wellness/performance insights not constituting medical advice.</li>
                    <li>Improve safety, reliability, and performance (analytics, testing, troubleshooting).</li>
                    <li>Develop new features, models, and algorithms (including de-identified/aggregated statistics).</li>
                    <li>Communicate transactional updates; send marketing only if you opt in.</li>
                    <li>Comply with legal obligations, prevent fraud, and enforce terms.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">6. Legal bases &amp; consent</h2>
                  <p>Where required, we rely on the following legal bases to process your data:</p>
                  <ul className="space-y-2 list-disc pl-5 mt-3">
                    <li><span className="font-semibold text-cobalt">Consent:</span> for Sensitive Data including Movement Data and any health-related information you provide.</li>
                    <li><span className="font-semibold text-cobalt">Contract performance:</span> to deliver the Service you signed up for.</li>
                    <li><span className="font-semibold text-cobalt">Legitimate interests:</span> for security, fraud prevention, and Service improvement.</li>
                    <li><span className="font-semibold text-cobalt">Legal compliance:</span> where required by applicable law.</li>
                  </ul>
                  <p className="mt-3">Jeani is generally not a HIPAA &quot;covered entity.&quot; We do not sign BAAs unless separately agreed in writing with an Organization.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">7. Confidentiality &amp; security</h2>
                  <ul className="space-y-2 list-disc pl-5 mb-4">
                    <li>We treat your personal data and Movement Data as Confidential Information.</li>
                    <li>We use encryption in transit, role-based access controls (RBAC), logging/monitoring, least-privilege access, workforce training, and periodic security reviews.</li>
                    <li>We restrict access to personnel and service providers under written confidentiality obligations and need-to-know principles.</li>
                  </ul>
                  <p className="font-semibold text-cobalt">Incident response.</p>
                  <p>If a security incident materially affects your personal data, we will notify you without undue delay (target within 72 hours of discovery) with available details and mitigation steps, subject to law-enforcement needs.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">8. Sharing your data</h2>
                  <p className="mb-3">We share personal data only in these circumstances:</p>
                  <ul className="space-y-2 list-disc pl-5 mb-4">
                    <li><span className="font-semibold text-cobalt">At your direction</span> (e.g., joining an Organization). We display exact fields and recipients before you accept.</li>
                    <li><span className="font-semibold text-cobalt">With service providers</span> (cloud, analytics, support) under binding confidentiality and data-protection terms.</li>
                    <li><span className="font-semibold text-cobalt">For legal reasons</span> (compelled by law or to protect rights, safety, security).</li>
                    <li><span className="font-semibold text-cobalt">In business transfers</span> (e.g., merger, acquisition, financing) with continuous protections and required notices.</li>
                  </ul>
                  <p className="font-semibold text-cobalt">We do not sell your personal data.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">9. Organization/Team spaces</h2>
                  <p>When you join an Organization, designated admins/coaches may view data only within the scope shown to you during the join flow (e.g., weekly movement scores, symptom check-ins, trends). You can leave at any time; data shared while a member may remain available to that Organization per its policies.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">10. International transfers</h2>
                  <p>We are based in the United States and may process your data in the US and other countries. We use appropriate legal transfer mechanisms where required by applicable law.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">11. Retention</h2>
                  <p>We retain personal data as long as necessary to provide the Service and for legitimate business purposes (security, compliance), then delete or de-identify it. You may request deletion at any time, subject to legal holds and exemptions.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">12. Your choices &amp; rights</h2>
                  <p>Depending on your location, you may have rights to:</p>
                  <ul className="space-y-2 list-disc pl-5 mt-3 mb-3">
                    <li>Access, correct, or delete your personal data.</li>
                    <li>Export or port your data to another service.</li>
                    <li>Object to or restrict certain processing.</li>
                    <li>Withdraw consent at any time (without affecting prior lawful processing).</li>
                  </ul>
                  <p>Use in-app tools or contact us at <a href="mailto:privacy@jeanihealth.com" className="text-accent underline hover:text-indigo">privacy@jeanihealth.com</a> to exercise these rights. You may also manage Organization connections, research invitations, and marketing preferences in Settings.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">13. Cookies / SDKs / analytics</h2>
                  <p>We may use app SDKs and limited cookies on web properties for authentication, analytics, and performance. We do not currently recognize Do Not Track (DNT) signals. Manage permissions in your OS/app settings. Third-party tools are used under confidentiality and are not permitted to use your data for their own advertising.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">14. Third parties &amp; links</h2>
                  <p>Third-party services you connect are governed by their own terms and privacy policies. Review them before connecting. Jeani is not responsible for third-party data practices.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">15. Changes to this Policy</h2>
                  <p>We may update this Policy from time to time. Material changes will be notified in-app or by email. Continued use of the Service after the effective date constitutes acceptance of the updated Policy.</p>
                </section>

                <section>
                  <h2 className="t90 font-black text-2xl md:text-3xl text-cobalt mb-3">16. Contact</h2>
                  <p>
                    Jeani Inc.<br />
                    1702 Woodburn Rd, Durham, NC 27705<br />
                    <a href="mailto:privacy@jeanihealth.com" className="text-accent underline hover:text-indigo">privacy@jeanihealth.com</a><br />
                    857-204-7608
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
