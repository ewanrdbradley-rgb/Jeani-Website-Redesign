import type { NextConfig } from "next";

// Routes from before the redesign, kept alive or pointed somewhere sensible.
const WAITLIST_FREE = "https://jeani-waitlist-chi.vercel.app";
const WAITLIST_PAID = "https://jeani-waitlist-paid-xi.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/our-story", destination: "/story", permanent: false },
      { source: "/how-we-analyse", destination: "/science", permanent: false },
      { source: "/start", destination: "/waitlist", permanent: false },
      { source: "/thorpe", destination: "/thorpe1.5", permanent: false },
      { source: "/ascent-proof", destination: "/", permanent: false },
    ];
  },
  async rewrites() {
    return [
      // the Thorpe 1.5 announcement is a self-contained static page in
      // public/thorpe1.5/; serve its index at the clean URL
      { source: "/thorpe1.5", destination: "/thorpe1.5/index.html" },

      // The waitlist runs as two variants, free at /waitlist and a five dollar
      // refundable hold at /wait-list. They live on their own Vercel projects
      // and are proxied in rather than built here, which lets them ship
      // without rebuilding this site.
      { source: "/waitlist", destination: `${WAITLIST_FREE}/waitlist` },
      { source: "/waitlist/:path*", destination: `${WAITLIST_FREE}/waitlist/:path*` },
      { source: "/wait-list", destination: `${WAITLIST_PAID}/wait-list` },
      { source: "/wait-list/:path*", destination: `${WAITLIST_PAID}/wait-list/:path*` },
    ];
  },
};

export default nextConfig;
