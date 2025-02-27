import { Button } from "@scani/_components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@scani/_components/ui/card";

export default function Home() {
  return (
    <div className="flex h-screen flex-1 items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Test</CardTitle>
        </CardHeader>
        <CardFooter>
          <Button variant="outline">cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
