"use client";
import KakeiboCard from "../../components/kakeibo/KakeiboCard";
import CategoryBadge from "../../components/kakeibo/CategoryBadge";
import NeedVsWantToggle from "../../components/kakeibo/NeedVsWantToggle";
import QuestionCard from "../../components/kakeibo/QuestionCard";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Progress } from "../../components/ui/progress";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/ui/select";
import { Table, TableHeader, TableBody } from "../../components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";

export default function ExamplePage() {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl py-24 px-6 bg-white dark:bg-black rounded-lg shadow-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">Esempi componenti</h1>
      {/* Esempi componenti Kakeibo */}
      <section className="mb-16 w-full flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold mb-2">Kakeibo</h2>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <KakeiboCard title="Risparmi Mensili" value="€250" />
          <CategoryBadge label="Trasporti" color="bg-yellow-100 text-yellow-800" />
          {/* Esempio interattivo NeedVsWantToggle */}
          {(() => {
            const [toggle, setToggle] = React.useState<'need' | 'want'>("need");
            return (
              <div>
                <NeedVsWantToggle value={toggle} onChange={setToggle} />
                <div className="mt-2 text-sm text-gray-600">Selezionato: <b>{toggle === 'need' ? 'Necessità' : 'Desiderio'}</b></div>
              </div>
            );
          })()}
          <QuestionCard question="Questa spesa è necessaria?">Rispondi qui...</QuestionCard>
        </div>
      </section>
      {/* Esempi componenti UI */}
      <section className="w-full flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold mb-2">UI</h2>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Badge>Badge di esempio</Badge>
          <Button>Button di esempio</Button>
          <Card className="p-4">Card di esempio</Card>
          {/* Esempio funzionante di Dialog */}
          <DialogPrimitive.Root>
            <DialogPrimitive.Trigger asChild>
              <Button>Apri Dialog</Button>
            </DialogPrimitive.Trigger>
            <DialogPrimitive.Portal>
              <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-40" />
              <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
                <DialogPrimitive.Title className="text-lg font-bold mb-2">Dialog di esempio</DialogPrimitive.Title>
                <DialogPrimitive.Description className="mb-4 text-gray-600">Questo è un esempio di dialog interattivo con Radix UI.</DialogPrimitive.Description>
                <DialogPrimitive.Close asChild>
                  <Button variant="secondary">Chiudi</Button>
                </DialogPrimitive.Close>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
          <Label htmlFor="input-demo">Label di esempio</Label>
          <Input id="input-demo" placeholder="Input di esempio" />
          <Textarea placeholder="Textarea di esempio" />
          <Progress value={60} />
          <Select>
            <SelectTrigger><SelectValue placeholder="Seleziona" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Opzione 1</SelectItem>
              <SelectItem value="2">Opzione 2</SelectItem>
            </SelectContent>
          </Select>
          <Table>
            <TableHeader>
              <tr><th>Colonna 1</th><th>Colonna 2</th></tr>
            </TableHeader>
            <TableBody>
              <tr><td>Dato 1</td><td>Dato 2</td></tr>
            </TableBody>
          </Table>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Contenuto Tab 1</TabsContent>
            <TabsContent value="tab2">Contenuto Tab 2</TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
