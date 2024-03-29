const municipalities = [
  { value: 11440, text: "Ale" },
  { value: 11489, text: "Alingsås" },
  { value: 10764, text: "Alvesta" },
  { value: 10604, text: "Aneby" },
  { value: 11984, text: "Arboga" },
  { value: 12506, text: "Arjeplog" },
  { value: 12505, text: "Arvidsjaur" },
  { value: 11784, text: "Arvika" },
  { value: 11882, text: "Askersund" },
  { value: 12084, text: "Avesta" },
  { value: 11460, text: "Bengtsfors" },
  { value: 12326, text: "Berg" },
  { value: 12403, text: "Bjurholm" },
  { value: 11260, text: "Bjuv" },
  { value: 12582, text: "Boden" },
  { value: 11443, text: "Bollebygd" },
  { value: 12183, text: "Bollnäs" },
  { value: 10885, text: "Borgholm" },
  { value: 12081, text: "Borlänge" },
  { value: 11490, text: "Borås" },
  { value: 10127, text: "Botkyrka" },
  { value: 10560, text: "Boxholm" },
  { value: 11272, text: "Bromölla" },
  { value: 12305, text: "Bräcke" },
  { value: 11231, text: "Burlöv" },
  { value: 11278, text: "Båstad" },
  { value: 11438, text: "Dals-Ed" },
  { value: 10162, text: "Danderyd" },
  { value: 11862, text: "Degerfors" },
  { value: 12425, text: "Dorotea" },
  { value: 11730, text: "Eda" },
  { value: 10125, text: "Ekerö" },
  { value: 10686, text: "Eksjö" },
  { value: 10862, text: "Emmaboda" },
  { value: 10381, text: "Enköping" },
  { value: 10484, text: "Eskilstuna" },
  { value: 11285, text: "Eslöv" },
  { value: 11445, text: "Essunga" },
  { value: 11982, text: "Fagersta" },
  { value: 11382, text: "Falkenberg" },
  { value: 11499, text: "Falköping" },
  { value: 12080, text: "Falun" },
  { value: 11782, text: "Filipstad" },
  { value: 10562, text: "Finspång" },
  { value: 10482, text: "Flen" },
  { value: 11763, text: "Forshaga" },
  { value: 11439, text: "Färgelanda" },
  { value: 12026, text: "Gagnef" },
  { value: 10662, text: "Gislaved" },
  { value: 10461, text: "Gnesta" },
  { value: 10617, text: "Gnosjö" },
  { value: 10980, text: "Gotland" },
  { value: 11764, text: "Grums" },
  { value: 11444, text: "Grästorp" },
  { value: 11447, text: "Gullspång" },
  { value: 12523, text: "Gällivare" },
  { value: 12180, text: "Gävle" },
  { value: 11480, text: "Göteborg" },
  { value: 11471, text: "Götene" },
  { value: 10643, text: "Habo" },
  { value: 11783, text: "Hagfors" },
  { value: 11861, text: "Hallsberg" },
  { value: 11961, text: "Hallstahammar" },
  { value: 11380, text: "Halmstad" },
  { value: 11761, text: "Hammarö" },
  { value: 10136, text: "Haninge" },
  { value: 12583, text: "Haparanda" },
  { value: 11917, text: "Heby" },
  { value: 12083, text: "Hedemora" },
  { value: 11283, text: "Helsingborg" },
  { value: 11466, text: "Herrljunga" },
  { value: 11497, text: "Hjo" },
  { value: 12104, text: "Hofors" },
  { value: 10126, text: "Huddinge" },
  { value: 12184, text: "Hudiksvall" },
  { value: 10860, text: "Hultsfred" },
  { value: 11315, text: "Hylte" },
  { value: 10305, text: "Håbo" },
  { value: 11863, text: "Hällefors" },
  { value: 12361, text: "Härjedalen" },
  { value: 12280, text: "Härnösand" },
  { value: 11401, text: "Härryda" },
  { value: 11293, text: "Hässleholm" },
  { value: 11284, text: "Höganäs" },
  { value: 10821, text: "Högsby" },
  { value: 11266, text: "Hörby" },
  { value: 11267, text: "Höör" },
  { value: 12510, text: "Jokkmokk" },
  { value: 10123, text: "Järfälla" },
  { value: 10680, text: "Jönköping" },
  { value: 12514, text: "Kalix" },
  { value: 10880, text: "Kalmar" },
  { value: 11446, text: "Karlsborg" },
  { value: 11082, text: "Karlshamn" },
  { value: 11883, text: "Karlskoga" },
  { value: 11080, text: "Karlskrona" },
  { value: 11780, text: "Karlstad" },
  { value: 10483, text: "Katrineholm" },
  { value: 11715, text: "Kil" },
  { value: 10513, text: "Kinda" },
  { value: 12584, text: "Kiruna" },
  { value: 11276, text: "Klippan" },
  { value: 12586, text: "Knivsta" },
  { value: 12282, text: "Kramfors" },
  { value: 11290, text: "Kristianstad" },
  { value: 11781, text: "Kristinehamn" },
  { value: 12309, text: "Krokom" },
  { value: 11881, text: "Kumla" },
  { value: 11384, text: "Kungsbacka" },
  { value: 11960, text: "Kungsör" },
  { value: 11482, text: "Kungälv" },
  { value: 11261, text: "Kävlinge" },
  { value: 11983, text: "Köping" },
  { value: 11381, text: "Laholm" },
  { value: 11282, text: "Landskrona" },
  { value: 11860, text: "Laxå" },
  { value: 11814, text: "Lekeberg" },
  { value: 12029, text: "Leksand" },
  { value: 11441, text: "Lerum" },
  { value: 10761, text: "Lessebo" },
  { value: 10186, text: "Lidingö" },
  { value: 11494, text: "Lidköping" },
  { value: 11462, text: "Lilla Edet" },
  { value: 11885, text: "Lindesberg" },
  { value: 10580, text: "Linköping" },
  { value: 10781, text: "Ljungby" },
  { value: 12161, text: "Ljusdal" },
  { value: 11864, text: "Ljusnarsberg" },
  { value: 11262, text: "Lomma" },
  { value: 12085, text: "Ludvika" },
  { value: 12580, text: "Luleå" },
  { value: 11281, text: "Lund" },
  { value: 12481, text: "Lycksele" },
  { value: 11484, text: "Lysekil" },
  { value: 11280, text: "Malmö" },
  { value: 12023, text: "Malung-Sälen" },
  { value: 12418, text: "Malå" },
  { value: 11493, text: "Mariestad" },
  { value: 11463, text: "Mark" },
  { value: 10767, text: "Markaryd" },
  { value: 11461, text: "Mellerud" },
  { value: 10586, text: "Mjölby" },
  { value: 12062, text: "Mora" },
  { value: 10583, text: "Motala" },
  { value: 10642, text: "Mullsjö" },
  { value: 11430, text: "Munkedal" },
  { value: 11762, text: "Munkfors" },
  { value: 11481, text: "Mölndal" },
  { value: 10861, text: "Mönsterås" },
  { value: 10840, text: "Mörbylånga" },
  { value: 10182, text: "Nacka" },
  { value: 11884, text: "Nora" },
  { value: 11962, text: "Norberg" },
  { value: 12132, text: "Nordanstig" },
  { value: 12401, text: "Nordmaling" },
  { value: 10581, text: "Norrköping" },
  { value: 10188, text: "Norrtälje" },
  { value: 12417, text: "Norsjö" },
  { value: 10881, text: "Nybro" },
  { value: 12585, text: "Nykvarn" },
  { value: 10480, text: "Nyköping" },
  { value: 10192, text: "Nynäshamn" },
  { value: 10682, text: "Nässjö" },
  { value: 12101, text: "Ockelbo" },
  { value: 11060, text: "Olofström" },
  { value: 12034, text: "Orsa" },
  { value: 11421, text: "Orust" },
  { value: 11273, text: "Osby" },
  { value: 10882, text: "Oskarshamn" },
  { value: 12121, text: "Ovanåker" },
  { value: 10481, text: "Oxelösund" },
  { value: 12521, text: "Pajala" },
  { value: 11402, text: "Partille" },
  { value: 11275, text: "Perstorp" },
  { value: 12581, text: "Piteå" },
  { value: 12303, text: "Ragunda" },
  { value: 12409, text: "Robertsfors" },
  { value: 11081, text: "Ronneby" },
  { value: 12031, text: "Rättvik" },
  { value: 11981, text: "Sala" },
  { value: 10128, text: "Salem" },
  { value: 12181, text: "Sandviken" },
  { value: 10191, text: "Sigtuna" },
  { value: 11291, text: "Simrishamn" },
  { value: 11265, text: "Sjöbo" },
  { value: 11495, text: "Skara" },
  { value: 12482, text: "Skellefteå" },
  { value: 11904, text: "Skinnskatteberg" },
  { value: 11264, text: "Skurup" },
  { value: 11496, text: "Skövde" },
  { value: 12061, text: "Smedjebacken" },
  { value: 12283, text: "Sollefteå" },
  { value: 10163, text: "Sollentuna" },
  { value: 10184, text: "Solna" },
  { value: 12422, text: "Sorsele" },
  { value: 11427, text: "Sotenäs" },
  { value: 11230, text: "Staffanstorp" },
  { value: 11415, text: "Stenungsund" },
  { value: 10180, text: "Stockholm" },
  { value: 11760, text: "Storfors" },
  { value: 12421, text: "Storuman" },
  { value: 10486, text: "Strängnäs" },
  { value: 11486, text: "Strömstad" },
  { value: 12313, text: "Strömsund" },
  { value: 10183, text: "Sundbyberg" },
  { value: 12281, text: "Sundsvall" },
  { value: 11766, text: "Sunne" },
  { value: 11907, text: "Surahammar" },
  { value: 11214, text: "Svalöv" },
  { value: 11263, text: "Svedala" },
  { value: 11465, text: "Svenljunga" },
  { value: 11785, text: "Säffle" },
  { value: 12082, text: "Säter" },
  { value: 10684, text: "Sävsjö" },
  { value: 12182, text: "Söderhamn" },
  { value: 10582, text: "Söderköping" },
  { value: 10181, text: "Södertälje" },
  { value: 11083, text: "Sölvesborg" },
  { value: 11435, text: "Tanum" },
  { value: 11472, text: "Tibro" },
  { value: 11498, text: "Tidaholm" },
  { value: 10360, text: "Tierp" },
  { value: 12262, text: "Timrå" },
  { value: 10763, text: "Tingsryd" },
  { value: 11419, text: "Tjörn" },
  { value: 11270, text: "Tomelilla" },
  { value: 11737, text: "Torsby" },
  { value: 10834, text: "Torsås" },
  { value: 11452, text: "Tranemo" },
  { value: 10687, text: "Tranås" },
  { value: 11287, text: "Trelleborg" },
  { value: 11488, text: "Trollhättan" },
  { value: 10488, text: "Trosa" },
  { value: 10138, text: "Tyresö" },
  { value: 10160, text: "Täby" },
  { value: 11473, text: "Töreboda" },
  { value: 11485, text: "Uddevalla" },
  { value: 11491, text: "Ulricehamn" },
  { value: 12480, text: "Umeå" },
  { value: 10139, text: "Upplands-Bro" },
  { value: 10114, text: "Upplands-Väsby" },
  { value: 10380, text: "Uppsala" },
  { value: 10760, text: "Uppvidinge" },
  { value: 10584, text: "Vadstena" },
  { value: 10665, text: "Vaggeryd" },
  { value: 10563, text: "Valdemarsvik" },
  { value: 10115, text: "Vallentuna" },
  { value: 12021, text: "Vansbro" },
  { value: 11470, text: "Vara" },
  { value: 11383, text: "Varberg" },
  { value: 10187, text: "Vaxholm" },
  { value: 11233, text: "Vellinge" },
  { value: 10685, text: "Vetlanda" },
  { value: 12462, text: "Vilhelmina" },
  { value: 10884, text: "Vimmerby" },
  { value: 12404, text: "Vindeln" },
  { value: 10428, text: "Vingåker" },
  { value: 11442, text: "Vårgårda" },
  { value: 11487, text: "Vänersborg" },
  { value: 12460, text: "Vännäs" },
  { value: 10120, text: "Värmdö" },
  { value: 10683, text: "Värnamo" },
  { value: 10883, text: "Västervik" },
  { value: 11980, text: "Västerås" },
  { value: 10780, text: "Växjö" },
  { value: 10512, text: "Ydre" },
  { value: 11286, text: "Ystad" },
  { value: 11492, text: "Åmål" },
  { value: 12260, text: "Ånge" },
  { value: 12321, text: "Åre" },
  { value: 11765, text: "Årjäng" },
  { value: 12463, text: "Åsele" },
  { value: 11277, text: "Åstorp" },
  { value: 10561, text: "Åtvidaberg" },
  { value: 10765, text: "Älmhult" },
  { value: 12039, text: "Älvdalen" },
  { value: 10319, text: "Älvkarleby" },
  { value: 12560, text: "Älvsbyn" },
  { value: 11292, text: "Ängelholm" },
  { value: 11407, text: "Öckerö" },
  { value: 10509, text: "Ödeshög" },
  { value: 11880, text: "Örebro" },
  { value: 11257, text: "Örkelljunga" },
  { value: 12284, text: "Örnsköldsvik" },
  { value: 12380, text: "Östersund" },
  { value: 10117, text: "Österåker" },
  { value: 10382, text: "Östhammar" },
  { value: 11256, text: "Östra Göinge" },
  { value: 12513, text: "Överkalix" },
  { value: 12518, text: "Övertorneå" },
]

export { municipalities }
