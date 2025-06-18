
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, User, Clock, Phone, Mail, Shield } from "lucide-react";

const CheckinPage = () => {
  const { participantId } = useParams();
  const [participant, setParticipant] = useState<any>(null);
  const [checkedIn, setCheckedIn] = useState(false);
  const [alreadyCheckedIn, setAlreadyCheckedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // قائمة المشاركين المسجلين مسبقاً - نفس البيانات من لوحة التحكم
  const registeredParticipants: Record<string, any> = {
    'p001': { name: 'نوف عبدالله السالم', phone: '0507373494', email: 'noufabdullah48@gmail.com' },
    'p002': { name: 'ريتاج خالد التميمي', phone: '0506601585', email: 'Retajaltamimi251@gmail.com' },
    'p003': { name: 'تغريد ربيع الرويلي', phone: '0500176683', email: 'Taghreed.ra3@gmail.com' },
    'p004': { name: 'طيف سلمان الراشد', phone: '0552797875', email: 'zxxz3922@gmail.com' },
    'p005': { name: 'مجد عبدالرزاق الزيد', phone: '0590835409', email: 'majd3.alzaid@gmail.com' },
    'p006': { name: 'وطن خلف السويلم', phone: '0537551482', email: 'watan.k2000@gmail.com' },
    'p007': { name: 'منى ربيع الرويلي', phone: '0554154009', email: 'Monaalherkan@gmail.com' },
    'p008': { name: 'رغد سلطان البيالي', phone: '0531424755', email: 'sraghad510@gmail.com' },
    'p009': { name: 'هلا ربيع الرويلي', phone: '0508969825', email: 'Halaalhrkan13@gmail.com' },
    'p010': { name: 'طارق علي عاتي', phone: '0504763395', email: 'tariqaati3@gmail.com' },
    'p011': { name: 'ميسم محمد الحميد', phone: '0558154491', email: 'maalhomaid@outlook.sa' },
    'p012': { name: 'عيسى رياض الحسن', phone: '0555234896', email: 'engessahassan@gmail.com' },
    'p013': { name: 'اعتدال محمد الرويلي', phone: '0505788317', email: 'atedal4444@gmail.com' },
    'p014': { name: 'ريناد مبارك العنزي', phone: '0508750899', email: 'iixllax77@gmail.com' },
    'p015': { name: 'فخر خليل السرحاني', phone: '0564123105', email: 'fakaralserhanya@gmail.com' },
    'p016': { name: 'اسامه حمد العتيبي', phone: '0538740669', email: 'osamz669@gmail.com' },
    'p017': { name: 'دُعاء زبن البراهيم', phone: '0546361174', email: 'duaalibrahim00@gmail.com' },
    'p018': { name: 'عبد الرحمن عبد المحسن السلطان', phone: '0539190082', email: 'abdulrahmanalsultan909@gmail.com' },
    'p019': { name: 'نايف بن ناصر الكبيدان', phone: '0547223425', email: 'naiif882@gmail.con' },
    'p020': { name: 'ايمان زكريا السرحاني', phone: '0553017617', email: 'aa1425aa00@gmail.com' },
    'p021': { name: 'مدى علي الرويلي', phone: '0558968100', email: 'm3ada.20@icloud.com' },
    'p022': { name: 'ولف جايز الكويكبي', phone: '0553129819', email: 'wolf.aljok@gmail.com' },
    'p023': { name: 'شهد فهد الصليع', phone: '0509399887', email: 'sahadalsulyyi@gmail.com' },
    'p024': { name: 'تركي فهيد الزارع', phone: '0594609593', email: 'ttt60257@gmail.com' },
    'p025': { name: 'مها تركي العتيبي', phone: '0502183417', email: 'mahaaturkii@gmail.com' },
    'p026': { name: 'علي محمد الحربي', phone: '0564745274', email: 'Alharbiali242@gmail.com' },
    'p027': { name: 'راما حامد العياف', phone: '557755418', email: 'alayyaframa@gmail.com' },
    'p028': { name: 'ميعاد سلطان الرويلي', phone: '533352871', email: 'meadsultan762@gmail.com' },
    'p029': { name: 'سماح حامس الرويلي', phone: '0553709678', email: 'samh7041@gmail.com' },
    'p030': { name: 'منار جايز الرويلي', phone: '0537048542', email: 'pride_44@hotmail.com' },
    'p031': { name: 'شموخ عبدالهادي', phone: '0540442940', email: 'shmokh94shmokh@icloud.com' },
    'p032': { name: 'منصور خلف العنزي', phone: '0501281882', email: 'mansor198198@icloud.com' },
    'p033': { name: 'رزان قاسم الرويلي', phone: '0501704251', email: 'Razanq75113@gmail.com' },
    'p034': { name: 'شهد فهد الصليع', phone: '0509399887', email: 'shad279a@gmail.com' },
    'p035': { name: 'افنان خلف الرويلي', phone: '0558902948', email: 'afnankhlf18@gmail.com' },
    'p036': { name: 'تذكار الرويلي', phone: '500465011', email: 'alsalem6126@gmail.com' },
    'p037': { name: 'فلق محمد الوردي', phone: '0550951831', email: 'falaqalwardy@gmail.com' },
    'p038': { name: 'غاده طارق العايدي', phone: '0553904333', email: 'ghada.alaidi@hotmail.com' },
    'p039': { name: 'هلا محمد الشايع', phone: '0543825008', email: 'hala-581@hotmail.com' },
    'p040': { name: 'المثنى سليمان الهذيل', phone: '0559078115', email: 'mothana70788@icloud.com' },
    'p041': { name: 'أثير فيصل البديوي', phone: '0505233567', email: 'athyraa91@gmail.com' },
    'p042': { name: 'Taraf Fahad', phone: '0539390155', email: 'Tarafalbarak@gmail.com' },
    'p043': { name: 'حور صالح المريح', phone: '0506601201', email: 'hours4leh@gmail.com' },
    'p044': { name: 'ساره احمد الطالب', phone: '0508766864', email: 'sarah98776@gmail.com' },
    'p045': { name: 'طيف زياد الخالدي', phone: '0502743031', email: 'teaf11alkhaldy@gmail.com' },
    'p046': { name: 'مريم بنت عادل الضميري', phone: '0536444984', email: 'maryam3.adel5@gmail.com' },
    'p047': { name: 'جنان عبدالله الرويلي', phone: '0594280566', email: 'jinan11444@icloud.com' },
    'p048': { name: 'فهد فرحان الشمري', phone: '0556137530', email: 'fhdalsmry1@gmail.com' },
    'p049': { name: 'سديم عبدالله الرويلي', phone: '0581806789', email: 'sss142777@icloud.com' },
    'p050': { name: 'عبدالرحمن عبدالله الرويلي', phone: '0581806789', email: 'sss142777@icloud.com' },
    'p051': { name: 'عبدالعزيز عبدالله الرويلي', phone: '0581806789', email: 'sss142777@icloud.com' },
    'p052': { name: 'غزلان مقبل الخالدي', phone: '0504802590', email: 'ghaldhwihii91@gmail.com' },
    'p053': { name: 'شموخ باجد العتيبي', phone: '0532764916', email: 'shmokotb99@gmail.com' },
    'p054': { name: 'جوف حمدان النعمان', phone: '0507325838', email: 'joufhamdan22@gmail.com' },
    'p055': { name: 'عبدالملك محمد عصيد الشراري', phone: '0557652251', email: 'abadi_2018@outlook.com' },
    'p056': { name: 'شهد بشير الرويلي', phone: '0533547300', email: 'shahadbbsh@gmail.com' },
    'p057': { name: 'وفاء محمد الشمري', phone: '0532705843', email: 'wafa11alshammari@gmail.com' },
    'p058': { name: 'يزن فايز الرويلي', phone: '0554383663', email: 'yazenalurwili@gmail.com' },
    'p059': { name: 'ورود علي الوردي', phone: '0501934969', email: 'wr20113ali@gmail.com' },
    'p060': { name: 'محمد فلاج الرويلي', phone: '0550381788', email: 'mohamedflajj@gmail.com' },
    'p061': { name: 'فاطمه فلاح الفالح', phone: '0580762975', email: 'Fatimah.alfaleh12@gmail.com' },
    'p062': { name: 'فاطمه مقبل السرحاني', phone: '0556218696', email: 'alsrhanyfatmh042@gamil.com' },
    'p063': { name: 'Akram fawaz alshammry', phone: '0507830249', email: 'afm5277@gmail.com' },
    'p064': { name: 'صافيه رافع الرحيم', phone: '0534878336', email: 'Safeah1424@gmail.con' },
    'p065': { name: 'محمد خليف البراهيم', phone: '0535249539', email: 'albeahymm444@gmail.com' },
    'p066': { name: 'شهد شايش الرويلي', phone: '0500354049', email: 'v3koe1@gmail.com' },
    'p067': { name: 'مهناء صالح التميمي', phone: '0592040932', email: 'mhnasalh52@gmail.com' },
    'p068': { name: 'فلك محمد السرحاني', phone: '0551181660', email: 'falak.alserhani@icloud.com' },
    'p069': { name: 'طيف مقبل السرحاني', phone: '0595233149', email: 'teeefmok1333@gmail.com' },
    'p070': { name: 'سيسبان سعود الغالب', phone: '0500840956', email: 'sesabanaltamimi1@gmail.com' },
    'p071': { name: 'ديم خالد الرويلي', phone: '0542513727', email: 'deem55319@gmail.com' },
    'p072': { name: 'نوفه سويلم اللحاوي', phone: '0557555394', email: 'Vonh57@gmail.com' },
    'p073': { name: 'رفيف ماضي المنديل', phone: '0534541532', email: 'rafif2399@gmail.com' },
    'p074': { name: 'سطام عبدالله الرويلي', phone: '558626961', email: 'aassa2127@gmail.com' },
    'p075': { name: 'لينا زيد الجباب', phone: '0538874945', email: 'lenaaljubab@hotmail.com' },
    'p076': { name: 'سلطان ساير الرويلي', phone: '0503438489', email: 'sultanalrwyly18@gmail.com' },
    'p077': { name: 'خديجة مشعل الرويلي', phone: '0504129161', email: 'khad1434ijah@gmail.com' },
    'p078': { name: 'سِوار أمجد النصيري', phone: '0500893454', email: 'sewar2.9.2006@gmail.com' }
  };

  useEffect(() => {
    console.log('معرف المشارك:', participantId);
    
    if (participantId && registeredParticipants[participantId]) {
      setParticipant(registeredParticipants[participantId]);
      console.log('تم العثور على المشارك:', registeredParticipants[participantId]);
      
      // فحص إذا كان قد سجل الحضور اليوم
      const today = new Date().toDateString();
      const lastCheckin = localStorage.getItem(`checkin_${participantId}`);
      if (lastCheckin === today) {
        setAlreadyCheckedIn(true);
      }
    } else {
      console.log('المشارك غير موجود في القائمة المسجلة');
      setError('معرف المشارك غير صحيح أو غير مسجل في الدورة');
    }
  }, [participantId]);

  const handleCheckin = () => {
    if (!participant || !participantId) return;
    
    setLoading(true);
    
    // محاكاة طلب API
    setTimeout(() => {
      const today = new Date().toDateString();
      const currentTime = new Date().toLocaleTimeString('ar-SA');
      
      // تسجيل الحضور
      localStorage.setItem(`checkin_${participantId}`, today);
      localStorage.setItem(`checkin_time_${participantId}`, currentTime);
      
      setCheckedIn(true);
      setLoading(false);
      
      console.log(`تم تسجيل حضور ${participant.name} في ${currentTime}`);
    }, 1500);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 rtl flex items-center justify-center" dir="rtl">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">مشارك غير مسجل</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-red-800">تنبيه أمني</span>
              </div>
              <p className="text-red-700 text-sm">
                يمكن فقط للمشاركين المسجلين مسبقاً في الدورة تسجيل الحضور
              </p>
            </div>
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

  if (!participant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 rtl flex items-center justify-center" dir="rtl">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">جاري التحقق من البيانات...</p>
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
                <h1 className="text-2xl font-bold text-gray-800">الدورة التدريبية</h1>
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
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-3">
                    <User className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-green-800 text-lg">{participant.name}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">{participant.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-3">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 text-sm">{participant.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-medium">{new Date().toLocaleTimeString('ar-SA')}</span>
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
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-3">
                    <User className="w-5 h-5 text-orange-600" />
                    <span className="font-bold text-orange-800 text-lg">{participant.name}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700">{participant.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Mail className="w-4 h-4 text-orange-600" />
                    <span className="text-orange-700 text-sm">{participant.email}</span>
                  </div>
                  <p className="text-orange-700 mt-3 font-medium">لقد سجلت حضورك اليوم من قبل</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">مرحباً بك في الدورة!</h2>
                
                {/* Participant Info Card */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-3">
                    <User className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-purple-800 text-xl">{participant.name}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700">{participant.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-700 text-sm">{participant.email}</span>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center space-x-reverse space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800 text-sm">تم التحقق من التسجيل</span>
                  </div>
                  <p className="text-green-700 text-xs">أنت مسجل مسبقاً في الدورة ويمكنك تسجيل الحضور</p>
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
