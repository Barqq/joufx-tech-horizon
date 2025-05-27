
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, ArrowUp } from "lucide-react";

const Index = () => {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null);

  const programs = [
    {
      title: "معسكرات البرمجة",
      description: "معسكرات مكثفة لتعلم أحدث تقنيات البرمجة والتطوير",
      duration: "٣ أسابيع",
      level: "مبتدئ - متقدم",
      topics: ["React & JavaScript", "Python للذكاء الاصطناعي", "تطوير التطبيقات المحمولة", "الأمن السيبراني"]
    },
    {
      title: "دورات تقنية متخصصة",
      description: "دورات متنوعة في أحدث التقنيات والمجالات الرقمية",
      duration: "٦ أسابيع",
      level: "جميع المستويات",
      topics: ["تعلم الآلة", "تحليل البيانات", "تطوير الألعاب", "إنترنت الأشياء"]
    },
    {
      title: "مسابقات تقنية",
      description: "تحديات برمجية ومسابقات إبداعية لتطوير المهارات",
      duration: "مستمرة",
      level: "تنافسي",
      topics: ["هاكاثون", "تحديات الكود", "مسابقات الذكاء الاصطناعي", "مشاريع الابتكار"]
    }
  ];

  const leaders = [
    { name: "نور", role: "رئيس النادي", specialization: "الذكاء الاصطناعي" },
    { name: "نواف", role: "نائب الرئيس", specialization: "تطوير الويب" },
    { name: "عبير", role: "مديرة البرامج", specialization: "إدارة المشاريع التقنية" },
    { name: "عبدالعزيز", role: "مدير التطوير", specialization: "البرمجة المتقدمة" },
    { name: "عبدالله", role: "مدير المحتوى", specialization: "تصميم التجربة" },
    { name: "بهاء", role: "مدير التسويق", specialization: "التسويق الرقمي" },
    { name: "سعد", role: "مدير الفعاليات", specialization: "تنظيم المؤتمرات" },
    { name: "فيصل", role: "مدير التقنيات", specialization: "الأمن السيبراني" },
    { name: "شهاب", role: "مدير الابتكار", specialization: "ريادة الأعمال التقنية" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-lavender-50 to-purple-100" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-2xl px-4 py-2 rounded-lg">
                JOUFX
              </div>
              <span className="text-purple-800 font-medium">نادي التقنية - الجوف</span>
            </div>
            <div className="hidden md:flex space-x-6 space-x-reverse">
              <a href="#home" className="text-purple-700 hover:text-purple-900 transition-colors">الرئيسية</a>
              <a href="#about" className="text-purple-700 hover:text-purple-900 transition-colors">من نحن</a>
              <a href="#programs" className="text-purple-700 hover:text-purple-900 transition-colors">البرامج</a>
              <a href="#team" className="text-purple-700 hover:text-purple-900 transition-colors">الفريق</a>
              <a href="#community" className="text-purple-700 hover:text-purple-900 transition-colors">المجتمع</a>
              <a href="#contact" className="text-purple-700 hover:text-purple-900 transition-colors">تواصل معنا</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              نادي JOUFX التقني
            </h1>
            <p className="text-2xl text-purple-800 mb-4">
              💜✖ نفك شفرة المستقبل التقني في الجوف
            </p>
            <p className="text-lg text-purple-600 max-w-3xl mx-auto leading-relaxed">
              في عالم التقنية، فيه أسرار، تقنيات مخفية، ومستقبل ينتظر من يفهمه أول. 
              هنا دورنا، نفك الشفرة، نكشف الغموض، ونخليك دايمًا سابق غيرك بخطوة. 😎✨
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://chat.whatsapp.com/DlYIrt6nBO30tQgQYLiKyF', '_blank')}
            >
              🚀 انضم للمجتمع التقني
            </Button>
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg rounded-full"
              onClick={() => window.open('https://linktr.ee/JoufX', '_blank')}
            >
              تابعنا على وسائل التواصل
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/60 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-700">💡 معسكرات تقنية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600">معسكرات مكثفة لتعلم أحدث التقنيات والبرمجة</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-700">🏆 مسابقات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600">تحديات برمجية ومسابقات لتطوير المهارات</p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-700">🤝 مجتمع</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600">شبكة من المطورين والمبدعين في الجوف</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">من نحن</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-700 mb-6">رؤيتنا</h3>
              <p className="text-lg text-purple-600 mb-6 leading-relaxed">
                نسعى لإثراء المشهد التقني في منطقة الجوف من خلال توفير برامج تدريبية متطورة 
                ومسابقات تحفز الإبداع والابتكار في مجال التقنية.
              </p>
              <h3 className="text-3xl font-bold text-purple-700 mb-6">أهدافنا</h3>
              <ul className="space-y-3 text-purple-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full ml-3"></span>
                  تطوير المهارات التقنية للشباب في المنطقة
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full ml-3"></span>
                  خلق بيئة تعليمية محفزة للإبداع والابتكار
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full ml-3"></span>
                  ربط الطلاب بسوق العمل التقني
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full ml-3"></span>
                  دعم ريادة الأعمال التقنية في الجوف
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm">عضو نشط</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-500 to-purple-500 text-white text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">فعالية تقنية</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-600 to-pink-400 text-white text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-sm">معسكر تدريبي</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-600 to-purple-400 text-white text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm">مشروع مطور</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">برامجنا وفعالياتنا</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              راح نقدم دورات، معسكرات، وتجارب تقنية تخلّيك تعيش المستقبل من اليوم
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="cursor-pointer" onClick={() => setExpandedProgram(expandedProgram === index ? null : index)}>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-2xl text-purple-700 mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-purple-600 text-lg">{program.description}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Badge variant="outline" className="border-purple-300 text-purple-700">{program.duration}</Badge>
                      <Badge variant="outline" className="border-purple-300 text-purple-700">{program.level}</Badge>
                      {expandedProgram === index ? <ArrowUp className="text-purple-600" /> : <ArrowDown className="text-purple-600" />}
                    </div>
                  </div>
                </CardHeader>
                {expandedProgram === index && (
                  <CardContent className="animate-fade-in">
                    <Separator className="mb-4 bg-purple-200" />
                    <h4 className="text-lg font-semibold text-purple-700 mb-3">المواضيع المغطاة:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {program.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                          <span className="text-purple-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      سجل الآن
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">فريق القيادة</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              فريق من الخبراء والمتحمسين للتقنية يقودون رؤية JOUFX نحو المستقبل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {leader.name.charAt(0)}
                  </div>
                  <CardTitle className="text-xl text-purple-700">{leader.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    {leader.specialization}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">انضم لمجتمعنا التقني</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto mb-8">
              هدفنا إنك تتعلّم، تطبّق، وتكون مستعد لأي تحدي في عالم التقنية 🎯
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-700 mb-6">مجتمع نشط ومتفاعل</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/60 rounded-lg">
                  <span className="text-2xl ml-4">💬</span>
                  <div>
                    <h4 className="font-semibold text-purple-700">مناقشات تقنية يومية</h4>
                    <p className="text-purple-600">تبادل الخبرات والأفكار مع زملاء المهنة</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/60 rounded-lg">
                  <span className="text-2xl ml-4">🤝</span>
                  <div>
                    <h4 className="font-semibold text-purple-700">شراكات ومشاريع</h4>
                    <p className="text-purple-600">فرص للعمل على مشاريع حقيقية مع الفريق</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/60 rounded-lg">
                  <span className="text-2xl ml-4">📚</span>
                  <div>
                    <h4 className="font-semibold text-purple-700">موارد تعليمية</h4>
                    <p className="text-purple-600">مكتبة شاملة من الدورات والمواد التعليمية</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">🚀 انضم الآن عبر واتساب</h3>
                <p className="mb-6">كن جزءًا من أكبر مجتمع تقني في الجوف</p>
                <Button 
                  onClick={() => window.open('https://chat.whatsapp.com/DlYIrt6nBO30tQgQYLiKyF', '_blank')}
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  💜 انضم للمجموعة
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-6">تواصل معنا</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على أسئلتكم ومساعدتكم في رحلتكم التقنية
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-purple-200 p-8">
              <h3 className="text-2xl font-bold text-purple-700 mb-6">تواصل معنا مباشرة</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-xl ml-4">📧</span>
                  <div>
                    <h4 className="font-semibold text-purple-700">البريد الإلكتروني</h4>
                    <p className="text-purple-600">info@joufx.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl ml-4">📱</span>
                  <div>
                    <h4 className="font-semibold text-purple-700">واتساب</h4>
                    <p className="text-purple-600">انضم لمجموعتنا التقنية</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xl ml-4">🌐</span>
                  <div>
                    <h4 className="font-semibold text-purple-700">وسائل التواصل</h4>
                    <Button 
                      variant="outline" 
                      className="border-purple-300 text-purple-700 hover:bg-purple-50 mt-2"
                      onClick={() => window.open('https://linktr.ee/JoufX', '_blank')}
                    >
                      تابعنا على جميع المنصات
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">💜✖ نادي JOUFX</h3>
              <p className="text-lg mb-6 leading-relaxed">
                نفك شفرة المستقبل التقني في الجوف. انضم إلينا في رحلة الاكتشاف والإبداع 
                واكتشف أسرار التقنية مع مجتمع من المبدعين والمطورين.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="ml-3">🎯</span>
                  <span>هدفنا إنك تتعلّم وتطبّق</span>
                </div>
                <div className="flex items-center">
                  <span className="ml-3">🚀</span>
                  <span>نخليك مستعد لأي تحدي تقني</span>
                </div>
                <div className="flex items-center">
                  <span className="ml-3">💡</span>
                  <span>نكشف الغموض ونفك الشفرة</span>
                </div>
              </div>
              <Button 
                onClick={() => window.open('https://chat.whatsapp.com/DlYIrt6nBO30tQgQYLiKyF', '_blank')}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full mt-6 w-full"
              >
                🌟 كن جزءًا من المستقبل
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">JOUFX</div>
            <p className="text-purple-200 mb-6">نادي التقنية - الجوف | نفك شفرة المستقبل 💜✖</p>
            <div className="flex justify-center space-x-4 space-x-reverse mb-6">
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://linktr.ee/JoufX', '_blank')}
              >
                وسائل التواصل
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://chat.whatsapp.com/DlYIrt6nBO30tQgQYLiKyF', '_blank')}
              >
                انضم لواتساب
              </Button>
            </div>
            <Separator className="bg-white/20 mb-6" />
            <p className="text-purple-200 text-sm">
              © 2024 نادي JOUFX التقني. جميع الحقوق محفوظة | صنع بـ 💜 في الجوف
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
