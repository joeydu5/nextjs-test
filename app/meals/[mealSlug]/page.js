import Image from "next/image";
import { getMeal } from "@/lib/meals";
import c from "./page.module.css";
import { notFound } from "next/navigation";

// params by default is in page.js Props in NextJS
function MealDetailsPage({ params }) {
  const param = params.mealSlug;
  console.log(param);
  const meal = getMeal(param);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={c.header}>
        <div className={c.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={c.headerText}>
          <h1>{meal.title}</h1>
          <p className={c.creator}>
            by <a href={`mainto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={c.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={c.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;
