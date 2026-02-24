import type { PlantSpecies } from '../types/plants';

export const trees: PlantSpecies[] = [
  // ═══════════════════════════════════════════════════
  //  NATIVE BROADLEAVES
  // ═══════════════════════════════════════════════════
  {
    id: 'fagus-sylvatica',
    commonNameEn: 'European Beech',
    commonNameDa: 'Bøg',
    scientificName: 'Fagus sylvatica',
    family: 'Fagaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'The dominant native deciduous tree of Danish forests and the national tree of Denmark. Beech forests (bøgeskov) define much of Sjælland\'s woodland character, forming dense canopies that create a distinctive dark understorey in summer and a golden-copper leaf litter in autumn.',
    identification: {
      leaves:
        'Simple, ovate to elliptic, 5–10 cm long with a wavy margin and silky hairs when young. Bright green in spring, darkening in summer, turning rich copper-gold in autumn. Leaves are alternate with prominent parallel veins.',
      bark:
        'Smooth and silver-grey throughout life, one of the most recognisable bark textures among European trees. Thin-skinned and easily damaged.',
      flowers:
        'Monoecious. Male flowers in drooping catkins, female flowers in pairs surrounded by a bristly cupule. Flowers in April–May with leaf emergence.',
      fruit:
        'Beech nuts (bog) enclosed in a spiny, four-lobed cupule. Triangular, brown, 1.5–2 cm. Mast years produce heavy crops every 5–8 years.',
      size: 'Up to 30–40 m tall with a broad, domed crown. Can reach 300+ years.',
      distinguishingFeatures:
        'The smooth silvery bark is unmistakable. In winter, look for long, pointed, cigar-shaped buds held at an angle from the twig.',
    },
    habitat:
      'Dominant in Sjælland\'s forests on well-drained, mildly acidic to calcareous soils. Found in Gribskov, Jægersborg Dyrehave, and throughout the moraine landscapes. Shade-tolerant — forms dense, cathedral-like stands.',
    ecology:
      'Beech canopies cast heavy shade, limiting understorey diversity but supporting specialist fungi, mosses, and invertebrates. Beech mast is a critical food source for jays, woodpigeons, and dormice. Dead beech wood supports rich saproxylic beetle communities.',
  },
  {
    id: 'quercus-robur',
    commonNameEn: 'Pedunculate Oak',
    commonNameDa: 'Stilk-eg',
    scientificName: 'Quercus robur',
    family: 'Fagaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'One of Denmark\'s most important native trees, historically valued for shipbuilding and construction. Pedunculate oak is long-lived and forms open-canopied stands that support extraordinary biodiversity. The name refers to the long stalk (peduncle) that carries the acorns.',
    identification: {
      leaves:
        'Deeply lobed with 4–5 rounded lobes per side, 10–12 cm long. The leaf base has small ear-like auricles. Almost sessile (very short petiole). Dark green above, paler below.',
      bark:
        'Young bark is smooth and grey-brown. With age develops deep vertical fissures and a rugged, plated texture.',
      flowers:
        'Monoecious. Male catkins are yellowish-green and pendulous, appearing in April–May. Female flowers are tiny and inconspicuous on the current year\'s shoots.',
      fruit:
        'Acorns 2–2.5 cm, ovoid, sitting in a shallow scaly cup, carried on a long stalk (peduncle) 2–8 cm — the key diagnostic feature.',
      size: 'Typically 20–35 m, occasionally taller. Massive spreading crown in open-grown trees. Can live 500–1,000+ years.',
      distinguishingFeatures:
        'Distinguished from sessile oak (Q. petraea) by the stalked acorns, sessile leaves with auricles at the base, and more irregular branching pattern.',
    },
    habitat:
      'Found across Sjælland in mixed forests, hedgerows, parks, and as solitary field trees. Prefers heavy clay and loam soils of the moraine landscape. Common in Jægersborg Dyrehave and old manorial parklands.',
    ecology:
      'Oaks support more associated species than any other European tree — over 2,300 species of invertebrates, fungi, lichens, and epiphytes. Acorns are essential food for jays, squirrels, and deer. Veteran oaks with hollows provide habitat for bats and cavity-nesting birds.',
  },
  {
    id: 'fraxinus-excelsior',
    commonNameEn: 'European Ash',
    commonNameDa: 'Ask',
    scientificName: 'Fraxinus excelsior',
    family: 'Oleaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A tall, elegant native tree now severely threatened by ash dieback (Hymenoscyphus fraxineus), a fungal disease that has devastated ash populations across Denmark since the mid-2000s. Despite this, ash remains an ecologically vital component of Sjælland\'s woodlands and hedgerows.',
    identification: {
      leaves:
        'Pinnately compound with 7–13 leaflets, each 5–12 cm long, lanceolate with serrated margins. Opposite arrangement — one of the few Danish trees with opposite compound leaves. Late to leaf out (May) and early to drop leaves (October).',
      bark:
        'Pale grey and smooth when young, developing a network of interlacing ridges with age to form a distinctive diamond-pattern texture.',
      flowers:
        'Small, purplish-black, in dense clusters, appearing before the leaves in April. Can be male, female, or hermaphrodite — even on the same tree (polygamous).',
      fruit:
        'Winged samaras ("keys") in hanging bunches, 2.5–5 cm long, single-winged, often persisting through winter. Distinctive and easy to spot.',
      size: 'Up to 35–40 m. Tall, straight trunk with an open, domed crown. Fast-growing in youth.',
      distinguishingFeatures:
        'The jet-black buds in winter are unmistakable — no other common Danish tree has black buds. Combined with the opposite branching pattern, ash is easy to identify year-round.',
    },
    habitat:
      'Moist, base-rich soils — found in lowland forests, stream sides, hedgerows, and limestone areas across Sjælland. Historically one of the most common hedgerow trees.',
    ecology:
      'Ash supports around 1,000 associated species. Its light canopy allows rich ground flora. The ongoing ash dieback crisis has killed 80–90% of Danish ash trees, with ongoing research into resistant genotypes. Standing dead ash provides valuable habitat for woodpeckers and saproxylic insects.',
  },
  {
    id: 'betula-pendula',
    commonNameEn: 'Silver Birch',
    commonNameDa: 'Vorte-birk',
    scientificName: 'Betula pendula',
    family: 'Betulaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'An elegant, fast-growing pioneer tree recognised by its white bark and graceful weeping habit. Silver birch is a key coloniser of open ground and plays an important ecological role as a nurse tree for slower-growing species.',
    identification: {
      leaves:
        'Triangular-ovate (diamond-shaped), 3–7 cm, doubly serrate margins with a pointed tip. Glossy dark green above. Petiole is 1–3 cm long.',
      bark:
        'White and papery with horizontal lenticels when young. Develops dark, rough, diamond-shaped fissures at the base of mature trees — a key difference from downy birch.',
      flowers:
        'Monoecious. Male catkins droop, 3–6 cm, yellow-brown; appear in autumn but open in April. Female catkins are shorter, upright, green.',
      fruit:
        'Tiny winged nutlets released from cylindrical, hanging catkins that disintegrate in autumn. Each tree produces vast quantities of wind-dispersed seed.',
      size: 'Typically 15–25 m. Relatively short-lived (80–100 years). Open, light crown.',
      distinguishingFeatures:
        'Can be difficult to distinguish from downy birch (B. pubescens). Key differences: silver birch has warty (not hairy) young twigs, more pointed and doubly-serrate leaves, white bark that develops dark diamond fissures at the base, and a more markedly pendulous (weeping) habit.',
    },
    habitat:
      'Light-demanding pioneer on well-drained, often sandy or acidic soils. Found in heathland, woodland edges, clearings, and increasingly in urban settings across Sjælland.',
    ecology:
      'A critical pioneer species — its light canopy and leaf litter improve soils and shelter developing oak and beech seedlings. Supports over 300 insect species. Birch sap has been harvested traditionally. Important for mycorrhizal fungi.',
    notes:
      'Can be difficult to distinguish from downy birch (B. pubescens) — the two species hybridise freely. Look at young twig hairiness, leaf shape, and bark texture at the trunk base for the most reliable characters.',
  },
  {
    id: 'betula-pubescens',
    commonNameEn: 'Downy Birch',
    commonNameDa: 'Dun-birk',
    scientificName: 'Betula pubescens',
    family: 'Betulaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'Closely related to silver birch but typically found on wetter, more acidic soils. Downy birch is named for the soft hairs on its young twigs and leaves. It is slightly hardier than silver birch and more tolerant of waterlogged conditions.',
    identification: {
      leaves:
        'Rounder than silver birch — ovate to rhombic, 2–5 cm, with a singly serrate (not doubly serrate) margin. Softly hairy on the underside, especially along veins. Leaf tip less sharply pointed than silver birch.',
      bark:
        'Greyish-white to brownish-white, smoother than silver birch. Does NOT develop the dark, diamond-shaped fissures at the base that silver birch shows. Often has a more brownish or reddish tinge.',
      flowers:
        'Very similar to silver birch — male catkins pendulous, female catkins upright. April flowering.',
      fruit:
        'Small winged nutlets similar to silver birch but with broader wings relative to the nutlet.',
      size: 'Typically 10–20 m, slightly smaller than silver birch on average. More upright branching — less weeping.',
      distinguishingFeatures:
        'Distinguished from silver birch by: (1) downy (hairy) young twigs vs. warty twigs in silver birch, (2) rounder leaves with single serration vs. more triangular, doubly-serrate leaves, (3) lack of dark basal bark fissures, (4) more upright (less weeping) branch habit.',
    },
    habitat:
      'Wetter soils than silver birch — bogs, fens, wet heaths, stream sides, and poorly drained forest edges across Sjælland.',
    ecology:
      'Ecologically similar to silver birch but occupies wetter niches. Important in bog woodland communities. Forms ectomycorrhizal associations with many fungi including Leccinum scabrum and various Russula species.',
    notes:
      'Can be difficult to distinguish from silver birch (B. pendula) — the two species hybridise freely, producing intermediates that are very hard to identify. The most reliable characters are young twig hairiness (downy vs. warty), leaf serration pattern, and bark texture at the base of the trunk.',
  },
  {
    id: 'alnus-glutinosa',
    commonNameEn: 'Common Alder',
    commonNameDa: 'Rød-el',
    scientificName: 'Alnus glutinosa',
    family: 'Betulaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A waterside specialist that fixes atmospheric nitrogen through symbiotic root nodules with Frankia bacteria. Alder is an indicator of wet ground and is ecologically vital for riparian habitats across Sjælland.',
    identification: {
      leaves:
        'Rounded to obovate, 4–10 cm, with a distinctively notched (retuse) apex — the tip looks as if someone took a bite out of it. Dark glossy green above, paler beneath. Doubly serrate margin.',
      bark:
        'Dark grey-brown to purplish-brown, fissured into small square plates on mature trees.',
      flowers:
        'Monoecious. Male catkins are purplish-brown, pendulous, 2–6 cm, appearing before leaves in February–March. Female catkins are small, reddish, and upright.',
      fruit:
        'Small, woody, cone-like structures (1–2 cm) that persist on the tree year-round — distinctive and unique among Danish broadleaves. They turn black with age.',
      size: 'Typically 15–25 m. Often multi-stemmed. Conical crown when young, becoming more rounded.',
      distinguishingFeatures:
        'The combination of rounded leaves with a notched tip, persistent woody "cones", and waterside habitat makes alder easy to identify. The freshly cut wood turns bright orange, which is also diagnostic.',
    },
    habitat:
      'Always near water — river banks, stream sides, lake shores, bogs, and wet meadows. Common along Sjælland\'s many streams and around lake edges.',
    ecology:
      'A keystone riparian species. Nitrogen-fixing root nodules enrich soils. Alder leaf litter supports diverse aquatic invertebrates. Root systems stabilise river banks. Alder carr is a distinctive wet woodland type. Important food source for siskin and redpoll (the seeds from the woody cones).',
  },
  {
    id: 'tilia-cordata',
    commonNameEn: 'Small-leaved Lime',
    commonNameDa: 'Småbladet lind',
    scientificName: 'Tilia cordata',
    family: 'Malvaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A long-lived native tree once much more widespread in Danish forests before beech became dominant. Small-leaved lime is an indicator of ancient woodland and produces heavily scented flowers that are a major nectar source for pollinators.',
    identification: {
      leaves:
        'Heart-shaped (cordate), 3–8 cm, with a finely serrate margin. Dark green and glabrous above; paler below with characteristic rusty-orange tufts of hairs in the vein axils.',
      bark:
        'Smooth and grey when young, becoming finely fissured with a fibrous network on mature trees.',
      flowers:
        'Fragrant, yellowish-white, 5-petalled, in small hanging clusters (cymes) of 4–15 flowers, each cluster attached to a distinctive pale green, strap-shaped bract. Flowers in July.',
      fruit:
        'Small (6 mm), round, hard nutlets attached to the bract that acts as a wing for wind dispersal.',
      size: 'Up to 25–30 m. Dense, domed crown. Extremely long-lived — can exceed 1,000 years. Often coppiced historically.',
      distinguishingFeatures:
        'The small, heart-shaped leaves with rusty tufts in the vein axils underneath distinguish this from large-leaved lime (T. platyphyllos), which has larger leaves with whitish hairs. The hanging flower clusters with their distinctive bract are unmistakable in summer.',
    },
    habitat:
      'Ancient woodland, parks, avenues, and churchyards on base-rich soils across Sjælland. Often found in old estate landscapes.',
    ecology:
      'The intensely fragrant flowers in July are among the most important nectar sources for honeybees, bumblebees, and hoverflies. Aphids on lime trees produce copious honeydew, feeding many insects. Rich fungal and lichen communities on old lime bark.',
  },
  {
    id: 'carpinus-betulus',
    commonNameEn: 'European Hornbeam',
    commonNameDa: 'Avnbøg',
    scientificName: 'Carpinus betulus',
    family: 'Betulaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A tough, shade-tolerant native tree often confused with beech at first glance. Hornbeam produces exceptionally hard wood (the name comes from "horn" = tough + "beam" = tree) and is widely used in hedging because it retains its dead leaves through winter.',
    identification: {
      leaves:
        'Ovate, 4–10 cm, with a sharply doubly-serrate margin (much more toothed than beech). Prominently ribbed with 10–13 pairs of parallel veins giving a corrugated appearance. Dark green, turning yellow in autumn.',
      bark:
        'Smooth and grey, similar to beech, but the trunk has a distinctive muscular, fluted (sinuous) profile rather than being round in cross-section.',
      flowers:
        'Monoecious. Male catkins yellowish-green, pendulous, 2–5 cm. Female catkins green, at shoot tips. Flowers in April–May.',
      fruit:
        'Small ribbed nutlets attached to a 3-lobed, leafy bract — the bracts hang in clusters and are a good identification feature.',
      size: 'Typically 15–25 m. Dense, rounded crown. Lives 200–300 years.',
      distinguishingFeatures:
        'Often confused with beech. Key differences: hornbeam leaves are doubly serrate (beech is wavy-edged), trunk is fluted/muscular (beech is round and smooth), and buds are shorter and appressed to the twig (beech buds are long and pointed).',
    },
    habitat:
      'Native in mixed deciduous woodland, especially on heavy clay soils. Found in ancient forests, hedgerows, and widely planted as formal hedging across Sjælland.',
    ecology:
      'Shade-tolerant understorey tree. Its retained dead leaves provide winter shelter for invertebrates. Important for small mammals and birds when used as hedging. The hard wood was historically used for gear mechanisms and butcher\'s blocks.',
  },
  {
    id: 'acer-platanoides',
    commonNameEn: 'Norway Maple',
    commonNameDa: 'Spidsløn',
    scientificName: 'Acer platanoides',
    family: 'Sapindaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A handsome native maple that produces bright yellow flowers in spring before the leaves emerge, and spectacular golden-yellow autumn colour. Common in both natural woodland and urban plantings across Sjælland.',
    identification: {
      leaves:
        'Palmately lobed with 5–7 lobes ending in pointed teeth. 10–15 cm across. Distinguished from sycamore by sharper, more pointed lobe tips and a milky sap that exudes from the broken petiole. Brilliant yellow autumn colour.',
      bark:
        'Grey-brown with shallow, interlacing ridges. Not as rough or flakey as sycamore.',
      flowers:
        'Conspicuous clusters of bright yellow-green flowers in April, before the leaves — one of the first spring-flowering trees. Insect-pollinated.',
      fruit:
        'Paired winged samaras (keys) with wings spread nearly 180° apart (horizontally), 3–5 cm. Wings are flatter and more widely spread than sycamore.',
      size: 'Typically 20–30 m. Broad, rounded crown.',
      distinguishingFeatures:
        'Easiest separated from sycamore (A. pseudoplatanus) by: (1) milky sap from broken leaf stalk (sycamore has clear sap), (2) more sharply pointed leaf lobes, (3) horizontal samara wings (sycamore wings form a narrower angle), (4) spring flowers are bright yellow (not yellowish-green hanging racemes).',
    },
    habitat:
      'Mixed deciduous woodland, parks, avenues, and gardens. Tolerates shade well and self-sows freely. Abundant in urban Copenhagen and towns across Sjælland.',
    ecology:
      'Early spring flowers provide vital early-season nectar for bees and hoverflies. Autumn leaf fall is rapid, producing thick leaf litter. Supports fewer associated invertebrate species than oak or beech but is important in urban ecosystems.',
  },
  {
    id: 'salix-alba',
    commonNameEn: 'White Willow',
    commonNameDa: 'Hvidpil',
    scientificName: 'Salix alba',
    family: 'Salicaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'The largest native willow species, white willow gets its name from the silvery-white undersides of its narrow leaves, which give the whole crown a distinctive pale, shimmering appearance in the wind. Historically important for basketry and as a source of salicin, the precursor to aspirin.',
    identification: {
      leaves:
        'Narrowly lanceolate, 5–10 cm long, finely serrate, covered in silky white hairs especially on the underside, giving the characteristic silver sheen. Alternate arrangement.',
      bark:
        'Grey-brown, becoming deeply fissured and ridged on old trees. Can appear almost corky.',
      flowers:
        'Dioecious. Catkins appear with the leaves in April–May. Male catkins yellow with stamens; female catkins green. Insect-pollinated.',
      fruit:
        'Tiny capsules releasing cottony, wind-dispersed seeds in early summer.',
      size: 'Up to 20–30 m. Broad, irregular crown. Fast-growing but relatively short-lived (80–120 years). Trunk often leans.',
      distinguishingFeatures:
        'The silvery-white shimmer of the crown in wind is diagnostic at a distance. The narrow, silky-haired leaves distinguish it from other large willows. Often found pollarded (cut back to the trunk) along waterways.',
    },
    habitat:
      'River banks, lake shores, wet meadows, and floodplains across Sjælland. Often planted along waterways and roads. Tolerates periodic flooding.',
    ecology:
      'Important riparian tree — roots stabilise river banks and fallen branches create aquatic habitat. Catkins are early-season food for bees. Willow bark supports diverse lichen and moss communities. Birds nest readily in the dense twiggy canopy.',
  },
  {
    id: 'sorbus-aucuparia',
    commonNameEn: 'Rowan',
    commonNameDa: 'Røn',
    scientificName: 'Sorbus aucuparia',
    family: 'Rosaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A small, hardy native tree famous for its showy clusters of bright red berries in autumn. Rowan is found from coastal areas to the highest elevations in Scandinavia, making it one of the most adaptable native species.',
    identification: {
      leaves:
        'Pinnately compound with 9–15 leaflets, each 3–6 cm, lanceolate with a serrated margin. Somewhat similar to ash but leaflets are shorter and more regularly serrate.',
      bark:
        'Smooth and shiny grey-brown, developing shallow fissures with age. Lenticels visible.',
      flowers:
        'Dense, flat-topped clusters (corymbs) of small, creamy-white, 5-petalled flowers in May–June. Fragrant, attracting numerous pollinators.',
      fruit:
        'Bright orange-red berries in dense hanging clusters, 6–9 mm diameter, ripening in August–September. Extremely attractive to birds.',
      size: 'Typically 8–15 m, but often smaller. Open, rounded crown. Short-lived (80–120 years).',
      distinguishingFeatures:
        'The pinnate leaves (like ash) combined with bright red berry clusters are distinctive. Smaller than ash with shorter, more regularly serrate leaflets. Winter buds are dark purple-brown and hairy, not black like ash.',
    },
    habitat:
      'Woodland edges, clearings, hedgerows, rocky ground, and urban plantings. Tolerates a wide range of soils. Common across Sjælland, especially in parks and gardens.',
    ecology:
      'The berries are a critical autumn food source for thrushes (fieldfare, redwing, mistle thrush, blackbird), waxwings, and other frugivorous birds. Flowers are important for pollinating insects. The species name "aucuparia" means "bird-catching" — berries were traditionally used to bait bird traps.',
    notes:
      'On Sjælland, rowan is most often encountered as a large shrub or small tree rather than reaching full tree stature, particularly in exposed or nutrient-poor sites.',
  },
  {
    id: 'populus-tremula',
    commonNameEn: 'Aspen',
    commonNameDa: 'Bævreasp',
    scientificName: 'Populus tremula',
    family: 'Salicaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'Named for its leaves that tremble and flutter in the slightest breeze, aspen is a fast-growing pioneer tree that often forms clonal stands through root suckering. The distinctive sound of rustling aspen leaves is one of the characteristic sounds of northern European woodland.',
    identification: {
      leaves:
        'Nearly circular, 3–8 cm diameter, with coarse, rounded teeth. The petiole (leaf stalk) is laterally flattened, which causes the characteristic trembling motion. Grey-green above, paler below. Yellow autumn colour.',
      bark:
        'Smooth and pale grey-green to greenish-white when young, with distinctive diamond-shaped lenticels. Becomes darker and rougher at the base of old trees.',
      flowers:
        'Dioecious. Catkins appear before the leaves in March–April. Male catkins are grey-purple, pendulous; female catkins are greenish.',
      fruit:
        'Small capsules releasing cottony seeds in late spring. Extremely prolific — a single tree can produce millions of seeds.',
      size: 'Typically 15–25 m. Slender, columnar crown. Fast-growing but fairly short-lived (60–80 years as individual stems, but clones can persist for centuries).',
      distinguishingFeatures:
        'The constantly trembling leaves are diagnostic — caused by the flattened petiole acting like a hinge. The smooth, grey-green bark with diamond-shaped lenticels is also characteristic. Often forms dense thickets through root suckering.',
    },
    habitat:
      'Woodland edges, clearings, abandoned farmland, and damp ground across Sjælland. A pioneer species that quickly colonises open ground.',
    ecology:
      'A key pioneer species that creates shelter for later-successional trees. Aspen stands support a rich community of fungi, lichens, and invertebrates. Many moth larvae feed on aspen leaves. The clonal growth habit means individual "trees" may share one root system.',
  },
  {
    id: 'prunus-avium',
    commonNameEn: 'Wild Cherry',
    commonNameDa: 'Fugle-kirsebær',
    scientificName: 'Prunus avium',
    family: 'Rosaceae',
    category: 'tree',
    subcategory: 'native_broadleaf',
    description:
      'A beautiful native tree that provides one of the most spectacular spring flower displays in Danish woodlands. Wild cherry is the ancestor of cultivated sweet cherries and produces small, bitter-sweet fruits that are eagerly sought by birds.',
    identification: {
      leaves:
        'Ovate to oblong, 8–15 cm, with a serrate margin. Two conspicuous reddish glands on the petiole just below the leaf blade. Dark green above, softly hairy below. Rich red-orange autumn colour.',
      bark:
        'Distinctive: smooth, shiny, reddish-brown with prominent horizontal bands of lenticels. Peels in horizontal strips on older trees. Does not become deeply fissured.',
      flowers:
        'Clusters of 2–6 white, 5-petalled flowers, 2–3 cm diameter, on long stalks, appearing in April–May with or just before the leaves. Showy and profuse.',
      fruit:
        'Small cherries, 1 cm diameter, ripening from yellow through red to dark red/black in June–July. Bitter-sweet, with a single stone.',
      size: 'Typically 15–25 m. Conical crown when young, broadening with age. Can live 60–80 years.',
      distinguishingFeatures:
        'The glossy, reddish-brown bark with horizontal lenticels is unique among Sjælland\'s native trees. In spring, the profuse white blossom is unmistakable. Check for the two red glands on the leaf stalk.',
    },
    habitat:
      'Mixed deciduous woodland, woodland edges, hedgerows, and parks. Prefers well-drained, fertile soils. Scattered throughout Sjælland\'s forests and often found in old gardens.',
    ecology:
      'White spring flowers are important for early pollinators. The fruits are essential food for blackbirds, thrushes, starlings, and other birds — "avium" means "of the birds". Cherry trees also support leaf-mining moths and various fungi.',
  },

  // ═══════════════════════════════════════════════════
  //  INTRODUCED BROADLEAVES
  // ═══════════════════════════════════════════════════
  {
    id: 'acer-pseudoplatanus',
    commonNameEn: 'Sycamore Maple',
    commonNameDa: 'Ær',
    scientificName: 'Acer pseudoplatanus',
    family: 'Sapindaceae',
    category: 'tree',
    subcategory: 'introduced_broadleaf',
    description:
      'Introduced to Denmark from central and southern Europe, sycamore maple is now one of the most common trees in urban settings, parks, and disturbed woodland. It is an aggressive coloniser and prolific seeder, sometimes considered invasive in native woodlands.',
    identification: {
      leaves:
        'Palmately lobed with 5 lobes, 10–25 cm across. Lobes are more rounded and less sharply pointed than Norway maple. Dark green above, often grey-green or purplish below (due to tar spot fungus). Petiole exudes clear sap when broken.',
      bark:
        'Smooth and grey when young, becoming pinkish-grey and flaking off in irregular plates on older trees — creating a patchwork appearance.',
      flowers:
        'Yellowish-green, in hanging, pendulous racemes (10–20 cm) in May, after the leaves appear. Less conspicuous than Norway maple flowers.',
      fruit:
        'Paired winged samaras with wings at an acute angle (roughly 60–90°) — less spread out than Norway maple. Each wing 3–5 cm.',
      size: 'Up to 25–35 m. Dense, broad, rounded crown. Lives 200–400 years.',
      distinguishingFeatures:
        'Distinguished from Norway maple by: (1) clear (not milky) sap from broken petiole, (2) more rounded leaf lobes, (3) bark that flakes in plates, (4) flowers in pendulous racemes after leaves, (5) samara wings at a narrower angle.',
    },
    habitat:
      'Extremely adaptable — parks, gardens, urban streets, woodland edges, coastal areas. Tolerates salt spray and wind. Found throughout Sjælland in both managed and wild settings.',
    ecology:
      'Aphid populations on sycamore produce copious honeydew, supporting hoverflies, lacewings, and other insects. However, sycamore leaf litter decomposes slowly and its dense shade can reduce native ground flora. An important urban ecosystem tree despite its non-native status.',
  },

  // ═══════════════════════════════════════════════════
  //  CONIFERS
  // ═══════════════════════════════════════════════════
  {
    id: 'taxus-baccata',
    commonNameEn: 'Common Yew',
    commonNameDa: 'Taks',
    scientificName: 'Taxus baccata',
    family: 'Taxaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'One of only a few conifers native to Denmark, yew is an ancient, shade-tolerant evergreen that can live for thousands of years. All parts except the fleshy red aril are highly toxic. Yew is often associated with churchyards and old estates.',
    identification: {
      leaves:
        'Flat, dark green needles, 1–4 cm long, arranged in two rows along the twig forming flat sprays. Dark green above with two pale yellowish bands below. Needles are soft and flexible, not prickly.',
      bark:
        'Thin, reddish-brown, flaking in small plates. Trunk often becomes deeply fluted and hollow in old specimens.',
      flowers:
        'Dioecious. Male trees produce small, spherical, yellowish cones underneath shoots that release clouds of pollen in February–March. Female "flowers" are tiny green buds.',
      fruit:
        'Not a true cone — instead, a bright red, fleshy, cup-shaped aril (1 cm) surrounding a single hard seed. The aril is the only non-toxic part. Ripens September–October.',
      size: 'Typically 10–20 m, but highly variable. Dense, dark, spreading crown. Can live 1,000–2,000+ years.',
      distinguishingFeatures:
        'The flat, soft, dark green needles arranged in two rows, combined with the bright red arils in autumn, are diagnostic. Unlike spruce or pine needles, yew needles are flexible and flat, not sharp or rounded.',
    },
    habitat:
      'Native in woodland understorey on calcareous soils, churchyards, old estates, and hedges. Extremely shade-tolerant — can thrive under dense beech canopy. Scattered naturally on Sjælland, widely planted.',
    ecology:
      'The fleshy arils are eaten by thrushes and other birds, which disperse the seeds (the toxic seed passes through undigested). Dense yew canopy provides excellent shelter and nesting habitat for birds like goldcrest and firecrest. Extremely long-lived specimens become hollow, providing habitat for bats and owls.',
    notes:
      'On Sjælland, yew is most often encountered as a large shrub or small understorey tree rather than reaching full tree height, particularly in garden, hedge, and churchyard settings.',
  },
  {
    id: 'picea-abies',
    commonNameEn: 'Norway Spruce',
    commonNameDa: 'Rødgran',
    scientificName: 'Picea abies',
    family: 'Pinaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'The most widely planted tree in Denmark, Norway spruce was introduced for timber production and now dominates plantation forestry. Despite its name, it is not native to Denmark (it was present in the post-glacial period but died out). It is the traditional Danish Christmas tree species.',
    identification: {
      leaves:
        'Short, stiff, 4-sided needles, 1–2.5 cm, attached singly and spirally arranged on the twig. Dark green. Each needle sits on a small, raised, peg-like projection (pulvinus) that remains when the needle falls — giving bare twigs a rough texture.',
      bark:
        'Reddish-brown to grey-brown, becoming scaly with thin, irregular flakes on mature trees.',
      flowers:
        'Monoecious. Male cones small, reddish, at branch tips. Female cones reddish-purple when young, at the top of the crown. Wind-pollinated, May.',
      fruit:
        'Large, cylindrical, pendulous cones, 10–18 cm long — the longest cones of any spruce commonly grown in Denmark. Light brown when ripe.',
      size: 'Up to 30–50 m in good conditions. Narrow, conical (Christmas-tree) shape with drooping lower branches. Lives 200–300 years.',
      distinguishingFeatures:
        'Distinguished from Sitka spruce by: shorter, less prickly needles; bark colour (reddish vs grey); longer, more cylindrical cones. Distinguished from other conifers by the 4-sided needles on pegs and the pendulous cones.',
    },
    habitat:
      'Extensively planted in commercial forests across Sjælland and throughout Denmark. Also common in parks, gardens, and as Christmas trees. Prefers moist, acidic soils but grows on a wide range of sites.',
    ecology:
      'Spruce plantations are generally species-poor but provide habitat for goldcrest, coal tit, red squirrel, and goshawk. Dense canopy suppresses ground flora. Wind-throw is a significant risk on shallow Danish soils. The species is being gradually replaced in modern forestry with more diverse planting.',
  },
  {
    id: 'picea-sitchensis',
    commonNameEn: 'Sitka Spruce',
    commonNameDa: 'Sitkagran',
    scientificName: 'Picea sitchensis',
    family: 'Pinaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'Introduced from the Pacific coast of North America, Sitka spruce has been widely planted in Denmark for its fast growth and tolerance of exposed, windy conditions. It is the largest spruce species in the world in its native range.',
    identification: {
      leaves:
        'Flattened needles (not 4-sided like Norway spruce), 1.5–2.5 cm, stiff and very sharp-pointed — they prick if you grasp a branch. Bright bluish-green above with two white stomatal bands below.',
      bark:
        'Grey to purplish-grey, flaking in thin, rounded plates. Distinctly greyer than Norway spruce.',
      flowers:
        'Monoecious. Similar to Norway spruce. Wind-pollinated in spring.',
      fruit:
        'Pendulous, cylindrical cones, 5–10 cm (shorter than Norway spruce), with thin, crinkly, papery scales that have wavy, irregular edges.',
      size: 'Up to 30–50 m in Denmark. Conical. Fast-growing — can add 1 m height per year in youth.',
      distinguishingFeatures:
        'The very sharp, prickly, flattened needles with white bands below are the key diagnostic feature. Compared to Norway spruce: flatter and sharper needles, shorter cones with papery scales, greyer bark.',
    },
    habitat:
      'Planted in forestry plantations, especially in exposed western and coastal areas. On Sjælland, found in larger forestry blocks and parks. Tolerates wind and maritime conditions.',
    ecology:
      'Similar to Norway spruce plantations in terms of ecology. Provides shelter in exposed locations. Seed crops feed finches, especially siskins. Being reconsidered in Danish forestry as climate change alters growing conditions.',
  },
  {
    id: 'pinus-sylvestris',
    commonNameEn: 'Scots Pine',
    commonNameDa: 'Skovfyr',
    scientificName: 'Pinus sylvestris',
    family: 'Pinaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'Scots pine was native to Denmark in the post-glacial period and lingered in parts of Jutland into historical times, but was largely replanted during the 18th–19th century heath reclamation. It is easily recognised by its distinctive orange-red upper bark and characteristic flat-topped silhouette.',
    identification: {
      leaves:
        'Needles in pairs, 3–7 cm long, twisted, blue-green to grey-green. Shorter than most other pines grown in Denmark. Needles persist for 2–3 years.',
      bark:
        'Very distinctive: thick, fissured, grey-brown at the base, becoming smooth and bright orange-red to coppery on the upper trunk and branches — visible from a distance.',
      flowers:
        'Monoecious. Male cones yellow, clustered at the base of new shoots. Female cones small, red, at shoot tips. Wind-pollinated, May–June.',
      fruit:
        'Ovoid cones, 3–7 cm, grey-brown when mature, with flat-ended scales. Take two years to mature. Open to release winged seeds.',
      size: 'Up to 20–35 m. Conical when young, developing a flat-topped, irregular crown with age. Can live 300–700 years.',
      distinguishingFeatures:
        'The orange-red upper bark is unmistakable and visible from distance. Combined with paired needles (only 2 per bundle), a flat-topped mature crown, and small ovoid cones, Scots pine is one of the easier conifers to identify.',
    },
    habitat:
      'Sandy, acidic, often poor soils — heaths, dunes, and light sandy forests. On Sjælland, found in plantation forests, parks (especially Dyrehaven), and on sandy glaciofluvial deposits.',
    ecology:
      'An important species for biodiversity in the right context — supports pine-specialist insects, crossbills, and crested tits. Open pine woodland is a valuable habitat type. Ectomycorrhizal associations with many prized mushroom species including ceps (Boletus edulis) and chanterelles.',
  },
  {
    id: 'larix-kaempferi',
    commonNameEn: 'Japanese Larch',
    commonNameDa: 'Japansk lærk',
    scientificName: 'Larix kaempferi',
    family: 'Pinaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'The most commonly planted larch species in Denmark, Japanese larch is unique among conifers commonly grown here in being deciduous — dropping its needles each autumn after a golden-yellow colour display. Introduced from Japan in the 19th century for forestry.',
    identification: {
      leaves:
        'Soft, flexible needles, 2–5 cm, in dense rosettes of 20–40 on short shoots, or singly on long shoots. Bright green in spring, golden-yellow in autumn before dropping. Broader and more blue-green than European larch.',
      bark:
        'Reddish-brown to grey-brown, scaly, becoming deeply fissured on old trees.',
      flowers:
        'Monoecious. Male cones small, yellow, pendulous below shoots. Female cones upright, pink to reddish — particularly attractive in spring.',
      fruit:
        'Small ovoid cones, 2–3.5 cm, with scales that turn outward and reflex (curl back) at the tips — a key difference from European larch, whose cone scales are straight. Cones persist on branches.',
      size: 'Up to 25–35 m. Conical, becoming more open with age. Fast-growing.',
      distinguishingFeatures:
        'A deciduous conifer — if the needles have fallen or are turning yellow, and it\'s a conifer, it\'s almost certainly a larch. Distinguished from European larch (L. decidua) by the reflexed cone scales, slightly broader and more blue-green needles, and reddish (not yellowish) twigs.',
    },
    habitat:
      'Planted in forestry plantations and parks across Sjælland. Grows well on a range of soils. Prefers well-drained conditions.',
    ecology:
      'As a deciduous conifer, larch allows more light to the forest floor than evergreen conifers, supporting a richer ground flora. The light canopy benefits crossbills, siskins, and other finches that feed on the seed cones. Less susceptible to wind-throw than spruce.',
    notes:
      'European larch (L. decidua) is also encountered in Denmark, and hybrids between the two species (L. × marschlinsii, Dunkeld larch) are commonly planted for their vigorous growth. The cone scale shape is the most reliable way to separate the species: reflexed (curled back) in Japanese larch, straight in European larch.',
  },
  {
    id: 'abies-nordmanniana',
    commonNameEn: 'Nordmann Fir',
    commonNameDa: 'Nordmannsgran',
    scientificName: 'Abies nordmanniana',
    family: 'Pinaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'Originally from the Caucasus Mountains, Nordmann fir has become an economically important species in Denmark — the country is the world\'s largest exporter of Nordmann fir Christmas trees. Increasingly seen growing to full maturity in parks and forests.',
    identification: {
      leaves:
        'Flat, soft needles, 2–3.5 cm, dark glossy green above with two white stomatal bands below. Arranged in two flat rows (pectinate), creating a dense, layered look. Needles do not drop easily — hence the Christmas tree popularity.',
      bark:
        'Smooth and grey when young, with resin blisters. Becomes fissured and plated on old trees.',
      flowers:
        'Monoecious. Male cones small, reddish-purple, on undersides of branches. Female cones upright at the top of the crown.',
      fruit:
        'Upright, cylindrical cones, 12–20 cm, on the upper branches. Green then brown. They disintegrate on the tree — you rarely find intact fallen fir cones (unlike spruce or pine).',
      size: 'Up to 30–50 m in maturity (most in Denmark are harvested young as Christmas trees). Symmetrical, conical. Dense branching.',
      distinguishingFeatures:
        'Distinguished from Norway spruce by: flat (not 4-sided) soft needles, upright (not pendulous) cones that disintegrate on the tree, smoother bark. The neat, flat needle arrangement and glossy appearance make it look well-groomed even wild.',
    },
    habitat:
      'Christmas tree plantations are ubiquitous across Sjælland and all of Denmark. Also planted in parks, large gardens, and increasingly in forestry settings.',
    ecology:
      'Christmas tree plantations are generally low in biodiversity but provide shelter for roe deer and ground-nesting birds. When allowed to grow to maturity, Nordmann fir develops into an impressive specimen tree. The Caucasus origin means it may perform well under moderate climate change.',
  },
  {
    id: 'pseudotsuga-menziesii',
    commonNameEn: 'Douglas Fir',
    commonNameDa: 'Douglasgran',
    scientificName: 'Pseudotsuga menziesii',
    family: 'Pinaceae',
    category: 'tree',
    subcategory: 'conifer',
    description:
      'Introduced from western North America, Douglas fir is one of the most productive timber trees planted in Denmark. It is gaining importance as Danish forestry diversifies beyond Norway spruce. Not a true fir (Abies) despite the common name.',
    identification: {
      leaves:
        'Flat, soft needles, 2–3.5 cm, arranged radially but appearing two-ranked. Dark green to blue-green above with two white stomatal bands below. When crushed, they have a distinctive sweet, citrusy/fruity fragrance.',
      bark:
        'Smooth, grey, with resin blisters when young. Becomes very thick (up to 30 cm), deeply furrowed and corky on old trees — distinctive rough, dark brown bark.',
      flowers:
        'Monoecious. Male cones small, orange-red. Female cones reddish-green. Wind-pollinated in spring.',
      fruit:
        'Pendulous cones, 5–10 cm, with a distinctive 3-pointed (trident-shaped) bract protruding from each scale — described as looking like the hind legs and tail of a mouse diving into the cone. This is the key identification feature.',
      size: 'Up to 40–60 m — among the tallest trees grown in Denmark. Conical. Fast-growing and long-lived (500+ years in native range).',
      distinguishingFeatures:
        'The pendulous cones with protruding 3-pointed bracts are unmistakable — no other Danish conifer has these "mouse-tail" bracts. The sweet, fruity-smelling crushed needles and the thick, deeply furrowed bark on mature trees are also diagnostic.',
    },
    habitat:
      'Forestry plantations, parks, and arboreta across Sjælland. Prefers well-drained, moderately fertile soils. Being planted increasingly as a spruce alternative.',
    ecology:
      'Productive timber species that can develop better ground flora than spruce due to its more open canopy. Squirrels and finches eat the seeds. The thick bark is fire-resistant (adapted to its native Pacific Northwest habitat). Being studied as a climate-change-resilient species for Scandinavian forestry.',
  },
];
