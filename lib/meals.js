import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("fetching issues....");
  return db.prepare("SELECT * FROM meals").all();
  // this is running on the server side, its not promise. but wrapped in asyn will return a promise
}
