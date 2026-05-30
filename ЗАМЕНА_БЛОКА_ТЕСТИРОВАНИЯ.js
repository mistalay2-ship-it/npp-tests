/* ==========================================================
   РАЗДЕЛ «ТЕСТИРОВАНИЕ» — Модуль 10, Анатомия голоса
   Данные хранятся в Supabase (таблица quiz_results)
   ========================================================== */

var NM10_MAX_ATT = 3;
var NM10_PASS    = 36;
var NM10_TEST_ID = 'mod10_anatomy_v1';

var NM10_TOP = ['8.1 Гортань','8.1 Гортань','8.1 Гортань','8.1 Гортань','8.1 Гортань','8.1 Гортань','8.1 Гортань','8.1 Гортань','8.2 Мышцы','8.2 Мышцы','8.2 Мышцы','8.2 Мышцы','8.2 Мышцы','8.2 Мышцы','8.2 Мышцы','8.2 Мышцы','8.3 Складки','8.3 Складки','8.3 Складки','8.3 Складки','8.3 Складки','8.3 Складки','8.3 Складки','8.3 Складки','8.4 Фонация','8.4 Фонация','8.4 Фонация','8.4 Фонация','8.4 Фонация','8.4 Фонация','8.4 Фонация','8.4 Фонация','8.5 Приёмы','8.5 Приёмы','8.5 Приёмы','8.5 Приёмы','8.5 Приёмы','8.5 Приёмы','8.5 Приёмы','8.5 Приёмы'];

var NM10_QS = [
{q:'На каком уровне шейного позвонка проходит нижняя граница гортани?',o:['На уровне второго шейного позвонка','На уровне четвёртого шейного позвонка','На уровне шестого шейного позвонка','На уровне первого грудного позвонка'],a:2,e:'Нижняя граница гортани — уровень шестого шейного позвонка, в месте перехода в трахею.'},
{q:'Сколько функций одновременно выполняет гортань?',o:['Одну','Две','Три','Четыре'],a:2,e:'Гортань выполняет три функции: дыхательную, голосообразующую и защитную.'},
{q:'Какой хрящ является базовым основанием скелета гортани?',o:['Щитовидный','Черпаловидный','Перстневидный','Надгортанник'],a:2,e:'Перстневидный хрящ имеет форму перстня и является базовым хрящом скелета гортани.'},
{q:'Как называется выступ гортани на передней поверхности шеи?',o:['Перстневидный бугорок','Адамово яблоко','Надгортанный бугорок','Щитовидный выступ'],a:1,e:'Выступ гортани известен как адамово яблоко — передний гребень щитовидного хряща.'},
{q:'Какой отдел гортани содержит голосовую щель?',o:['Преддверие гортани','Подголосовая полость','Межжелудочковый (средний) отдел','Надгортанный отдел'],a:2,e:'Голосовая щель расположена в среднем — межжелудочковом — отделе.'},
{q:'Какой сустав управляет высотой голоса через изменение натяжения голосовых складок?',o:['Перстнечерпаловидный','Черпалонадгортанный','Перстнещитовидный','Щитоподъязычный'],a:2,e:'Перстнещитовидный сустав: при наклоне щитовидного хряща изменяется натяжение складок — меняется высота голоса.'},
{q:'Какая связка «подвешивает» гортань к подъязычной кости?',o:['Перстнещитовидная (коническая) связка','Голосовая связка','Щитоподъязычная мембрана','Черпалонадгортанная связка'],a:2,e:'Щитоподъязычная мембрана соединяет гортань с подъязычной костью и фактически подвешивает гортань к ней.'},
{q:'Сколько непарных хрящей входит в состав гортани?',o:['Два','Три','Четыре','Шесть'],a:1,e:'В гортани три непарных хряща: перстневидный, щитовидный и надгортанник.'},
{q:'Какая мышца является ЕДИНСТВЕННОЙ, расширяющей голосовую щель?',o:['Латеральная перстнечерпаловидная','Поперечная черпаловидная','Задняя перстнечерпаловидная','Щиточерпаловидная'],a:2,e:'Задняя перстнечерпаловидная — единственная мышца-расширитель голосовой щели.'},
{q:'Какая мышца напрягает голосовую связку?',o:['Щиточерпаловидная','Перстнещитовидная','Поперечная черпаловидная','Косая черпаловидная'],a:1,e:'Перстнещитовидная мышца наклоняет щитовидный хрящ кпереди, натягивая голосовые складки.'},
{q:'Какая мышца расслабляет голосовую связку?',o:['Перстнещитовидная','Латеральная перстнечерпаловидная','Щиточерпаловидная','Задняя перстнечерпаловидная'],a:2,e:'Щиточерпаловидная мышца поворачивает черпаловидный хрящ внутрь — ослабляет голосовые связки.'},
{q:'Что делают щиточерпаловидная, поперечночерпаловидная и черпалонадгортанная мышцы при совместном сокращении?',o:['Расширяют голосовую щель','Натягивают голосовые связки','Работают как сфинктер, закрывая гортань','Поднимают надгортанник'],a:2,e:'Действуя вместе, они работают как сфинктер — закрывают гортань при каждом глотании.'},
{q:'Щитоподъязычная мышца при стабилизированной подъязычной кости выполняет функцию:',o:['Опускает гортань вниз','Приподнимает гортань вверх','Натягивает голосовые складки','Расширяет голосовую щель'],a:1,e:'При фиксированной подъязычной кости щитоподъязычная мышца приподнимает гортань.'},
{q:'На сколько функциональных групп делятся внутренние мышцы гортани?',o:['На две','На три','На четыре','На пять'],a:2,e:'Четыре группы: суживающие, расширяющие, напрягающие и расслабляющие.'},
{q:'Что делает щитонадгортанная мышца?',o:['Опускает надгортанник, закрывая гортань','Поднимает надгортанник и открывает вход в гортань','Натягивает голосовые связки','Расширяет голосовую щель'],a:1,e:'Щитонадгортанная мышца поднимает надгортанник и открывает вход в гортань.'},
{q:'Как запомнить механику движения внутренних мышц гортани?',o:['По длине мышцы','По расположению на шее','Название отражает направление волокна','По цвету мышечной ткани'],a:2,e:'Название мышцы указывает на направление её хода.'},
{q:'Как правильно называть «ложные голосовые связки»?',o:['Истинные голосовые связки','Складки преддверия или желудочковые складки','Эластические складки','Мембранозные складки'],a:1,e:'Современные названия: складки преддверия или желудочковые складки.'},
{q:'Какую форму имеют голосовые складки при виде сверху?',o:['Форму буквы U','Форму буквы О','Форму латинской буквы V','Форму буквы Х'],a:2,e:'Голосовые складки имеют форму латинской буквы V: острие вперёд к щитовидному хрящу.'},
{q:'Из скольких слоёв состоит голосовая складка?',o:['Из трёх','Из четырёх','Из пяти','Из шести'],a:2,e:'Пять слоёв: эпителий, базальная мембрана, поверхностная, промежуточная и глубокая пластины + голосовая мышца.'},
{q:'Что входит в BODY (тело) голосовой складки?',o:['Эпителий и поверхностная пластина','Голосовая мышца и вокальная связка (промежуточная + глубокая пластины)','Только эпителий','Только поверхностная пластина'],a:1,e:'BODY = голосовая мышца + вокальная связка (промежуточная и глубокая пластины).'},
{q:'Что входит в COVER (покрытие) голосовой складки?',o:['Голосовая мышца и связка','Промежуточная и глубокая пластины','Эпителий и поверхностная пластина','Только голосовая мышца'],a:2,e:'COVER = эпителий + поверхностная пластина. Именно покрытие активно вибрирует при фонации.'},
{q:'Есть ли собственные мышечные волокна у складок преддверия?',o:['Да, много — как у голосовых складок','Да, только в медиальной части','Нет, собственных мышечных волокон нет','Да, три слоя мышц'],a:2,e:'Собственных мышечных волокон желудочковые складки не имеют.'},
{q:'С какой структурой работаем при технике тванг?',o:['С голосовыми складками напрямую','С черпалонадгортанной складкой','Со складками преддверия','С перстневидным хрящом'],a:1,e:'При тванге работаем с черпалонадгортанной складкой — при расщеплениях работают складки преддверия.'},
{q:'Что образует верхний свободный утолщённый край эластического конуса?',o:['Складки преддверия','Черпалонадгортанную складку','Голосовую связку','Щитоподъязычную мембрану'],a:2,e:'Верхний свободный край эластического конуса образует голосовую связку.'},
{q:'Какую функцию выполняет голосовой отросток черпаловидного хряща?',o:['К нему крепятся внешние мышцы гортани','К нему крепятся голосовые связки','Он образует суставную площадку','Он соединяется с надгортанником'],a:1,e:'Голосовой отросток направлен вперёд и соединяется с голосовыми связками.'},
{q:'Какая теория объясняет фонацию через давление воздуха, как язычки в органной трубке?',o:['Нейрохронаксическая','Мукоондуляторная','Миоэластическая','Резонансная теория Морозова'],a:2,e:'Миоэластическая теория: вибрация возникает за счёт разницы давления воздуха.'},
{q:'Автором нейрохронаксической теории является:',o:['М. Гарсиа','Дж. Перелло','Р. Юссон','В. П. Морозов'],a:2,e:'Нейрохронаксическую теорию разработал французский физиолог Рауль Юссон.'},
{q:'На каком физическом законе основана мукоондуляторная теория?',o:['Закон Ньютона','Эффект Бернулли','Закон Архимеда','Закон Гука'],a:1,e:'Мукоондуляторная теория Дж. Перелло основана на эффекте Бернулли.'},
{q:'Что доказывал В. П. Морозов в своих экспериментах с формантами?',o:['Что складки работают как органные трубки','Что кора мозга управляет колебаниями','Что резонаторы выполняют главную функцию в голосообразовании','Что давление воздуха определяет высоту'],a:2,e:'Морозов удалял форманты из записей певцов — голос становился неузнаваемым.'},
{q:'Что НЕ может объяснить миоэластическая теория?',o:['Изменения голоса при параличе гортани','Психогенные афонии (нет голоса при здоровых складках)','Влияние давления воздуха на складки','Функцию диафрагмы'],a:1,e:'При психогенных афониях нет структурных изменений в складках, но голоса нет.'},
{q:'Сколько теорий фонации рассматривается в модуле?',o:['Две','Три','Четыре','Пять'],a:2,e:'Четыре теории: миоэластическая, нейрохронаксическая, мукоондуляторная и резонансная.'},
{q:'Форманты — это:',o:['Виды голосовых складок','Особые частотные области концентрации резонанса','Слои голосовой складки','Виды атаки звука'],a:1,e:'Форманты — особые частотные области концентрации резонанса.'},
{q:'Что показали миограммы при пении арии «про себя» и вслух (эксперимент Юссона)?',o:['Разные кривые','Идентичные кривые в обоих случаях','Активность только при пении вслух','Полное отсутствие активности'],a:1,e:'Идентичные кривые доказывают: складки колеблются благодаря импульсам из ЦНС.'},
{q:'Что является основой звука при технике тванг (Twang)?',o:['Толстое смыкание голосовых складок','Наклон перстневидного хряща','Сужение преддверия гортани (сокращение СЧН)','Низкое положение гортани'],a:2,e:'Основа тванга — сужение преддверия гортани.'},
{q:'Какой хрящ наклонён при вокальном крике (Belt), но НЕ при тванге (Twang)?',o:['Щитовидный хрящ','Надгортанник','Черпаловидный хрящ','Перстневидный хрящ'],a:3,e:'В Belt наклонён перстневидный хрящ. В Twang — щитовидный.'},
{q:'Какой режим смыкания голосовых складок при субтоне (Falsetto)?',o:['Толстое','Тонкое','Жёсткое','Расслабленное'],a:2,e:'При субтоне смыкание жёсткое: складки вытянуты, туго натянуты, контакт минимальный.'},
{q:'Для какой техники характерно сочетание: гортань низко + преддверие сокращённое?',o:['Речь (Speech)','Тванг (Twang)','Рыдание (Sob)','Академический вокал (Opera)'],a:3,e:'Opera: гортань низко + преддверие сокращённое = тёмный, но яркий оперный тембр.'},
{q:'Почему рыдание (Sob) используют как восстановительное упражнение?',o:['Потому что оно всегда тихое','Тонкое смыкание даёт минимальную нагрузку на складки','Потому что тренирует диафрагму','Потому что расширяет диапазон вниз'],a:1,e:'Режим смыкания тонкий — голосовые складки в щадящем режиме.'},
{q:'В технике «Речь» (Speech) в каком положении находятся хрящи?',o:['Оба наклонные','Щитовидный наклонный, перстневидный вертикальный','Оба вертикальные','Щитовидный вертикальный, перстневидный наклонный'],a:2,e:'В Speech оба хряща вертикальны — нейтральное положение.'},
{q:'При каких техниках ложные складки находятся в нейтральном положении?',o:['При тванге и академическом','При академическом и рыдании','При речи и субтоне','При рыдании и тванге'],a:2,e:'Ложные складки нейтральны только в речи (Speech) и субтоне (Falsetto).'},
{q:'Суженная часть надгортанника, соединяющая его со щитовидным хрящом, называется:',o:['Дугой','Пластиной','Стебельком','Бугорком'],a:2,e:'Суженная часть надгортанника называется стебельком.'},
{q:'Где находится треугольная ямка черпаловидного хряща?',o:['На вершине хряща','Между голосовым и мышечным отростками — крепится голосовая мышца','На нижней поверхности','На задней поверхности'],a:1,e:'Треугольная ямка расположена между голосовым и мышечным отростками черпаловидного хряща.'}
];

var nm10State = {att:0, best:null, loaded:false};
var nm10Cur=0, nm10Sc=0, nm10Ans=false, nm10Miss=[], nm10IsOpen=false;

async function nm10LoadState(){
  try{
    var u = await sb.auth.getUser();
    if(!u.data||!u.data.user) return;
    var res = await sb.from('quiz_results')
      .select('attempt,score,passed')
      .eq('user_id', u.data.user.id)
      .eq('test_id', NM10_TEST_ID)
      .order('attempt', {ascending:false});
    if(res.error || !res.data || res.data.length===0){
      nm10State = {att:0, best:null, loaded:true};
      return;
    }
    var att = res.data.length;
    var best = res.data.reduce(function(m,r){return r.score>m?r.score:m;}, 0);
    nm10State = {att:att, best:best, loaded:true};
  } catch(e){
    nm10State = {att:0, best:null, loaded:true};
  }
}

async function nm10SaveResult(score, mistakes){
  try{
    var u = await sb.auth.getUser();
    if(!u.data||!u.data.user) return;
    var att = nm10State.att + 1;
    var best = (nm10State.best===null || score > nm10State.best) ? score : nm10State.best;
    var passed = score >= NM10_PASS;
    await sb.from('quiz_results').insert({
      user_id: u.data.user.id,
      test_id: NM10_TEST_ID,
      attempt: att,
      score: score,
      best_score: best,
      passed: passed,
      total_questions: NM10_QS.length,
      mistakes: JSON.stringify(mistakes),
      created_at: new Date().toISOString()
    });
    nm10State.att = att;
    nm10State.best = best;
  } catch(e){
    console.error('[NM10] Ошибка сохранения:', e);
  }
}

function nppBTests(){
  if(!cfg) return;
  var el = document.getElementById('TEST_GRID');
  if(!el) return;

  var mod10InTariff = 10 <= cfg.mx;
  var mod10Open = mod10InTariff && nppIsModOpen(10);
  var mod10OpenDate = nppModDate(10);

  var lkIco = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>';

  if(!mod10InTariff){
    el.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;gap:14px;padding:52px 24px;text-align:center;">'
      +'<div style="width:60px;height:60px;border-radius:18px;background:var(--bg3);display:flex;align-items:center;justify-content:center;opacity:.5;">'+lkIco+'</div>'
      +'<div style="font-size:13px;color:var(--muted);font-weight:300;line-height:1.6;">Тестирование доступно<br>в тарифах Профи, Максимум и VIP</div>'
      +'</div>';
    return;
  }

  if(!nm10State.loaded){
    el.innerHTML = '<div style="padding:40px 24px;text-align:center;color:var(--muted);font-size:13px;">Загружаем данные...</div>';
    nm10LoadState().then(function(){ nppBTests(); });
    return;
  }

  var mod10Progress = mod10Open ? DONE[9] : 0;

  var html = '<div style="background:linear-gradient(135deg,rgba(200,180,240,.1),rgba(247,197,213,.08));border:1px solid rgba(200,180,240,.22);border-radius:18px;padding:18px 22px;margin-bottom:20px;">'
    +'<div style="font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:10px;">Модуль 10 — Анатомия голоса · 40 вопросов</div>';

  if(mod10Open){
    var progPct = Math.round(Math.min(mod10Progress, MODS[9].ls.length) / MODS[9].ls.length * 100);
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">'
      +'<span style="font-size:12px;font-weight:500;color:var(--text);">Прогресс по урокам</span>'
      +'<span style="font-size:11px;font-weight:600;color:var(--text2);">'+Math.min(mod10Progress,MODS[9].ls.length)+' / '+MODS[9].ls.length+'</span></div>'
      +'<div style="width:100%;height:4px;background:var(--bg3);border-radius:100px;overflow:hidden;">'
      +'<div style="width:'+progPct+'%;height:100%;background:linear-gradient(90deg,#c8b4e8,#e8a870);border-radius:100px;transition:width .5s;"></div></div>';
  } else {
    html += '<div style="font-size:12px;color:var(--muted);font-weight:300;">Модуль откроется <b style="color:var(--text2);font-weight:600;">'+mod10OpenDate+'</b> — тогда станут доступны тесты</div>';
  }
  html += '</div>';

  var att = nm10State.att;
  var best = nm10State.best;
  var rem = Math.max(0, NM10_MAX_ATT - att);
  var passed = best !== null && best >= NM10_PASS;
  var isBlocked = att >= NM10_MAX_ATT;
  var isDateLock = !mod10Open;

  var accentColor = passed ? 'linear-gradient(180deg,#a0d8b8,#80c8a0)'
    : isBlocked ? '#e8a0a0'
    : isDateLock ? 'var(--bg3)'
    : 'linear-gradient(180deg,#c8b4e8,#e8a870)';

  var leftBar = '<div style="position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:16px 0 0 16px;background:'+accentColor+'"></div>';

  var statusHtml;
  var checkIco = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  if(isDateLock){
    statusHtml = '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">'
      +'<span class="test-status lock-tag" style="white-space:nowrap;">'+lkIco+' с '+mod10OpenDate+'</span>'
      +'<span style="font-size:9px;color:var(--muted);">модуль ещё не открыт</span></div>';
  } else if(passed){
    statusHtml = '<span class="test-status done-tag" style="flex-shrink:0;">'+checkIco+' Зачёт получен</span>';
  } else if(isBlocked){
    statusHtml = '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0;">'
      +'<span class="test-status lock-tag" style="white-space:nowrap;background:rgba(220,120,120,.15);border-color:rgba(220,100,100,.4);color:#b04040;">Попытки исчерпаны</span>'
      +'<span style="font-size:9px;color:var(--muted);">обратитесь к куратору</span></div>';
  } else {
    statusHtml = '<span class="test-status ts" style="flex-shrink:0;">'+(att>0?'Пройти ещё раз':'Пройти тест')+'</span>';
  }

  var attInfo = '';
  if(att > 0){
    var dots = '';
    for(var di=0;di<NM10_MAX_ATT;di++){
      dots += '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:4px;background:'+(di<att?'#c879a8':'var(--bg3)')+';border:1.5px solid '+(di<att?'#c879a8':'rgba(200,180,220,.4)')+';"></span>';
    }
    attInfo = '<div style="margin-top:8px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">'
      +'<div>'+dots+'</div>'
      +'<span style="font-size:11px;color:var(--muted);">'+att+' из '+NM10_MAX_ATT+' попыток использовано</span>'
      +(best!==null?'<span style="font-size:11px;font-weight:600;color:var(--text2);">Лучший: '+best+' / 40</span>':'')
      +'</div>';
  }

  var cardClass = passed ? 'done' : isBlocked ? 'locked' : isDateLock ? 'locked' : 'unlocked';
  var clickable = !isDateLock && !isBlocked && mod10Open;

  html += '<div class="test-card '+cardClass+'" style="position:relative;overflow:hidden;padding-left:22px;cursor:'+(clickable?'pointer':'default')+';"'
    +(clickable?' onclick="nm10OpenTest()"':'')+'>'
    +leftBar
    +'<div class="test-num" style="font-size:14px;">1</div>'
    +'<div class="test-info" style="min-width:0;">'
    +'<span style="font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);">Итоговый тест · Модуль 10</span>'
    +'<span class="test-title" style="margin-top:4px;display:block;">Анатомия голоса — 40 вопросов</span>'
    +'<span class="test-meta">Порог зачёта: 36 из 40 (90%) · 3 попытки'+(passed?' · <span style="color:#408060;font-weight:600;">✓ Зачёт получен</span>':'')+'</span>'
    +attInfo
    +'</div>'
    +statusHtml
    +'</div>';

  el.innerHTML = html;
  nppBCerts();
}

function nm10OpenTest(){
  if(nm10State.att >= NM10_MAX_ATT){ nppToast('Все попытки использованы. Обратитесь к куратору.'); return; }
  if(!nppIsModOpen(10)){ nppToast('Модуль ещё не открыт.'); return; }

  nm10Cur=0; nm10Sc=0; nm10Ans=false; nm10Miss=[]; nm10IsOpen=true;

  /* *** ИСПРАВЛЕНО: высота окна ограничена, содержимое прокручивается *** */
  var html = '<div id="nm10Modal" onclick="nm10CloseIfOvl(event)" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(80,40,100,.35);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:99999;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;">'
    +'<div style="width:100%;max-width:560px;border-radius:24px;overflow:hidden;background:#fff;max-height:86vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(120,60,160,.3);">'
    +'<div style="padding:18px 22px 14px;background:linear-gradient(135deg,#d4c4f0,#e4aad4);position:relative;flex-shrink:0;">'
    +'<button onclick="nm10Close()" style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,.3);border:none;border-radius:50%;width:28px;height:28px;cursor:pointer;font-size:14px;color:#fff;display:flex;align-items:center;justify-content:center;line-height:1;">✕</button>'
    +'<div style="font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.8);margin-bottom:4px;">Модуль 10 · Итоговый тест</div>'
    +'<div style="font-size:15px;font-weight:700;color:#fff;font-family:Unbounded,sans-serif;">Анатомия голоса</div>'
    +'<div style="margin-top:8px;display:flex;align-items:center;gap:10px;">'
    +'<div style="flex:1;height:3px;background:rgba(255,255,255,.3);border-radius:3px;overflow:hidden;"><div id="nm10-prog" style="height:100%;width:0%;background:#fff;border-radius:3px;transition:width .3s;"></div></div>'
    +'<span id="nm10-prog-lbl" style="font-size:10px;color:rgba(255,255,255,.85);white-space:nowrap;font-weight:600;">1 / 40</span>'
    +'</div></div>'
    +'<div id="nm10-body" style="overflow-y:auto;flex:1;padding:20px 22px;"></div>'
    +'</div></div>';

  var old = document.getElementById('nm10Modal');
  if(old) old.remove();
  var el = document.createElement('div');
  el.innerHTML = html;
  document.body.appendChild(el.firstChild);

  nm10LoadQ();
}

function nm10LoadQ(){
  var q = NM10_QS[nm10Cur];
  var pct = Math.round((nm10Cur / NM10_QS.length) * 100);
  var prog = document.getElementById('nm10-prog');
  var lbl = document.getElementById('nm10-prog-lbl');
  if(prog) prog.style.width = pct + '%';
  if(lbl) lbl.textContent = (nm10Cur+1) + ' / ' + NM10_QS.length;

  var L = ['А','Б','В','Г'];
  var opts = q.o.map(function(o,i){
    return '<button class="nm10-opt" onclick="nm10Answer('+i+')" style="display:flex;align-items:flex-start;gap:12px;background:#FAFAFA;border:1.5px solid #E8E8E8;border-radius:11px;padding:12px 14px;cursor:pointer;font-family:Montserrat,sans-serif;font-size:13px;color:#333;line-height:1.5;text-align:left;width:100%;margin-bottom:8px;transition:all .18s;">'
      +'<span style="width:25px;height:25px;flex-shrink:0;border-radius:7px;background:rgba(200,180,240,.15);display:flex;align-items:center;justify-content:center;font-family:Unbounded,sans-serif;font-size:10px;font-weight:700;color:#9b7ed4;">'+L[i]+'</span>'
      +'<span>'+o+'</span></button>';
  }).join('');

  var body = document.getElementById('nm10-body');
  if(!body) return;
  body.innerHTML = '<div style="font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#c879a8;margin-bottom:4px;">'+NM10_TOP[nm10Cur]+'</div>'
    +'<div style="font-family:Unbounded,sans-serif;font-size:13px;font-weight:600;color:#1A1A2E;line-height:1.5;margin-bottom:18px;">'+q.q+'</div>'
    +'<div>'+opts+'</div>'
    +'<button id="nm10-nxt" onclick="nm10Next()" style="display:none;margin-top:14px;width:100%;padding:13px;background:linear-gradient(135deg,#c8b4e8,#e4aad4);color:#fff;border:none;border-radius:12px;font-family:Unbounded,sans-serif;font-size:12px;font-weight:700;cursor:pointer;"></button>';

  nm10Ans = false;
  body.scrollTop = 0;
}

function nm10Answer(idx){
  if(nm10Ans) return;
  nm10Ans = true;
  var q = NM10_QS[nm10Cur];
  var btns = document.querySelectorAll('#nm10Modal .nm10-opt');
  btns.forEach(function(b,i){
    b.disabled = true;
    b.style.cursor = 'default';
    b.style.opacity = '0.5';
    if(i === idx){
      b.style.opacity = '1';
      b.style.background = '#F0EEF8';
      b.style.borderColor = '#9b7ed4';
    }
  });
  if(idx === q.a) nm10Sc++;
  else nm10Miss.push({i:nm10Cur, ch:idx});

  var nxt = document.getElementById('nm10-nxt');
  if(nxt){
    nxt.style.display = 'block';
    nxt.textContent = nm10Cur < NM10_QS.length-1 ? 'Следующий вопрос →' : 'Посмотреть результаты';
  }
}

function nm10Next(){
  nm10Cur++;
  if(nm10Cur >= NM10_QS.length) nm10ShowResult();
  else nm10LoadQ();
}

async function nm10ShowResult(){
  await nm10SaveResult(nm10Sc, nm10Miss);

  var prog = document.getElementById('nm10-prog');
  var lbl = document.getElementById('nm10-prog-lbl');
  if(prog) prog.style.width = '100%';
  if(lbl) lbl.textContent = 'Тест завершён';

  var pct = Math.round((nm10Sc / NM10_QS.length) * 100);
  var passed = nm10Sc >= NM10_PASS;
  var rem = Math.max(0, NM10_MAX_ATT - nm10State.att);
  var isLastAttempt = nm10State.att >= NM10_MAX_ATT;

  var msgs = {100:'Идеальный результат! Вы в совершенстве знаете анатомию вокала.',
    90:'Зачёт! Все темы изучены на высоком уровне.',
    80:'До зачёта немного не хватило. Повторите темы с ошибками.',
    60:'Материал усвоен частично. Вернитесь к урокам.',
    0:'Нужно повторить все уроки модуля.'};
  var msgKey = Object.keys(msgs).reverse().find(function(k){ return pct >= Number(k); });

  var missHtml = '';
  if(nm10Miss.length > 0 && isLastAttempt){
    missHtml = '<div style="margin-top:16px;"><div style="font-family:Unbounded,sans-serif;font-size:11px;font-weight:700;color:#1A1A2E;margin-bottom:10px;">Разбор ошибок ('+nm10Miss.length+')</div>';
    nm10Miss.forEach(function(m){
      var q = NM10_QS[m.i];
      missHtml += '<div style="background:rgba(200,180,240,.08);border:1px solid rgba(200,180,240,.25);border-radius:11px;padding:12px 14px;margin-bottom:8px;">'
        +'<div style="font-size:9px;font-weight:700;color:#c879a8;margin-bottom:3px;text-transform:uppercase;letter-spacing:.08em;">Вопрос '+(m.i+1)+' · '+NM10_TOP[m.i]+'</div>'
        +'<div style="font-size:12px;font-weight:600;color:#1A1A2E;margin-bottom:6px;line-height:1.5;">'+q.q+'</div>'
        +'<div style="display:flex;gap:7px;align-items:flex-start;margin-bottom:3px;"><span style="flex-shrink:0;font-size:10px;font-weight:600;padding:1px 7px;border-radius:5px;background:#FFF5F5;color:#9B2C2C;border:1px solid #FC8181;">Ваш ответ</span><span style="font-size:12px;line-height:1.5;">'+q.o[m.ch]+'</span></div>'
        +'<div style="display:flex;gap:7px;align-items:flex-start;margin-bottom:6px;"><span style="flex-shrink:0;font-size:10px;font-weight:600;padding:1px 7px;border-radius:5px;background:#F0FFF4;color:#276749;border:1px solid #48BB78;">Правильно</span><span style="font-size:12px;line-height:1.5;">'+q.o[q.a]+'</span></div>'
        +'<div style="font-size:11px;color:#5a3a8a;background:rgba(200,180,240,.1);border-left:3px solid #c8b4e8;border-radius:0 5px 5px 0;padding:6px 10px;line-height:1.6;">'+q.e+'</div>'
        +'</div>';
    });
    missHtml += '</div>';
  }

  var retryBtn = rem > 0
    ? '<button onclick="nm10Restart()" style="width:100%;padding:13px;background:linear-gradient(135deg,#c8b4e8,#e4aad4);color:#fff;border:none;border-radius:12px;font-family:Unbounded,sans-serif;font-size:12px;font-weight:700;cursor:pointer;margin-bottom:12px;">Пройти ещё раз (осталось: '+rem+')</button>'
    : '<div style="background:#f8f8f8;border-radius:12px;padding:14px 16px;margin-bottom:12px;text-align:center;border:1.5px solid #eee;"><div style="font-family:Unbounded,sans-serif;font-size:12px;font-weight:700;color:#555;margin-bottom:5px;">Все попытки использованы</div><div style="font-size:12px;color:#888;line-height:1.7;">Ваш лучший результат сохранён.<br>Для разблокировки обратитесь к куратору.</div></div>';

  var body = document.getElementById('nm10-body');
  if(!body) return;
  body.innerHTML = '<div style="border-radius:18px;background:linear-gradient(135deg,'+(passed?'#a0d8b8,#60c090':'#e4aad4,#c8b4e8')+');padding:22px 20px;text-align:center;margin-bottom:16px;">'
    +'<div style="display:inline-flex;flex-direction:column;align-items:center;background:rgba(255,255,255,.2);border:2px solid rgba(255,255,255,.4);border-radius:50%;width:100px;height:100px;justify-content:center;margin-bottom:10px;">'
    +'<div style="font-family:Unbounded,sans-serif;font-size:34px;font-weight:900;color:#fff;line-height:1;">'+nm10Sc+'</div>'
    +'<div style="font-size:11px;color:rgba(255,255,255,.8);margin-top:2px;">из 40</div></div>'
    +'<div style="font-family:Unbounded,sans-serif;font-size:15px;font-weight:800;color:#fff;margin-bottom:4px;">'+(passed?'Зачёт получен!':'Не зачтено')+'</div>'
    +'<div style="font-size:12px;color:rgba(255,255,255,.85);line-height:1.6;">'+msgs[msgKey]+'</div></div>'
    +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:14px;">'
    +'<div style="background:#f8f8f8;border-radius:12px;padding:12px;text-align:center;"><div style="font-family:Unbounded,sans-serif;font-size:22px;font-weight:800;color:#48BB78;">'+nm10Sc+'</div><div style="font-size:10px;color:#888;">Правильно</div></div>'
    +'<div style="background:#f8f8f8;border-radius:12px;padding:12px;text-align:center;"><div style="font-family:Unbounded,sans-serif;font-size:22px;font-weight:800;color:#FC8181;">'+(NM10_QS.length-nm10Sc)+'</div><div style="font-size:10px;color:#888;">Ошибок</div></div>'
    +'<div style="background:#f8f8f8;border-radius:12px;padding:12px;text-align:center;"><div style="font-family:Unbounded,sans-serif;font-size:22px;font-weight:800;color:#c879a8;">'+pct+'%</div><div style="font-size:10px;color:#888;">Результат</div></div>'
    +'</div>'
    +(nm10State.best!==null?'<div style="background:rgba(200,180,240,.1);border:1px solid rgba(200,180,240,.3);border-radius:9px;padding:9px 13px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;"><span style="font-size:11px;color:#888;font-weight:500;">Лучший результат за все попытки</span><span style="font-family:Unbounded,sans-serif;font-size:14px;font-weight:700;color:#c879a8;">'+nm10State.best+' из 40</span></div>':'')
    +retryBtn
    +missHtml;

  body.scrollTop = 0;
  nppBTests();
}

function nm10Restart(){
  if(nm10State.att >= NM10_MAX_ATT){ nppToast('Все попытки использованы.'); return; }
  nm10Cur=0; nm10Sc=0; nm10Ans=false; nm10Miss=[];
  nm10LoadQ();
  var body = document.getElementById('nm10-body');
  if(body) body.scrollTop=0;
}

function nm10Close(){
  var m = document.getElementById('nm10Modal');
  if(m) m.remove();
  nm10IsOpen = false;
  nppBTests();
}

function nm10CloseIfOvl(e){
  if(e.target.id==='nm10Modal') nm10Close();
}

var _origNppLogout = window.nppLogout;
window.nppLogout = function(){
  nm10State = {att:0, best:null, loaded:false};
  if(_origNppLogout) _origNppLogout();
};

window.nm10OpenTest   = nm10OpenTest;
window.nm10Answer     = nm10Answer;
window.nm10Next       = nm10Next;
window.nm10Close      = nm10Close;
window.nm10CloseIfOvl = nm10CloseIfOvl;
window.nm10Restart    = nm10Restart;
window.nppBTests      = nppBTests;

function nppIsTestPassed(testId){
  if(testId === 't10_exam' || testId === NM10_TEST_ID){
    return nm10State.best !== null && nm10State.best >= NM10_PASS;
  }
  return false;
}
window.nppIsTestPassed = nppIsTestPassed;
