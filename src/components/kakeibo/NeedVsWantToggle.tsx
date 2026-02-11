
interface NeedVsWantToggleProps {
  value: "need" | "want";
  onChange: (value: "need" | "want") => void;
}

export default function NeedVsWantToggle({ value, onChange }: NeedVsWantToggleProps) {
  return (
    <div className="flex gap-2">
      <button
        className={`px-4 py-2 rounded-l ${value === "need" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        onClick={() => onChange("need")}
        type="button"
      >
        Necessità
      </button>
      <button
        className={`px-4 py-2 rounded-r ${value === "want" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => onChange("want")}
        type="button"
      >
        Desiderio
      </button>
    </div>
  );
}
