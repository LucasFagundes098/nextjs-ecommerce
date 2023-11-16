import {
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
} from "@/app/utils/utils";

export default function Home() {
  return (
    <main>
      <h2>Simple E-commerce Project</h2>
      <div className="w-9/12">
        <p>
          This is a study project aimed at gaining a deeper understanding of
          Next.js and its fundamentals.
          <br />
          The project incorporates other technologies such as:
        </p>
        <div className="flex flex-col">
          <span>- Firebase</span>
          <span>- Zustand</span>
          <span>- TypeScript</span>
        </div>
      </div>

      <div className="my-5">
        <h2>Currently, the product list is limited to the following items:</h2>

        <div className="flex flex-col">
          <span>- Tênis Masculino Ennergy</span>
          <span>- Tênis Masculino Essential</span>
          <span>- Tênis Feminino Run</span>
          <span>- Tênis Masculino Effusion</span>
        </div>
      </div>

      <Separator className="my-5" />

      <Alert>
        <AlertTitle>Important note</AlertTitle>
        <AlertDescription>
          The primary emphasis of this project was on learning and applying
          Next.js fundamentals. Please note that I did not prioritize CSS and
          responsiveness, so there is currently no mobile version available for
          this application.
        </AlertDescription>
      </Alert>
    </main>
  );
}
