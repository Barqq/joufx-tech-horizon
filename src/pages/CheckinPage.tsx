
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, User, Clock } from "lucide-react";

const CheckinPage = () => {
  const { participantId } = useParams();
  const [participant, setParticipant] = useState<any>(null);
  const [checkedIn, setCheckedIn] = useState(false);
  const [alreadyCheckedIn, setAlreadyCheckedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock data - في التطبيق الحقيقي سيكون من قاعدة البيانات
  const mockParticipants: Record<string, any> = {
    'ahmad123': { name: 'أحمد محمد', email: 'ahmad@example.com' },
    'sara456': { name: 'سارة أحمد', email: 'sara@example.com' },
    'omar789': { name: 'عمر خالد', email: 'omar@example.com' }
  };

  useEffect(() => {
    if (participantId && mockParticipants[participantId]) {
      setParticipant(mockParticipants[participantId]);
      
      // فحص إذا كان قد سجل الحضور اليوم
      const today = new Date().toDateString();
      const lastCheckin = localStorage.getItem(`checkin_${participantId}`);
      if (lastCheckin === today) {
        setAlreadyCheckedIn(true);
      }
    }
  }, [participantId]);

  const handleCheckin = () => {
    setLoading(true);
    
    // محاكاة طلب API
    setTimeout(() => {
      const today = new Date().toDateString();
      localStorage.setItem(`checkin_${participantId}`, today);
      setCheckedIn(true);
      setLoading(false);
    }, 1000);
  };

  if (!participant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 rtl flex items-center justify-center" dir="rtl">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">مشارك غير موجود</h2>
            <p className="text-gray-600 mb-6">الرابط غير صحيح أو المشارك غير مسجل في النظام</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800">
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 rtl" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ✖
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">JoufX Check-in</h1>
                <p className="text-sm text-purple-600">تسجيل الحضور</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <Card className="w-full max-w-lg">
          <CardContent className="p-8">
            {checkedIn ? (
              // Success State
              <div className="text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">تم تسجيل الحضور بنجاح! 🎉</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <User className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">{participant.name}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">{new Date().toLocaleTimeString('ar-SA')}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">شكراً لك على الحضور في الوقت المحدد</p>
                <Link to="/">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-800 w-full">
                    العودة للصفحة الرئيسية
                  </Button>
                </Link>
              </div>
            ) : alreadyCheckedIn ? (
              // Already Checked In State
              <div className="text-center">
                <XCircle className="w-20 h-20 text-orange-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">تم تسجيل الحضور مسبقاً</h2>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <User className="w-5 h-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">{participant.name}</span>
                  </div>
                  <p className="text-orange-700">لقد سجلت حضورك اليوم من قبل</p>
                </div>
                <p className="text-gray-600 mb-6">يمكنك تسجيل الحضور مرة واحدة فقط في اليوم</p>
                <Link to="/">
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    العودة للصفحة الرئيسية
                  </Button>
                </Link>
              </div>
            ) : (
              // Check-in Form
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  ✖
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">مرحباً بك!</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <User className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-800 text-xl">{participant.name}</span>
                  </div>
                  <p className="text-purple-700">{participant.email}</p>
                </div>
                <p className="text-gray-600 mb-8">اضغط على الزر أدناه لتسجيل حضورك</p>
                <Button
                  onClick={handleCheckin}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 w-full py-4 text-lg font-bold"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-reverse space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>جاري التسجيل...</span>
                    </div>
                  ) : (
                    <>
                      <CheckCircle className="w-6 h-6 ml-2" />
                      تسجيل الحضور
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CheckinPage;
