import { CardList } from "../ui/components/card-list";

export default function Shop() {
  return (
    <div className="flex flex-1 flex-col h-full w-full items-center">
      <CardList headline="find by category" search />
    </div>
  );
}
