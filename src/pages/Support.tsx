import { useState } from "react";
import { MessageSquare, Send, User, Clock, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Support() {
  // نمونه‌های تستی - در پروژه واقعی از API دریافت می‌شود
  const [tickets] = useState([
    {
      id: "USER_12345",
      name: "علی احمدی",
      subject: "مشکل در دانلود فونت",
      message: "سلام، نمی‌تونم فونت جدید رو دانلود کنم",
      date: "1403/08/15",
      status: "open",
    },
    {
      id: "USER_67890",
      name: "زهرا محمدی",
      subject: "سوال درباره اشتراک",
      message: "چطور می‌تونم اشتراک ماهانه بخرم؟",
      date: "1403/08/14",
      status: "closed",
    },
    {
      id: "USER_11223",
      name: "محمد رضایی",
      subject: "درخواست بازگشت وجه",
      message: "می‌خوام پولم رو پس بگیرم",
      date: "1403/08/13",
      status: "open",
    },
  ]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-2">پشتیبانی</h1>
        <p className="text-muted-foreground">مدیریت تیکت‌ها و پیام‌های کاربران</p>
      </div>

      <Tabs defaultValue="tickets" className="space-y-6">
        <TabsList className="glass">
          <TabsTrigger value="tickets">تیکت‌های دریافتی</TabsTrigger>
          <TabsTrigger value="send">ارسال تیکت</TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          {tickets.map((ticket) => (
            <Card
              key={ticket.id}
              className="glass p-6 hover:glass-strong transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge
                      variant={ticket.status === "open" ? "default" : "secondary"}
                      className={
                        ticket.status === "open"
                          ? "gradient-primary"
                          : "bg-muted"
                      }
                    >
                      {ticket.status === "open" ? "باز" : "بسته شده"}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{ticket.id}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{ticket.date}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-1">{ticket.subject}</h3>
                    <p className="text-muted-foreground">{ticket.message}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="gradient-primary">
                      <Send className="ml-1 h-4 w-4" />
                      پاسخ
                    </Button>
                    {ticket.status === "open" && (
                      <Button size="sm" variant="outline" className="glass">
                        <CheckCircle2 className="ml-1 h-4 w-4" />
                        بستن تیکت
                      </Button>
                    )}
                  </div>
                </div>

                <div className="glass-strong rounded-full p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="send">
          <Card className="glass p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-border">
                <Send className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">ارسال تیکت به کاربر</h2>
              </div>

              <div className="space-y-2">
                <Label>شناسه کاربر (User ID)</Label>
                <Input
                  placeholder="USER_12345"
                  className="glass border-primary/30"
                />
              </div>

              <div className="space-y-2">
                <Label>موضوع</Label>
                <Input
                  placeholder="موضوع پیام را وارد کنید"
                  className="glass border-primary/30"
                />
              </div>

              <div className="space-y-2">
                <Label>پیام</Label>
                <Textarea
                  placeholder="متن پیام خود را وارد کنید"
                  className="glass border-primary/30 min-h-[200px]"
                />
              </div>

              <Button className="w-full gradient-primary text-lg h-12 glow">
                <Send className="ml-2 h-5 w-5" />
                ارسال تیکت
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
