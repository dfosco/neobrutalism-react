import * as React from "react";

import * as Card from "@/lib/registry/ui/card";

export default function CardUsage() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <Card.Footer>
        <p>Card Footer</p>
      </Card.Footer>
    </Card.Root>
  );
}
