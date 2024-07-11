import { Button } from "./(ui)/components";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h2>This site is meant for portfolio purposes.</h2>

      <Button name="Return Home" route="/" />
    </div>
  );
}
