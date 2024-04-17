import { Button } from "./ui/components";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2>This site is currently in development.</h2>
      <p className="my-6">Check back in a few days for possible updates.</p>
      <Button name="Return Home" route="/" />
    </div>
  );
}
