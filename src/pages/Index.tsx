import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/30 animate-pulse-glow"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-semibold">Умные технологии будущего</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            ЭКО-КУПОЛ
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Модульные умные теплицы-куполы на крышах ТЦ и бизнес-центров
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center pt-8">
            <Button size="lg" className="shadow-neon-cyan text-lg px-8 py-6">
              <Icon name="Rocket" className="mr-2" />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8 py-6">
              <Icon name="PlayCircle" className="mr-2" />
              Смотреть презентацию
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">2.36М₽</div>
              <div className="text-sm text-muted-foreground mt-2">Финансирование</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">2027</div>
              <div className="text-sm text-muted-foreground mt-2">Запуск</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">105м²</div>
              <div className="text-sm text-muted-foreground mt-2">Площадь купола</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Проблема и Решение</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/30 hover:shadow-glass transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-destructive/20 rounded-xl">
                  <Icon name="AlertTriangle" size={32} className="text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Проблема города</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Нехватка зеленых рекреационных зон</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Загазованность и стрессовая среда</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Недоиспользуемые городские пространства (крыши)</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 hover:shadow-neon-cyan transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Наше решение</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Сеть модульных умных теплиц-куполов на крышах</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Технологии умного растениеводства и комфортные пространства</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Управление через мобильное приложение</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Essence */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Сущность проекта</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">Что такое ЭКО-КУПОЛ?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-glass animate-float">
              <img 
                src="https://cdn.poehali.dev/projects/204820bd-569a-4bc4-a55e-9a6bb2b46cea/files/0fa5b2aa-2c54-478a-9aa1-6b3739217e80.jpg"
                alt="ЭКО-КУПОЛ"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Icon name="Thermometer" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Климат-контроль</h4>
                    <p className="text-muted-foreground">Автоматическая регулировка температуры и влажности</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Icon name="Droplets" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Автополив</h4>
                    <p className="text-muted-foreground">Интеллектуальная система орошения растений</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Icon name="Lightbulb" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Фито-освещение</h4>
                    <p className="text-muted-foreground">Оптимизированное LED-освещение для роста</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg flex-shrink-0">
                    <Icon name="Smartphone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Мобильное приложение</h4>
                    <p className="text-muted-foreground">Управление и мониторинг в реальном времени</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <div className="flex items-center gap-4">
              <Icon name="Target" size={48} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Наша цель</h3>
                <p className="text-lg text-muted-foreground">Повышение качества жизни горожан через создание доступных "зеленых" зон с применением умных технологий</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Финансовые показатели</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 text-center hover:scale-105 transition-transform">
              <Icon name="Coins" size={48} className="text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">2.36М₽</div>
              <div className="text-muted-foreground mb-4">Общее финансирование</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Грант:</span>
                  <span className="font-semibold">1.46М₽ (61.86%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Инвестор:</span>
                  <span className="font-semibold">0.9М₽ (38.14%)</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30 text-center hover:scale-105 transition-transform">
              <Icon name="TrendingUp" size={48} className="text-secondary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">~22%</div>
              <div className="text-muted-foreground mb-4">Рентабельность к 2029</div>
              <div className="space-y-2 text-sm">
                <div>Выручка 2027: 1.1М₽</div>
                <div>Чистая прибыль: 310К₽</div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 text-center hover:scale-105 transition-transform">
              <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">Q3 2027</div>
              <div className="text-muted-foreground mb-4">Окупаемость</div>
              <div className="space-y-2 text-sm">
                <div>Запуск: Июль 2026</div>
                <div>Открытие: Январь 2027</div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Icon name="PieChart" className="text-primary" />
              Основные капитальные затраты
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Модульная конструкция</span>
                  <span className="font-bold text-primary">322К₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Обустройство зоны отдыха</span>
                  <span className="font-bold text-primary">430К₽</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Системы автополива и освещения</span>
                  <span className="font-bold text-secondary">180К₽</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <span>Монтажные работы</span>
                  <span className="font-bold text-secondary">130К₽</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Источники дохода</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Star" className="text-primary" />
                Основные
              </h3>
              <div className="space-y-4">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-neon-cyan transition-all">
                  <div className="flex items-start gap-4">
                    <Icon name="Users" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Платные мероприятия</h4>
                      <p className="text-muted-foreground text-sm">Йога, мастер-классы, фотосессии, корпоративы</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-neon-cyan transition-all">
                  <div className="flex items-start gap-4">
                    <Icon name="Building" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Партнерская программа</h4>
                      <p className="text-muted-foreground text-sm">"Зеленые офисы" для бизнес-центров по подписке</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Plus" className="text-secondary" />
                Дополнительные
              </h3>
              <div className="space-y-4">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:shadow-neon-purple transition-all">
                  <div className="flex items-start gap-4">
                    <Icon name="Key" size={32} className="text-secondary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Аренда пространства</h4>
                      <p className="text-muted-foreground text-sm">Почасовая аренда для частных мероприятий</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:shadow-neon-purple transition-all">
                  <div className="flex items-start gap-4">
                    <Icon name="Award" size={32} className="text-secondary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Городские программы</h4>
                      <p className="text-muted-foreground text-sm">Участие в программах озеленения и грантах</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">План реализации</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">Январь 2026 — Январь 2027</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="flex items-center justify-between gap-8">
                  <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:shadow-neon-cyan transition-all">
                    <div className="text-right">
                      <div className="text-sm text-primary font-semibold mb-2">Январь-Март 2026</div>
                      <h4 className="font-bold text-lg mb-2">Подготовка</h4>
                      <p className="text-muted-foreground text-sm">Договора аренды, разрешения, проектная документация</p>
                    </div>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-neon-cyan"></div>
                  <div className="flex-1"></div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-background shadow-neon-purple"></div>
                  <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-secondary/30 hover:shadow-neon-purple transition-all">
                    <div className="text-left">
                      <div className="text-sm text-secondary font-semibold mb-2">Апрель-Июнь 2026</div>
                      <h4 className="font-bold text-lg mb-2">Строительство</h4>
                      <p className="text-muted-foreground text-sm">Монтаж конструкций и систем</p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-8">
                  <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:shadow-neon-cyan transition-all">
                    <div className="text-right">
                      <div className="text-sm text-primary font-semibold mb-2">Июль-Декабрь 2026</div>
                      <h4 className="font-bold text-lg mb-2">Обустройство</h4>
                      <p className="text-muted-foreground text-sm">Закупка растений, разработка приложения</p>
                    </div>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-neon-cyan"></div>
                  <div className="flex-1"></div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-neon-cyan animate-pulse"></div>
                  <Card className="flex-1 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 hover:shadow-glass transition-all">
                    <div className="text-left">
                      <div className="text-sm text-primary font-semibold mb-2">Январь 2027</div>
                      <h4 className="font-bold text-xl mb-2">🎉 Торжественное открытие</h4>
                      <p className="text-muted-foreground text-sm">Запуск первого ЭКО-КУПОЛА</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SWOT & National Projects */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">Национальные проекты</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:shadow-neon-cyan transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <Icon name="Leaf" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Экологическое благополучие</h4>
                      <p className="text-muted-foreground">Создание зеленых зон и улучшение экологии города</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/30 hover:shadow-neon-purple transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/20 rounded-lg flex-shrink-0">
                      <Icon name="Building2" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Инфраструктура для жизни</h4>
                      <p className="text-muted-foreground">Развитие городской инфраструктуры и комфортной среды</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">SWOT Анализ</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-primary/10 border-primary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="TrendingUp" className="text-primary" size={20} />
                    <h5 className="font-bold">Сила</h5>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Уникальность</li>
                    <li>• Автоматизация</li>
                    <li>• Модульность</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-secondary/10 border-secondary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Zap" className="text-secondary" size={20} />
                    <h5 className="font-bold">Возможности</h5>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Рост спроса</li>
                    <li>• Тиражирование</li>
                    <li>• Мероприятия</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-muted/30 border-muted">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="AlertCircle" className="text-muted-foreground" size={20} />
                    <h5 className="font-bold">Слабости</h5>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Стартовые затраты</li>
                    <li>• Сезонность</li>
                  </ul>
                </Card>

                <Card className="p-4 bg-destructive/10 border-destructive/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="AlertTriangle" className="text-destructive" size={20} />
                    <h5 className="font-bold">Угрозы</h5>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Законодательство</li>
                    <li>• Конкуренция</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prospects */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Перспективы</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/20 to-background border-primary/30 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🚀</div>
              <div className="text-lg font-bold mb-2">01.07.2026</div>
              <p className="text-muted-foreground">Запуск пилотной теплицы</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/20 to-background border-secondary/30 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">👥</div>
              <div className="text-lg font-bold mb-2">01.01.2027</div>
              <p className="text-muted-foreground">&gt;500 посетителей в месяц</p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">📈</div>
              <div className="text-lg font-bold mb-2">2029 год</div>
              <p className="text-muted-foreground">Масштабирование на вторую теплицу</p>
            </Card>
          </div>

          <Card className="p-12 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-primary/30 shadow-glass">
            <Icon name="Sparkles" size={64} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">ЭКО-КУПОЛ — это больше, чем бизнес</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Это вклад в экологическое и социальное благополучие нашего города, 
              создание новых, современных точек притяжения для горожан
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">ЭКО-КУПОЛ</h3>
              <p className="text-muted-foreground">Умные технологии будущего</p>
            </div>
            
            <Button size="lg" className="shadow-neon-cyan">
              <Icon name="Mail" className="mr-2" />
              Связаться с нами
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
            <p>© 2026 ЭКО-КУПОЛ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
