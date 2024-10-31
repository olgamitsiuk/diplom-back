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
    one.name = "Electroacoustic Guitar";
    one.model = "FENDER CD-60SCE BLACK";
    one.slug = one.name + ' ' + one.model;
    one.manufacturer = "FENDER";
    one.category = "guitar";
    one.subCategory = "electric-acoustic-guitar";
    one.subCatName = 'Electroacoustic Guitars';
    one.new = "new";
    one.popular = "popular";
    one.price_action = 6120;
    one.price_normal = 7120;
    one.sale = "sale";
    one.image = {
        big: ["/storage/product/1/1.jpg", "/storage/product/1/2.jpg", "/storage/product/1/3.jpg"],
        small: ["/storage/product/1/1-1.jpg", "/storage/product/1/2-1.jpg", "/storage/product/1/3-1.jpg"]
    };
    one.description = "FENDER CD-60SCE BLACK — a new electroacoustic guitar in dreadnought body style from the famous " +
        "American manufacturer, equipped with high-quality electronics."
    one.description_full = "The CD-60SCE BLACK WN features a solid spruce top, " +
        "which gives the instrument excellent acoustic characteristics for any playing style. " +
        "The back and sides are made of mahogany, which not only provides an impressive appearance " +
        "but also achieves balanced sound and impressive volume. The Fender Easy-to-Play profile neck " +
        "is also made of mahogany with a single-layer black binding. The comfortable neck shape will appeal " +
        "to both beginning guitarists and experienced professional musicians. The fingerboard is walnut, with a 12″ radius (305mm), " +
        "inlaid with 3mm pearl dots. The neck has 20 frets. " +
        "The Fishman pickup with preamp and built-in tuner features convenient control knobs for adjustment, " +
        "while maintaining clean, rich, and full sound with excellent resonance. The bridge is made of rosewood, " +
        "and the hardware is chrome-plated. The Venetian cutaway with smooth curve provides easy access to upper frets. " +
        "The rosette is beautifully decorated with mother of pearl.";
    one.characteristics = [
        {
            name: "Type",
            value: "Electroacoustic"
        },
        {
            name: "Number of strings",
            value: "6"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Number of frets",
            value: "20"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    one.save();

    let two = new model();
    two.name = "Electric Guitar";
    two.model = "IBANEZ GRG140 BKN";
    two.slug = two.name + ' ' + two.model;
    two.manufacturer = "IBANEZ";
    two.category = "guitar";
    two.subCategory = "electric-guitar";
    two.subCatName = 'Electric Guitars';
    two.new = "";
    two.popular = "popular";
    two.price_normal = 7125;
    two.sale = "";
    two.image = {
        big: ["/storage/product/2/1.jpg", "/storage/product/2/2.jpg", "/storage/product/2/3.jpg"],
        small: ["/storage/product/2/1-1.jpg", "/storage/product/2/2-1.jpg", "/storage/product/2/3-1.jpg"]
    };
    two.description = "IBANEZ presents the GRG140 electric guitar. " +
        "This electric guitar is a favorite in its class. It has earned its position through " +
        "sound quality and practicality in use. The GRG140 electric guitar is suitable for both beginners and more experienced musicians.";
    two.description_full = "IBANEZ GRG140-BKN is a 6-string electric guitar with excellent sound. " +
        "IBANEZ has worked hard and managed to express style, sound clarity, and build quality. The guitar has 24 frets. " +
        "The guitar neck is not very wide. This feature is very convenient for everyone as it provides excellent access to the upper frets. " +
        "The neck is made of maple. The fingerboard is made of rosewood. The body is made of basswood. The hardware is chrome-plated. " +
        "The model has an H-S-S pickup configuration, which is excellent for different music styles. " +
        "The electric guitar has very good sound for guitars in this class, perfectly combining quality and reasonable price. " +
        "IBANEZ GRG140 is an excellent choice for beginners and enthusiasts.";
    two.characteristics = [
        {
            name: "Type",
            value: "Electric Guitar"
        },
        {
            name: "Number of strings",
            value: "6"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Number of frets",
            value: "24"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    two.save();

    let three = new model();
    three.name = "Guitar";
    three.model = "Fender PLAYER TELECASTER";
    three.slug = three.name + ' ' + three.model;
    three.manufacturer = "Fender";
    three.category = "guitar";
    three.subCategory = "classical-guitar";
    three.subCatName = 'Classical Guitars';
    three.new = "new";
    three.popular = "";
    three.price_action = 23425;
    three.price_normal = 24525;
    three.sale = "sale";
    three.image = {
        big: ["/storage/product/3/1.jpg", "/storage/product/3/2.jpg", "/storage/product/3/3.jpg"],
        small: ["/storage/product/3/1-1.jpg", "/storage/product/3/2-1.jpg", "/storage/product/3/3-1.jpg"]
    };
    three.description = "Perfect for strong musical attack, the Fender Player Telecaster HH PF electric guitar " +
        "is pure Fender to its core. The feel, style, and most importantly, the sound – they're all here waiting " +
        "for you to make them whisper or scream for your music.";
    three.description_full = "The instrument is flexible enough to handle almost anything " +
        "you can create and sturdy enough to survive any performance. " +
        "This workhorse is a faithful companion to your musical vision. Designed for authentic " +
        "Fender sound, the Player series pickups stand with one foot in the past but look to the future. " +
        "The Telecaster bridge with strings-through-body design features bent-steel saddles " +
        "to add some life to your tone. The neck is designed for comfort and performance. " +
        "With its 'Modern C' profile and smooth back finish, it's perfect " +
        "for virtually any playing style. The additional fret gives access to four octaves of musical possibilities. " +
        "Every Player Telecaster series electric guitar includes a neck plate with an embossed 'F' letter, " +
        "leaving no doubt about the instrument's origin.";
    three.characteristics = [
        {
            name: "Type",
            value: "Electric Guitar"
        },
        {
            name: "Number of strings",
            value: "6"
        },
        {
            name: "Color",
            value: "3-Tone Sunburst"
        },
        {
            name: "Number of frets",
            value: "22"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    three.save();

    let four = new model();
    four.name = "Bass Guitar";
    four.model = "IBANEZ GSR180 BSB";
    four.slug = four.name + ' ' + four.model;
    four.manufacturer = "IBANEZ";
    four.category = "guitar";
    four.subCategory = "bass-guitar";
    four.subCatName = 'Bass Guitars';
    four.new = "new";
    four.popular = "";
    four.price_action = 23425;
    four.price_normal = 24525;
    four.sale = "sale";
    four.image = {
        big: ["/storage/product/4/1.png", "/storage/product/4/2.png", "/storage/product/4/3.png"],
        small: ["/storage/product/4/1-1.png", "/storage/product/4/2-1.png", "/storage/product/4/3-1.png"]
    };
    four.description = "IBANEZ GSR180 is a comfortable and beautiful instrument, manufactured with the same care and to the same standards as IBANEZ top-class models.";
    four.description_full = "IBANEZ GSR180 is a comfortable and beautiful instrument, manufactured with the same care and to the same standards as IBANEZ top-class models. This instrument will allow you to refine your technique and develop your own playing style. The GSR180 will excel not only in home practice, rehearsals, or club performances but also on large concert venues. " +
        "When buying their first bass guitar, beginning musicians often choose unusual instruments with flashy colors and shapes, especially signature models of their idols. This isn't the best decision, as every established musician has their own style and creates their signature model based on personal preferences. " +
        "For someone who wants to learn to play, you need a concise but quality instrument on which they can develop skills and form their style. The IBANEZ GSR180 BSB is exactly such an instrument.";
    four.characteristics = [
        {
            name: "Type",
            value: "Bass Guitar"
        },
        {
            name: "Number of strings",
            value: "4"
        },
        {
            name: "Color",
            value: "Sunburst"
        },
        {
            name: "Number of frets",
            value: "22"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    four.save();

    let five = new model();
    five.name = "Guitar Stand";
    five.model = "FENDER DELUXE HANGING GUITAR STAND BLACK/RED";
    five.slug = five.name + ' ' + five.model;
    five.manufacturer = "Fender";
    five.category = "guitar";
    five.subCategory = "accessories";
    five.subCatName = 'Guitar Accessories';
    five.new = "";
    five.popular = "";
    five.price_action = '';
    five.price_normal = 1722;
    five.sale = "";
    five.image = {
        big: ["/storage/product/5/1.png", "/storage/product/5/2.png", "/storage/product/5/3.png"],
        small: ["/storage/product/5/1-1.png", "/storage/product/5/2-1.png", "/storage/product/5/3-1.png"]
    };
    five.description = "FENDER DELUXE HANGING GUITAR STAND BLACK/RED – a floor guitar stand that will safely hold your acoustic, electric, or bass guitar.";
    five.description_full = "FENDER DELUXE HANGING GUITAR STAND BLACK/RED – a floor guitar stand that will safely hold your acoustic, electric, or bass guitar. Along with portability and practicality, the stand features soft padding covering, which is ideal for guitars with scratch-sensitive finishes, such as nitrocellulose finishes. Sturdy metal construction, convenient for transportation.";
    five.characteristics = [
        {
            name: "Type",
            value: "Stands"
        },
        {
            name: "Guitar capacity",
            value: "1"
        },
        {
            name: "Color",
            value: "Black/Red"
        },
        {
            name: "Material",
            value: "Metal"
        },
        {
            name: "Weight",
            value: "1.6 kg"
        },
    ]
    five.save();

    let six = new model();
    six.name = "Snare Drum";
    six.model = "TAMA AW-455 LIMITED MASTERCRAFT ARTWOOD";
    six.slug = six.name + ' ' + six.model;
    six.manufacturer = "TAMA";
    six.category = "percussion-instrument";
    six.subCategory = "acoustic-percussion";
    six.subCatName = 'Acoustic Drums';
    six.new = "new";
    six.popular = "";
    six.price_action = 31920;
    six.price_normal = 39900;
    six.sale = "sale";
    six.image = {
        big: ["/storage/product/6/1.png", "/storage/product/6/2.png", "/storage/product/6/3.png"],
        small: ["/storage/product/6/1-1.png", "/storage/product/6/2-1.png", "/storage/product/6/3-1.png"]
    };
    six.description = "Tama AW-455 Limited Mastercraft Artwood – a snare drum from the limited 50th Anniversary series, 14x5 size, 9mm shell thickness, made of 6-ply birch with center inlay, natural finish."
    six.description_full = "The 9mm/6-ply birch shell provides clear low and mid-frequency sound with precise projection. " +
        "For detailed and sensitive response, the drum is equipped with TAMA's unique Roller Action Strainer, an innovative full-contact snare design that uses a single on/off lever and dual guide rollers for simple and versatile adjustment. This precise replica of the original TAMA Mastercraft Artwood snare drum is a remarkably beautiful celebration of TAMA's 50th anniversary. " +
        "The 9mm, 6-ply all-birch shell with wooden center inlay has gained recognition for its deep low frequencies and excellent sound projection thanks to its 9mm thick shell. The artistic appearance of the wooden inlay, which was only used in the first model, also adds special charm. " +
        "Die-cast hoops (10 lugs). To achieve clear attack and consistent tuning, the Mastercraft snare models in the early 1980s were equipped with 10-lug die-cast hoops, which was unusual for that time. Additionally, these special 50th-anniversary models include a replica of the original snare side hoop with an enlarged snare window. 18-strand carbon steel snare wires. Roller strainer. Designed as a full-contact snare system, TAMA's innovative Roller Action Strainer provides extremely detailed control over the snare drum's tone and sensitivity.";
    six.characteristics = [
        {
            name: "Type",
            value: "Snare Drum"
        },
        {
            name: "Series",
            value: "Mastercraft"
        },
        {
            name: "Material",
            value: "Birch"
        },
        {
            name: "Color",
            value: "Natural"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    six.save();
    let seven = new model();
    seven.name = "Electronic Drum Kit";
    seven.model = "CARLSBRO CSD130";
    seven.slug = seven.name + ' ' + seven.model;
    seven.manufacturer = "CARLSBRO";
    seven.category = "percussion-instrument";
    seven.subCategory = "electronic-percussion";
    seven.subCatName = 'Electronic Drums';
    seven.new = "";
    seven.popular = "popular";
    seven.price_normal = 14616;
    seven.sale = "new";
    seven.image = {
        big: ["/storage/product/7/1.png", "/storage/product/7/2.png", "/storage/product/7/3.png"],
        small: ["/storage/product/7/1-1.png", "/storage/product/7/2-1.png", "/storage/product/7/3-1.png"]
    };
    seven.description = "Key features and advantages of CARLSBRO CSD130: Compact (when folded takes up no more space than a PC), lightweight, and easy to use";
    seven.description_full = "The CARLSBRO CSD130 was created specifically for the beginning talent. The CSD130 features 250 percussion samples and 20 presets. If the standard samples don't suit you for some reason – no problem! After all, electronic drum kits truly reveal their potential when connected to a computer and using programs like Addictive Drums, EZ Drummer, FXpansion BFD3, etc. You're presented with an endless variety of drum sounds, which thanks to Carlsbro can be used much more elegantly than with a MIDI keyboard. CARLSBRO CSD130 is a wonderful starter musical instrument for the whole family.";
    seven.characteristics = [
        {
            name: "Category",
            value: "Electronic Kit"
        },
        {
            name: "Number of drum pads",
            value: "5"
        },
        {
            name: "Number of cymbal pads",
            value: "3"
        },
        {
            name: "Pad type",
            value: "Rubber"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    seven.save();

    let eight = new model();
    eight.name = "Cymbal Set";
    eight.model = "ZILDJIAN A CUSTOM SET 5 PACK";
    eight.slug = eight.name + ' ' + eight.model;
    eight.manufacturer = "ZILDJIAN";
    eight.category = "percussion-instrument";
    eight.subCategory = "plates";
    eight.subCatName = 'Cymbals';
    eight.new = "";
    eight.popular = "";
    eight.price_action = 23425;
    eight.price_normal = 24525;
    eight.sale = "sale";
    eight.image = {
        big: ["/storage/product/8/1.png", "/storage/product/8/2.png", "/storage/product/8/3.png"],
        small: ["/storage/product/8/1-1.png", "/storage/product/8/2-1.png", "/storage/product/8/3-1.png"]
    };
    eight.description = "ZILDJIAN A CUSTOM SET 5 PACK – bright, airy, and highly responsive cymbals with short sound decay.";
    eight.description_full = "Recognizable by their amazing brilliant finish, A Custom cymbals feature unique tonal grooves and low profiles. Together these characteristics provide a smooth and bright, almost glass-like sound with greater response upon impact. These qualities have made A Custom cymbals particularly sought after in the studio.";
    eight.characteristics = [
        {
            name: "Type",
            value: "Set"
        },
        {
            name: "Series",
            value: "A Custom"
        },
        {
            name: "Included",
            value: '14" HiHat; 16" Crash; 18" Crash; 20" Ride'
        },
        {
            name: "Thickness",
            value: "Medium Thin/Medium"
        },
        {
            name: "Warranty",
            value: "24 months"
        },
    ]
    eight.save();

    let nine = new model();
    nine.name = "Snare Strainer Lock";
    nine.model = "TAMA MCS70B";
    nine.slug = nine.name + ' ' + nine.model;
    nine.manufacturer = "TAMA";
    nine.category = "percussion-instrument";
    nine.subCategory = "accessories";
    nine.subCatName = 'Accessories and Parts';
    nine.new = "";
    nine.popular = "";
    nine.price_action = 370;
    nine.price_normal = 420;
    nine.sale = "";
    nine.image = {
        big: ["/storage/product/9/1.png", "/storage/product/9/2.png", "/storage/product/9/3.png"],
        small: ["/storage/product/9/1-1.png", "/storage/product/9/2-1.png", "/storage/product/9/3-1.png"]
    };
    nine.description = "TAMA MCS70B – snare strainer lock (reverse part) for snare drum. The distance between holes is 24 mm.";
    nine.description_full = "TAMA MCS70B – snare strainer lock (reverse part) for snare drum. The distance between holes is 24 mm.";
    nine.characteristics = [
        {
            name: "Purpose",
            value: "For snare drums"
        },
        {
            name: "Material",
            value: "Metal"
        },
        {
            name: "Color",
            value: "Chrome"
        },
        {
            name: "Product size",
            value: "5 x 4 x 1.3 cm"
        },
        {
            name: "Weight without packaging",
            value: "0.1 kg"
        },
    ]
    nine.save();

    let ten = new model();
    ten.name = "Harmonica";
    ten.model = "SUZUKI MR-200 C";
    ten.slug = ten.name + ' ' + ten.model;
    ten.manufacturer = "SUZUKI";
    ten.category = "wind-instrument";
    ten.subCategory = "harmonica";
    ten.subCatName = 'Harmonicas';
    ten.new = "";
    ten.popular = "";
    ten.price_action = '';
    ten.price_normal = 1163;
    ten.sale = "";
    ten.image = {
        big: ["/storage/product/10/1.png", "/storage/product/10/2.png", "/storage/product/10/3.png"],
        small: ["/storage/product/10/1-1.png", "/storage/product/10/2-1.png", "/storage/product/10/3-1.png"]
    };
    ten.description = "Suzuki MR-200 C – diatonic harmonica, key of C, 10 holes, steel covers, phosphor bronze composite reeds, case included.";
    ten.description_full = "The Harpmaster harmonica features an easy-to-use, free design, solid ABS body, and focused note holes. The laser-bent reeds made of phosphor bronze composite create clarity and rich, soft tones that you'd expect from much more expensive harmonicas. The classic covers offer the look of a traditional harmonica and are made of durable polished stainless steel.";
    ten.characteristics = [
        {
            name: "Type",
            value: "Diatonic"
        },
        {
            name: "Number of reeds",
            value: "20"
        },
        {
            name: "Color",
            value: "Silver"
        },
        {
            name: "Key",
            value: "C (C major)"
        },
        {
            name: "Product dimensions",
            value: "101 x 26 x 20 mm"
        },
    ]
    ten.save();

    let eleven = new model();
    eleven.name = "Bb Trumpet";
    eleven.model = "Gebr.Stolze TR-100G";
    eleven.slug = eleven.name + ' ' + eleven.model;
    eleven.manufacturer = "Stolze";
    eleven.category = "wind-instrument";
    eleven.subCategory = "brass-wind-instruments";
    eleven.subCatName = 'Brass Instruments';
    eleven.new = "";
    eleven.popular = "";
    eleven.price_action = '';
    eleven.price_normal = 7120;
    eleven.sale = "";
    eleven.image = {
        big: ["/storage/product/11/1.jpg", "/storage/product/11/2.jpg", "/storage/product/11/3.jpg"],
        small: ["/storage/product/11/1-1.jpg", "/storage/product/11/2-1.jpg", "/storage/product/11/3-1.jpg"]
    };
    eleven.description = "Gebr.Stolze TR-100G - Bb Trumpet"
    eleven.description_full = "Body, mouthpipe, and bell - brass. Valves - nickel silver. Bell diameter 123 mm. Gold antique lacquer. Bore size 11.65 mm. Lightweight case. Design developed in the USA. Springs and screws from USA";
    eleven.characteristics = [
        {
            name: "Body",
            value: "Brass"
        },
        {
            name: "Valves",
            value: "Nickel silver"
        },
        {
            name: "Bell diameter",
            value: "123 mm"
        }
    ]
    eleven.save();

    let twelve = new model();
    twelve.name = "Alto Saxophone";
    twelve.model = "Stephan Weis AS-100G";
    twelve.slug = twelve.name + ' ' + twelve.model;
    twelve.manufacturer = "Stephan Weis";
    twelve.category = "wind-instrument";
    twelve.subCategory = "brass-wind-instruments";
    twelve.subCatName = 'Brass Instruments';
    twelve.new = "";
    twelve.popular = "";
    twelve.price_normal = 7125;
    twelve.sale = "";
    twelve.image = {
        big: ["/storage/product/12/1.jpg", "/storage/product/12/2.jpg", "/storage/product/12/3.jpg"],
        small: ["/storage/product/12/1-1.jpg", "/storage/product/12/2-1.jpg", "/storage/product/12/3-1.jpg"]
    };
    twelve.description = "Stephan Weis AS-100G - alto saxophone";
    twelve.description_full = "Body - brass. Gold lacquer finish. Lightweight case. Design developed in the USA. Pads made in Italy. Springs and screws from USA";
    twelve.characteristics = [
        {
            name: "Body",
            value: "Brass"
        },
        {
            name: "Color",
            value: "Gold lacquer"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    twelve.save();

    let thirteen = new model();
    thirteen.name = "Harmonica Holder";
    thirteen.model = "SUZUKI SHH-10R";
    thirteen.slug = thirteen.name + ' ' + thirteen.model;
    thirteen.manufacturer = "SUZUKI";
    thirteen.category = "wind-instrument";
    thirteen.subCategory = "accessories";
    thirteen.subCatName = 'Wind Instrument Accessories';
    thirteen.new = "";
    thirteen.popular = "";
    thirteen.price_normal = 525;
    thirteen.sale = "";
    thirteen.image = {
        big: ["/storage/product/13/1.png", "/storage/product/13/2.png", "/storage/product/13/3.png"],
        small: ["/storage/product/13/1-1.png", "/storage/product/13/2-1.png", "/storage/product/13/3-1.png"]
    };
    thirteen.description = "Main features of Suzuki SHH-10R: Suitable for all diatonic, chromatic, octave, and other 10-hole harmonicas.";
    thirteen.description_full = "Suzuki SHH-10R – 10-hole harmonica holder with adjustable construction. This professional harmonica holder gives you freedom of action! The harmonica installs easily. The holder can be adjusted to accommodate different playing styles.";
    thirteen.characteristics = [
        {
            name: "Category",
            value: "Holders"
        },
        {
            name: "Purpose",
            value: "For harmonicas"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Additional features",
            value: "Adjustable height"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    thirteen.save();

    let fourteen = new model();
    fourteen.name = "Guitar Combo Amplifier";
    fourteen.model = "FENDER ACOUSTASONIC 15";
    fourteen.slug = fourteen.name + ' ' + fourteen.model;
    fourteen.manufacturer = "Fender";
    fourteen.category = "equipment";
    fourteen.subCategory = "amplifiers-combo-cabinets";
    fourteen.subCatName = 'Amplifiers, Combos, Cabinets';
    fourteen.new = "new";
    fourteen.popular = "";
    fourteen.price_normal = 7770;
    fourteen.sale = "sale";
    fourteen.image = {
        big: ["/storage/product/14/1.png", "/storage/product/14/2.png", "/storage/product/14/3.png"],
        small: ["/storage/product/14/1-1.png", "/storage/product/14/2-1.png", "/storage/product/14/3-1.png"]
    };
    fourteen.description = "FENDER ACOUSTASONIC 15 represents a mobile and effective solution for amplifying an electroacoustic guitar and vocal microphone, possessing the flexibility and simplicity sufficient for use in various musical installations.";
    fourteen.description_full = "The 15-watt amplifier is equipped with one 6-inch full-range speaker specially designed for more efficient high-frequency reproduction and two channels. Each channel has its own volume control, chorus effect (for the instrument input) with adjustable level and on/off button, as well as Bass/Mid/Treble EQ controls and a headphone output. " +
        "The unit's cabinet is designed in classic Fender style - with brown textured vinyl covering and chrome metal details. Besides its undeniably elegant appearance, the cabinet is also characterized by exceptional durability and reliability.";
    fourteen.characteristics = [
        {
            name: "Guitar equipment",
            value: "Combo amplifiers"
        },
        {
            name: "Purpose",
            value: "For acoustic guitars"
        },
        {
            name: "Color",
            value: "Brown"
        },
        {
            name: "Power",
            value: "15W"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    fourteen.save();
    let fifteen = new model();
    fifteen.name = "Guitar Effects Processor";
    fifteen.model = "FENDER TONE MASTER PRO";
    fifteen.slug = fifteen.name + ' ' + fifteen.model;
    fifteen.manufacturer = "Fender";
    fifteen.category = "equipment";
    fifteen.subCategory = "effect-pedals-and-processors";
    fifteen.subCatName = 'Effect Pedals and Processors';
    fifteen.new = "";
    fifteen.popular = "";
    fifteen.price_action = 80976;
    fifteen.price_normal = 100800;
    fifteen.sale = "sale";
    fifteen.image = {
        big: ["/storage/product/15/1.png", "/storage/product/15/2.png", "/storage/product/15/3.png"],
        small: ["/storage/product/15/1-1.png", "/storage/product/15/2-1.png", "/storage/product/15/3-1.png"]
    };
    fifteen.description = "Key features of Fender Tone Master Pro guitar effects processor: Over 100 Tone Master quality amp and effect models.";
    fifteen.description_full = 'Key features of the Fender Tone Master Pro guitar effects processor: Over 100 Tone Master quality amp and effect models. More than 6,000 Fender-created impulse responses with various cabinet and microphone options. Third-party IR support. 7-inch color touchscreen. Innovative Song and Setlist modes. 60-second stereo looper. 4 effects loops for integrating your favorite pedals. Instrument and XLR microphone inputs. 10 custom footswitches/encoders with LCD displays. True spillover of delay and reverb tails for smooth preset transitions. USB firmware updates. Compatible with Tone Master Pro Control desktop application for editing, sharing, and loading presets. Over 500 user presets with access to thousands more using the Tone Master Pro Control app. Bluetooth wireless connection for audio playback from mobile devices. Stereo 1/4" headphone output for silent practice. Compatible with Mission Engineering SP1-TMP expression pedal for real-time parameter control. Lightweight, approximately 4 kg.';
    fifteen.characteristics = [
        {
            name: "Type",
            value: "Effects Processor"
        },
        {
            name: "Effects",
            value: "Multi-effects"
        },
        {
            name: "Number of effects",
            value: "100+"
        },
        {
            name: "Built-in tuner",
            value: "No"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    fifteen.save();

    let sixteen = new model();
    sixteen.name = "Tuner";
    sixteen.model = "FENDER AG6";
    sixteen.slug = sixteen.name + ' ' + sixteen.model;
    sixteen.manufacturer = "FENDER";
    sixteen.category = "equipment";
    sixteen.subCategory = "tuners-and-metronomes";
    sixteen.subCatName = 'Tuners and Metronomes';
    sixteen.new = "";
    sixteen.popular = "";
    sixteen.price_normal = 7120;
    sixteen.sale = "sale";
    sixteen.image = {
        big: ["/storage/product/16/1.png", "/storage/product/16/2.png", "/storage/product/16/3.png"],
        small: ["/storage/product/16/1-1.png", "/storage/product/16/2-1.png", "/storage/product/16/3-1.png"]
    };
    sixteen.description = "The blue FENDER AG6 tuner from the renowned FENDER company features a backlit display, allowing for tuning on a darkened stage"
    sixteen.description_full = 'The blue FENDER AG6 tuner from the renowned FENDER company features a backlit display, allowing for tuning on a darkened stage. Additionally, we note the presence of 1/4" input and 1/4" output jacks, built-in microphone, and battery status indicator, which will be a huge plus during live performance.' +
        "This tuner is perfect for beginning guitarists and their more experienced colleagues who value high-quality performance and ease of use in their devices.";
    sixteen.characteristics = [
        {
            name: "Category",
            value: "Tuner"
        },
        {
            name: "Purpose",
            value: "Guitar"
        },
        {
            name: "Color",
            value: "Blue"
        },
        {
            name: "Modes",
            value: "Guitar, bass guitar"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    sixteen.save();

    let seventeen = new model();
    seventeen.name = "Microphone";
    seventeen.model = "MACKIE CARBON";
    seventeen.slug = seventeen.name + ' ' + seventeen.model;
    seventeen.manufacturer = "MACKIE";
    seventeen.category = "equipment";
    seventeen.subCategory = "headphones-and-microphones";
    seventeen.subCatName = 'Headphones and Microphones';
    seventeen.new = "new";
    seventeen.popular = "popular";
    seventeen.price_normal = 7125;
    seventeen.sale = "";
    seventeen.image = {
        big: ["/storage/product/17/1.png", "/storage/product/17/2.png", "/storage/product/17/3.png"],
        small: ["/storage/product/17/1-1.png", "/storage/product/17/2-1.png", "/storage/product/17/3-1.png"]
    };
    seventeen.description = "The EleMent series USB microphones from Mackie provide the quality and versatility needed to take your sound to the next level: from flawless reproduction of your latest stream to conducting online meetings.";
    seventeen.description_full = "STAY CONNECTED WITH YOUR AUDIENCE. Whether your goal is to launch your podcast, become the next popular streamer, or make your music more noticeable on social media – sound matters. " +
        "If you want to get amazing studio-quality sound like your favorite YouTuber, podcaster, Twitch streamer, or anyone else, you're in the right place. Getting professional sound is easier than you might think. " +
        "If you need maximum flexibility, the Mackie Carbon microphone will provide it. In addition to the connectivity options of the EM-USB, it offers 5 polar patterns, enhanced by the legendary Onyx preamp. Use the microphone with the stylish included stand or mount it on a boom arm using the standard screw mount. Mackie Carbon is suitable for content creation, streaming, and mobile recording.";
    seventeen.characteristics = [
        {
            name: "Signal conversion",
            value: "Condenser"
        },
        {
            name: "Directionality",
            value: "Multiple patterns"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Frequency response",
            value: "20 - 20000 Hz"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    seventeen.save();

    let eighteen = new model();
    eighteen.name = "Digital Piano";
    eighteen.model = "YAMAHA P-125B";
    eighteen.slug = eighteen.name + ' ' + eighteen.model;
    eighteen.manufacturer = "YAMAHA";
    eighteen.category = "keyboard-instrument";
    eighteen.subCategory = "digital-piano";
    eighteen.subCatName = 'Digital Pianos and Organs';
    eighteen.new = "new";
    eighteen.popular = "popular";
    eighteen.price_action = 6120;
    eighteen.price_normal = 7120;
    eighteen.sale = "sale";
    eighteen.image = {
        big: ["/storage/product/18/1.png", "/storage/product/18/2.png", "/storage/product/18/3.png"],
        small: ["/storage/product/18/1-1.png", "/storage/product/18/2-1.png", "/storage/product/18/3-1.png"]
    };
    eighteen.description = "YAMAHA P-125B — a new compact digital piano featuring exceptional sound quality and natural keyboard touch, perfect for both beginners and experienced musicians."
    eighteen.description_full = "The P-125B features Yamaha's renowned Pure CF Sound Engine, " +
        "which reproduces the authentic tone of Yamaha's acclaimed CFIIIS concert grand piano. " +
        "The Graded Hammer Standard (GHS) keyboard provides a heavier touch in the low keys and lighter touch in the high keys, " +
        "just like an acoustic piano. The 88-key piano keyboard offers natural resistance and smooth response, " +
        "making it perfect for developing proper finger technique. " +
        "With 192-note polyphony, the P-125B can handle the most demanding musical passages, " +
        "and the Duo mode allows the keyboard to be split into two identical zones, " +
        "perfect for lessons or side-by-side practice. The built-in stereo speaker system " +
        "delivers rich, full sound, while the Table EQ feature optimizes acoustics " +
        "when playing on a flat surface.";
    eighteen.characteristics = [
        {
            name: "Type",
            value: "Digital Piano"
        },
        {
            name: "Number of keys",
            value: "88"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Polyphony",
            value: "192"
        },
        {
            name: "Warranty",
            value: "12 months"
        },
    ]
    eighteen.save()

    let nineteen = new model();
    nineteen.name = "Synthesizer";
    nineteen.model = "KORG MINILOGUE XD";
    nineteen.slug = nineteen.name + ' ' + nineteen.model;
    nineteen.manufacturer = "KORG";
    nineteen.category = "keyboard-instrument";
    nineteen.subCategory = "synthesizer";
    nineteen.subCatName = 'Synthesizers';
    nineteen.new = "";
    nineteen.popular = "popular";
    nineteen.price_normal = 7125;
    nineteen.sale = "";
    nineteen.image = {
        big: ["/storage/product/19/1.png", "/storage/product/19/2.png", "/storage/product/19/3.png"],
        small: ["/storage/product/19/1-1.png", "/storage/product/19/2-1.png", "/storage/product/19/3-1.png"]
    };
    nineteen.description = "KORG MINILOGUE XD is a powerful analog/digital hybrid synthesizer that combines classic analog synthesis with modern digital effects and features.";
    nineteen.description_full = "The MINILOGUE XD features a sophisticated four-voice analog synthesizer architecture " +
        "with a unique hybrid digital multi-engine. The analog section includes 2 VCOs per voice, " +
        "a cross modulation, a 2-pole voltage-controlled high-pass filter, and a 4-pole voltage-controlled " +
        "low-pass filter with resonance. The digital multi-engine offers three different sound engines: " +
        "noise, VPM (Variable Phase Modulation), and user slots for custom oscillators. " +
        "The high-quality digital effects section includes modulation, reverb, and delay effects. " +
        "The 37-key keyboard features velocity sensitivity for expressive playing. " +
        "The intuitive interface includes an OLED display and real-time oscilloscope for visual feedback.";
    nineteen.characteristics = [
        {
            name: "Type",
            value: "Analog/Digital Synthesizer"
        },
        {
            name: "Number of voices",
            value: "4"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Number of keys",
            value: "37"
        },
        {
            name: "Warranty",
            value: "12 months"
        }
    ]
    nineteen.save();

    let twenty = new model();
    twenty.name = "MIDI Controller";
    twenty.model = "ARTURIA KEYLAB 61 MKII";
    twenty.slug = twenty.name + ' ' + twenty.model;
    twenty.manufacturer = "ARTURIA";
    twenty.category = "keyboard-instrument";
    twenty.subCategory = "midi-keyboard";
    twenty.subCatName = 'MIDI Keyboards';
    twenty.new = "";
    twenty.popular = "popular";
    twenty.price_action = 23425;
    twenty.price_normal = 24525;
    twenty.sale = "sale";
    twenty.image = {
        big: ["/storage/product/20/1.png", "/storage/product/20/2.png", "/storage/product/20/3.png"],
        small: ["/storage/product/20/1-1.png", "/storage/product/20/2-1.png", "/storage/product/20/3-1.png"]
    };
    twenty.description = "ARTURIA KEYLAB 61 MKII is a professional MIDI keyboard controller designed for studio production and live performance, featuring premium key action and comprehensive DAW integration.";
    twenty.description_full = "The KeyLab 61 MkII combines premium quality with total control, " +
        "featuring Arturia's Pro-Feel key action for authentic playing response. " +
        "The controller includes 16 RGB-backlit performance pads, 9 large faders, " +
        "9 rotary encoders, and a comprehensive control center for seamless DAW integration. " +
        "Built with a rugged aluminum chassis and wooden side panels, it's designed to withstand " +
        "the rigors of both studio and stage use. The customizable control layout includes " +
        "transport controls, track controls, and a multi-mode chord generator. " +
        "Includes Analog Lab software with thousands of classic synthesizer and keyboard sounds.";
    twenty.characteristics = [
        {
            name: "Type",
            value: "MIDI Controller"
        },
        {
            name: "Number of keys",
            value: "61"
        },
        {
            name: "Color",
            value: "White"
        },
        {
            name: "Connection",
            value: "USB, MIDI"
        },
        {
            name: "Warranty",
            value: "12 months"
        }
    ]
    twenty.save();

    let twenty_one = new model();
    twenty_one.name = "Keyboard Stand";
    twenty_one.model = "K&M OMEGA-PRO";
    twenty_one.slug = twenty_one.name + ' ' + twenty_one.model;
    twenty_one.manufacturer = "K&M";
    twenty_one.category = "keyboard-instrument";
    twenty_one.subCategory = "equipment-keyboard";
    twenty_one.subCatName = 'Keyboard Equipment';
    twenty_one.new = "";
    twenty_one.popular = "";
    twenty_one.price_action = 23425;
    twenty_one.price_normal = 24525;
    twenty_one.sale = "sale";
    twenty_one.image = {
        big: ["/storage/product/21/1.png", "/storage/product/21/2.png", "/storage/product/21/3.png"],
        small: ["/storage/product/21/1-1.png", "/storage/product/21/2-1.png", "/storage/product/21/3-1.png"]
    };
    twenty_one.description = "K&M OMEGA-PRO is a professional-grade keyboard stand featuring robust construction and versatile adjustment options for optimal stability and ergonomics.";
    twenty_one.description_full = "The K&M OMEGA-PRO keyboard stand represents the pinnacle of stability " +
        "and versatility for professional keyboard setups. Built with heavy-duty aluminum " +
        "and steel components, this stand can support up to two keyboards with its dual-tier design. " +
        "The height, angle, and width are fully adjustable to accommodate various keyboard sizes " +
        "and player preferences. Quick-release levers allow for tool-free adjustment, while rubber " +
        "padding protects your equipment and prevents slipping. The stand folds flat for easy " +
        "transport and includes a carrying bag. Perfect for both studio and touring applications, " +
        "the OMEGA-PRO combines professional build quality with practical features.";
    twenty_one.characteristics = [
        {
            name: "Type",
            value: "Keyboard Stand"
        },
        {
            name: "Material",
            value: "Aluminum/Steel"
        },
        {
            name: "Color",
            value: "Black"
        },
        {
            name: "Weight capacity",
            value: "80 kg"
        },
        {
            name: "Warranty",
            value: "12 months"
        }
    ]
    twenty_one.save();

    response.send("Ok");
}