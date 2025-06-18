
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Download, Plus, QrCode, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticipantForm } from "@/components/checkin/ParticipantForm";
import { AttendanceTable } from "@/components/checkin/AttendanceTable";
import { QRCodeGenerator } from "@/components/checkin/QRCodeGenerator";

const CheckinDashboard = () => {
  // قائمة المشاركين المسجلين مسبقاً
  const [participants] = useState([
    { id: 'p001', name: 'نوف عبدالله السالم', phone: '0507373494', email: 'noufabdullah48@gmail.com' },
    { id: 'p002', name: 'ريتاج خالد التميمي', phone: '0506601585', email: 'Retajaltamimi251@gmail.com' },
    { id: 'p003', name: 'تغريد ربيع الرويلي', phone: '0500176683', email: 'Taghreed.ra3@gmail.com' },
    { id: 'p004', name: 'طيف سلمان الراشد', phone: '0552797875', email: 'zxxz3922@gmail.com' },
    { id: 'p005', name: 'مجد عبدالرزاق الزيد', phone: '0590835409', email: 'majd3.alzaid@gmail.com' },
    { id: 'p006', name: 'وطن خلف السويلم', phone: '0537551482', email: 'watan.k2000@gmail.com' },
    { id: 'p007', name: 'منى ربيع الرويلي', phone: '0554154009', email: 'Monaalherkan@gmail.com' },
    { id: 'p008', name: 'رغد سلطان البيالي', phone: '0531424755', email: 'sraghad510@gmail.com' },
    { id: 'p009', name: 'هلا ربيع الرويلي', phone: '0508969825', email: 'Halaalhrkan13@gmail.com' },
    { id: 'p010', name: 'طارق علي عاتي', phone: '0504763395', email: 'tariqaati3@gmail.com' },
    { id: 'p011', name: 'ميسم محمد الحميد', phone: '0558154491', email: 'maalhomaid@outlook.sa' },
    { id: 'p012', name: 'عيسى رياض الحسن', phone: '0555234896', email: 'engessahassan@gmail.com' },
    { id: 'p013', name: 'اعتدال محمد الرويلي', phone: '0505788317', email: 'atedal4444@gmail.com' },
    { id: 'p014', name: 'ريناد مبارك العنزي', phone: '0508750899', email: 'iixllax77@gmail.com' },
    { id: 'p015', name: 'فخر خليل السرحاني', phone: '0564123105', email: 'fakaralserhanya@gmail.com' },
    { id: 'p016', name: 'اسامه حمد العتيبي', phone: '0538740669', email: 'osamz669@gmail.com' },
    { id: 'p017', name: 'دُعاء زبن البراهيم', phone: '0546361174', email: 'duaalibrahim00@gmail.com' },
    { id: 'p018', name: 'عبد الرحمن عبد المحسن السلطان', phone: '0539190082', email: 'abdulrahmanalsultan909@gmail.com' },
    { id: 'p019', name: 'نايف بن ناصر الكبيدان', phone: '0547223425', email: 'naiif882@gmail.con' },
    { id: 'p020', name: 'ايمان زكريا السرحاني', phone: '0553017617', email: 'aa1425aa00@gmail.com' },
    { id: 'p021', name: 'مدى علي الرويلي', phone: '0558968100', email: 'm3ada.20@icloud.com' },
    { id: 'p022', name: 'ولف جايز الكويكبي', phone: '0553129819', email: 'wolf.aljok@gmail.com' },
    { id: 'p023', name: 'شهد فهد الصليع', phone: '0509399887', email: 'sahadalsulyyi@gmail.com' },
    { id: 'p024', name: 'تركي فهيد الزارع', phone: '0594609593', email: 'ttt60257@gmail.com' },
    { id: 'p025', name: 'مها تركي العتيبي', phone: '0502183417', email: 'mahaaturkii@gmail.com' },
    { id: 'p026', name: 'علي محمد الحربي', phone: '0564745274', email: 'Alharbiali242@gmail.com' },
    { id: 'p027', name: 'راما حامد العياف', phone: '557755418', email: 'alayyaframa@gmail.com' },
    { id: 'p028', name: 'ميعاد سلطان الرويلي', phone: '533352871', email: 'meadsultan762@gmail.com' },
    { id: 'p029', name: 'سماح حامس الرويلي', phone: '0553709678', email: 'samh7041@gmail.com' },
    { id: 'p030', name: 'منار جايز الرويلي', phone: '0537048542', email: 'pride_44@hotmail.com' },
    { id: 'p031', name: 'شموخ عبدالهادي', phone: '0540442940', email: 'shmokh94shmokh@icloud.com' },
    { id: 'p032', name: 'منصور خلف العنزي', phone: '0501281882', email: 'mansor198198@icloud.com' },
    { id: 'p033', name: 'رزان قاسم الرويلي', phone: '0501704251', email: 'Razanq75113@gmail.com' },
    { id: 'p034', name: 'شهد فهد الصليع', phone: '0509399887', email: 'shad279a@gmail.com' },
    { id: 'p035', name: 'افنان خلف الرويلي', phone: '0558902948', email: 'afnankhlf18@gmail.com' },
    { id: 'p036', name: 'تذكار الرويلي', phone: '500465011', email: 'alsalem6126@gmail.com' },
    { id: 'p037', name: 'فلق محمد الوردي', phone: '0550951831', email: 'falaqalwardy@gmail.com' },
    { id: 'p038', name: 'غاده طارق العايدي', phone: '0553904333', email: 'ghada.alaidi@hotmail.com' },
    { id: 'p039', name: 'هلا محمد الشايع', phone: '0543825008', email: 'hala-581@hotmail.com' },
    { id: 'p040', name: 'المثنى سليمان الهذيل', phone: '0559078115', email: 'mothana70788@icloud.com' },
    { id: 'p041', name: 'أثير فيصل البديوي', phone: '0505233567', email: 'athyraa91@gmail.com' },
    { id: 'p042', name: 'Taraf Fahad', phone: '0539390155', email: 'Tarafalbarak@gmail.com' },
    { id: 'p043', name: 'حور صالح المريح', phone: '0506601201', email: 'hours4leh@gmail.com' },
    { id: 'p044', name: 'ساره احمد الطالب', phone: '0508766864', email: 'sarah98776@gmail.com' },
    { id: 'p045', name: 'طيف زياد الخالدي', phone: '0502743031', email: 'teaf11alkhaldy@gmail.com' },
    { id: 'p046', name: 'مريم بنت عادل الضميري', phone: '0536444984', email: 'maryam3.adel5@gmail.com' },
    { id: 'p047', name: 'جنان عبدالله الرويلي', phone: '0594280566', email: 'jinan11444@icloud.com' },
    { id: 'p048', name: 'فهد فرحان الشمري', phone: '0556137530', email: 'fhdalsmry1@gmail.com' },
    { id: 'p049', name: 'سديم عبدالله الرويلي', phone: '0581806789', email: 'sss142777@icloud.com' },
    { id: 'p050', name: 'عبدالرحمن عبدالله الرويلي', phone: '0581806789', email: 'sss142777@icloud.com' },
    { id: 'p051', name: 'عبدالعزيز عبدالله الرويلي', phone: '0581806789', email: 'sss142777@icloud.com' },
    { id: 'p052', name: 'غزلان مقبل الخالدي', phone: '0504802590', email: 'ghaldhwihii91@gmail.com' },
    { id: 'p053', name: 'شموخ باجد العتيبي', phone: '0532764916', email: 'shmokotb99@gmail.com' },
    { id: 'p054', name: 'جوف حمدان النعمان', phone: '0507325838', email: 'joufhamdan22@gmail.com' },
    { id: 'p055', name: 'عبدالملك محمد عصيد الشراري', phone: '0557652251', email: 'abadi_2018@outlook.com' },
    { id: 'p056', name: 'شهد بشير الرويلي', phone: '0533547300', email: 'shahadbbsh@gmail.com' },
    { id: 'p057', name: 'وفاء محمد الشمري', phone: '0532705843', email: 'wafa11alshammari@gmail.com' },
    { id: 'p058', name: 'يزن فايز الرويلي', phone: '0554383663', email: 'yazenalurwili@gmail.com' },
    { id: 'p059', name: 'ورود علي الوردي', phone: '0501934969', email: 'wr20113ali@gmail.com' },
    { id: 'p060', name: 'محمد فلاج الرويلي', phone: '0550381788', email: 'mohamedflajj@gmail.com' },
    { id: 'p061', name: 'فاطمه فلاح الفالح', phone: '0580762975', email: 'Fatimah.alfaleh12@gmail.com' },
    { id: 'p062', name: 'فاطمه مقبل السرحاني', phone: '0556218696', email: 'alsrhanyfatmh042@gamil.com' },
    { id: 'p063', name: 'Akram fawaz alshammry', phone: '0507830249', email: 'afm5277@gmail.com' },
    { id: 'p064', name: 'صافيه رافع الرحيم', phone: '0534878336', email: 'Safeah1424@gmail.con' },
    { id: 'p065', name: 'محمد خليف البراهيم', phone: '0535249539', email: 'albeahymm444@gmail.com' },
    { id: 'p066', name: 'شهد شايش الرويلي', phone: '0500354049', email: 'v3koe1@gmail.com' },
    { id: 'p067', name: 'مهناء صالح التميمي', phone: '0592040932', email: 'mhnasalh52@gmail.com' },
    { id: 'p068', name: 'فلك محمد السرحاني', phone: '0551181660', email: 'falak.alserhani@icloud.com' },
    { id: 'p069', name: 'طيف مقبل السرحاني', phone: '0595233149', email: 'teeefmok1333@gmail.com' },
    { id: 'p070', name: 'سيسبان سعود الغالب', phone: '0500840956', email: 'sesabanaltamimi1@gmail.com' },
    { id: 'p071', name: 'ديم خالد الرويلي', phone: '0542513727', email: 'deem55319@gmail.com' },
    { id: 'p072', name: 'نوفه سويلم اللحاوي', phone: '0557555394', email: 'Vonh57@gmail.com' },
    { id: 'p073', name: 'رفيف ماضي المنديل', phone: '0534541532', email: 'rafif2399@gmail.com' },
    { id: 'p074', name: 'سطام عبدالله الرويلي', phone: '558626961', email: 'aassa2127@gmail.com' },
    { id: 'p075', name: 'لينا زيد الجباب', phone: '0538874945', email: 'lenaaljubab@hotmail.com' },
    { id: 'p076', name: 'سلطان ساير الرويلي', phone: '0503438489', email: 'sultanalrwyly18@gmail.com' },
    { id: 'p077', name: 'خديجة مشعل الرويلي', phone: '0504129161', email: 'khad1434ijah@gmail.com' },
    { id: 'p078', name: 'سِوار أمجد النصيري', phone: '0500893454', email: 'sewar2.9.2006@gmail.com' }
  ]);

  const [attendanceRecords, setAttendanceRecords] = useState([
    { participantId: 'p001', name: 'نوف عبدالله السالم', date: '2024-06-18', time: '09:30' },
    { participantId: 'p010', name: 'طارق علي عاتي', date: '2024-06-18', time: '09:45' }
  ]);

  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParticipants = participants.filter(participant =>
    participant.name.includes(searchTerm) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    participant.phone.includes(searchTerm)
  );

  const exportReport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "الاسم,الهاتف,الإيميل,الحالة,التاريخ,الوقت\n"
      + participants.map(p => {
          const attendance = attendanceRecords.find(a => a.participantId === p.id);
          return `${p.name},${p.phone},${p.email},${attendance ? 'حاضر' : 'غائب'},${attendance?.date || ''},${attendance?.time || ''}`;
        }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `تقرير_الحضور_${new Date().toLocaleDateString('ar-SA')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 rtl" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-reverse space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ✖
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">نظام تسجيل الحضور - الدورة التدريبية</h1>
                <p className="text-sm text-purple-600">إدارة حضور المشاركين</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المشاركين</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{participants.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الحضور اليوم</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceRecords.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">نسبة الحضور</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {participants.length > 0 ? Math.round((attendanceRecords.length / participants.length) * 100) : 0}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المتبقي</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{participants.length - attendanceRecords.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={() => setShowQRGenerator(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
          >
            <QrCode className="w-4 h-4 ml-2" />
            إنشاء رموز QR للمشاركين
          </Button>
          
          <Button 
            onClick={exportReport}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            <Download className="w-4 h-4 ml-2" />
            تصدير تقرير الحضور
          </Button>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>البحث في المشاركين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Search className="w-5 h-5 text-gray-400 mt-2.5" />
              <Input
                placeholder="البحث بالاسم، الإيميل، أو رقم الهاتف..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                dir="rtl"
                className="flex-1"
              />
            </div>
          </CardContent>
        </Card>

        {/* Participants Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>قائمة المشاركين المسجلين ({filteredParticipants.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right py-2">#</th>
                    <th className="text-right py-2">الاسم</th>
                    <th className="text-right py-2">الهاتف</th>
                    <th className="text-right py-2">البريد الإلكتروني</th>
                    <th className="text-right py-2">حالة الحضور</th>
                    <th className="text-right py-2">رابط التسجيل</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParticipants.map((participant, index) => {
                    const hasAttended = attendanceRecords.some(record => record.participantId === participant.id);
                    return (
                      <tr key={participant.id} className="border-b">
                        <td className="py-2">{index + 1}</td>
                        <td className="py-2 font-medium">{participant.name}</td>
                        <td className="py-2">{participant.phone}</td>
                        <td className="py-2">{participant.email}</td>
                        <td className="py-2">
                          {hasAttended ? (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              حاضر
                            </span>
                          ) : (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                              لم يحضر
                            </span>
                          )}
                        </td>
                        <td className="py-2">
                          <Link to={`/checkin/${participant.id}`} target="_blank">
                            <Button size="sm" variant="outline">
                              عرض الصفحة
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Records */}
        <AttendanceTable records={attendanceRecords} />
      </main>

      {/* QR Generator Modal */}
      {showQRGenerator && (
        <QRCodeGenerator 
          participants={participants}
          onClose={() => setShowQRGenerator(false)}
        />
      )}
    </div>
  );
};

export default CheckinDashboard;
