import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Маркетинговая стратегия",
      description: "Анализ рынка, определение ЦА, воронки продаж",
      icon: "Target",
      features: [
        "Анализ рынка и конкурентов",
        "Определение целевой аудитории",
        "Формирование воронки продаж",
      ],
    },
    {
      title: "Брендирование",
      description: "Нейминг, логотип, фирменный стиль",
      icon: "Palette",
      features: [
        "Нейминг и легенда",
        "Разработка логотипа",
        "Брендбук и гайдлайн",
      ],
    },
    {
      title: "Digital-маркетинг",
      description: "Сайты, SEO, UX/UI дизайн",
      icon: "Globe",
      features: ["Сайт и SEO", "UX/UI дизайн", "Прототипирование в Figma"],
    },
    {
      title: "SMM и контент",
      description: "Контент-план, продакшн, ведение соцсетей",
      icon: "MessageCircle",
      features: ["Контент-план", "Продакшн (фото, видео)", "Ведение соцсетей"],
    },
    {
      title: "Реклама",
      description: "Таргетинг, контекст, PR-стратегия",
      icon: "Megaphone",
      features: ["Таргетированная реклама", "Яндекс.Директ", "PR-стратегия"],
    },
    {
      title: "CRM-системы",
      description: "Настройка, интеграция, автоматизация",
      icon: "Database",
      features: [
        "Настройка CRM",
        "Интеграция с инструментами",
        "Автоматизация процессов",
      ],
    },
  ];

  const results = [
    { number: "12,516", text: "заявок для интернет-магазина «Русдверь»" },
    { number: "215%", text: "увеличение продаж за 2 месяца" },
    { number: "268%", text: "рост выручки за 2 месяца" },
    { number: "350%", text: "увеличение заявок за 2023 год" },
    { number: "2.7x", text: "снижение стоимости лидов" },
    { number: "5-20%", text: "ежемесячный рост лидов" },
  ];

  const team = [
    {
      name: "Андрей Юркевич",
      role: "Основатель Domo Group",
      experience: "32 года в бизнесе",
    },
    {
      name: "Артем Щербинин",
      role: "Управляющий директор",
      experience: "12 лет в бизнесе",
    },
    {
      name: "Александр Юркевич",
      role: "Директор по развитию",
      experience: "8 лет в маркетинге",
    },
    {
      name: "Андрей Мудрый",
      role: "Эксперт по продажам",
      experience: "37 лет в продажах",
    },
    {
      name: "Константин Солонович",
      role: "Бизнес-аналитик",
      experience: "Внедрение Bitrix24",
    },
    {
      name: "Владислав Юркевич",
      role: "Финансовый менеджер",
      experience: "Диджитал-маркетолог",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-24 border-b border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 tracking-wide">
            YURKEVICH-MEDIA
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональное маркетинговое агентство полного цикла для малого и
            среднего бизнеса
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Badge
              variant="secondary"
              className="text-lg py-2 px-4 bg-white text-slate-800"
            >
              Москва
            </Badge>
            <Badge
              variant="secondary"
              className="text-lg py-2 px-4 bg-white text-slate-800"
            >
              Санкт-Петербург
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-sm backdrop-blur-sm border border-gold-400/30">
              <Icon
                name="TrendingUp"
                size={48}
                className="mx-auto mb-4 text-gold-400"
              />
              <h3 className="text-xl font-semibold mb-2">Маркетинг</h3>
              <p className="text-slate-300">Привлечь клиентов</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-sm backdrop-blur-sm border border-gold-400/30">
              <Icon
                name="ShoppingCart"
                size={48}
                className="mx-auto mb-4 text-gold-400"
              />
              <h3 className="text-xl font-semibold mb-2">Продажи</h3>
              <p className="text-slate-300">Перевести их в покупателей</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-sm backdrop-blur-sm border border-gold-400/30">
              <Icon
                name="Users"
                size={48}
                className="mx-auto mb-4 text-gold-400"
              />
              <h3 className="text-xl font-semibold mb-2">CRM</h3>
              <p className="text-slate-300">Удержать и развить отношения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow duration-300 border-slate-200"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gold-50 rounded-sm border border-gold-200">
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-gold-600"
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-gold-600 mt-0.5 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Наши результаты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow duration-300 border-slate-200"
              >
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-gold-600 mb-4">
                    {result.number}
                  </div>
                  <p className="text-slate-600">{result.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow duration-300 border-slate-200"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-gold-600 to-gold-700 rounded-sm mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-slate-600">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Свяжитесь с нами
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Готовы к сотрудничеству?
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Мы работаем с брендами, которые хотят быть на виду и
                  выделяться на фоне конкурентов. Свяжитесь с нами для
                  обсуждения вашего проекта.
                </p>
                <Button
                  size="lg"
                  className="bg-gold-600 hover:bg-gold-700 border border-gold-500 rounded-sm text-white"
                >
                  Получить консультацию
                </Button>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Icon name="Globe" size={20} className="text-gold-400" />
                  <span>yurkevich-media.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-gold-400" />
                  <span>info@yurkevich-media</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-gold-400" />
                  <span>+7(964) 439-43-69</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-gold-400"
                  />
                  <span>@yurkevich_media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
