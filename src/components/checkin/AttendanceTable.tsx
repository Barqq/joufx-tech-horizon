
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AttendanceRecord {
  participantId: string;
  name: string;
  date: string;
  time: string;
}

interface AttendanceTableProps {
  records: AttendanceRecord[];
}

export const AttendanceTable: React.FC<AttendanceTableProps> = ({ records }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>سجل الحضور</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right py-2">اسم المشارك</th>
                <th className="text-right py-2">التاريخ</th>
                <th className="text-right py-2">الوقت</th>
                <th className="text-right py-2">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {records.length > 0 ? (
                records.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{record.name}</td>
                    <td className="py-2">{record.date}</td>
                    <td className="py-2">{record.time}</td>
                    <td className="py-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        حاضر
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-500">
                    لا توجد سجلات حضور اليوم
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
