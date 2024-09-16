'use client'
import { readCSV } from "@/app/actions";
import { useFormStatus } from "react-dom";

interface FormProps {
  action: (formData: FormData) => void;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-4 py-2 text-white bg-emerald-600 rounded-md text-lg border border-transparent transition duration-500 hover:bg-white hover:text-emerald-600 hover:border-emerald-600"
      disabled={pending}
    >
      { pending ? "Reading your CSV file..." : "Upload your CSV" }
    </button>
  );
}

function Form({ action }: FormProps) {
  return (
    <form
      action={action}
      className="flex flex-col gap-y-4 items-center"
    >
      <label htmlFor="uploadCSV" className="text-xl text-slate-800">
        You can upload a CSV file here:
      </label>
      <input
        id="uploadCSV"
        type="file"
        name="uploadCSV"
        className="p-4 border border-slate-800 border-dashed"
      />
      <SubmitButton />
    </form>
  );
}

export default function UploadCSVButton() {
  return <Form action={readCSV} />;
}
