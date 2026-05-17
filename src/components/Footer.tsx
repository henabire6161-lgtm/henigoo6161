export default function Footer() {
  return (
    <div className="border-t border-border mx-6 md:mx-10 mt-12 md:mt-20">
      <footer className="max-w-[1100px] mx-auto py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] text-text3 tracking-[0.08em] text-center sm:text-left">
          © 2025 HENOK BERHANU KEBEDE — ALL RIGHTS RESERVED
        </div>
        <div className="font-mono text-[10px] text-text3 tracking-[0.05em]">
          BUILD <span className="text-accent">v2025.1</span> // ADDIS ABABA
        </div>
      </footer>
    </div>
  );
}
