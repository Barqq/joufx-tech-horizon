
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Download, Plus, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { ParticipantForm } from "@/components/checkin/ParticipantForm";
import { AttendanceTable } from "@/components/checkin/AttendanceTable";
import { QRCodeGenerator } from "@/components/checkin/QRCodeGenerator";

const CheckinDashboard = () => {
  const [participants, setParticipants] = useState([
    { id: 'ahmad123', name: 'أحمد محمد', email: 'ahmad@example.com' },
    { id: 'sara456', name: 'سارة أحمد', email: 'sara@example.com' },
    { id: 'omar789', name: 'عمر خالد', email: 'omar@example.com' }
  ]);

  const [attendanceRecords] = useState([
    { participantId: 'ahmad123', name: 'أحمد محمد', date: '2024-06-18', time: '09:30' },
    { participantId: 'sara456', name: 'سارة أحمد', date: '2024-06-18', time: '09:45' }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showQRGenerator, setShowQRGenerator] = useState(false);

  const addParticipant = (participant: any) => {
    const newParticipant = {
      ...participant,
      id: participant.name.replace(/\s+/g, '').toLowerCase() + Math.random().toString(36).substr(2, 3)
    };
    setParticipants([...participants, newParticipant]);
    setShowAddForm(false);
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
                <h1 className="text-2xl font-bold text-gray-800">JoufX Check-in System</h1>
                <p className="text-sm text-purple-600">نظام تسجيل الحضور</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
          >
            <Plus className="w-4 h-4 ml-2" />
            إضافة مشارك جديد
          </Button>
          
          <Button 
            onClick={() => setShowQRGenerator(true)}
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            <QrCode className="w-4 h-4 ml-2" />
            إنشاء رموز QR
          </Button>
          
          <Button 
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            <Download className="w-4 h-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>

        {/* Participants Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>قائمة المشاركين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-right py-2">الاسم</th>
                    <th className="text-right py-2">البريد الإلكتروني</th>
                    <th className="text-right py-2">رابط تسجيل الحضور</th>
                    <th className="text-right py-2">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant) => (
                    <tr key={participant.id} className="border-b">
                      <td className="py-2">{participant.name}</td>
                      <td className="py-2">{participant.email}</td>
                      <td className="py-2">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                          /checkin/{participant.id}
                        </code>
                      </td>
                      <td className="py-2">
                        <Link to={`/checkin/${participant.id}`}>
                          <Button size="sm" variant="outline">
                            عرض الصفحة
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Records */}
        <AttendanceTable records={attendanceRecords} />
      </main>

      {/* Modals */}
      {showAddForm && (
        <ParticipantForm 
          onSubmit={addParticipant}
          onCancel={() => setShowAddForm(false)}
        />
      )}

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
