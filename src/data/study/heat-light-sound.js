/**
 * Heat, Light and Sound — /study-material/physics/heat-light-sound/
 *
 * Thermal physics, wave motion and optics. These three are grouped because
 * they share the same underlying idea — energy transported without matter
 * being transported — and because exams treat them as one block of applied,
 * explain-the-phenomenon questions.
 */
export default {
  subject: 'physics',
  subjectName: 'Physics',
  slug: 'heat-light-sound',
  title: 'Heat, Light & Sound',
  seoTitle: 'Heat Light and Sound for Competitive Exams | Optics, Waves Notes & Practice',
  metaDescription:
    'Complete thermal physics, waves and optics study material for JEE, NEET, SSC, RRB and state exams — thermometry and calorimetry, heat transfer.',
  readMinutes: 25,
  lead: [
    'Heat, sound and light are grouped together because they are all about energy moving without matter moving with it, and because exams treat them as one block of applied questions — why a pressure cooker cooks faster, why the sky is blue, why a shorter organ pipe sounds higher.',
    'Optics in particular carries more general-awareness questions than any other part of physics, because almost every question about a mirror, a lens or a colour reduces to reflection, refraction, dispersion or scattering. This page gives the working formula for each and, immediately after it, the everyday phenomenon it explains.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '20–25% of the physics paper', note: 'Thermodynamics, waves and optics together form the second largest block after mechanics.' },
    { exam: 'NEET Physics', count: '8–10 questions', note: 'Optics and thermodynamics both carry reliable weight.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Optical phenomena and heat transfer, asked conceptually.' },
    { exam: 'RRB NTPC / Group D', count: '2–4 questions', note: 'The most-asked physics block in railway papers.' },
    { exam: 'NDA / CDS General Ability', count: '3–4 questions', note: 'School-level numerical and conceptual questions.' },
  ],

  contents: [
    { icon: 'bell', title: 'Temperature and heat', sub: 'Scales, expansion, calorimetry', href: '#thermometry' },
    { icon: 'refresh', title: 'Heat transfer', sub: 'Conduction, convection, radiation', href: '#transfer' },
    { icon: 'chart', title: 'Thermodynamics', sub: 'The laws and the kinetic theory', href: '#thermodynamics' },
    { icon: 'play', title: 'Waves and sound', sub: 'Wave motion, resonance, Doppler', href: '#waves' },
    { icon: 'image', title: 'Reflection', sub: 'Plane and spherical mirrors', href: '#reflection' },
    { icon: 'search', title: 'Refraction', sub: 'Lenses, prisms and the eye', href: '#refraction' },
    { icon: 'layers', title: 'Wave optics', sub: 'Interference, diffraction, spectrum', href: '#wave-optics' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'thermometry',
      heading: 'Temperature and heat',
      eyebrow: 'Scales, expansion, calorimetry',
      intro:
        'Heat and temperature are not the same thing, and almost every conceptual question in this section is testing whether you know the difference.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Heat versus temperature',
              'Heat is energy in transit from a hotter body to a colder one, measured in joules. Temperature is a measure of the average kinetic energy of the molecules, and it determines the direction of that flow. A bucket of warm water contains far more heat than a red-hot spark, but the spark is at a much higher temperature.',
            ],
            [
              'The zeroth law',
              'If two bodies are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. It sounds trivial and is not: it is what makes temperature a meaningful and measurable quantity, and it is why a thermometer works at all.',
            ],
            [
              'Thermal expansion',
              'Most substances expand on heating, because the mean separation of molecules increases. For a solid, the area expansion coefficient is twice the linear one and the volume coefficient three times it. Water is the great exception, contracting between 0 and 4 °C and expanding below 4 °C, which is why ice floats and why a lake freezes from the surface down.',
            ],
            [
              'Specific and latent heat',
              'Specific heat capacity is the heat needed to raise the temperature of unit mass by one degree. Water\'s is unusually high, which is why it moderates coastal climates and is used as a coolant. Latent heat is the heat absorbed or released during a change of state at constant temperature — the latent heat of fusion of ice and the latent heat of vaporisation of water, the latter being far larger, which is why steam burns are worse than boiling-water burns.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Thermal relations',
          items: [
            { expr: 'C/100 = (F − 32)/180 = (K − 273.15)/100', note: 'Converting between Celsius, Fahrenheit and Kelvin. −40° is the temperature at which Celsius and Fahrenheit read the same.' },
            { expr: 'ΔL = L₀ α ΔT', note: 'Linear expansion; the area coefficient β = 2α and the volume coefficient γ = 3α for an isotropic solid.' },
            { expr: 'Q = mcΔT', note: 'Heat needed to change temperature without a change of state.' },
            { expr: 'Q = mL', note: 'Heat needed for a change of state at constant temperature; L is the latent heat.' },
            { expr: 'Heat lost = heat gained', note: 'The principle of calorimetry in an insulated system — the basis of every mixing problem.' },
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'transfer',
      heading: 'Heat transfer',
      eyebrow: 'Conduction, convection, radiation',
      intro:
        'Three mechanisms, distinguished by what moves. In conduction energy moves but matter does not; in convection matter carries the energy; in radiation neither requires a medium at all.',
      blocks: [
        {
          type: 'table',
          caption: 'The three modes',
          head: ['Mode', 'How it works', 'Everyday examples'],
          rows: [
            ['Conduction', 'Energy passes from molecule to molecule without bulk movement of the material. Dominant in solids, and especially in metals, where free electrons carry the energy.', 'A metal spoon in hot tea; the handle of a frying pan; woollen clothing works by trapping air, which conducts poorly.'],
            ['Convection', 'A heated fluid becomes less dense, rises, and is replaced by cooler fluid, setting up a circulating current.', 'Room heating; land and sea breezes; the monsoon itself; the cooling coil placed at the top of a refrigerator so cooled air sinks.'],
            ['Radiation', 'Energy travels as electromagnetic waves and needs no medium at all.', 'Heat from the sun across empty space; the warmth felt facing a fire; a thermos flask silvered to reflect radiation back.'],
          ],
        },
        {
          type: 'formula',
          title: 'Radiation and cooling',
          items: [
            { expr: 'Q/t = kA(T₁ − T₂)/L', note: 'Rate of conduction through a slab; k is thermal conductivity, highest for silver and copper among common materials.' },
            { expr: 'E = σT⁴', note: 'Stefan-Boltzmann law — a black body radiates in proportion to the fourth power of absolute temperature, so doubling the temperature increases radiation sixteenfold.' },
            { expr: 'λ_max × T = constant', note: 'Wien\'s displacement law — hotter bodies radiate at shorter wavelengths, which is why a heated iron glows first red and then white.' },
            { expr: 'Rate of cooling ∝ (T − T_surroundings)', note: 'Newton\'s law of cooling, valid for a small temperature difference.' },
          ],
        },
        {
          type: 'note',
          title: 'Why a thermos flask has three defences',
          text:
            'The double wall with a vacuum between eliminates conduction and convection, since neither works without a medium. The silvered surfaces reflect radiation back on both sides. The stopper closes the one remaining path, evaporation and convection through the top. A flask is therefore a neat demonstration of all three modes at once, which is exactly why it is asked about.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'thermodynamics',
      heading: 'Thermodynamics',
      eyebrow: 'The laws and the kinetic theory',
      intro:
        'The laws relating heat, work and internal energy, together with the molecular picture that explains why gases behave as they do.',
      blocks: [
        {
          type: 'formula',
          title: 'Gas laws and the kinetic theory',
          items: [
            { expr: 'PV = nRT', note: 'The ideal gas equation, combining Boyle\'s law at constant temperature, Charles\'s law at constant pressure and Gay-Lussac\'s law at constant volume.' },
            { expr: 'PV = ⅓ m N v²_rms', note: 'The kinetic theory result — pressure arises from molecular collisions with the walls.' },
            { expr: 'v_rms = √(3RT/M)', note: 'Root mean square speed. It rises with temperature and falls with molar mass, which is why hydrogen diffuses fastest.' },
            { expr: 'Average KE per molecule = (3/2)kT', note: 'Depends only on temperature, not on the identity of the gas — which is what temperature fundamentally measures.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'First law of thermodynamics',
              'Heat supplied to a system equals the increase in its internal energy plus the work done by it. It is the conservation of energy applied to thermal processes, and it rules out a perpetual motion machine of the first kind — one that produces work from nothing.',
            ],
            [
              'The four processes',
              'Isothermal, at constant temperature, so internal energy does not change and all the heat supplied becomes work. Adiabatic, with no heat exchanged, so any work done comes from internal energy and the gas cools on expanding. Isobaric, at constant pressure. Isochoric, at constant volume, so no work is done and all the heat raises internal energy.',
            ],
            [
              'Second law and entropy',
              'Heat does not flow spontaneously from a colder to a hotter body, and no engine can convert heat entirely into work. Entropy is a measure of disorder and of energy unavailable for work; it increases in every spontaneous process. The second law rules out a perpetual motion machine of the second kind — one that converts heat wholly into work.',
            ],
            [
              'The Carnot engine',
              'The ideal reversible engine operating between two temperatures, whose efficiency is 1 − T_cold/T_hot with temperatures in kelvin. No real engine working between the same two temperatures can do better. The efficiency reaches 1 only if the cold reservoir is at absolute zero, which is why complete conversion of heat into work is impossible.',
            ],
            [
              'A refrigerator is a heat engine run backwards',
              'It uses work to move heat from a cold interior to a warmer room, which does not violate the second law because the transfer is not spontaneous. Its coefficient of performance is the heat removed divided by the work done, and it is greater the smaller the temperature difference — which is why a refrigerator in a hot kitchen works harder.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'waves',
      heading: 'Waves and sound',
      eyebrow: 'Wave motion, resonance, Doppler',
      intro:
        'A wave carries energy without carrying matter. Sound is the mechanical case, which is why it needs a medium, and light is the electromagnetic case, which is why it does not.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Transverse and longitudinal',
              'In a transverse wave the particles vibrate perpendicular to the direction of travel — light, and waves on a string. In a longitudinal wave they vibrate along it, producing compressions and rarefactions — sound in air. Only transverse waves can be polarised, which is the classic test for distinguishing the two.',
            ],
            [
              'Speed of sound',
              'About 343 metres per second in air at 20 °C, rising by roughly 0.6 m/s per degree. It is faster in liquids and faster still in solids, because the elasticity term dominates over the density term — the reverse of most people\'s intuition. Sound cannot travel in a vacuum.',
            ],
            [
              'Pitch, loudness and quality',
              'Pitch corresponds to frequency, loudness to amplitude and quality or timbre to the pattern of overtones — which is why the same note on a flute and a violin sounds different. The audible range for humans is about 20 hertz to 20 kilohertz; below is infrasound and above is ultrasound.',
            ],
            [
              'Echo and reverberation',
              'An echo is a distinctly separate reflected sound. Because the ear cannot resolve two sounds less than about a tenth of a second apart, the reflecting surface must be at least around seventeen metres away. Reverberation is the persistence of sound from repeated reflection in an enclosed space, and it is controlled by absorbing materials in an auditorium.',
            ],
            [
              'Resonance and beats',
              'Resonance occurs when a body is driven at its natural frequency, producing a large amplitude — which is why soldiers break step on a bridge and why a radio tunes to one station. Beats are the periodic rise and fall in loudness when two slightly different frequencies sound together, at a beat frequency equal to the difference; musicians use them to tune instruments.',
            ],
            [
              'Ultrasound applications',
              'SONAR for measuring the depth of the sea and detecting submarines, medical imaging including foetal scans, non-destructive testing of metal castings for internal flaws, and ultrasonic cleaning. Bats and dolphins navigate by echolocation using the same principle.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Wave relations',
          items: [
            { expr: 'v = fλ', note: 'The single relation that connects speed, frequency and wavelength for every kind of wave.' },
            { expr: 'v = √(γP/ρ) in a gas', note: 'Laplace\'s correction to Newton\'s formula: sound propagation is adiabatic rather than isothermal, which is why the earlier value was about 15% too low.' },
            { expr: 'Closed organ pipe: f = v/4L, odd harmonics only', note: 'A pipe closed at one end has a node there and an antinode at the open end.' },
            { expr: 'Open organ pipe: f = v/2L, all harmonics', note: 'An open pipe of the same length therefore sounds an octave higher than a closed one.' },
            { expr: "f' = f(v ± v_o)/(v ∓ v_s)", note: 'The Doppler effect: apparent frequency rises on approach and falls on recession. The same effect gives the redshift of receding galaxies.' },
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'reflection',
      heading: 'Reflection',
      eyebrow: 'Plane and spherical mirrors',
      intro:
        'The most heavily examined optical topic in general-awareness papers, because every question about a mirror in daily life reduces to two or three rules.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Laws of reflection',
              'The angle of incidence equals the angle of reflection, and the incident ray, the reflected ray and the normal all lie in one plane. These hold for every surface, including a rough one — diffuse reflection differs from regular reflection only because the normals point in different directions at different points.',
            ],
            [
              'Plane mirror',
              'The image is virtual, erect, of the same size, laterally inverted, and as far behind the mirror as the object is in front. A person needs a mirror only half their own height to see themselves fully, whatever their distance from it — a result that is asked surprisingly often.',
            ],
            [
              'Concave mirror',
              'Converging. The image can be real or virtual depending on where the object is: beyond the focus it is real and inverted, and within the focus it is virtual, erect and magnified. This is why a concave mirror serves as a shaving or dentist\'s mirror at close range, and why a lamp at its focus produces a parallel beam in a headlight or a searchlight.',
            ],
            [
              'Convex mirror',
              'Diverging. The image is always virtual, erect and diminished, whatever the object distance, and the field of view is wide. Hence its use as a vehicle rear-view mirror and at blind corners — with the warning that objects are closer than they appear.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Mirror relations',
          items: [
            { expr: '1/v + 1/u = 1/f', note: 'The mirror formula, with distances measured from the pole and signs following the Cartesian convention.' },
            { expr: 'f = R/2', note: 'The focal length is half the radius of curvature.' },
            { expr: 'm = −v/u = h_image/h_object', note: 'Magnification. A negative value means an inverted, and therefore real, image.' },
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'refraction',
      heading: 'Refraction',
      eyebrow: 'Lenses, prisms and the eye',
      intro:
        'Refraction is the bending of light on passing between media of different optical density, and it accounts for lenses, the rainbow, the mirage and every defect of the eye.',
      blocks: [
        {
          type: 'formula',
          title: 'Refraction and lenses',
          items: [
            { expr: 'n₁ sin i = n₂ sin r', note: 'Snell\'s law. Light bends towards the normal on entering a denser medium and away from it on leaving.' },
            { expr: 'n = c/v', note: 'Refractive index as the ratio of the speed of light in vacuum to that in the medium — always greater than 1, and largest among common materials for diamond.' },
            { expr: 'sin C = 1/n', note: 'The critical angle. Beyond it, light travelling from denser to rarer medium is totally internally reflected.' },
            { expr: '1/v − 1/u = 1/f', note: 'The lens formula. Note the minus sign, which distinguishes it from the mirror formula.' },
            { expr: 'P = 1/f (in metres), measured in dioptres', note: 'Power of a lens; positive for converging, negative for diverging. Powers of thin lenses in contact simply add.' },
            { expr: '1/f = (n − 1)(1/R₁ − 1/R₂)', note: 'The lens maker\'s formula, showing that focal length depends on both the material and the curvature.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Total internal reflection in daily life',
              'The sparkle of a diamond, whose very high refractive index gives a critical angle of about 24°, so light entering it bounces repeatedly before emerging. Optical fibres, in which light is guided along a bent path with almost no loss. The mirage, where a layer of hot air near the ground acts as a rarer medium and light from the sky is totally internally reflected, producing the appearance of water.',
            ],
            [
              'Dispersion and the prism',
              'A prism separates white light into its constituent colours because the refractive index depends on wavelength — violet is bent most and red least. The rainbow is produced by refraction, total internal reflection and dispersion within raindrops. The order VIBGYOR runs from shortest to longest wavelength.',
            ],
            [
              'Scattering',
              'Rayleigh scattering by molecules is strongly wavelength-dependent, which makes the sky blue and the setting sun red, since at sunset the light traverses a longer atmospheric path. Larger particles scatter all wavelengths nearly equally, which is why clouds and fog appear white.',
            ],
            [
              'The human eye and its defects',
              'The eye focuses by changing the shape of its lens, a process called accommodation. Myopia or short-sight, where distant objects blur because the image forms in front of the retina, is corrected with a concave lens of negative power. Hypermetropia or long-sight is corrected with a convex lens. Presbyopia, the loss of accommodation with age, needs bifocals. Astigmatism, from an unevenly curved cornea, needs a cylindrical lens. Cataract is a clouding of the lens and requires surgery, not spectacles.',
            ],
            [
              'Optical instruments',
              'A simple microscope is a single convex lens of short focal length. A compound microscope uses an objective of very short focal length and an eyepiece. A refracting telescope uses an objective of long focal length and an eyepiece of short focal length, giving magnification f_objective/f_eyepiece. Large telescopes use mirrors rather than lenses, because a large lens sags under its own weight and suffers chromatic aberration.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'wave-optics',
      heading: 'Wave optics',
      eyebrow: 'Interference, diffraction, spectrum',
      intro:
        'Phenomena that only make sense if light is a wave, together with the electromagnetic spectrum that places visible light among its neighbours.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Interference',
              'The superposition of two coherent waves, producing bright fringes where they arrive in phase and dark ones where they arrive out of phase. Young\'s double slit experiment is the classic demonstration and was the decisive evidence for the wave nature of light. The colours in a soap bubble and an oil film on water are interference between light reflected from the two surfaces.',
            ],
            [
              'Diffraction',
              'The bending of waves around obstacles and through narrow openings, appreciable when the aperture is comparable to the wavelength. It is why sound bends around a corner readily — its wavelength is metres — while light does not, its wavelength being under a micrometre. Diffraction also sets the ultimate limit on the resolving power of any optical instrument.',
            ],
            [
              'Polarisation',
              'The restriction of the vibrations of a transverse wave to one plane. It proves light is transverse and cannot happen to sound. Polaroid sunglasses cut glare because light reflected from a horizontal surface is partly polarised; the same principle is used in liquid crystal displays and in stress analysis.',
            ],
            [
              'The electromagnetic spectrum',
              'In order of increasing frequency and decreasing wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays and gamma rays. All travel at the same speed in vacuum, about 3 × 10⁸ metres per second. Visible light occupies a very narrow band, roughly 400 to 700 nanometres.',
            ],
            [
              'Uses across the spectrum',
              'Radio waves for broadcasting and communication; microwaves for radar, mobile telephony and cooking; infrared for remote controls, thermal imaging and night vision; ultraviolet for sterilisation and for causing sunburn and vitamin D synthesis; X-rays for medical imaging and crystallography; gamma rays for cancer treatment and for sterilising medical equipment. Ozone in the stratosphere absorbs most of the harmful ultraviolet.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Wave optics relations',
          items: [
            { expr: 'Fringe width β = λD/d', note: 'In Young\'s double slit experiment, with slit separation d and screen distance D. Wider fringes come from longer wavelength or closer slits.' },
            { expr: 'Constructive interference: path difference = nλ', note: 'Destructive interference occurs at path differences of (n + ½)λ.' },
            { expr: 'c = 3 × 10⁸ m/s in vacuum', note: 'The same for every electromagnetic wave, from radio to gamma.' },
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'At what temperature do the Celsius and Fahrenheit scales read the same?',
      steps: [
        'Set C = F = x in the relation C/100 = (F − 32)/180.',
        'That gives x/100 = (x − 32)/180, so 180x = 100x − 3200.',
        '80x = −3200, so x = −40.',
      ],
      answer: '−40 degrees — the two scales coincide there.',
    },
    {
      q: 'Why is a burn from steam at 100 °C worse than one from water at 100 °C?',
      steps: [
        'Both are at the same temperature, so the difference cannot be temperature.',
        'Steam condensing to water at 100 °C releases its latent heat of vaporisation, which is very large — far greater than the latent heat of fusion.',
        'That extra energy is delivered to the skin before any cooling begins, so the injury is much more severe.',
      ],
      answer: 'Steam additionally delivers its latent heat of vaporisation on condensing.',
    },
    {
      q: 'An open organ pipe and a closed one have the same length. Compare their fundamental frequencies.',
      steps: [
        'For a closed pipe the fundamental is f = v/4L, since there is a node at the closed end and an antinode at the open one.',
        'For an open pipe it is f = v/2L, with antinodes at both ends.',
        'The open pipe therefore sounds at twice the frequency — an octave higher. The closed pipe also produces only odd harmonics, while the open pipe produces all of them.',
      ],
      answer: 'The open pipe sounds an octave higher, and produces all harmonics rather than only odd ones.',
    },
    {
      q: 'Why does a diamond sparkle more than a glass imitation?',
      steps: [
        'The critical angle is given by sin C = 1/n, so a higher refractive index gives a smaller critical angle.',
        'Diamond\'s refractive index of about 2.42 gives a critical angle near 24°, against roughly 42° for glass.',
        'Far more of the light entering a diamond therefore strikes its faces beyond the critical angle and is totally internally reflected, bouncing repeatedly before emerging — and its high dispersion splits that light into colours.',
      ],
      answer: 'Its very small critical angle traps light by total internal reflection, and its high dispersion adds colour.',
    },
    {
      q: 'A concave mirror of focal length 10 cm has an object 5 cm in front of it. Describe the image.',
      steps: [
        'The object lies within the focal length, which for a concave mirror is the case that gives a virtual image.',
        'Using 1/v + 1/u = 1/f with the Cartesian convention, u = −5 cm and f = −10 cm gives v = +10 cm — positive, so behind the mirror and virtual.',
        'Magnification m = −v/u = −10/(−5) = +2, so the image is erect and twice the size.',
      ],
      answer: 'Virtual, erect and magnified twofold — the shaving-mirror case.',
    },
    {
      q: 'Sound travels faster in water than in air, though water is far denser. Why?',
      steps: [
        'The speed of a mechanical wave depends on the ratio of an elastic property to an inertial one, roughly √(elasticity/density).',
        'Water is about 800 times denser than air, which alone would make sound slower.',
        'But water\'s bulk modulus is far more than 800 times that of air, so the elasticity term dominates and the speed comes out roughly four times higher.',
      ],
      answer: 'Because the elasticity of water exceeds air\'s by much more than its density does.',
    },
    {
      q: 'A person cannot see distant objects clearly. What is the defect and its correction?',
      steps: [
        'Distant objects blur while near ones are clear, which means the image of a distant object forms in front of the retina.',
        'That defect is myopia, or short-sightedness, caused by an eyeball too long or a lens too strongly converging.',
        'It is corrected by a diverging lens — a concave lens of negative power — which moves the image back onto the retina.',
      ],
      answer: 'Myopia, corrected with a concave lens of negative power.',
    },
    {
      q: 'Why can we hear around a corner but not see around it?',
      steps: [
        'Both are waves, and both diffract — bend around obstacles.',
        'Diffraction is appreciable only when the obstacle or opening is comparable to the wavelength.',
        'Audible sound has wavelengths of centimetres to metres, comparable to a doorway, so it bends readily. Visible light has wavelengths under a micrometre, so its bending around a doorway is utterly negligible.',
      ],
      answer: 'Because sound\'s wavelength is comparable to everyday obstacles and light\'s is not.',
    },
  ],

  practice: [
    {
      q: 'Which of these is a longitudinal wave?',
      options: ['Light', 'Radio waves', 'Sound in air', 'Waves on a string'],
      answer: 2,
      explain: 'Particles vibrate along the direction of travel, producing compressions and rarefactions. Only transverse waves can be polarised.',
    },
    {
      q: 'The image formed by a convex mirror is always:',
      options: ['Virtual, erect and diminished', 'Real and inverted', 'Virtual and magnified', 'Real and the same size'],
      answer: 0,
      explain: 'Which is why it is used for rear-view mirrors — it gives a wide field of view.',
    },
    {
      q: 'A mirage is caused by:',
      options: ['Total internal reflection', 'Dispersion', 'Diffraction', 'Interference'],
      answer: 0,
      explain: 'Hot air near the ground acts as a rarer medium, and light from the sky is totally internally reflected.',
    },
    {
      q: 'Sound cannot travel through:',
      options: ['Water', 'Steel', 'A vacuum', 'Hydrogen'],
      answer: 2,
      explain: 'It is a mechanical wave and needs a material medium. It travels fastest in solids and slowest in gases.',
    },
    {
      q: 'The power of a lens of focal length 50 cm is:',
      options: ['0.5 D', '2 D', '5 D', '50 D'],
      answer: 1,
      explain: 'P = 1/f with f in metres, so P = 1/0.5 = 2 dioptres.',
    },
    {
      q: 'Myopia is corrected using a:',
      options: ['Concave lens', 'Convex lens', 'Cylindrical lens', 'Bifocal lens'],
      answer: 0,
      explain: 'Hypermetropia needs a convex lens, astigmatism a cylindrical lens and presbyopia bifocals.',
    },
    {
      q: 'The first law of thermodynamics is a statement of:',
      options: ['Conservation of momentum', 'Conservation of energy', 'Increase of entropy', 'Equipartition of energy'],
      answer: 1,
      explain: 'Heat supplied equals the increase in internal energy plus the work done by the system.',
    },
    {
      q: 'In an adiabatic process:',
      options: ['Temperature is constant', 'Pressure is constant', 'No heat is exchanged', 'Volume is constant'],
      answer: 2,
      explain: 'Work done therefore comes entirely from internal energy, so a gas cools on expanding adiabatically.',
    },
    {
      q: 'Which colour of visible light has the shortest wavelength?',
      options: ['Red', 'Green', 'Blue', 'Violet'],
      answer: 3,
      explain: 'VIBGYOR runs from shortest to longest wavelength, so violet is shortest and red longest.',
    },
    {
      q: 'The blue colour of the sky is due to:',
      options: ['Reflection', 'Refraction', 'Scattering', 'Total internal reflection'],
      answer: 2,
      explain: 'Shorter wavelengths are scattered far more strongly by atmospheric molecules.',
    },
    {
      q: 'Heat transfer in a vacuum can occur only by:',
      options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
      answer: 2,
      explain: 'Radiation is electromagnetic and needs no medium, which is how the sun\'s heat reaches the earth.',
    },
    {
      q: 'Beats are produced when two sound waves have:',
      options: ['The same frequency', 'Slightly different frequencies', 'Perpendicular directions', 'Different amplitudes only'],
      answer: 1,
      explain: 'The beat frequency equals the difference between the two, and musicians use this to tune instruments.',
    },
    {
      q: 'The efficiency of a Carnot engine depends on:',
      options: ['The working substance', 'The two reservoir temperatures', 'The pressure of the gas', 'The volume of the cylinder'],
      answer: 1,
      explain: 'Efficiency is 1 − T_cold/T_hot with temperatures in kelvin, and no real engine between the same reservoirs can do better.',
    },
    {
      q: 'A person needs a plane mirror of what minimum height to see their full image?',
      options: ['Equal to their height', 'Half their height', 'One-third their height', 'It depends on the distance'],
      answer: 1,
      explain: 'Half the height suffices, and the result is independent of how far the person stands from the mirror.',
    },
    {
      q: 'Polaroid sunglasses reduce glare because reflected light is:',
      options: ['Diffracted', 'Partly polarised', 'Dispersed', 'Refracted'],
      answer: 1,
      explain: 'Light reflected from a horizontal surface is largely polarised horizontally, and the filter blocks that component.',
    },
    {
      q: 'Water has its maximum density at:',
      options: ['0 °C', '4 °C', '25 °C', '100 °C'],
      answer: 1,
      explain: 'Its anomalous expansion below 4 °C is why ice floats and why lakes freeze from the surface downward.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between heat and temperature?',
      a: 'Heat is energy in transit from a hotter body to a colder one, measured in joules and dependent on the amount of substance. Temperature measures the average kinetic energy per molecule and determines the direction of that flow, regardless of quantity. A swimming pool at 30 °C holds far more heat than a cup of tea at 80 °C, but heat flows from the tea to the pool if they touch.',
    },
    {
      q: 'Why is the mirror formula 1/v + 1/u = 1/f but the lens formula 1/v − 1/u = 1/f?',
      a: 'Because of the sign convention and the geometry. For a mirror the reflected light returns to the same side as the object, so both distances are measured in the same direction from the pole. For a lens the light continues through to the far side, so image and object distances are measured on opposite sides. Once the Cartesian convention is applied consistently, the difference in sign is exactly this.',
    },
    {
      q: 'Why does sound travel faster in solids than in gases?',
      a: 'Because the speed depends on the ratio of an elastic modulus to density, and solids are enormously more elastic than gases. Steel is about seven thousand times denser than air, which would slow sound, but its elastic modulus is greater by a far larger factor, so the net effect is a speed roughly fifteen times higher. It is elasticity, not density, that dominates.',
    },
    {
      q: 'Why can the second law not be violated by a refrigerator?',
      a: 'Because the second law forbids heat flowing spontaneously from cold to hot, and a refrigerator does not do it spontaneously — it does work to achieve the transfer, and it dumps more heat into the room than it removes from the interior. The total entropy of the room plus the refrigerator still increases. This is why leaving a fridge door open warms a kitchen rather than cooling it.',
    },
    {
      q: 'What makes the sky blue and the sunset red?',
      a: 'The same mechanism: Rayleigh scattering, which is far stronger for short wavelengths. Looking away from the sun during the day you see scattered light, which is predominantly blue. Looking at the sun near the horizon, the light has travelled a much longer path through the atmosphere and almost all the blue has been scattered out of the direct beam, so what reaches you is red.',
    },
    {
      q: 'Why is total internal reflection so useful?',
      a: 'Because it reflects light with essentially no loss, unlike a mirror, which always absorbs a little. That is what makes optical fibres practical for carrying signals over long distances with a bent path, and it is what makes a cut diamond sparkle. It requires light travelling from a denser to a rarer medium at an angle beyond the critical angle.',
    },
    {
      q: 'Which parts of this topic carry the most marks in general-awareness papers?',
      a: 'Optics, by a wide margin. Questions about mirrors in vehicles and headlights, why a pool looks shallow, why the sky is blue, why a diamond sparkles, and which lens corrects which eye defect appear year after year in SSC and RRB papers. Heat transfer is second. Thermodynamics and wave optics carry far more weight in JEE and NEET than in general awareness.',
    },
    {
      q: 'Why does an open organ pipe sound an octave higher than a closed one of the same length?',
      a: 'Because the boundary conditions differ. A closed pipe has a node at the closed end and an antinode at the open one, which fits a quarter wavelength into the pipe, giving f = v/4L. An open pipe has antinodes at both ends and fits half a wavelength, giving f = v/2L — twice the frequency. The closed pipe also produces only odd harmonics.',
    },
    {
      q: 'Is light a wave or a particle?',
      a: 'Both, depending on the experiment. Interference, diffraction and polarisation can only be explained by treating light as a wave. The photoelectric effect and the Compton effect can only be explained by treating it as particles — photons carrying energy hf. Quantum mechanics accommodates both in a single description, and the phrase used in exams is wave-particle duality.',
    },
    {
      q: 'How much of the physics paper comes from this block?',
      a: 'Roughly a fifth to a quarter of JEE Main and Advanced, with thermodynamics, waves and optics all substantial; eight to ten questions in NEET physics; two to three in SSC CGL Tier 1; two to four in RRB, where optics is the single most-asked physics topic; and three to four in NDA and CDS.',
    },
  ],

  related: [
    { label: 'Mechanics', to: '/study-material/physics/mechanics/' },
    { label: 'Electricity & Magnetism', to: '/study-material/physics/electricity-magnetism/' },
    { label: 'Chemistry', to: '/study-material/chemistry/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'All Physics', to: '/study-material/physics/' },
  ],
}
