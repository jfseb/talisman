/**
 * Talisman phonetics/french/phonetic tests
 * =========================================
 *
 */
import assert from 'assert';
import phonetic from '../../../src/phonetics/french/phonetic';

describe('phonetic', function() {
  it('should throw if the given word is not a string.', function() {
    assert.throws(function() {
      phonetic([]);
    }, /string/);
  });

  it('should compute the phonetic code correctly.', function() {
    this.timeout(50 * 1000);
    const tests = [
      ['e', ''],
      ['Gendarme', 'JANDARM'],
      ['Athmosphérique', 'ATMOSFERIK'],
      ['Morceaux', 'MORSO'],
      ['Sciemment', 'SIAMAN'],
      ['Comportement', 'KONPORTEMAN'],
      ['Sceau', 'SO'],
      ['Seau', 'SO'],
      ['Sot', 'SO'],
      ['Saut', 'SO'],
      ['Soûl', 'SOUL'],
      ['Description', 'DESKRIPSION'],
      ['Verre', 'VER'],
      ['Vert', 'VER'],
      ['Vers', 'VER'],
      ['Saule', 'SOL'],
      ['Sol', 'SOL'],
      ['Gnognotte', 'NIONIOT'],
      ['Pendentif', 'PANDANTIF'],
      ['fable', 'FABL'],

      // 500 random words from the original database
      ['limer', 'LIM'],
      ['inconvenante', 'INKONVENANT'],
      ['époussette', 'EPOUSET'],
      ['brinqueballai', 'BRINKEBALAI'],
      ['entr\'égorgerions', 'ANTREGORJERION'],
      ['rengraciais', 'RANGRASIAI'],
      ['chaufour', 'CHOFOUR'],
      ['invoquai', 'INVOKAI'],
      ['arborescente', 'ARBORESANT'],
      ['gérai', 'JERAI'],
      ['émoi', 'EMOI'],
      ['humification', 'UMIFIKASION'],
      ['anachorétique', 'ANAKORETIK'],
      ['réputer', 'REPUT'],
      ['poli', 'POLI'],
      ['dégazonnais', 'DEGAZONAI'],
      ['épicycloïdale', 'EPISIKLOIDAL'],
      ['girofle', 'JIROFL'],
      ['flush', 'FLUCH'],
      ['mea', 'MEA'],
      ['tronquer', 'TRONK'],
      ['chérir', 'CHERIR'],
      ['alléchée', 'ALECH'],
      ['rabattais', 'RABATAI'],
      ['arrimeur', 'ARIMER'],
      ['prêche', 'PRECH'],
      ['pinailleuse', 'PINAIES'],
      ['armorier', 'ARMORI'],
      ['insulte', 'INSULT'],
      ['fondre', 'FONDR'],
      ['du', 'DU'],
      ['solmiser', 'SOLMIS'],
      ['typhlite', 'TIFLIT'],
      ['vous', 'VOU'],
      ['végétale', 'VEJETAL'],
      ['vulcanales', 'VULKANAL'],
      ['bistrais', 'BISTRAI'],
      ['circonvallation', 'SIRKONVALASION'],
      ['calligraphier', 'KALIGRAFI'],
      ['poétiserai', 'POETISERAI'],
      ['cérémonielle', 'SEREMONIEL'],
      ['zinzinulais', 'ZINZINULAI'],
      ['douais', 'DOI'],
      ['surine', 'SURIN'],
      ['hiérarchiquement', 'IERARCHIKEMAN'],
      ['tapiner', 'TAPIN'],
      ['manouche', 'MANOUCH'],
      ['épeuler', 'EPEL'],
      ['démaillais', 'DEMAIAI'],
      ['hocher', 'OCH'],
      ['dol', 'DOL'],
      ['bombement', 'BONBEMAN'],
      ['contrapontiste', 'KONTRAPONTIST'],
      ['duègne', 'DUAN'],
      ['staphylococcie', 'STAFILOKOKSI'],
      ['empestée', 'ANPEST'],
      ['jaseran', 'JASERAN'],
      ['chanfreinerai', 'CHANFRAINERAI'],
      ['jobardai', 'JOBARDAI'],
      ['éclairerai', 'EKLAIRERAI'],
      ['wallonisme', 'OILONISM'],
      ['ouvrageais', 'OUVRAJAI'],
      ['hostilement', 'OSTILEMAN'],
      ['alarmais', 'ALARMAI'],
      ['comparaison', 'KONPARAISON'],
      ['déjetai', 'DEJETAI'],
      ['empapillote', 'ANPAPILOT'],
      ['caillouterai', 'KAILOUTERAI'],
      ['mystagogie', 'MISTAGOJI'],
      ['ceinturai', 'SINTURAI'],
      ['métaphoriquement', 'METAFORIKEMAN'],
      ['dinothérium', 'DINOTERIUM'],
      ['subrécargue', 'SUBREKARG'],
      ['étoilais', 'ETOILAI'],
      ['ridicule', 'RIDIKUL'],
      ['organisatrice', 'ORGANISATRIS'],
      ['réinscrivis', 'RINSKRIVI'],
      ['morcelle', 'MORSEL'],
      ['dotation', 'DOTASION'],
      ['triolet', 'TRIOL'],
      ['live', 'LIV'],
      ['reformerai', 'REFORMERAI'],
      ['vulcanologue', 'VULKANOLOG'],
      ['levrettai', 'LEVRETAI'],
      ['dépravai', 'DEPRAVAI'],
      ['jugerai', 'JUJERAI'],
      ['amadouerai', 'AMADOUERAI'],
      ['mélancoliquement', 'MELANKOLIKEMAN'],
      ['nécrologique', 'NEKROLOJIK'],
      ['contremarque', 'KONTREMARK'],
      ['maussaderie', 'MOSADERI'],
      ['poile', 'POIL'],
      ['laitier', 'LAITI'],
      ['motiver', 'MOTIV'],
      ['onglette', 'ONGLET'],
      ['apostasié', 'APOSTASI'],
      ['prorata', 'PRORATA'],
      ['transept', 'TRANSEP'],
      ['échaulerai', 'ECHOLERAI'],
      ['barmaid', 'BARMAI'],
      ['totalisation', 'TOTALISASION'],
      ['warrante', 'OIRANT'],
      ['dégoiserai', 'DEGOISERAI'],
      ['absenterions', 'ABSANTERION'],
      ['vocalisme', 'VOKALISM'],
      ['brumera', 'BRUMERA'],
      ['précepte', 'PRESEPT'],
      ['bimillénaire', 'BIMILENAIR'],
      ['conditionnais', 'KONDISIONAI'],
      ['obéir', 'OBAIR'],
      ['rentrer', 'RANTR'],
      ['extérioriser', 'EXTERIORIS'],
      ['moulineuse', 'MOULINES'],
      ['interjetais', 'INTERJETAI'],
      ['trépanais', 'TREPANAI'],
      ['pestiférer', 'PESTIFER'],
      ['jeunette', 'JENET'],
      ['agenouillassions', 'AJENOUIASION'],
      ['divinisais', 'DIVINISAI'],
      ['étalon', 'ETALON'],
      ['mouliner', 'MOULIN'],
      ['incontinente', 'INKONTINANT'],
      ['approcherai', 'APROCHERAI'],
      ['engendrerai', 'ANJANDRERAI'],
      ['monologuerai', 'MONOLOGERAI'],
      ['viticulture', 'VITIKULTUR'],
      ['palettais', 'PALETAI'],
      ['préhensile', 'PREANSIL'],
      ['phosphatais', 'FOSFATAI'],
      ['clownerie', 'KLOUNERI'],
      ['féminin', 'FEMININ'],
      ['gras', 'GRA'],
      ['embuscade', 'ANBUSKAD'],
      ['vomirai', 'VOMIRAI'],
      ['débarrai', 'DEBARAI'],
      ['haltérophile', 'ALTEROFIL'],
      ['juxtapose', 'JUXTAPOS'],
      ['clorai', 'KLORAI'],
      ['ascèse', 'ASES'],
      ['Évreux', 'EVR'],
      ['cidre', 'SIDR'],
      ['lithiasique', 'LITIASIK'],
      ['ministérielle', 'MINISTERIEL'],
      ['cantilever', 'KANTILEV'],
      ['rai', 'RAI'],
      ['engouffrai', 'ANGOUFRAI'],
      ['orpheline', 'ORFELIN'],
      ['luciférienne', 'LUSIFERIN'],
      ['assainis', 'ASAINI'],
      ['changerai', 'CHANJERAI'],
      ['liliacée', 'LILIAS'],
      ['minimisation', 'MINIMISASION'],
      ['panorama', 'PANORAMA'],
      ['pommadai', 'POMADAI'],
      ['disloquer', 'DISLOK'],
      ['dramatiser', 'DRAMATIS'],
      ['profiteuse', 'PROFITES'],
      ['garnirai', 'GARNIRAI'],
      ['anévrisme', 'ANEVRISM'],
      ['palanquerai', 'PALANKERAI'],
      ['déflation', 'DEFLASION'],
      ['frôlement', 'FROLEMAN'],
      ['confluent', 'KONFLUAN'],
      ['déstructurer', 'DESTRUKTUR'],
      ['Hecke', 'EK'],
      ['assemblée', 'ASANBL'],
      ['comploteuse', 'KONPLOTES'],
      ['conseille', 'KONSAIL'],
      ['pallier', 'PALI'],
      ['partance', 'PARTANS'],
      ['grange', 'GRANJ'],
      ['insensible', 'INSANSIBL'],
      ['salutaire', 'SALUTAIR'],
      ['transsubstantier', 'TRANSUBSTANTI'],
      ['pantellerai', 'PANTELERAI'],
      ['affectionne', 'AFEKSION'],
      ['locherai', 'LOCHERAI'],
      ['enfermai', 'ANFERMAI'],
      ['redémolirai', 'REDEMOLIRAI'],
      ['raclement', 'RAKLEMAN'],
      ['barbouilleuse', 'BARBOUIES'],
      ['déréglais', 'DEREGLAI'],
      ['trinque', 'TRINK'],
      ['séléniate', 'SELENIAT'],
      ['liqueur', 'LIKER'],
      ['quelque', 'KELK'],
      ['distinguable', 'DISTINGABL'],
      ['herbais', 'ERBAI'],
      ['figement', 'FIJEMAN'],
      ['sépulture', 'SEPULTUR'],
      ['fustige', 'FUSTIJ'],
      ['manicle', 'MANIKL'],
      ['huppe', 'UP'],
      ['quanta', 'KANTA'],
      ['isochronisme', 'ISOKRONISM'],
      ['anastomosassions', 'ANASTOMOSASION'],
      ['sensibilisation', 'SANSIBILISASION'],
      ['vidéodisque', 'VIDEODISK'],
      ['décongestionne', 'DEKONJESTION'],
      ['antéposai', 'ANTEPOSAI'],
      ['antérieurement', 'ANTERIEREMAN'],
      ['épincèle', 'EPINSEL'],
      ['aplanirai', 'APLANIRAI'],
      ['pistil', 'PISTI'],
      ['consternerai', 'KONSTERNERAI'],
      ['verduniserai', 'VERDUNISERAI'],
      ['don', 'DON'],
      ['anticolonialisme', 'ANTIKOLONIALISM'],
      ['histologique', 'ISTOLOJIK'],
      ['ombrette', 'ONBRET'],
      ['grossier', 'GROSI'],
      ['sexuellement', 'SEXUELEMAN'],
      ['daguerai', 'DAGERAI'],
      ['démêlais', 'DEMELAI'],
      ['fouinai', 'FOUINAI'],
      ['bourrèlement', 'BOURELEMAN'],
      ['suçais', 'SUSAI'],
      ['constitutionnalise', 'KONSTITUSIONALIS'],
      ['indécision', 'INDESISION'],
      ['relayer', 'RELAI'],
      ['Raymonde', 'RAIMOND'],
      ['entraînement', 'ANTRAINEMAN'],
      ['ouïssent', 'OUISAN'],
      ['Ghislain', 'GISLIN'],
      ['hébraïsme', 'EBRAISM'],
      ['romarin', 'ROMARIN'],
      ['bonimenter', 'BONIMANT'],
      ['mégis', 'MEJI'],
      ['lessiverai', 'LESIVERAI'],
      ['envieillir', 'ANVIEILIR'],
      ['airé', 'AIR'],
      ['prédicable', 'PREDIKABL'],
      ['vérifiable', 'VERIFIABL'],
      ['cric', 'KRIK'],
      ['désenvenimai', 'DESANVENIMAI'],
      ['orseille', 'ORSAIL'],
      ['ramoner', 'RAMON'],
      ['agglutinais', 'AGLUTINAI'],
      ['fuyarde', 'FUIARD'],
      ['hourdirai', 'OURDIRAI'],
      ['hovercraft', 'OVERKRAF'],
      ['ravilirai', 'RAVILIRAI'],
      ['aplatisseur', 'APLATISER'],
      ['stertoreuse', 'STERTORES'],
      ['ébourrais', 'EBOURAI'],
      ['bédane', 'BEDAN'],
      ['contrindique', 'KONTRINDIK'],
      ['encorder', 'ANKORD'],
      ['extravaserai', 'EXTRAVASERAI'],
      ['aride', 'ARID'],
      ['entente', 'ANTANT'],
      ['urobilinogène', 'UROBILINOJAN'],
      ['bouteroue', 'BOUTEROU'],
      ['Andrée', 'ANDR'],
      ['engraisserai', 'ANGRAISERAI'],
      ['acolytat', 'AKOLITA'],
      ['allocation', 'ALOKASION'],
      ['contrindiquai', 'KONTRINDIKAI'],
      ['caboche', 'KABOCH'],
      ['affiloir', 'AFILOIR'],
      ['abstrait', 'ABSTRAI'],
      ['terreautage', 'TEROTAJ'],
      ['concupiscente', 'KONKUPISANT'],
      ['lave', 'LAV'],
      ['hippiatre', 'IPIATR'],
      ['goulache', 'GOULACH'],
      ['exonder', 'EXOND'],
      ['néocolonialiste', 'NEOKOLONIALIST'],
      ['tailleuse', 'TAIES'],
      ['uracile', 'URASIL'],
      ['conductibilité', 'KONDUKTIBILIT'],
      ['paix', 'PAI'],
      ['typique', 'TIPIK'],
      ['grigri', 'GRIGRI'],
      ['débourrais', 'DEBOURAI'],
      ['approfondissais', 'APROFONDISAI'],
      ['Radeon', 'RADEON'],
      ['couscous', 'KOUSKOU'],
      ['déchausse', 'DECHOS'],
      ['dorais', 'DORAI'],
      ['indirecte', 'INDIREKT'],
      ['enchaîne', 'ANCHAIN'],
      ['dépeuplais', 'DEPEPLAI'],
      ['libellai', 'LIBELAI'],
      ['pleurale', 'PLERAL'],
      ['crayonner', 'KRAION'],
      ['désemmanche', 'DESEMANCH'],
      ['lydienne', 'LIDIN'],
      ['démêloir', 'DEMELOIR'],
      ['armoise', 'ARMOIS'],
      ['épouvantement', 'EPOUVANTEMAN'],
      ['helléniserai', 'ELENISERAI'],
      ['directive', 'DIREKTIV'],
      ['justifiais', 'JUSTIFIAI'],
      ['casserole', 'KASEROL'],
      ['écloper', 'EKLOP'],
      ['bêta', 'BETA'],
      ['astigmatisme', 'ASTIGMATISM'],
      ['rythmicité', 'RITMISIT'],
      ['alimentaire', 'ALIMANTAIR'],
      ['saurisseur', 'SORISER'],
      ['retournement', 'RETOURNEMAN'],
      ['interruptive', 'INTERUPTIV'],
      ['crame', 'KRAM'],
      ['pistolet', 'PISTOL'],
      ['faïencée', 'FINS'],
      ['Creuse', 'KRES'],
      ['arraisonnais', 'ARAISONAI'],
      ['examinai', 'EXAMINAI'],
      ['déclenche', 'DEKLANCH'],
      ['capotais', 'KAPOTAI'],
      ['sensationnalisme', 'SANSASIONALISM'],
      ['retrait', 'RETRAI'],
      ['recourber', 'REKOURB'],
      ['forais', 'FORAI'],
      ['vomissure', 'VOMISUR'],
      ['magnétocassette', 'MANIETOKASET'],
      ['bubonique', 'BUBONIK'],
      ['inconditionnelle', 'INKONDISIONEL'],
      ['pâtre', 'PATR'],
      ['hachurai', 'ACHURAI'],
      ['extrairai', 'EXTRAIRAI'],
      ['trifouiller', 'TRIFOUIL'],
      ['impulsion', 'INPULSION'],
      ['besant', 'BESAN'],
      ['piscine', 'PISIN'],
      ['fructose', 'FRUKTOS'],
      ['graveleuse', 'GRAVELES'],
      ['illuminerai', 'ILUMINERAI'],
      ['sapin', 'SAPIN'],
      ['louerai', 'LOUERAI'],
      ['affirmativement', 'AFIRMATIVEMAN'],
      ['mastologie', 'MASTOLOJI'],
      ['égrugeoir', 'EGRUJOIR'],
      ['précautionner', 'PREKOSION'],
      ['rectangulaire', 'REKTANGULAIR'],
      ['glace', 'GLAS'],
      ['empennais', 'ANPENAI'],
      ['fronteau', 'FRONTO'],
      ['gringalet', 'GRINGAL'],
      ['celui', 'SELUI'],
      ['effrontément', 'EFRONTEMAN'],
      ['saloper', 'SALOP'],
      ['fibrinogène', 'FIBRINOJAN'],
      ['détonnelle', 'DETONEL'],
      ['chatouilleuse', 'CHATOUIES'],
      ['gambader', 'GANBAD'],
      ['soulage', 'SOULAJ'],
      ['graciai', 'GRASIAI'],
      ['digitalisais', 'DIJITALISAI'],
      ['aberrai', 'ABERAI'],
      ['bisexualité', 'BISEXUALIT'],
      ['urinais', 'URINAI'],
      ['afflictive', 'AFLIKTIV'],
      ['taponne', 'TAPON'],
      ['fredaine', 'FREDAIN'],
      ['désapprobation', 'DESAPROBASION'],
      ['cuveler', 'KUVEL'],
      ['remplage', 'RANPLAJ'],
      ['D\'Alix', 'DALI'],
      ['picturale', 'PIKTURAL'],
      ['igloo', 'IGLOU'],
      ['décreusage', 'DEKRESAJ'],
      ['emparâtes', 'ANPARAT'],
      ['subsistais', 'SUBSISTAI'],
      ['réquisitionner', 'REKISISION'],
      ['engraver', 'ANGRAV'],
      ['perquisitionnais', 'PERKISISIONAI'],
      ['gazonne', 'GAZON'],
      ['trucidais', 'TRUSIDAI'],
      ['piédouche', 'PIEDOUCH'],
      ['insolite', 'INSOLIT'],
      ['cholédoque', 'KOLEDOK'],
      ['fourvoie', 'FOURVOI'],
      ['rouscaillerai', 'ROUSKAILERAI'],
      ['remouchai', 'REMOUCHAI'],
      ['lido', 'LIDO'],
      ['francophile', 'FRANKOFIL'],
      ['présélecteur', 'PRESELEKTER'],
      ['rhumb', 'RUMB'],
      ['purification', 'PURIFIKASION'],
      ['tornade', 'TORNAD'],
      ['javelle', 'JAVEL'],
      ['imposais', 'INPOSAI'],
      ['passim', 'PASIM'],
      ['exécution', 'EXEKUSION'],
      ['emmottée', 'EMOT'],
      ['ironique', 'IRONIK'],
      ['bizarroïde', 'BIZAROID'],
      ['genièvre', 'JENIEVR'],
      ['acanthe', 'AKANT'],
      ['resocialisais', 'RESOSIALISAI'],
      ['Rokhlin', 'ROKLIN'],
      ['quartile', 'KARTIL'],
      ['sursis', 'SURSI'],
      ['archéologie', 'ARKEOLOJI'],
      ['réessaye', 'RESAI'],
      ['germon', 'JERMON'],
      ['baladin', 'BALADIN'],
      ['louvette', 'LOUVET'],
      ['régentais', 'REJANTAI'],
      ['exèdre', 'EXEDR'],
      ['dénigrai', 'DENIGRAI'],
      ['irresponsable', 'IRESPONSABL'],
      ['adjectivai', 'ADJEKTIVAI'],
      ['senau', 'SENO'],
      ['ululerai', 'ULULERAI'],
      ['prorogeais', 'PROROJAI'],
      ['entichassions', 'ANTICHASION'],
      ['tudesque', 'TUDESK'],
      ['inférioriser', 'INFERIORIS'],
      ['carolus', 'KAROLU'],
      ['vicennale', 'VISENAL'],
      ['greffe', 'GR'],
      ['privatisais', 'PRIVATISAI'],
      ['monogamie', 'MONOGAMI'],
      ['anaphore', 'ANAFOR'],
      ['concassage', 'KONKASAJ'],
      ['escortai', 'ESKORTAI'],
      ['patent', 'PATAN'],
      ['verdoiement', 'VERDOIMAN'],
      ['néanmoins', 'NEANMOIN'],
      ['encartouchai', 'ANKARTOUCHAI'],
      ['isobare', 'ISOBAR'],
      ['moucheron', 'MOUCHERON'],
      ['douce', 'DOUS'],
      ['bretessée', 'BRETES'],
      ['agonie', 'AGONI'],
      ['atomise', 'ATOMIS'],
      ['godronne', 'GODRON'],
      ['boursicotais', 'BOURSIKOTAI'],
      ['vibrisse', 'VIBRIS'],
      ['soucieuse', 'SOUSIES'],
      ['incertaine', 'INSERTAIN'],
      ['câpre', 'KAPR'],
      ['torpide', 'TORPID'],
      ['mécomptais', 'MEKONTAI'],
      ['poinçonne', 'POINSON'],
      ['carier', 'KARI'],
      ['antidéflagrante', 'ANTIDEFLAGRANT'],
      ['arraisonnée', 'ARAISON'],
      ['pâtissier', 'PATISI'],
      ['rossolis', 'ROSOLI'],
      ['pronostiquerai', 'PRONOSTIKERAI'],
      ['ossifiée', 'OSIFI'],
      ['rentrais', 'RANTRAI'],
      ['pifomètre', 'PIFOMETR'],
      ['empiècement', 'ANPIESEMAN'],
      ['intimité', 'INTIMIT'],
      ['toilettais', 'TOILETAI'],
      ['cagné', 'KAN'],
      ['pesamment', 'PESAMAN'],
      ['marivaudage', 'MARIVODAJ'],
      ['dissimulai', 'DISIMULAI'],
      ['empourprerai', 'ANPOURPRERAI'],
      ['influencée', 'INFLUANS'],
      ['bistournerai', 'BISTOURNERAI'],
      ['brimer', 'BRIM'],
      ['bouleverser', 'BOULEVERS'],
      ['enchatonnée', 'ANCHATON'],
      ['restreignais', 'RESTRAINIAI'],
      ['marquis', 'MARKI'],
      ['Roch', 'ROCH'],
      ['écornée', 'EKORN'],
      ['proposais', 'PROPOSAI'],
      ['cafetière', 'KAFETIER'],
      ['vomir', 'VOMIR'],
      ['ballottage', 'BALOTAJ'],
      ['châle', 'CHAL'],
      ['festivalière', 'FESTIVALIER'],
      ['poétise', 'POETIS'],
      ['discutable', 'DISKUTABL'],
      ['bobiner', 'BOBIN'],
      ['autosuggestionnâmes', 'OTOSUJESTIONAM'],
      ['audiomètre', 'ODIOMETR'],
      ['déviationniste', 'DEVIASIONIST'],
      ['sarcler', 'SARKL'],
      ['gérante', 'JERANT'],
      ['conga', 'KONGA'],
      ['gnognotte', 'NIONIOT'],
      ['philatélique', 'FILATELIK'],
      ['égaliseur', 'EGALISER'],
      ['concélébrais', 'KONSELEBRAI'],
      ['cachucha', 'KACHUCHA'],
      ['sprintai', 'SPRINTAI'],
      ['décachetai', 'DEKACHETAI'],
      ['factice', 'FAKTIS'],
      ['dépensais', 'DEPANSAI'],
      ['agrichais', 'AGRICHAI'],
      ['intervenante', 'INTERVENANT'],
      ['engrumellerai', 'ANGRUMELERAI'],
      ['ébarber', 'EBARB'],
      ['incomprise', 'INKONPRIS'],
      ['anciennement', 'ANSIANEMAN'],
      ['remarcher', 'REMARCH'],
      ['spéculatrice', 'SPEKULATRIS'],
      ['détirais', 'DETIRAI'],
      ['couillon', 'KOUILON'],
      ['crotte', 'KROT'],
      ['saumure', 'SOMUR']
    ];

    tests.forEach(function([word, code]) {
      assert.strictEqual(phonetic(word), code, `${word} => ${code}`);
    });
  });
});