export default function WaitlistBar() {
  return (
    <a
      href="/waitlist"
      className="fixed inset-x-0 bottom-0 z-50 block bg-cobalt py-2.5 text-center text-sm text-white transition-[filter] duration-300 hover:brightness-110"
    >
      <span className="font-semibold">No Apple Watch?</span> Join the waitlist
      anyway
    </a>
  );
}
