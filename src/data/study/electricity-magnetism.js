/**
 * Electricity and Magnetism — /study-material/physics/electricity-magnetism/
 *
 * Electrostatics through to semiconductors, treated as one continuous story:
 * charges at rest, charges in motion, the magnetism that motion produces, the
 * induction that changing magnetism produces, and the modern physics that
 * followed from studying charge at the atomic scale.
 */
export default {
  subject: 'physics',
  subjectName: 'Physics',
  slug: 'electricity-magnetism',
  title: 'Electricity & Magnetism',
  seoTitle: 'Electricity and Magnetism | Circuits, Induction, Modern Physics Practice',
  metaDescription:
    'Complete electricity and magnetism study material for JEE, NEET, SSC, RRB and state exams — electrostatics, current electricity and circuits.',
  readMinutes: 25,
  lead: [
    'Electricity and magnetism are one subject, not two. A moving charge produces a magnetic field, a changing magnetic field produces an electric one, and every generator, motor and transformer in the world is an application of that single reciprocal relationship. Reading them separately is what makes the topic feel arbitrary.',
    'The sequence here follows that logic — charges at rest, then charges in motion, then the magnetism motion produces, then induction — and ends with the modern and semiconductor physics that came from studying charge at the atomic scale. Household wiring is treated in full, because it supplies more general-awareness questions than any other part of the topic.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '25–30% of the physics paper', note: 'Electrostatics, current electricity, magnetism and induction together form the largest block after mechanics.' },
    { exam: 'NEET Physics', count: '10–12 questions', note: 'Current electricity and modern physics are the heaviest sub-topics.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–2 questions', note: 'Conceptual — units, household electricity and simple magnetism.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Units, fuses, earthing and the effects of electric current.' },
    { exam: 'NDA / CDS General Ability', count: '2–4 questions', note: 'Circuits, magnetism and basic modern physics.' },
  ],

  contents: [
    { icon: 'target', title: 'Electrostatics', sub: 'Charge, field, potential, capacitance', href: '#electrostatics' },
    { icon: 'refresh', title: 'Current electricity', sub: 'Ohm\'s law and circuits', href: '#current' },
    { icon: 'bell', title: 'Household electricity', sub: 'Power, heating and safety', href: '#household' },
    { icon: 'globe', title: 'Magnetic effects', sub: 'Fields, forces and motors', href: '#magnetism' },
    { icon: 'play', title: 'Induction and AC', sub: 'Generators and transformers', href: '#induction' },
    { icon: 'search', title: 'Modern physics', sub: 'Photons, atoms and nuclei', href: '#modern' },
    { icon: 'layers', title: 'Semiconductors', sub: 'Diodes, transistors and devices', href: '#semiconductors' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'electrostatics',
      heading: 'Electrostatics',
      eyebrow: 'Charge, field, potential, capacitance',
      intro:
        'Charges at rest. The whole topic follows from one inverse-square law that looks exactly like gravitation, with one crucial difference: charge comes in two signs, so electric forces can repel as well as attract.',
      blocks: [
        {
          type: 'formula',
          title: 'The core relations',
          items: [
            { expr: 'F = kq₁q₂/r², with k = 9 × 10⁹ N·m²/C²', note: 'Coulomb\'s law. Like gravitation it is an inverse square law, but it can be repulsive and is enormously stronger.' },
            { expr: 'E = F/q = kQ/r²', note: 'Electric field as force per unit positive test charge, measured in newtons per coulomb or volts per metre.' },
            { expr: 'V = kQ/r', note: 'Electric potential — a scalar, which is why potentials from several charges simply add arithmetically while fields must be added as vectors.' },
            { expr: 'W = qΔV', note: 'Work done in moving a charge between two points, independent of the path taken because the electrostatic force is conservative.' },
            { expr: 'C = Q/V, and for a parallel plate capacitor C = ε₀A/d', note: 'Capacitance in farads. Inserting a dielectric of constant K multiplies it by K.' },
            { expr: 'Energy stored = ½CV² = ½QV = Q²/2C', note: 'The three equivalent forms; which to use depends on what the question gives you.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Conservation and quantisation of charge',
              'Charge can neither be created nor destroyed, only transferred, and it exists only in integral multiples of the elementary charge, about 1.6 × 10⁻¹⁹ coulomb. These two principles are stated directly in questions.',
            ],
            [
              'Conductors and insulators in a field',
              'The electric field inside a conductor in electrostatic equilibrium is zero, and any excess charge resides entirely on its surface. This is why a metal enclosure shields its interior from external fields — the Faraday cage effect, which is why a car is a relatively safe place in a thunderstorm and why sensitive electronics are housed in metal.',
            ],
            [
              'Capacitors in series and parallel',
              'In series the reciprocals add, exactly the opposite of resistors, and the equivalent capacitance is less than the smallest. In parallel the capacitances add directly. Getting this the wrong way round is the commonest error in the topic.',
            ],
            [
              'Lightning conductors and point discharge',
              'Charge density is highest at points of sharp curvature, so the field is strongest there and the surrounding air ionises most readily. A lightning conductor exploits this to discharge the cloud quietly, or to provide a safe path to earth if a strike does occur.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'current',
      heading: 'Current electricity',
      eyebrow: 'Ohm\'s law and circuits',
      intro:
        'Charges in motion. Three relations carry nearly the whole topic, and one distinction — series against parallel — accounts for most of the questions.',
      blocks: [
        {
          type: 'formula',
          title: 'Circuit relations',
          items: [
            { expr: 'I = Q/t', note: 'Current as rate of flow of charge, in amperes. Conventional current flows from positive to negative, opposite to the actual drift of electrons.' },
            { expr: 'V = IR', note: 'Ohm\'s law, valid at constant temperature for an ohmic conductor. A filament lamp and a diode are non-ohmic.' },
            { expr: 'R = ρL/A', note: 'Resistance rises with length and falls with cross-sectional area; ρ is the resistivity, a property of the material.' },
            { expr: 'Series: R = R₁ + R₂ + …', note: 'Current is the same through each; voltages add. The total exceeds the largest individual resistance.' },
            { expr: 'Parallel: 1/R = 1/R₁ + 1/R₂ + …', note: 'Voltage is the same across each; currents add. The total is less than the smallest individual resistance.' },
            { expr: 'EMF ε = V + Ir', note: 'The terminal voltage of a cell falls below its emf when current is drawn, because of the internal resistance r.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Kirchhoff\'s laws',
              'The junction rule states that the total current entering a junction equals the total leaving it — this is conservation of charge. The loop rule states that the algebraic sum of potential differences round any closed loop is zero — this is conservation of energy. Together they solve any circuit that series and parallel reduction cannot.',
            ],
            [
              'Effect of temperature',
              'The resistance of a metal rises with temperature, because increased lattice vibration impedes electron drift. The resistance of a semiconductor falls with temperature, because more charge carriers are freed. That opposite behaviour is a standard question, and it is why a thermistor works.',
            ],
            [
              'Ammeter and voltmeter',
              'An ammeter measures current and is connected in series, so it must have very low resistance to avoid altering the current it measures. A voltmeter measures potential difference and is connected in parallel, so it must have very high resistance to avoid drawing current. An ideal ammeter has zero resistance and an ideal voltmeter infinite resistance.',
            ],
            [
              'Superconductivity',
              'Below a critical temperature certain materials lose electrical resistance entirely and expel magnetic fields — the Meissner effect. Applications include MRI magnets, particle accelerators and magnetic levitation. Room-temperature superconductivity has not been achieved, and claims to the contrary have repeatedly failed to replicate.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'household',
      heading: 'Household electricity',
      eyebrow: 'Power, heating and safety',
      intro:
        'The most directly examined part of this topic in general-awareness papers, because every item in it is something the candidate uses daily.',
      blocks: [
        {
          type: 'formula',
          title: 'Power and energy',
          items: [
            { expr: 'P = VI = I²R = V²/R', note: 'Three forms of electrical power. Which to use depends on whether the question fixes the voltage or the current.' },
            { expr: 'H = I²Rt', note: 'Joule\'s law of heating — the basis of the heater, the electric iron, the filament lamp and the fuse.' },
            { expr: '1 kWh = 3.6 × 10⁶ J', note: 'The commercial unit of electrical energy, the "unit" on a domestic bill. One kilowatt running for one hour.' },
            { expr: 'V_rms = V_peak/√2', note: 'For a sinusoidal alternating supply. India\'s 220 V is the rms value, so the peak is about 311 V.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why household appliances are wired in parallel',
              'Three reasons, all asked. Each appliance receives the full supply voltage. Each can be switched on and off independently. And the failure of one does not break the circuit for the others, as it would in series.',
            ],
            [
              'The fuse and the earth wire',
              'A fuse is a short length of wire of low melting point placed in the live wire, which melts and breaks the circuit if the current exceeds a safe value — protecting the wiring from overheating. The earth wire connects the metal body of an appliance to the ground, so that if the live wire touches the casing the current flows harmlessly to earth and blows the fuse rather than passing through anyone who touches it. A miniature circuit breaker performs the fuse\'s function and can be reset.',
            ],
            [
              'Indian domestic supply',
              'Alternating current at 220 volts rms and 50 hertz. The live wire is conventionally red or brown, the neutral black or blue, and the earth green or green-and-yellow. A short circuit is a direct low-resistance path between live and neutral, drawing a very large current; overloading is drawing more current than the wiring is rated for. Both cause fires, and both are what the fuse guards against.',
            ],
            [
              'Why LED lamps are efficient',
              'An incandescent filament lamp produces light as a by-product of being heated to a few thousand kelvin, so most of the energy leaves as infrared. A compact fluorescent lamp excites a gas that emits ultraviolet, converted to visible by a phosphor. An LED converts electrical energy directly to light at a specific wavelength through electron-hole recombination, with far less waste heat — which is why the UJALA programme replaced incandescent lamps with LEDs at national scale.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'magnetism',
      heading: 'Magnetic effects',
      eyebrow: 'Fields, forces and motors',
      intro:
        'Oersted\'s discovery that a current deflects a compass needle united two subjects that had been studied separately for centuries. Everything in this section follows from it.',
      blocks: [
        {
          type: 'formula',
          title: 'Fields and forces',
          items: [
            { expr: 'B = μ₀I/2πr', note: 'Field at distance r from a long straight current-carrying wire; the field lines are concentric circles.' },
            { expr: 'B = μ₀nI', note: 'Field inside a long solenoid, where n is turns per unit length. It is uniform and independent of the radius, which is why solenoids are used to produce uniform fields.' },
            { expr: 'F = BIL sinθ', note: 'Force on a current-carrying conductor in a magnetic field — the principle of the electric motor.' },
            { expr: 'F = qvB sinθ', note: 'Force on a moving charge. It is always perpendicular to the velocity, so a magnetic field changes a charged particle\'s direction but never its speed, and does no work on it.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The three hand rules',
              'The right-hand thumb rule gives the direction of the magnetic field around a current — thumb along the current, curled fingers along the field. Fleming\'s left-hand rule applies to the motor: forefinger for field, second finger for current, thumb for the resulting force. Fleming\'s right-hand rule applies to the generator, giving the direction of induced current. Motor and left, generator and right — the pairing is worth fixing firmly.',
            ],
            [
              'Magnetic materials',
              'Diamagnetic materials are weakly repelled by a magnetic field — bismuth, copper, water. Paramagnetic materials are weakly attracted — aluminium, platinum. Ferromagnetic materials are strongly attracted and can retain magnetisation — iron, cobalt, nickel. A ferromagnet loses its magnetism above its Curie temperature and becomes paramagnetic.',
            ],
            [
              'The earth\'s magnetism',
              'The earth behaves approximately as a giant bar magnet with its magnetic south pole near the geographic north, which is why the north-seeking end of a compass points north. The angle between geographic and magnetic north is the declination; the angle the field makes with the horizontal is the dip or inclination, zero at the magnetic equator and ninety degrees at the magnetic poles.',
            ],
            [
              'Soft and hard magnetic materials',
              'Soft iron magnetises and demagnetises easily, so it is used for electromagnet cores and transformer cores. Steel retains its magnetism, so it is used for permanent magnets. Choosing the right material for a given device is a common question format.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'induction',
      heading: 'Induction and AC',
      eyebrow: 'Generators and transformers',
      intro:
        'Faraday\'s discovery is the converse of Oersted\'s: if a current produces magnetism, a changing magnetism produces a current. Almost all the world\'s electricity is generated by this principle.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Faraday\'s laws',
              'An emf is induced in a circuit whenever the magnetic flux through it changes, and the magnitude of that emf is proportional to the rate of change of flux. The flux can be changed by moving the magnet, moving the coil, changing the field strength or changing the area or orientation of the coil — any of these will do.',
            ],
            [
              'Lenz\'s law',
              'The induced current always flows in a direction that opposes the change producing it. This is conservation of energy in disguise: if the induced current assisted the change, energy would be created from nothing. It is why a magnet dropped through a copper tube falls slowly, and why a generator becomes harder to turn as more current is drawn.',
            ],
            [
              'The generator and the motor',
              'A generator rotates a coil in a magnetic field, changing the flux through it and inducing an emf — mechanical energy to electrical. A motor passes a current through a coil in a magnetic field, producing a torque — electrical energy to mechanical. They are the same device run in opposite directions, and this reciprocity is a standard question.',
            ],
            [
              'The transformer',
              'Changes the voltage of an alternating supply using two coils on a common soft-iron core. A step-up transformer has more turns in the secondary and raises voltage while lowering current; a step-down transformer does the reverse. It works only on alternating current, because a steady current produces no changing flux. Losses arise from resistance in the windings, hysteresis in the core and eddy currents, the last reduced by laminating the core.',
            ],
            [
              'Why power is transmitted at high voltage',
              'Transmission loss is I²R, so it depends on the square of the current. Transmitting the same power at a higher voltage means a proportionally lower current, and the loss falls with the square of that reduction. This is the single most important application of the transformer, and it is why long-distance lines run at hundreds of kilovolts and are stepped down near the point of use.',
            ],
            [
              'Alternating and direct current',
              'AC reverses direction periodically — fifty times per second in India — while DC flows one way. AC is used for distribution because it can be transformed to high voltage and back; DC is what batteries supply and what most electronics require, which is why devices contain rectifiers. High-voltage direct current transmission is now used for very long links, where its lower losses outweigh the conversion cost.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Induction relations',
          items: [
            { expr: 'ε = −dΦ/dt', note: 'Faraday\'s law with Lenz\'s law contained in the minus sign.' },
            { expr: 'V_s/V_p = N_s/N_p', note: 'The transformer relation — voltage ratio equals turns ratio.' },
            { expr: 'V_p I_p = V_s I_s for an ideal transformer', note: 'Power is conserved, so stepping voltage up steps current down in the same proportion.' },
            { expr: 'Transmission loss = I²R', note: 'Which is why a high transmission voltage, and therefore a low current, is essential.' },
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'modern',
      heading: 'Modern physics',
      eyebrow: 'Photons, atoms and nuclei',
      intro:
        'The physics of the twentieth century, examined chiefly through a handful of named effects and the difference between fission and fusion.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The photoelectric effect',
              'Light falling on a metal ejects electrons, but only if its frequency exceeds a threshold — increasing the intensity of light below that threshold does nothing, however bright. This cannot be explained by a wave picture and was explained by Einstein in terms of photons, each carrying energy hf, for which he received the Nobel Prize. The energy of the ejected electron depends on frequency; the number ejected depends on intensity.',
            ],
            [
              'The Bohr model',
              'Electrons occupy discrete orbits of fixed energy and radiate only when jumping between them, emitting or absorbing a photon whose energy equals the difference. This explains the discrete spectral lines of hydrogen, whose energy levels are −13.6/n² electron volts. The model fails for multi-electron atoms and was superseded by quantum mechanics, but it remains the standard exam treatment.',
            ],
            [
              'Radioactivity',
              'Alpha decay emits a helium nucleus and is easily stopped by paper; beta decay emits an electron or positron and is stopped by a few millimetres of aluminium; gamma decay emits a high-energy photon and needs thick lead or concrete. Half-life is the time for half the nuclei in a sample to decay, and it is a constant for a given isotope, unaffected by temperature, pressure or chemical state.',
            ],
            [
              'Fission and fusion',
              'Fission splits a heavy nucleus such as uranium-235 into lighter ones, releasing energy and further neutrons that can sustain a chain reaction — the basis of nuclear reactors and of the atomic bomb. Fusion joins light nuclei such as isotopes of hydrogen into heavier ones, releasing far more energy per unit mass, and is what powers the sun and the hydrogen bomb. Fusion requires enormous temperature and pressure, which is why controlled fusion power has not yet been achieved.',
            ],
            [
              'Mass-energy equivalence',
              'E = mc². In both fission and fusion the products have slightly less mass than the reactants, and that mass defect appears as energy. Because c² is very large, a minute mass difference releases an enormous amount of energy — which is the whole basis of nuclear power.',
            ],
            [
              'Reactor components',
              'The fuel, typically enriched uranium or, in Indian pressurised heavy water reactors, natural uranium. The moderator, which slows neutrons so that they cause further fission — heavy water in Indian reactors, graphite elsewhere. The control rods, of cadmium or boron, which absorb neutrons and regulate the reaction. The coolant, which carries away the heat. And the shielding.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Modern physics relations',
          items: [
            { expr: 'E = hf = hc/λ', note: 'Energy of a photon. Higher frequency means higher energy, which is why ultraviolet damages tissue and radio waves do not.' },
            { expr: 'hf = φ + KE_max', note: 'Einstein\'s photoelectric equation; φ is the work function, the minimum energy needed to remove an electron.' },
            { expr: 'E_n = −13.6/n² eV', note: 'Energy levels of the hydrogen atom in the Bohr model.' },
            { expr: 'N = N₀(½)^(t/T)', note: 'Radioactive decay, where T is the half-life. After n half-lives, a fraction 1/2ⁿ remains.' },
            { expr: 'λ = h/p', note: 'The de Broglie wavelength — matter has wave properties too, which is why electron microscopes work.' },
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'semiconductors',
      heading: 'Semiconductors',
      eyebrow: 'Diodes, transistors and devices',
      intro:
        'The applied end of the subject, and the physics behind every electronic device in existence.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'What a semiconductor is',
              'A material whose conductivity lies between that of a conductor and an insulator, and — unlike either — rises with temperature, because heat frees more charge carriers. Silicon and germanium are the standard examples. In band terms, the gap between the valence and conduction bands is small enough to be crossed by thermal energy.',
            ],
            [
              'Doping',
              'Adding a controlled impurity to change conductivity. A pentavalent impurity such as phosphorus or arsenic supplies a spare electron, giving n-type material in which electrons are the majority carriers. A trivalent impurity such as boron or gallium leaves a vacancy, giving p-type material in which holes are the majority carriers. Both types remain electrically neutral overall — a point often misunderstood.',
            ],
            [
              'The p-n junction diode',
              'Joining p-type and n-type material creates a junction with a depletion region and a built-in potential barrier. Under forward bias the barrier is reduced and current flows freely; under reverse bias it is increased and almost none flows. This one-way behaviour makes the diode a rectifier, converting alternating current to direct — a half-wave rectifier uses one diode and a full-wave rectifier uses two or four.',
            ],
            [
              'Special diodes',
              'The Zener diode is designed to conduct in reverse breakdown at a precise voltage, and is used for voltage regulation. The light-emitting diode converts electrical energy directly to light when electrons and holes recombine across the junction. The photodiode and the solar cell work in reverse, generating current when light falls on the junction.',
            ],
            [
              'The transistor',
              'Three doped regions — emitter, base and collector — in an npn or pnp arrangement. A small current into the base controls a much larger current from emitter to collector, so the transistor works as an amplifier; driven fully on or fully off, it works as a switch. Being a switch is what makes it the building block of every digital circuit, and packing billions of them on one chip is what an integrated circuit is.',
            ],
            [
              'Logic gates',
              'The basic gates are AND, which outputs 1 only if both inputs are 1; OR, which outputs 1 if either is; and NOT, which inverts. NAND and NOR are their negations and are called universal gates, because any logic function can be built from either alone. XOR outputs 1 when the inputs differ. These appear directly in questions.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Three resistors of 6 Ω each are connected in parallel. What is the equivalent resistance?',
      steps: [
        'For resistors in parallel, 1/R = 1/R₁ + 1/R₂ + 1/R₃.',
        '1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2.',
        'R = 2 Ω — less than the smallest individual resistance, as it always must be in parallel.',
      ],
      answer: '2 ohms.',
    },
    {
      q: 'A 1000 W heater runs for 3 hours daily for 30 days. How many units of electricity does it consume?',
      steps: [
        'Power is 1000 W, which is 1 kW.',
        'Energy per day = 1 kW × 3 h = 3 kWh; over 30 days that is 90 kWh.',
        'One kWh is one commercial unit, so the consumption is 90 units.',
      ],
      answer: '90 units, or 90 kWh.',
    },
    {
      q: 'Why are household appliances connected in parallel rather than in series?',
      steps: [
        'In parallel, each appliance receives the full supply voltage of 220 V, whereas in series the voltage would be divided among them.',
        'Each can be switched on and off independently, which a series arrangement makes impossible.',
        'And the failure of one appliance does not break the circuit for the rest.',
      ],
      answer: 'Full voltage to each, independent switching, and no single point of failure.',
    },
    {
      q: 'Why is electrical power transmitted at very high voltage?',
      steps: [
        'The power loss in a transmission line is I²R, depending on the square of the current.',
        'For a fixed power P = VI, raising the voltage lowers the current in the same proportion.',
        'Because the loss depends on the square of the current, a tenfold rise in transmission voltage cuts the loss to one hundredth.',
      ],
      answer: 'To reduce the current, since transmission loss varies as the square of it.',
    },
    {
      q: 'A magnet is dropped through a vertical copper tube and falls unusually slowly. Explain.',
      steps: [
        'As the magnet falls, the magnetic flux through each ring-shaped section of the tube changes, inducing eddy currents in the copper.',
        'By Lenz\'s law those currents flow so as to oppose the change producing them.',
        'They therefore create magnetic fields that retard the magnet\'s motion, and the gravitational energy is dissipated as heat in the copper.',
      ],
      answer: 'Eddy currents induced in the copper oppose the motion, by Lenz\'s law.',
    },
    {
      q: 'A radioactive sample has a half-life of 5 years. What fraction remains after 20 years?',
      steps: [
        '20 years is four half-lives.',
        'After each half-life, half of what remains decays.',
        'So the surviving fraction is (½)⁴ = 1/16.',
      ],
      answer: 'One-sixteenth of the original sample.',
    },
    {
      q: 'Increasing the intensity of light on a metal produces no photoelectrons at all. Why?',
      steps: [
        'The photoelectric effect requires each photon to carry at least the work function of the metal, and photon energy depends on frequency, not on intensity.',
        'If the frequency is below the threshold, no single photon has enough energy to eject an electron.',
        'Increasing intensity supplies more photons, but each is still individually too weak, so no electrons are emitted however bright the light.',
      ],
      answer: 'Because emission depends on the frequency of the light, not on its intensity.',
    },
    {
      q: 'A transformer has 100 turns in the primary and 500 in the secondary, with 220 V applied. Find the output voltage and describe the transformer.',
      steps: [
        'V_s/V_p = N_s/N_p, so V_s = 220 × 500/100.',
        'V_s = 1100 V.',
        'The secondary voltage is higher, so it is a step-up transformer — and the secondary current is correspondingly lower, since power is conserved.',
      ],
      answer: '1100 V; it is a step-up transformer.',
    },
  ],

  practice: [
    {
      q: 'The SI unit of electric charge is the:',
      options: ['Coulomb', 'Ampere', 'Volt', 'Farad'],
      answer: 0,
      explain: 'The ampere is the unit of current, the volt of potential difference and the farad of capacitance.',
    },
    {
      q: 'Resistances in parallel give an equivalent resistance that is:',
      options: ['Less than the smallest', 'Greater than the largest', 'Equal to their sum', 'Equal to their average'],
      answer: 0,
      explain: 'Adding a parallel path always provides more routes for current, so the total resistance falls.',
    },
    {
      q: 'The commercial unit of electrical energy is the:',
      options: ['Watt', 'Joule', 'Kilowatt-hour', 'Volt-ampere'],
      answer: 2,
      explain: 'One kWh equals 3.6 × 10⁶ joules and is the "unit" on a domestic electricity bill.',
    },
    {
      q: 'A fuse wire should have:',
      options: ['Low melting point and high resistance', 'High melting point and high resistance', 'Low melting point and low resistance', 'High melting point and low resistance'],
      answer: 0,
      explain: 'It must heat up and melt quickly when the current exceeds a safe value, breaking the circuit.',
    },
    {
      q: 'The resistance of a semiconductor with rising temperature:',
      options: ['Increases', 'Decreases', 'Stays the same', 'First increases then decreases'],
      answer: 1,
      explain: 'Heat frees more charge carriers. A metal behaves oppositely, its resistance rising with temperature.',
    },
    {
      q: 'Fleming\'s left-hand rule applies to the:',
      options: ['Generator', 'Motor', 'Transformer', 'Rectifier'],
      answer: 1,
      explain: 'The right-hand rule applies to the generator. Motor and left, generator and right.',
    },
    {
      q: 'Lenz\'s law is a consequence of the conservation of:',
      options: ['Charge', 'Momentum', 'Energy', 'Magnetic flux'],
      answer: 2,
      explain: 'If the induced current assisted the change producing it, energy would be created from nothing.',
    },
    {
      q: 'A transformer works only on:',
      options: ['Direct current', 'Alternating current', 'Both equally', 'Pulsed direct current only'],
      answer: 1,
      explain: 'It requires a changing magnetic flux, which a steady direct current cannot produce.',
    },
    {
      q: 'The domestic electricity supply in India is:',
      options: ['110 V, 60 Hz', '220 V, 50 Hz', '220 V, 60 Hz', '110 V, 50 Hz'],
      answer: 1,
      explain: '220 V is the rms value, so the peak voltage is about 311 V.',
    },
    {
      q: 'Which particle is emitted in alpha decay?',
      options: ['An electron', 'A helium nucleus', 'A photon', 'A neutron'],
      answer: 1,
      explain: 'Beta decay emits an electron or positron and gamma decay a high-energy photon.',
    },
    {
      q: 'The energy released in the sun comes from:',
      options: ['Nuclear fission', 'Nuclear fusion', 'Chemical combustion', 'Radioactive decay'],
      answer: 1,
      explain: 'Hydrogen nuclei fuse into helium, releasing energy according to E = mc².',
    },
    {
      q: 'In n-type semiconductor material, the majority carriers are:',
      options: ['Holes', 'Electrons', 'Protons', 'Ions'],
      answer: 1,
      explain: 'A pentavalent dopant supplies spare electrons. In p-type material a trivalent dopant creates holes.',
    },
    {
      q: 'A p-n junction diode is used chiefly as a:',
      options: ['Amplifier', 'Rectifier', 'Oscillator', 'Transformer'],
      answer: 1,
      explain: 'It conducts under forward bias and blocks under reverse bias, converting AC to DC.',
    },
    {
      q: 'Which gates are called universal gates?',
      options: ['AND and OR', 'NAND and NOR', 'NOT and XOR', 'OR and NOT'],
      answer: 1,
      explain: 'Any logic function can be constructed using NAND alone or NOR alone.',
    },
    {
      q: 'The half-life of a radioactive substance is affected by:',
      options: ['Temperature', 'Pressure', 'Chemical combination', 'None of these'],
      answer: 3,
      explain: 'It is a fixed property of the isotope, unaffected by external physical or chemical conditions.',
    },
    {
      q: 'A voltmeter is connected in a circuit:',
      options: ['In series, with low resistance', 'In parallel, with high resistance', 'In series, with high resistance', 'In parallel, with low resistance'],
      answer: 1,
      explain: 'High resistance ensures it draws negligible current and so does not disturb the circuit it measures.',
    },
  ],

  faqs: [
    {
      q: 'Why do resistors add in series but capacitors add in parallel?',
      a: 'Because they store or oppose different things. Resistors in series make the current path longer, so resistance adds. Capacitors in parallel effectively increase the plate area available for storing charge, so capacitance adds. In series, capacitors reduce the effective capacitance because the same charge must be pushed against several potential differences. The two behave as mirror images, and remembering that relationship is easier than memorising four formulas.',
    },
    {
      q: 'What exactly does the earth wire do?',
      a: 'It provides a low-resistance path from the metal casing of an appliance to the ground. If a fault causes the live wire to touch the casing, the current takes that path instead of passing through anyone who touches the appliance — and the large current that flows blows the fuse or trips the breaker, disconnecting the supply. It is a safety device for the user; the fuse is a safety device for the wiring.',
    },
    {
      q: 'Why does a magnetic force do no work on a moving charge?',
      a: 'Because F = qvB sinθ gives a force always perpendicular to the velocity. Work is the component of force along the displacement, and a perpendicular force has none. The magnetic field therefore changes the direction of a charged particle but never its speed or kinetic energy — which is why a cyclotron needs an alternating electric field to accelerate particles, with the magnetic field only bending their path.',
    },
    {
      q: 'How are a motor and a generator related?',
      a: 'They are the same machine run in opposite directions. A motor takes electrical energy and produces rotation, using the force on a current-carrying coil in a magnetic field. A generator takes rotation and produces electrical energy, using the emf induced when a coil moves in a magnetic field. Many machines can operate as either, which is how regenerative braking in an electric vehicle recovers energy.',
    },
    {
      q: 'What is the difference between fission and fusion?',
      a: 'Fission splits a heavy nucleus into lighter ones; fusion joins light nuclei into a heavier one. Both release energy because the products are slightly lighter than the reactants, and that mass defect appears as energy through E = mc². Fusion releases more per unit mass and produces far less long-lived radioactive waste, but it requires temperatures of millions of degrees, which is why it powers stars and hydrogen bombs but not yet power stations.',
    },
    {
      q: 'Why did the photoelectric effect require a new theory?',
      a: 'Because on a wave picture, a bright enough light of any frequency should eventually supply enough energy to eject electrons — energy would accumulate. Experiment showed otherwise: below a threshold frequency, no electrons are emitted however intense the light or however long it shines. That only makes sense if energy arrives in discrete packets whose size depends on frequency, which is what Einstein proposed and what earned him the Nobel Prize.',
    },
    {
      q: 'Is p-type semiconductor material positively charged?',
      a: 'No. Doping replaces some silicon atoms with trivalent atoms that have one fewer valence electron, creating holes that behave like positive carriers — but the dopant atoms themselves are electrically neutral, so the material as a whole remains neutral. The same applies to n-type. Only at a p-n junction does a local separation of charge appear, in the depletion region.',
    },
    {
      q: 'Why is AC used for distribution when most devices need DC?',
      a: 'Because AC can be transformed to very high voltage for transmission and back down for use, and high-voltage transmission cuts losses dramatically. DC cannot be transformed as simply. The conversion cost is paid at the device end, where a small rectifier turns AC into the DC the electronics need. For very long links, high-voltage DC transmission is now used, since its losses are lower and the conversion equipment has become economic.',
    },
    {
      q: 'Which parts of this topic appear in general awareness papers?',
      a: 'Almost entirely the household section — the fuse, the earth wire, why appliances are in parallel, the unit of electrical energy, the Indian supply voltage and frequency — plus the units, the effects of electric current and the basic magnetism. Circuits with numerical solutions, wave optics and quantitative modern physics belong to JEE and NEET rather than to SSC and RRB.',
    },
    {
      q: 'How much of the physics paper is electricity and magnetism?',
      a: 'Roughly a quarter to a third of JEE Main and Advanced when electrostatics, current electricity, magnetism, induction and modern physics are counted together; ten to twelve questions in NEET; one to two in SSC CGL Tier 1; two to three in RRB; and two to four in NDA and CDS.',
    },
  ],

  related: [
    { label: 'Mechanics', to: '/study-material/physics/mechanics/' },
    { label: 'Heat, Light & Sound', to: '/study-material/physics/heat-light-sound/' },
    { label: 'Emerging Technology', to: '/study-material/science/emerging-technology/' },
    { label: 'Chemistry', to: '/study-material/chemistry/' },
    { label: 'All Physics', to: '/study-material/physics/' },
  ],
}
