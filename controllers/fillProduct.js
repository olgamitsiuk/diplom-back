const model = require("../models/product");

exports.seed = function (request, response) {
    // model.deleteMany({}, function(err) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log("Delete many OK");
    //         //res.end('success');
    //     }
    // });
    let one = new model();
    one.name = "Гитара электроаккустическая";
    one.model = "FENDER CD-60SCE BLACK";
    one.slug = one.name + ' ' + one.model;
    one.manufacturer = "FENDER";
    one.category = "guitar";
    one.subCategory = "electric-acoustic-guitar";
    one.subCatName = 'Элeктроакустические гитары';
    one.new = "new";
    one.popular = ""
    one.price_action = 6120;
    one.price_normal = 7120;
    one.sale = "sale";
    one.image = {
        big: ["/storage/product/1/1.jpg", "/storage/product/1/2.jpg", "/storage/product/1/3.jpg"],
        small: ["/storage/product/1/1-1.jpg", "/storage/product/1/2-1.jpg", "/storage/product/1/3-1.jpg"  ]};
    one.description = "FENDER CD-60SCE BLACK — новая электроакустическая гитара вкорпусе дредноут от знаменитого" +
        " американского производителя, оснащенная высококачественной электроникой."
    one.description_full = "Верхняя дека CD-60SCE BLACK WN из цельной древесины ели," +
        " что придает инструменту прекрасные акустические характеристики при любом стиле игры."  +
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
            small: ["/storage/product/2/1-1.jpg", "/storage/product/2/2-1.jpg", "/storage/product/2/3-1.jpg"  ]};
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
    three.name = "Электрогитара";
    three.model = "Fender PLAYER TELECASTER";
    three.slug = three.name + ' ' + three.model;
    three.manufacturer = "Fender";
    three.category = "guitar";
    three.subCategory = "electric-guitar";
    three.subCatName = 'Электрогитары';
    three.new = "new";
    three.popular = "popular";
    three.price_action = 23425;
    three.price_normal = 24525;
    three.sale = "sale";
    three.image = {big: ["/storage/product/3/1.jpg", "/storage/product/3/2.jpg", "/storage/product/3/3.jpg"],
        small: ["/storage/product/3/1-1.jpg", "/storage/product/3/2-1.jpg", "/storage/product/3/3-1.jpg"  ]};
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
    response.send("Ok");
}