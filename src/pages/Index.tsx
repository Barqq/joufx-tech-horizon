
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Sparkles, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Template images (now including the uploaded JoufX template)
  const templates = [
    { id: 1, src: '/lovable-uploads/e2181d0f-f44b-42f5-8f62-8ce24dc8a4f2.png', name: 'قالب JoufX الخاص' },
    { id: 2, src: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop', name: 'قالب 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop', name: 'قالب 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop', name: 'قالب 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', name: 'قالب 5' }
  ];

  const generateGreeting = () => {
    if (!selectedTemplate || !userName.trim()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      canvas.width = 800;
      canvas.height = 600;
      
      // Draw the template image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Add gradient overlay for better text visibility
      const gradient = ctx.createLinearGradient(0, canvas.height - 200, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(68, 0, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(68, 0, 255, 0.7)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height - 200, canvas.width, 200);
      
      // Set text properties
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px Tajawal, Arial';
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      
      // Draw main greeting text
      ctx.fillText('عيد أضحى مبارك', canvas.width / 2, canvas.height - 120);
      
      // Draw user name
      ctx.font = 'bold 36px Tajawal, Arial';
      ctx.fillText(userName, canvas.width / 2, canvas.height - 60);
      
      // Draw JoufX signature
      ctx.font = '24px Tajawal, Arial';
      ctx.fillStyle = '#bb86fc';
      ctx.fillText('من نادي JoufX 💜✖', canvas.width / 2, canvas.height - 20);
      
      // Convert to data URL
      const dataURL = canvas.toDataURL('image/png');
      setGeneratedImage(dataURL);
    };
    
    img.src = selectedTemplate;
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.download = `eid-greeting-${userName || 'card'}.png`;
    link.href = generatedImage;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 rtl" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ✖
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">JoufX 💜✖</h1>
                <p className="text-sm text-purple-600">النادي التقني بمنطقة الجوف</p>
              </div>
            </div>
            <Link to="/checkin-dashboard">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900">
                <Users className="w-4 h-4 ml-2" />
                نظام تسجيل الحضور
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            مولد بطاقات التهنئة
          </h2>
          
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-2xl shadow-lg mb-8 max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed">
              نادي JoufX يهنئكم بعيد الأضحى المبارك 🌙✨<br />
              نسأل الله أن يعيده علينا وعليكم باليمن والبركات، وأن يجعل أيامكم أفراحًا وإنجازات.<br />
              كل عام وأنتم بخير 💜✖
            </p>
          </div>
        </div>

        {!generatedImage ? (
          <div className="space-y-8">
            {/* Template Selection */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                اختر قالب البطاقة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates.map((template) => (
                  <Card 
                    key={template.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      selectedTemplate === template.src 
                        ? 'ring-4 ring-purple-600 shadow-lg' 
                        : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedTemplate(template.src)}
                  >
                    <CardContent className="p-0">
                      <img 
                        src={template.src} 
                        alt={template.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <p className="text-center font-semibold text-gray-700">
                          {template.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Name Input */}
            {selectedTemplate && (
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  اكتب اسمك أو رسالتك
                </h3>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="اكتب اسمك هنا..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="text-center text-lg p-4 border-2 border-purple-300 focus:border-purple-600 rounded-xl"
                    dir="rtl"
                  />
                  <Button
                    onClick={generateGreeting}
                    disabled={!userName.trim()}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-4 text-lg rounded-xl font-bold transition-all duration-300 disabled:opacity-50"
                  >
                    <Heart className="w-5 h-5 ml-2" />
                    إنشاء البطاقة
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Generated Image Display */
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              بطاقتك جاهزة! 🎉
            </h3>
            <div className="bg-white p-4 rounded-2xl shadow-lg mb-6">
              <img 
                src={generatedImage} 
                alt="بطاقة التهنئة"
                className="w-full rounded-xl shadow-md"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={downloadImage}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold text-lg"
              >
                <Download className="w-5 h-5 ml-2" />
                تحميل البطاقة
              </Button>
              <Button
                onClick={() => {
                  setGeneratedImage('');
                  setUserName('');
                  setSelectedTemplate('');
                }}
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-bold text-lg"
              >
                إنشاء بطاقة جديدة
              </Button>
            </div>
          </div>
        )}

        {/* Hidden Canvas */}
        <canvas ref={canvasRef} className="hidden" />

        {/* About Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            عن نادي JoufX
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              <strong>ليش X؟</strong>
            </p>
            <p>
              في عالم التقنية، فيه أسرار، تقنيات مخفية، ومستقبل ينتظر من يفهمه أول.
            </p>
            <p>
              هنا دورنا، نفك الشفرة، نكشف الغموض، ونخليك دايمًا سابق غيرك بخطوة. 😎✨
            </p>
            <p>
              راح نقدم دورات، معسكرات، وتجارب تقنية تخلّيك تعيش المستقبل من اليوم.
            </p>
            <p>
              هدفنا إنك تتعلّم، تطبّق، وتكون مستعد لأي تحدي في عالم التقنية. 🎯
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            ضيفونا على حساباتنا في وسائل التواصل الاجتماعي ،حياكم الله 💜!
          </p>
          <a 
            href="https://linktr.ee/JoufX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            تابعونا على لينك تري
          </a>
          <div className="mt-6 pt-6 border-t border-purple-400">
            <p className="text-purple-200">
              © 2024 نادي JoufX التقني - جميع الحقوق محفوظة 💜✖
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
