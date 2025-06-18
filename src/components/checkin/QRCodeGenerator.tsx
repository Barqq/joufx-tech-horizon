
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Download, ExternalLink } from "lucide-react";

interface Participant {
  id: string;
  name: string;
  email: string;
}

interface QRCodeGeneratorProps {
  participants: Participant[];
  onClose: () => void;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ participants, onClose }) => {
  const generateQRCodeUrl = (participantId: string) => {
    const checkinUrl = `${window.location.origin}/checkin/${participantId}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(checkinUrl)}`;
  };

  const downloadQRCode = (participantId: string, participantName: string) => {
    const qrUrl = generateQRCodeUrl(participantId);
    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = `qr-${participantName}-${participantId}.png`;
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>رموز QR للمشاركين</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map((participant) => (
              <div key={participant.id} className="border rounded-lg p-4 text-center">
                <h3 className="font-semibold mb-2">{participant.name}</h3>
                <div className="mb-4">
                  <img
                    src={generateQRCodeUrl(participant.id)}
                    alt={`QR Code for ${participant.name}`}
                    className="w-32 h-32 mx-auto border"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  /checkin/{participant.id}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => downloadQRCode(participant.id, participant.name)}
                    className="flex-1"
                  >
                    <Download className="w-4 h-4 ml-1" />
                    تحميل
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(`/checkin/${participant.id}`, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 ml-1" />
                    عرض
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
