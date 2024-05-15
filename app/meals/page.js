import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  console.log(meals);
  return <MealsGrid meals={meals} />;
}

async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your fav ceipt and cook it yourself, it is eays and fun </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite receipt</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* suspense is a React component that shows fall back if there is something wrong/delay with the wrapped component  */}
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
