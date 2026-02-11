
export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 p-4 text-center text-xs text-gray-500 mt-auto">
      © {new Date().getFullYear()} Kakeibo App. All rights reserved.
    </footer>
  );
}
