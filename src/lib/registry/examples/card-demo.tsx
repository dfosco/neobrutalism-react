import * as React from "react";

import { Button } from "@/lib/registry/ui/button";
import { Label } from "@/lib/registry/ui/label";
import { Input } from "@/lib/registry/ui/input";
import * as Card from "@/lib/registry/ui/card";

export default function CardDemo() {
  return (
    <Card.Root className="-my-4 w-full max-w-sm">
      <Card.Header>
        <Card.Title>Login to your account</Card.Title>
        <Card.Description>Enter your email below to login to your account</Card.Description>
        <Card.Action>
          <Button variant="link">Sign Up</Button>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="##"
                  className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </Card.Content>
      <Card.Footer className="flex-col gap-2">
        <Button type="submit" className="w-full">Login</Button>
        <Button variant="outline" className="w-full">Login with Google</Button>
      </Card.Footer>
    </Card.Root>
  );
}
