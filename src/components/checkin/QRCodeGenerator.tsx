
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Download, ExternalLink, Search } from "lucide-react";

interface Participant {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface QRCodeGeneratorProps {
  participants: Participant[];
  onClose: () => void;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ participants, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParticipants = participants.filter(participant =>
    participant.name.includes(searchTerm) ||
    participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (participant.phone && participant.phone.includes(searchTerm))
  );

  const generateQRCodeUrl = (participantId: string) => {
    const checkinUrl = `${window.location.origin}/checkin/${participantId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(checkinUrl)}`;
  };

  const downloadQRCode = (participantId: string, participantName: string) => {
    const qrUrl = generateQRCodeUrl(participantId);
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `QR_${participantName.replace(/\s+/g, '_')}_${participantId}.png`;
    link.click();
  };

  const downloadAllQRCodes = () => {
    participants.forEach((participant, index) => {
      setTimeout(() => {
        downloadQRCode(participant.id, participant.name);
      }, index * 500); // تأخير 500ms بين كل تحميل
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" dir="rtl">
      <Card className="w-full max-w-7xl max-h-[95vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-white z-10 border-b">
          <div>
            <CardTitle className="text-2xl">رموز QR للمشاركين ({filteredParticipants.length})</CardTitle>
            <p className="text-sm text-gray-600 mt-1">يمكنك تحميل الرموز أو طباعتها للمشاركين</p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={downloadAllQRCodes}
              className="bg-green-600 hover:bg-green-700"
            >
              <Download className="w-4 h-4 ml-1" />
              تحميل الكل
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          {/* Search */}
          <div className="mb-6">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredParticipants.map((participant) => (
              <div key={participant.id} className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2 text-lg text-purple-800">{participant.name}</h3>
                
                {participant.phone && (
                  <p className="text-sm text-gray-600 mb-1">{participant.phone}</p>
                )}
                <p className="text-xs text-gray-500 mb-4">{participant.email}</p>
                
                <div className="mb-4">
                  <img
                    src={generateQRCodeUrl(participant.id)}
                    alt={`QR Code for ${participant.name}`}
                    className="w-40 h-40 mx-auto border-2 border-purple-200 rounded-lg"
                  />
                </div>
                
                <p className="text-xs text-gray-400 mb-4 font-mono break-all">
                  ID: {participant.id}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => downloadQRCode(participant.id, participant.name)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <Download className="w-3 h-3 ml-1" />
                    تحميل
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`/checkin/${participant.id}`, '_blank')}
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    <ExternalLink className="w-3 h-3 ml-1" />
                    عرض
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredParticipants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">لم يتم العثور على مشاركين مطابقين للبحث</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
