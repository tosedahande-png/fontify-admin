import { useState } from "react";
import { Upload, X, Type } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Fonts() {
  const [fonts, setFonts] = useState([
    // نمونه‌های تستی - در استفاده واقعی این خط را حذف کنید
    "IranSansNum",
    "Nazanin",
    "Titr",
    "Moraba",
    "Vazirmatn",
  ]);

  const [englishFonts, setEnglishFonts] = useState([
    // نمونه‌های تستی - در استفاده واقعی این خط را حذف کنید
    "Roboto",
    "Arial",
    "OpenSans",
  ]);

  const [arabicFonts, setArabicFonts] = useState([
    // نمونه‌های تستی - در استفاده واقعی این خط را حذف کنید
    "Arial",
    "ArabicSans",
    "Dubai",
  ]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // در پروژه واقعی: فایل را آپلود کرده و به لیست اضافه کنید
    console.log("File dropped:", e.dataTransfer.files);
  };

  const handleRemoveFont = (fontName: string, category: string) => {
    if (category === "persian") {
      setFonts(fonts.filter((f) => f !== fontName));
    } else if (category === "english") {
      setEnglishFonts(englishFonts.filter((f) => f !== fontName));
    } else {
      setArabicFonts(arabicFonts.filter((f) => f !== fontName));
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold mb-2">مدیریت فونت‌ها</h1>
        <p className="text-muted-foreground">آپلود و مدیریت فونت‌های برنامه</p>
      </div>

      {/* Upload Area */}
      <Card
        className="glass border-2 border-dashed border-primary/50 p-12 text-center hover:glass-strong transition-all cursor-pointer"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="glass-strong rounded-full p-6">
            <Upload className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              برای ارسال فونت جدید، فایل را اینجا بکشید
            </h3>
            <p className="text-muted-foreground">یا کلیک کنید تا فایل را انتخاب کنید</p>
          </div>
          <Button className="gradient-primary">انتخاب فایل</Button>
        </div>
      </Card>

      {/* Persian Fonts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Type className="h-6 w-6 text-primary" />
          فونت‌های فارسی موجود
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fonts.map((font) => (
            <Card key={font} className="glass p-4 group hover:glass-strong transition-all">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{font}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
                  onClick={() => handleRemoveFont(font, "persian")}
                >
                  <X className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* English Fonts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Type className="h-6 w-6 text-primary" />
          فونت‌های انگلیسی موجود
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {englishFonts.map((font) => (
            <Card key={font} className="glass p-4 group hover:glass-strong transition-all">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{font}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
                  onClick={() => handleRemoveFont(font, "english")}
                >
                  <X className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Arabic Fonts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Type className="h-6 w-6 text-primary" />
          فونت‌های عربی موجود
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {arabicFonts.map((font) => (
            <Card key={font} className="glass p-4 group hover:glass-strong transition-all">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{font}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/20"
                  onClick={() => handleRemoveFont(font, "arabic")}
                >
                  <X className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
