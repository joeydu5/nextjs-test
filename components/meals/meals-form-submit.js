"use client";

import { useFormStatus } from "react-dom";

function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting" : "Share"}
    </button>
  );
}

export default MealsFormSubmit;
