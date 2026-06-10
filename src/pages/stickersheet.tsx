import * as React from "react";

import AccordionDemo from "@/lib/registry/examples/accordion-demo";
import AvatarDemo from "@/lib/registry/examples/avatar-demo";
import BadgeDemo from "@/lib/registry/examples/badge-demo";
import ButtonDemo from "@/lib/registry/examples/button-demo";
import ButtonDefault from "@/lib/registry/examples/button-default";
import ButtonDestructive from "@/lib/registry/examples/button-destructive";
import ButtonGhost from "@/lib/registry/examples/button-ghost";
import ButtonOutline from "@/lib/registry/examples/button-outline";
import ButtonSecondary from "@/lib/registry/examples/button-secondary";
import ButtonSize from "@/lib/registry/examples/button-size";
import ButtonIcon from "@/lib/registry/examples/button-icon";
import ButtonWithIcon from "@/lib/registry/examples/button-with-icon";
import CardDemo from "@/lib/registry/examples/card-demo";
import CheckboxDemo from "@/lib/registry/examples/checkbox-demo";
import InputDemo from "@/lib/registry/examples/input-demo";
import InputWithLabel from "@/lib/registry/examples/input-with-label";
import LabelDemo from "@/lib/registry/examples/label-demo";
import ProgressDemo from "@/lib/registry/examples/progress-demo";
import RadioGroupDemo from "@/lib/registry/examples/radio-group-demo";
import SelectDemo from "@/lib/registry/examples/select-demo";
import SeparatorDemo from "@/lib/registry/examples/separator-demo";
import SliderDemo from "@/lib/registry/examples/slider-demo";
import SwitchDemo from "@/lib/registry/examples/switch-demo";
import TabsDemo from "@/lib/registry/examples/tabs-demo";
import TextareaDemo from "@/lib/registry/examples/textarea-demo";
import TooltipDemo from "@/lib/registry/examples/tooltip-demo";
import SpinnerDemo from "@/lib/registry/examples/spinner-demo";
import SkeletonDemo from "@/lib/registry/examples/skeleton-demo";
import EmptyDemo from "@/lib/registry/examples/empty-demo";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}

export default function Stickersheet() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          Component Stickersheet
        </h1>
        <p className="mt-2 text-muted-foreground">
          A visual overview of all components in the Neobrutalism Design System.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Section title="Button Variants">
          <div className="flex flex-col gap-4">
            <ButtonDemo />
            <ButtonDefault />
            <ButtonSecondary />
            <ButtonDestructive />
            <ButtonOutline />
            <ButtonGhost />
            <ButtonSize />
            <ButtonIcon />
            <ButtonWithIcon />
          </div>
        </Section>

        <Section title="Card">
          <CardDemo />
        </Section>

        <Section title="Accordion">
          <AccordionDemo />
        </Section>

        <Section title="Avatar">
          <AvatarDemo />
        </Section>

        <Section title="Badge">
          <BadgeDemo />
        </Section>

        <Section title="Checkbox">
          <CheckboxDemo />
        </Section>

        <Section title="Input">
          <div className="flex w-full flex-col gap-4">
            <InputDemo />
            <InputWithLabel />
          </div>
        </Section>

        <Section title="Label">
          <LabelDemo />
        </Section>

        <Section title="Progress">
          <ProgressDemo />
        </Section>

        <Section title="Radio Group">
          <RadioGroupDemo />
        </Section>

        <Section title="Select">
          <SelectDemo />
        </Section>

        <Section title="Separator">
          <SeparatorDemo />
        </Section>

        <Section title="Slider">
          <SliderDemo />
        </Section>

        <Section title="Switch">
          <SwitchDemo />
        </Section>

        <Section title="Tabs">
          <TabsDemo />
        </Section>

        <Section title="Textarea">
          <TextareaDemo />
        </Section>

        <Section title="Tooltip">
          <TooltipDemo />
        </Section>

        <Section title="Spinner">
          <SpinnerDemo />
        </Section>

        <Section title="Skeleton">
          <SkeletonDemo />
        </Section>

        <Section title="Empty State">
          <EmptyDemo />
        </Section>
      </div>
    </div>
  );
}
