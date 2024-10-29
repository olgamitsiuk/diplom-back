const model = require("../models/product");

exports.seed = function (request, response) {
    model.deleteMany({}, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete many OK");
            //res.end('success');
        }
    });
    let one = new model();
    one.name = "Гитара электроаккустическая";
    one.model = "FENDER CD-60SCE BLACK";
    one.slug = one.name + ' ' + one.model;
    one.manufacturer = "FENDER";
    one.category = "guitar";
    one.subCategory = "electric-acoustic-guitar";
    one.subCatName = 'Элeктроакустические гитары';
    one.new = "new";
    one.popular = "popular";
    one.price_action = 6120;
    one.price_normal = 7120;
    one.sale = "sale";
    one.image = {
        big: ["/storage/product/1/1.jpg", "/storage/product/1/2.jpg", "/storage/product/1/3.jpg"],
        small: ["/storage/product/1/1-1.jpg", "/storage/product/1/2-1.jpg", "/storage/product/1/3-1.jpg"]
    };
    one.description = "FENDER CD-60SCE BLACK — новая электроакустическая гитара вкорпусе дредноут от знаменитого" +
        " американского производителя, оснащенная высококачественной электроникой."
    one.description_full = "Верхняя дека CD-60SCE BLACK WN из цельной древесины ели," +
        " что придает инструменту прекрасные акустические характеристики при любом стиле игры." +
        " Нижняя дека и обечайка сделаны из махагони, что позволило не только получить эффектный внешний вид," +
        " но и добиться сбалансированного звучания и впечатляющей громкости. Гриф профиля Fender Easy-to-Play" +
        " также выполнен из махагони с однослойной черной окантовкой. Удобная форма грифа придется по душе" +
        " как начинающим гитаристам, так и опытным профессиональным музыкантам. Накладка — орех, радиус 12″ (305мм)," +
        " инкрустирована перламутровыми точками диаметром 3 мм. На грифе 20 ладов." +
        "Пьезозвукосниматель Fishman с предусилителем и встроенным тюнером оснащен удобными регуляторами для настройки," +
        " при этом сохраняется чистый, густой и насыщенный звук с прекрасным резонансом. Бридж выполнен из палисандра," +
        " фурнитура — хромированная. Венецианский вырез с плавным изгибом дает удобный доступ к верхним ладам." +
        " Розетка красиво оформлена перламутром.";
    one.characteristics = [
        {
            name: "Тип",
            value: "Электроакустичеcкие"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "Черный"
        },
        {
            name: "Количество ладов",
            value: "20"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    one.save();
    let two = new model();
    two.name = "Электрогитара";
    two.model = "IBANEZ GRG140 BKN";
    two.slug = two.name + ' ' + two.model;
    two.manufacturer = "IBANEZ";
    two.category = "guitar";
    two.subCategory = "electric-guitar";
    two.subCatName = 'Электрогитары';
    two.new = "";
    two.popular = "popular";
    two.price_normal = 7125;
    two.sale = "";
    two.image = {
        big: ["/storage/product/2/1.jpg", "/storage/product/2/2.jpg", "/storage/product/2/3.jpg"],
        small: ["/storage/product/2/1-1.jpg", "/storage/product/2/2-1.jpg", "/storage/product/2/3-1.jpg"]
    };
    two.description = "Компания IBANEZ представляет электрогитару GRG140. " +
        "Эта электрогитара является фаворитом в своем классе. Свое положение она завоевала" +
        " качеством звука и практичностью в использовании. Электрогитара GRG140 подойдет как новичку, так и более опытному музыканту.";
    two.description_full = "IBANEZ GRG140-BKN - это 6-струнная электрогитара с отличным звучанием." +
        " Компания IBANEZ постаралась и смогла выразить стиль, четкость звука и качество сборки.Гитара имеет 24 лада." +
        " Гриф гитары не очень широкий. Эта особенность очень удобна для всех, так как предоставляет отличный доступ к верхним ладам." +
        " Гриф изготовлен из клена. Накладка на грифе сделана из палисандра. Корпус изготовлен из липы. Фурнитура хромированная." +
        " Модель имеет схему звукоснимателей H-S-S, что отлично подходит для разных стилей музыки. " +
        "Электрогитара имеет очень хороший звук для гитар этого класса, отлично сочетает в себе качество и приемлемую цену. " +
        "IBANEZ GRG140 - отличный выбор для новичков и любителей.";
    two.characteristics = [
        {
            name: "Тип",
            value: "Электрогитара"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "Черный"
        },
        {
            name: "Количество ладов",
            value: "24"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    two.save();
    let three = new model();
    three.name = "Гитара";
    three.model = "Fender PLAYER TELECASTER";
    three.slug = three.name + ' ' + three.model;
    three.manufacturer = "Fender";
    three.category = "guitar";
    three.subCategory = "classical-guitar";
    three.subCatName = 'Классические гитары';
    three.new = "new";
    three.popular = "";
    three.price_action = 23425;
    three.price_normal = 24525;
    three.sale = "sale";
    three.image = {
        big: ["/storage/product/3/1.jpg", "/storage/product/3/2.jpg", "/storage/product/3/3.jpg"],
        small: ["/storage/product/3/1-1.jpg", "/storage/product/3/2-1.jpg", "/storage/product/3/3-1.jpg"]
    };
    three.description = "Идеально подходящая для сильной музыкальной атаки электрогитара" +
        " Fender Player Telecaster HH PF – это чистый Fender до мозга костей. " +
        "Ощущение, стиль и, самое главное, звук – все они здесь ждут, " +
        "пока вы заставите их шептать или кричать для вашей музыки. ";
    three.description_full = "IИнструмент достаточно гибкий, чтобы справиться практически со всем, " +
        "что вы можете создать, и достаточно прочный, чтобы пережить любое выступление." +
        " Эта рабочая лошадка – верный товарищ вашего музыкального видения. Разработанные для аутентичного" +
        " звучания Fender звукосниматели серии Player стоят одной ногой в прошлом, но смотрят в будущее." +
        "Бридж Telecaster струны-сквозь-корпус обладает седлами из изогнутого металла (bent-steel), " +
        "чтобы немного оживить ваш тон. Гриф разработан для удобства и производительности. " +
        "С профилем «Modern C» и гладким покрытием задней части он идеально подходит " +
        "практически для любого стиля игры. Дополнительный лад дает доступ к четырем октавам музыкальных возможностей." +
        " Каждая электрогитара серии Player Telecaster включает пластину на грифе с тисненой буквой «F»," +
        " не оставляя никаких сомнений касательно происхождения инструмента.";
    three.characteristics = [
        {
            name: "Тип",
            value: "Электрогитара"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "3-Tone Sunburst"
        },
        {
            name: "Количество ладов",
            value: "22"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    three.save();
    let four = new model();
    four.name = "Бас-гитара";
    four.model = "IBANEZ GSR180 BSB";
    four.slug = four.name + ' ' + four.model;
    four.manufacturer = "IBANEZ";
    four.category = "guitar";
    four.subCategory = "bass-guitar";
    four.subCatName = 'Бас-гитары';
    four.new = "";
    four.popular = "";
    four.price_action = 23425;
    four.price_normal = 24525;
    four.sale = "sale";
    four.image = {
        big: ["/storage/product/4/1.png", "/storage/product/4/2.png", "/storage/product/4/3.png"],
        small: ["/storage/product/4/1-1.png", "/storage/product/4/2-1.png", "/storage/product/4/3-1.png"]
    };
    four.description = "IBANEZ GSR180 представляет собой удобный и красивый инструмент, изготовленный с той же тщательностью и по тем же стандартам, что и модели IBANEZ топ-класса ";
    four.description_full = "IBANEZ GSR180 представляет собой удобный и красивый инструмент, изготовленный с той же тщательностью и по тем же стандартам, что и модели IBANEZ топ-класса. Этот инструмент позволит вам отточить свою технику и выработать собственную манеру игры. GSR180 отлично проявит себя не только при домашних занятиях, репетициях или клубных выступлениях, но и на больших концертных площадках." +
        "Приобретая свою первую бас-гитару, начинающие музыканты нередко выбирают необычные инструменты броских цветов и форм, особенно именные или подписные модели своих кумиров. Решение не самое удачное, ведь каждый состоявшийся музыкант имеет собственную манеру и создает свою именную модель основываясь на личных предпочтениях." +
        "Для человека, который хочет учиться играть нужен лаконичный, но качественный инструмент на котором он сумеет развить навыки и сформировать свою манеру. Именно таким инструментом и является IBANEZ GSR180 BSB"


    four.characteristics = [
        {
            name: "Тип",
            value: "Бас-гитары"
        },
        {
            name: "Количество струн",
            value: "4"
        },
        {
            name: "Цвет",
            value: "Sunburst"
        },
        {
            name: "Количество ладов",
            value: "22"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    four.save();
    let five = new model();
    five.name = "Стойка гитарная";
    five.model = "FENDER DELUXE HANGING GUITAR STAND BLACK/RED";
    five.slug = five.name + ' ' + five.model;
    five.manufacturer = "Fender";
    five.category = "guitar";
    five.subCategory = "accessories";
    five.subCatName = 'Аксессуары для гитар';
    five.new = "";
    five.popular = "";
    five.price_action = '';
    five.price_normal = 1722;
    five.sale = "";
    five.image = {
        big: ["/storage/product/5/1.png", "/storage/product/5/2.png", "/storage/product/5/3.png"],
        small: ["/storage/product/5/1-1.png", "/storage/product/5/2-1.png", "/storage/product/5/3-1.png"]
    };
    five.description = "FENDER DELUXE HANGING GUITAR STAND BLACK/RED – напольная гитарная стойка, которая надежно сохранит вашу акустическую, электро- или бас-гитару.";
    five.description_full = "FENDER DELUXE HANGING GUITAR STAND BLACK/RED – напольная гитарная стойка, которая надежно сохранит вашу акустическую, электро- или бас-гитару. Наряду с портативностью и рациональностью, стойка имеет покрытие из мягкой подкладки, что идеально подходит для гитар с чувствительной к царапинам отделкой, к примеру как с покрытием из нитроцеллюлозы. Прочная металлическая конструкция, удобна в транспортировке.";
    five.characteristics = [
        {
            name: "Тип",
            value: "Стойки"
        },
        {
            name: "Количество гитар",
            value: "1"
        },
        {
            name: "Цвет",
            value: "Черно-красный"
        },
        {
            name: "Материал",
            value: "Металл"
        },
        {
            name: "Вес",
            value: "1,6 кг"
        },
    ]
    five.save();
    let six = new model();
    six.name = "Малий барабан";
    six.model = "TAMA AW-455 LIMITED MASTERCRAFT ARTWOOD";
    six.slug = one.name + ' ' + one.model;
    six.manufacturer = "TAMA";
    six.category = "percussion-instrument";
    six.subCategory = "acoustic-percussion";
    six.subCatName = 'Акустические ударные';
    six.new = "new";
    six.popular = "";
    six.price_action = 31920;
    six.price_normal = 39900;
    six.sale = "sale";
    six.image = {
        big: ["/storage/product/6/1.png", "/storage/product/6/2.png", "/storage/product/6/3.png"],
        small: ["/storage/product/6/1-1.png", "/storage/product/6/2-1.png", "/storage/product/6/3-1.png"]
    };
    six.description = "Tama AW-455 Limited Mastercraft Artwood – малий барабан, лімітованої серії 50th Anniversary, розмір 14x5, товщина корпусу – 9 мм, матеріал – 6-шарова береза з інкрустацією по центру, колір – натуральний."
    six.description_full = "Корпус з берези товщиною 9 мм/6 шарів забезпечує чіткий звук низьких та середніх частот та чітку проєкцію." +
        "Для детального та чутливого відгуку барабан оснащений унікальним фільтром Roller Action Strainer від TAMA, інноваційною конструкцією підструнника з повним контактом, в якій використовується один важіль увімкнення/вимкнення та подвійні напрямні ролики для простого та універсального регулювання. Ця точна копія оригінального малого барабана Mastercraft Artwood від TAMA – напрочуд гарне святкування 50-річчя TAMA." +
        "9 мм, 6-шаровий суцільно-березовий корпус з дерев'яною вставкою по центру 9-міліметровий 6-шаровий корпус All Birch Shell з дерев'яною вставкою по центру отримав визнання за свої глибокі низькі частоти та чудову звукову проєкцію завдяки корпусу завтовшки 9 мм. Художній вигляд дерев'яної вставки, яка використовувалася лише в першій моделі, також додає особливого шарму." +
        "Литі обручі (10 отворів). Для досягнення чіткої атаки та послідовного налаштування моделі малого барабана Mastercraft на початку 1980-х років оснащувалися литими обручами з 10 отворами, що було незвичайно для того часу. Крім того, ці спеціальні моделі, присвячені 50-річчю, включають копію оригінального бічного обруча малого барабана зі збільшеним вікном для підструнника. 18-прядні довгі підструнники з вуглецевої сталі. Роликовий фільтр. Розроблений як повноконтактна система підструнника, інноваційний фільтр Roller Action Strainer від TAMA забезпечує надзвичайно детальний контроль над тоном та чутливістю малого барабана."
    six.characteristics = [
        {
            name: "Тип",
            value: "Малий барабан"
        },
        {
            name: "Серія",
            value: "Mastercraft"
        },
        {
            name: "Матеріал",
            value: "Береза"
        },
        {
            name: "Колір",
            value: "Натуральний"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    six.save();
    let seven = new model();
    seven.name = "Электронная ударная установка";
    seven.model = "CARLSBRO CSD130";
    seven.slug = seven.name + ' ' + seven.model;
    seven.manufacturer = "CARLSBRO";
    seven.category = "percussion-instrument";
    seven.subCategory = "electronic-percussion";
    seven.subCatName = 'Электронные ударные';
    seven.new = "";
    seven.popular = "popular";
    seven.price_normal = 14616;
    seven.sale = "";
    seven.image = {
        big: ["/storage/product/7/1.png", "/storage/product/7/2.png", "/storage/product/7/3.png"],
        small: ["/storage/product/7/1-1.png", "/storage/product/7/2-1.png", "/storage/product/7/3-1.png"]
    };
    seven.description = "Основные особенности и преимущества CARLSBRO CSD130: Компактная (в сложенном положении занимает места не больше, чем ПК), легкая, простая в использовании";
    seven.description_full = "CARLSBRO CSD130 была создана специально для начинающего дарования. На борту CSD130 250 перкуссионных сэмплов и 20 пресетов. Если стандартные сэмплы по какой-то причине вас не устраивают – не беда! Ведь по-настоящему любые электронные ударные установки раскрываются именно при подключению к компьютеру и использованию программ типа Addictive Drums, EZ Drummer, FXpansion BFD3 и т. п. Перед вами предстает целая бесконечность вариаций барабанных звуков, которую благодаря Carlsbro можно использовать намного более элегантно, чем при помощи миди-клавиатуры. CARLSBRO CSD130 – это замечательный стартовый музыкальный инструмент для всей семьи.";
    seven.characteristics = [
        {
            name: "Категория",
            value: "Электронная установка"
        },
        {
            name: "Количество пэдов барабанов",
            value: "5"
        },
        {
            name: "Количество пэдов тарелок",
            value: "3"
        },
        {
            name: "Тип пэдов",
            value: "Резиновые"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    seven.save();
    let eight = new model();
    eight.name = "Набор тарелок";
    eight.model = "ZILDJIAN A CUSTOM SET 5 PACK";
    eight.slug = eight.name + ' ' + eight.model;
    eight.manufacturer = "ZILDJIAN";
    eight.category = "percussion-instrument";
    eight.subCategory = "plates";
    eight.subCatName = 'Тарелки';
    eight.new = "";
    eight.popular = "";
    eight.price_action = 23425;
    eight.price_normal = 24525;
    eight.sale = "sale";
    eight.image = {
        big: ["/storage/product/8/1.png", "/storage/product/8/2.png", "/storage/product/8/3.png"],
        small: ["/storage/product/8/1-1.png", "/storage/product/8/2-1.png", "/storage/product/8/3-1.png"]
    };
    eight.description = "ZILDJIAN A CUSTOM SET 5 PACK – яркие, воздушные и очень отзывчивые тарелки с коротким затуханием звука.";
    eight.description_full = "Узнаваемые благодаря своему удивительному покрытию бриллиант, тарелки A Custom отличаются уникальными тональными выемками и низкими профилями. Вместе эти характеристики обеспечивают плавный и яркий, якобы стеклянный звук с большей отдачей при ударе. Именно эти качества сделали звучание тарелок A Custom особенно востребованным в студии.";
    eight.characteristics = [
        {
            name: "Вид",
            value: "Набор"
        },
        {
            name: "Серия",
            value: "A Custom"
        },
        {
            name: "В наборе",
            value: '14" HiHat; 16" Crash; 18" Crash; 20" Ride'
        },
        {
            name: "Толщина",
            value: "Medium Thin/Medium"
        },
        {
            name: "Гарантия",
            value: "24 месяцев"
        },
    ]
    eight.save();
    let nine = new model();
    nine.name = "Замок для подструнника";
    nine.model = "TAMA MCS70B";
    nine.slug = nine.name + ' ' + nine.model;
    nine.manufacturer = "TAMA";
    nine.category = "percussion-instrument";
    nine.subCategory = "accessories";
    nine.subCatName = 'Аксессуары и комплектующие';
    nine.new = "";
    nine.popular = "";
    nine.price_action = 370;
    nine.price_normal = 420;
    nine.sale = "";
    nine.image = {
        big: ["/storage/product/9/1.png", "/storage/product/9/2.png", "/storage/product/9/3.png"],
        small: ["/storage/product/9/1-1.png", "/storage/product/9/2-1.png", "/storage/product/9/3-1.png"]
    };
    nine.description = "TAMA MCS70В – замок для подструнника (обратная часть) под малый барабан. Расстояние между отверстиями составляет 24 мм.";
    nine.description_full = "TAMA MCS70В – замок для подструнника (обратная часть) под малый барабан. Расстояние между отверстиями составляет 24 мм.";
    nine.characteristics = [
        {
            name: "Назначение",
            value: "Для малых барабанов"
        },
        {
            name: "Материал",
            value: "Металл"
        },
        {
            name: "Цвет",
            value: "Xpom"
        },
        {
            name: "Размер товара",
            value: "5 х 4 х 1.3 см"
        },
        {
            name: "Вес без упаковки",
            value: "0,1 кг"
        },
    ]
    nine.save();
    let ten = new model();
    ten.name = "Губная гармошка";
    ten.model = "SUZUKI MR-200 C";
    ten.slug = ten.name + ' ' + ten.model;
    ten.manufacturer = "SUZUKI";
    ten.category = "wind-instrument";
    ten.subCategory = "harmonica";
    ten.subCatName = 'Губные гармошки';
    ten.new = "";
    ten.popular = "";
    ten.price_action = '';
    ten.price_normal = 1163;
    ten.sale = "";
    ten.image = {
        big: ["/storage/product/10/1.png", "/storage/product/10/2.png", "/storage/product/10/3.png"],
        small: ["/storage/product/10/1-1.png", "/storage/product/10/2-1.png", "/storage/product/10/3-1.png"]
    };
    ten.description = "Suzuki MR-200 C – диатоническая губная гармошка, тональность С, 10 отверстий, стальные крышки, язычки из композитного сплава фосфорной бронзы, кейс в комплекте.";
    ten.description_full = "У губной гармошки Harpmaster простой в использовании, свободный дизайн, твердый корпус из ABS и сфокусированные отверстия для нот. Изгибные лазерные язычки из композитного сплава фосфорной бронзы создают ясность и насыщенные, мягкие тона, которые вы ожидаете от гораздо более дорогих гармоник. Классические крышки предлагают внешний вид традиционной гармошки и изготовлены из прочной полированной нержавеющей стали.";
    ten.characteristics = [
        {
            name: "Тип",
            value: "Диатоническая"
        },
        {
            name: "Количество язычков",
            value: "20"
        },
        {
            name: "Цвет",
            value: "Серебряный"
        },
        {
            name: "Тональность",
            value: "C (До мажор)"
        },
        {
            name: "Размеры товара",
            value: "101 x 26 x 20 мм"
        },
    ]
    ten.save();
    let eleven = new model();
    eleven.name = "Труба Bb";
    eleven.model = "Gebr.Stolze TR-100G";
    eleven.slug = eleven.name + ' ' + eleven.model;
    eleven.manufacturer = "Stolze";
    eleven.category = "wind-instrument";
    eleven.subCategory = "brass-wind-instruments";
    eleven.subCatName = 'Медные духовые';
    eleven.new = "";
    eleven.popular = "";
    eleven.price_action = '';
    eleven.price_normal = 7120;
    eleven.sale = "";
    eleven.image = {
        big: ["/storage/product/11/1.jpg", "/storage/product/11/2.jpg", "/storage/product/11/3.jpg"],
        small: ["/storage/product/11/1-1.jpg", "/storage/product/11/2-1.jpg", "/storage/product/11/3-1.jpg"]
    };
    eleven.description = "Gebr.Stolze TR-100G - Труба Bb"
    eleven.description_full = "Корпус, мундштучная трубка и раструб - латунь. Помпы - мельхиор. Диаметр раструба 123 мм. Золотой антикварный лак. Мензура 11.65 мм. Облегчённый футляр. Дизайн разработан в США. Пружины и винтики из США";
    eleven.characteristics = [
        {
            name: "Корпус",
            value: "Латунь"
        },
        {
            name: "Помпы",
            value: "Мельхиор"
        },
        {
            name: "Диаметр раструб",
            value: "123 мм"
        }
    ]
    eleven.save();
    let twelve = new model();
    twelve.name = "Aльт-саксофон";
    twelve.model = "Stephan Weis AS-100G";
    twelve.slug = twelve.name + ' ' + twelve.model;
    twelve.manufacturer = "Stephan Weis";
    twelve.category = "wind-instrument";
    twelve.subCategory = "brass-wind-instruments";
    twelve.subCatName = 'Медные духовые';
    twelve.new = "";
    twelve.popular = "";
    twelve.price_normal = 7125;
    twelve.sale = "";
    twelve.image = {
        big: ["/storage/product/12/1.jpg", "/storage/product/12/2.jpg", "/storage/product/12/3.jpg"],
        small: ["/storage/product/12/1-1.jpg", "/storage/product/12/2-1.jpg", "/storage/product/12/3-1.jpg"]
    };
    twelve.description = "Stephan Weis AS-100G - альт-саксофон";
    twelve.description_full = "Корпус - латунь. Золотой лак. Облегчённый футляр. Дизайн разработан в США. Подушки сделаны в Италии. Пружины и винтики из США";
    twelve.characteristics = [
        {
            name: "Корпус",
            value: "латунь"
        },
        {
            name: "Цвет",
            value: "Золотой лак"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    twelve.save();
    let thirteen = new model();
    thirteen.name = "Держатель для губных гармошек";
    thirteen.model = "SUZUKI SHH-10R";
    thirteen.slug = thirteen.name + ' ' + thirteen.model;
    thirteen.manufacturer = "SUZUKI";
    thirteen.category = "wind-instrument";
    thirteen.subCategory = "accessories";
    thirteen.subCatName = 'Аксессуары для духовых инструментов';
    thirteen.new = "";
    thirteen.popular = "";
    thirteen.price_normal = 525;
    thirteen.sale = "";
    thirteen.image = {
        big: ["/storage/product/13/1.png", "/storage/product/13/2.png", "/storage/product/13/3.png"],
        small: ["/storage/product/13/1-1.png", "/storage/product/13/2-1.png", "/storage/product/13/3-1.png"]
    };
    thirteen.description = "Основные особенности Suzuki SHH-10R: Подходит для всех диатонических, хроматических, октавных и других гармошек с 10 отверстиями.";
    thirteen.description_full = "Suzuki SHH-10R – держатель губной гармошки с 10 отверстиями, регулируемая конструкция. Это профессиональный держатель для губной гармошки дает вам свободу действий! Гармошка легко устанавливается. Держатель можно настроить так, чтобы он соответствовал сочетанию разных стилей игры.";
    thirteen.characteristics = [
        {
            name: "Категория",
            value: "Держатели"
        },
        {
            name: "Назначение",
            value: "Для губных гармошек"
        },
        {
            name: "Цвет",
            value: "Черный"
        },
        {
            name: "Дополнительно",
            value: "Регулируемая высота"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    thirteen.save();
    let fourteen = new model();
    fourteen.name = "Гитарный комбоусилитель";
    fourteen.model = "FENDER ACOUSTASONIC 15";
    fourteen.slug = fourteen.name + ' ' + fourteen.model;
    fourteen.manufacturer = "Fender";
    fourteen.category = "equipment";
    fourteen.subCategory = "amplifiers-combo-cabinets";
    fourteen.subCatName = 'Усилители, комбики, кабинеты';
    fourteen.new = "";
    fourteen.popular = "";
    fourteen.price_normal = 7770;
    fourteen.sale = "sale";
    fourteen.image = {
        big: ["/storage/product/14/1.png", "/storage/product/14/2.png", "/storage/product/14/3.png"],
        small: ["/storage/product/14/1-1.png", "/storage/product/14/2-1.png", "/storage/product/14/3-1.png"]
    };
    fourteen.description = "FENDER ACOUSTASONIC 15 представляет собой мобильное и эффективное решение для подзвучивания электроакустической гитары и вокального микрофона, обладающее гибкостью и простотой, достаточными для применения в самых разнообразных музыкальных инсталляциях.";
    fourteen.description_full = "15-ваттный усилитель оснащен одним 6-дюймовым полнодиапазонным динамиком специальной конструкции для более эффективного воспроизведения высоких частот и двумя каналами. Каждый канал оснащен собственным регулятором громкости, эффектом хоруса (для инструментального входа) с возможностью регулировки уровня и кнопкой включения, а также регуляторами эквалайзера Bass/Mid/Treble и выходом на наушники." +
        "Корпус прибора выполнен в классическом стиле Fender - с коричневым текстурированным виниловым покрытием и хромированными металлическими деталями. Кроме бесспорно шикарного внешнего вида, корпус также характеризуется исключительной прочностью и надежностью.";
    fourteen.characteristics = [
        {
            name: "Гитарное оборудование",
            value: "Комбоусилители"
        },
        {
            name: "Назначение",
            value: "Для акустических гитар"
        },
        {
            name: "Цвет",
            value: "Коричневый"
        },
        {
            name: "Мощность",
            value: "15 Вт"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    fourteen.save();
    let fifteen = new model();
    fifteen.name = "Гитарный процессор эффектов";
    fifteen.model = "FENDER TONE MASTER PRO";
    fifteen.slug = fifteen.name + ' ' + fifteen.model;
    fifteen.manufacturer = "Fender";
    fifteen.category = "equipment";
    fifteen.subCategory = "effect-pedals-and-processors";
    fifteen.subCatName = 'Педали эффектов и прoцессоры';
    fifteen.new = "";
    fifteen.popular = "";
    fifteen.price_action = 80976;
    fifteen.price_normal = 100800;
    fifteen.sale = "sale";
    fifteen.image = {
        big: ["/storage/product/15/1.png", "/storage/product/15/2.png", "/storage/product/15/3.png"],
        small: ["/storage/product/15/1-1.png", "/storage/product/15/2-1.png", "/storage/product/15/3-1.png"]
    };
    fifteen.description = "Основные особенности гитарного процессора эффектов Fender Tone Master Pro: Более 100 моделей усилителей и эффектов качества Tone Master.";
    fifteen.description_full = 'Основные особенности гитарного процессора эффектов Fender Tone Master Pro: Более 100 моделей усилителей и эффектов качества Tone Master. Более 6000 импульсных откликов, созданных Fender, с различными вариантами кабинетов и микрофонов. Поддержка IR-импульсов сторонних производителей. 7-дюймовый цветной сенсорный экран. Инновационные режимы Song и Setlist. 60-секундный стерео лупер. 4 петли эффектов для интеграции ваших любимых педалей. Инструментальные и XLR микрофонные входы. 10 фирменных футсвитчей/энкодеров с ЖК-дисплеями. Настоящее переливание хвостов задержки и реверберации для плавной смены пресетов. Обновление прошивки по USB. Совместимость с настольным приложением Tone Master Pro Control для редактирования, обмена и загрузки пресетов. Более 500 пользовательских пресетов с доступом к тысячам других с помощью приложения Tone Master Pro Control. Беспроводное соединение Bluetooth для воспроизведения звука с мобильного устройства. Стерео 1/4" выходной разъем для наушников для бесшумных занятий. Совместимость с педалью экспрессии Mission Engineering SP1-TMP для управления параметрами в реальном времени. Легкий вес, примерно 4 кг.';
    fifteen.characteristics = [
        {
            name: "Тип",
            value: "Процессоры эффектов"
        },
        {
            name: "Эффекты",
            value: "Multi-effects"
        },
        {
            name: "Количество эффектов",
            value: "100+"
        },
        {
            name: "Встроенный тюнер",
            value: "Нет"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    fifteen.save();
    let sixteen = new model();
    sixteen.name = "Тюнер";
    sixteen.model = "FENDER AG6";
    sixteen.slug = sixteen.name + ' ' + sixteen.model;
    sixteen.manufacturer = "FENDER";
    sixteen.category = "equipment";
    sixteen.subCategory = "tuners-and-metronomes";
    sixteen.subCatName = 'Тюнеры и метрономы';
    sixteen.new = "";
    sixteen.popular = "";
    sixteen.price_normal = 7120;
    sixteen.sale = "sale";
    sixteen.image = {
        big: ["/storage/product/1/1.png", "/storage/product/1/2.png", "/storage/product/1/3.png"],
        small: ["/storage/product/1/1-1.png", "/storage/product/1/2-1.png", "/storage/product/1/3-1.png"]
    };
    sixteen.description = "Тюнер синего цвета FENDER AG6 от известной компании FENDER имеет дисплей с подсветкой, что позволяет настраивать его на затемненной сцене"
    sixteen.description_full = 'Тюнер синего цвета FENDER AG6 от известной компании FENDER имеет дисплей с подсветкой, что позволяет настраивать его на затемненной сцене. К тому же отметим наличие разъемов входа 1/4" и выхода 1 / 4", встроенного микрофона и индикатора состояния батарейки, что станет огромным плюсом при живом выступлении.' +
        "Представленный тюнер прекрасно подойдет начинающим гитаристам и их более опытным коллегам, для которых огромную роль играет высокое качество работы устройств и простота их в использовании.";
    sixteen.characteristics = [
        {
            name: "Категория",
            value: "Тюнер"
        },
        {
            name: "Назначение",
            value: "Гитарные"
        },
        {
            name: "Цвет",
            value: "Синий"
        },
        {
            name: "Режимы",
            value: "Гитара, бас-гитара"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    sixteen.save();
    let seventeen = new model();
    seventeen.name = "Микрофон";
    seventeen.model = "MACKIE CARBON";
    seventeen.slug = seventeen.name + ' ' + seventeen.model;
    seventeen.manufacturer = "MACKIE";
    seventeen.category = "equipment";
    seventeen.subCategory = "headphones-and-microphones";
    seventeen.subCatName = 'Наушники и микрофоны';
    seventeen.new = "";
    seventeen.popular = "";
    seventeen.price_normal = 7125;
    seventeen.sale = "";
    seventeen.image = {
        big: ["/storage/product/17/1.png", "/storage/product/17/2.png", "/storage/product/17/3.png"],
        small: ["/storage/product/17/1-1.png", "/storage/product/17/2-1.png", "/storage/product/17/3-1.png"]
    };
    seventeen.description = "USB-микрофоны серии EleMent от Mackie предоставляют качество и универсальность, необходимые для вывода звука на высший уровень: от безупречного воспроизведения вашего последнего стрима до ведения онлайн-встречи.";
    seventeen.description_full = "БУДЬТЕ НА СВЯЗИ С ВАШЕЙ АУДИТОРИЕЙ. Независимо от вашей цели – запустить свой подкаст, стать следующим популярным стримером или сделать вашу музыку более заметной в соцсетях – звук имеет значение." +
        "Если вы хотите получить потрясающее студийное звучание, как у вашего любимого ютубера, подкастера, стримера на Twitch или кого-либо другого, вы оказались в правильном месте. Получить профессиональный звук легче, чем вы могли думать." +
        "Если вам нужна максимальная гибкость, микрофон Mackie Carbon обеспечит ее. В дополнение к возможностям подключения как у EM-USB, он предоставляет 5 диаграмм направленности, улучшенных легендарным предусилителем Onyx. Используйте микрофон со стильной стойкой, включенной в комплект, или закрепите на пантографе с помощью стандартного винтового крепления. Mackie Carbon подходит для создания контента, стриминга и мобильной записи.";
    seventeen.characteristics = [
        {
            name: "Преобразование сигнала",
            value: "Конденсаторный"
        },
        {
            name: "Направленность",
            value: "Сменная направленность"
        },
        {
            name: "Цвет",
            value: "Черный"
        },
        {
            name: "Частотный диапазон",
            value: "20 - 20000 Гц"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    seventeen.save();
    let eighteen = new model();
    eighteen.name = "Гитара электроаккустическая";
    eighteen.model = "FENDER CD-60SCE BLACK";
    eighteen.slug = one.name + ' ' + one.model;
    eighteen.manufacturer = "FENDER";
    eighteen.category = "keyboard-instrument";
    eighteen.subCategory = "digital-piano";
    eighteen.subCatName = 'Цыфровые пианино и органы';
    eighteen.new = "new";
    eighteen.popular = "";
    eighteen.price_action = 6120;
    eighteen.price_normal = 7120;
    eighteen.sale = "sale";
    eighteen.image = {
        big: ["/storage/product/18/1.png", "/storage/product/18/2.png", "/storage/product/18/3.png"],
        small: ["/storage/product/18/1-1.png", "/storage/product/18/2-1.png", "/storage/product/18/3-1.png"]
    };
    eighteen.description = "FENDER CD-60SCE BLACK — новая электроакустическая гитара вкорпусе дредноут от знаменитого" +
        " американского производителя, оснащенная высококачественной электроникой."
    eighteen.description_full = "Верхняя дека CD-60SCE BLACK WN из цельной древесины ели," +
        " что придает инструменту прекрасные акустические характеристики при любом стиле игры." +
        " Нижняя дека и обечайка сделаны из махагони, что позволило не только получить эффектный внешний вид," +
        " но и добиться сбалансированного звучания и впечатляющей громкости. Гриф профиля Fender Easy-to-Play" +
        " также выполнен из махагони с однослойной черной окантовкой. Удобная форма грифа придется по душе" +
        " как начинающим гитаристам, так и опытным профессиональным музыкантам. Накладка — орех, радиус 12″ (305мм)," +
        " инкрустирована перламутровыми точками диаметром 3 мм. На грифе 20 ладов." +
        "Пьезозвукосниматель Fishman с предусилителем и встроенным тюнером оснащен удобными регуляторами для настройки," +
        " при этом сохраняется чистый, густой и насыщенный звук с прекрасным резонансом. Бридж выполнен из палисандра," +
        " фурнитура — хромированная. Венецианский вырез с плавным изгибом дает удобный доступ к верхним ладам." +
        " Розетка красиво оформлена перламутром.";
    eighteen.characteristics = [
        {
            name: "Тип",
            value: "Электроакустичеcкие"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "Черный"
        },
        {
            name: "Количество ладов",
            value: "20"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    eighteen.save();
    let nineteen = new model();
    nineteen.name = "Электрогитара";
    nineteen.model = "IBANEZ GRG140 BKN";
    nineteen.slug = nineteen.name + ' ' + nineteen.model;
    nineteen.manufacturer = "IBANEZ";
    nineteen.category = "keyboard-instrument";
    nineteen.subCategory = "synthesizer";
    nineteen.subCatName = 'Синтезаторы';
    nineteen.new = "";
    nineteen.popular = "popular";
    nineteen.price_normal = 7125;
    nineteen.sale = "";
    nineteen.image = {
        big: ["/storage/product/19/1.png", "/storage/product/19/2.png", "/storage/product/19/3.png"],
        small: ["/storage/product/19/1-1.png", "/storage/product/19/2-1.png", "/storage/product/19/3-1.png"]
    };
    nineteen.description = "Компания IBANEZ представляет электрогитару GRG140. " +
        "Эта электрогитара является фаворитом в своем классе. Свое положение она завоевала" +
        " качеством звука и практичностью в использовании. Электрогитара GRG140 подойдет как новичку, так и более опытному музыканту.";
    nineteen.description_full = "IBANEZ GRG140-BKN - это 6-струнная электрогитара с отличным звучанием." +
        " Компания IBANEZ постаралась и смогла выразить стиль, четкость звука и качество сборки.Гитара имеет 24 лада." +
        " Гриф гитары не очень широкий. Эта особенность очень удобна для всех, так как предоставляет отличный доступ к верхним ладам." +
        " Гриф изготовлен из клена. Накладка на грифе сделана из палисандра. Корпус изготовлен из липы. Фурнитура хромированная." +
        " Модель имеет схему звукоснимателей H-S-S, что отлично подходит для разных стилей музыки. " +
        "Электрогитара имеет очень хороший звук для гитар этого класса, отлично сочетает в себе качество и приемлемую цену. " +
        "IBANEZ GRG140 - отличный выбор для новичков и любителей.";
    nineteen.characteristics = [
        {
            name: "Тип",
            value: "Электрогитара"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "Черный"
        },
        {
            name: "Количество ладов",
            value: "24"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    nineteen.save();
    let twenty = new model();
    twenty.name = "Гитара";
    twenty.model = "Fender PLAYER TELECASTER";
    twenty.slug = twenty.name + ' ' + twenty.model;
    twenty.manufacturer = "Fender";
    twenty.category = "keyboard-instrument";
    twenty.subCategory = "midi-keyboard";
    twenty.subCatName = 'MIDI-клавиатуры';
    twenty.new = "";
    twenty.popular = "";
    twenty.price_action = 23425;
    twenty.price_normal = 24525;
    twenty.sale = "sale";
    twenty.image = {
        big: ["/storage/product/20/1.png", "/storage/product/20/2.png", "/storage/product/20/3.png"],
        small: ["/storage/product/20/1-1.png", "/storage/product/20/2-1.png", "/storage/product/20/3-1.png"]
    };
    twenty.description = "Идеально подходящая для сильной музыкальной атаки электрогитара" +
        " Fender Player Telecaster HH PF – это чистый Fender до мозга костей. " +
        "Ощущение, стиль и, самое главное, звук – все они здесь ждут, " +
        "пока вы заставите их шептать или кричать для вашей музыки. ";
    twenty.description_full = "IИнструмент достаточно гибкий, чтобы справиться практически со всем, " +
        "что вы можете создать, и достаточно прочный, чтобы пережить любое выступление." +
        " Эта рабочая лошадка – верный товарищ вашего музыкального видения. Разработанные для аутентичного" +
        " звучания Fender звукосниматели серии Player стоят одной ногой в прошлом, но смотрят в будущее." +
        "Бридж Telecaster струны-сквозь-корпус обладает седлами из изогнутого металла (bent-steel), " +
        "чтобы немного оживить ваш тон. Гриф разработан для удобства и производительности. " +
        "С профилем «Modern C» и гладким покрытием задней части он идеально подходит " +
        "практически для любого стиля игры. Дополнительный лад дает доступ к четырем октавам музыкальных возможностей." +
        " Каждая электрогитара серии Player Telecaster включает пластину на грифе с тисненой буквой «F»," +
        " не оставляя никаких сомнений касательно происхождения инструмента.";
    twenty.characteristics = [
        {
            name: "Тип",
            value: "Электрогитара"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "3-Tone Sunburst"
        },
        {
            name: "Количество ладов",
            value: "22"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    twenty.save();
    let twenty_one = new model();
    twenty_one.name = "Гитара";
    twenty_one.model = "Fender PLAYER TELECASTER";
    twenty_one.slug = twenty_one.name + ' ' + twenty_one.model;
    twenty_one.manufacturer = "Fender";
    twenty_one.category = "keyboard-instrument";
    twenty_one.subCategory = "equipment-keyboard";
    twenty_one.subCatName = 'Оборудование для клавишных интрументов';
    twenty_one.new = "";
    twenty_one.popular = "";
    twenty_one.price_action = 23425;
    twenty_one.price_normal = 24525;
    twenty_one.sale = "sale";
    twenty_one.image = {
        big: ["/storage/product/21/1.png", "/storage/product/21/2.png", "/storage/product/21/3.png"],
        small: ["/storage/product/21/1-1.png", "/storage/product/21/2-1.png", "/storage/product/21/3-1.png"]
    };
    twenty_one.description = "Идеально подходящая для сильной музыкальной атаки электрогитара" +
        " Fender Player Telecaster HH PF – это чистый Fender до мозга костей. " +
        "Ощущение, стиль и, самое главное, звук – все они здесь ждут, " +
        "пока вы заставите их шептать или кричать для вашей музыки. ";
    twenty_one.description_full = "IИнструмент достаточно гибкий, чтобы справиться практически со всем, " +
        "что вы можете создать, и достаточно прочный, чтобы пережить любое выступление." +
        " Эта рабочая лошадка – верный товарищ вашего музыкального видения. Разработанные для аутентичного" +
        " звучания Fender звукосниматели серии Player стоят одной ногой в прошлом, но смотрят в будущее." +
        "Бридж Telecaster струны-сквозь-корпус обладает седлами из изогнутого металла (bent-steel), " +
        "чтобы немного оживить ваш тон. Гриф разработан для удобства и производительности. " +
        "С профилем «Modern C» и гладким покрытием задней части он идеально подходит " +
        "практически для любого стиля игры. Дополнительный лад дает доступ к четырем октавам музыкальных возможностей." +
        " Каждая электрогитара серии Player Telecaster включает пластину на грифе с тисненой буквой «F»," +
        " не оставляя никаких сомнений касательно происхождения инструмента.";
    twenty_one.characteristics = [
        {
            name: "Тип",
            value: "Электрогитара"
        },
        {
            name: "Количество струн",
            value: "6"
        },
        {
            name: "Цвет",
            value: "3-Tone Sunburst"
        },
        {
            name: "Количество ладов",
            value: "22"
        },
        {
            name: "Гарантия",
            value: "12 месяцев"
        },
    ]
    twenty_one.save();

    response.send("Ok");
}