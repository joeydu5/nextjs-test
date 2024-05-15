"use client";
import React from "react";
import { useParams } from "next/navigation";

function MealDetailsPage() {
  const param = useParams();
  console.log(param);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Meals details page</h1>
      <h2>{param.mealSlug}</h2>
    </div>
  );
}

export default MealDetailsPage;
