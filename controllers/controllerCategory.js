const category = require("../models/category");

exports.seed = function (request, response) {
    category.deleteMany({}, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete many OK");
            //res.end('success');
        }
    });

    let one = new category();
    one.name = "Guitars";
    one.nameStr = "guitar";
    one.image = "/storage/category/guitar.png";
    one.subCat = [
        {
            name: "Electroacoustic Guitars",
            nameStr: "electric-acoustic-guitar",
            img: '/storage/category/1/acoustic_gitar-50x50.png'
        },
        {
            name: "Electric Guitars",
            nameStr: "electric-guitar",
            img: '/storage/category/1/electric_gitar-50x50.png'
        },
        {
            name: "Classical Guitars",
            nameStr: "classical-guitar",
            img: '/storage/category/1/classic_gitar-50x50.png'
        },
        {
            name: "Bass Guitars",
            nameStr: "bass-guitar",
            img: '/storage/category/1/bass-gitar-50x50.png'
        },
        {
            name: "Guitar Accessories",
            nameStr: "accessories",
            img: '/storage/category/1/case_gitar-50x50.png'
        }];
    one.save();

    let two = new category();
    two.name = "Keyboards";
    two.nameStr = "keyboard-instrument";
    two.image = "/storage/category/keyboard-instrument.png";
    two.subCat = [
        {
            name: "Digital Pianos and Organs",
            nameStr: "digital-piano",
            img: '/storage/category/1/piano-50x50.png'
        },
        {
            name: "Synthesizers",
            nameStr: "synthesizer",
            img: '/storage/category/1/synth-work-station-50x50.png'
        },
        {
            name: "MIDI Keyboards",
            nameStr: "midi-keyboard",
            img: '/storage/category/1/midi-klav-50x50.png'
        },
        {
            name: "Keyboard Instrument Equipment",
            nameStr: "equipment-keyboard",
            img: '/storage/category/1/keypad-stands-50x50.png'
        }];
    two.save();

    let three = new category();
    three.name = "Percussion";
    three.nameStr = "percussion-instrument";
    three.image = "/storage/category/percussion-instrument.png";
    three.subCat = [
        {
            name: "Acoustic Drums",
            nameStr: "acoustic-percussion",
            img: '/storage/category/1/akusticheskie-udarnye-50x50.png'
        },
        {
            name: "Electronic Drums",
            nameStr: "electronic-percussion",
            img: '/storage/category/1/jelektronnye-udarnye-i-perkussija-50x50.png'
        },
        {
            name: "Cymbals",
            nameStr: "plates",
            img: '/storage/category/1/tarelki-50x50.png'
        },
        {
            name: "Accessories and Parts",
            nameStr: "accessories",
            img: '/storage/category/1/aksessuary-i-komplektujushhie-50x50.png'
        }];
    three.save();

    let four = new category();
    four.name = "Wind Instruments";
    four.nameStr = "wind-instrument";
    four.image = "/storage/category/wind-instrument.png";
    four.subCat = [
        {
            name: "Harmonicas",
            nameStr: "harmonica",
            img: '/storage/category/1/gubnye-garmoshki-50x50.png'
        },
        {
            name: "Brass Instruments",
            nameStr: "brass-wind-instruments",
            img: '/storage/category/1/aksessuary1-50x50.png'
        },
        {
            name: "Wind Instrument Accessories",
            nameStr: "accessories",
            img: '/storage/category/1/aksessuary1-50x50.png'
        }];
    four.save();

    let five = new category();
    five.name = "Equipment";
    five.nameStr = "equipment";
    five.image = "/storage/category/equipment.png";
    five.subCat = [
        {
            name: "Amplifiers, Combos, Cabinets",
            nameStr: "amplifiers-combo-cabinets",
            img: '/storage/category/1/amp_combo-150x100.png'
        },
        {
            name: "Effect Pedals and Processors",
            nameStr: "effect-pedals-and-processors",
            img: '/storage/category/1/pedal_effects-150x100.png'
        },
        {
            name: "Tuners and Metronomes",
            nameStr: "tuners-and-metronomes",
            img: '/storage/category/1/tuner_metronom-150x100.png'
        },
        {
            name: "Headphones and Microphones",
            nameStr: "headphones-and-microphones",
            img: '/storage/category/1/microfon-50x50.png'
        }];
    five.save();
    response.send("Ok");
}

exports.getCategory = function (request, response) {
    console.log("Run GET");
    category.find({},
        function (err, allData) {
            if (err) {
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

exports.getCategoryByName = function (request, response) {
    const name = request.params.name;
    category.find({ nameStr: name },
        function (err, allData) {
            if (err) {
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}