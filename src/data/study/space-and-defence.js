/**
 * Space and Defence — /study-material/science/space-and-defence/
 *
 * The applied-technology half of the science syllabus, and the part closest to
 * current affairs. Missions and platforms are given with dates so that a
 * reader can see what has already happened and what is still a stated target.
 */
export default {
  subject: 'science',
  subjectName: 'Science & Technology',
  slug: 'space-and-defence',
  title: 'Space & Defence',
  seoTitle: 'Indian Space and Defence Technology | ISRO, Missiles, Nuclear Notes & Practice',
  metaDescription:
    'Complete space and defence study material for UPSC, SSC, banking and state exams — ISRO and its launch vehicles, lunar and interplanetary missions.',
  readMinutes: 24,
  lead: [
    'Space and defence is where science meets current affairs most directly, and it is examined that way: a question rarely asks how a rocket engine works and very often asks which vehicle launched a particular mission, or which country India became the fourth to join by demonstrating a capability.',
    'The material below is therefore organised as programmes with dates. Achievements already accomplished are stated as facts; stated future targets are marked as targets, because several of them have moved and will move again. That distinction is the one thing most study material on this topic gets wrong.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Usually a mission, an orbit type or an international regime.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'ISRO firsts, launch vehicles and missile names.' },
    { exam: 'Banking and insurance GA', count: '2–3 questions', note: 'Almost entirely from the current news cycle.' },
    { exam: 'RRB NTPC / Group D', count: '1–2 questions', note: 'Direct recall of famous missions and their years.' },
    { exam: 'NDA / CDS General Ability', count: '3–5 questions', note: 'Weighted towards defence platforms and the services.' },
  ],

  contents: [
    { icon: 'target', title: 'ISRO', sub: 'The organisation and its firsts', href: '#isro' },
    { icon: 'layers', title: 'Launch vehicles', sub: 'SLV to LVM3, and the orbits', href: '#vehicles' },
    { icon: 'globe', title: 'Lunar and planetary missions', sub: 'Chandrayaan, Mangalyaan, Aditya', href: '#missions' },
    { icon: 'user', title: 'Human spaceflight', sub: 'Gaganyaan and the new space economy', href: '#human' },
    { icon: 'bell', title: 'Missiles', sub: 'IGMDP, Agni, BrahMos', href: '#missiles' },
    { icon: 'refresh', title: 'Defence platforms and reform', sub: 'Indigenisation and the services', href: '#defence' },
    { icon: 'chart', title: 'Nuclear programme', sub: 'Three stages and the regimes', href: '#nuclear' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'isro',
      heading: 'ISRO',
      eyebrow: 'The organisation and its firsts',
      intro:
        'The Indian Space Research Organisation was formed in 1969, succeeding the Indian National Committee for Space Research set up in 1962 under Vikram Sarabhai, who is regarded as the father of the Indian space programme.',
      blocks: [
        {
          type: 'table',
          caption: 'The firsts that questions ask for',
          head: ['Milestone', 'Year', 'Detail'],
          rows: [
            ['First Indian satellite — Aryabhata', '1975', 'Built in India but launched by the Soviet Union, so it demonstrated satellite capability rather than launch capability.'],
            ['First Indian satellite launched by an Indian vehicle — Rohini RS-1', '1980', 'Placed in orbit by SLV-3 from Sriharikota, making India one of a small group of nations with independent launch capability.'],
            ['First Indian in space — Rakesh Sharma', '1984', 'Aboard the Soviet Soyuz T-11, as part of an Indo-Soviet mission — not an Indian launch.'],
            ['First lunar mission — Chandrayaan-1', '2008', 'Its instruments provided the evidence for water molecules on the lunar surface.'],
            ['First interplanetary mission — Mars Orbiter Mission', 'Launched 2013, orbit 2014', 'India became the first country to reach Mars orbit on its first attempt, and the first Asian nation to reach Mars orbit at all.'],
            ['Most satellites in a single launch — PSLV-C37', '2017', 'One hundred and four satellites placed in orbit in a single flight.'],
            ['First soft landing near the lunar south pole — Chandrayaan-3', '23 August 2023', 'India became the fourth country to achieve a soft lunar landing and the first to do so near the south pole. The date is now observed as National Space Day.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The launch sites',
              'The Satish Dhawan Space Centre at Sriharikota in Andhra Pradesh, on an island in the Pulicat lake, is the principal launch site. Its location close to the equator and on the east coast is deliberate: an eastward launch gains from the earth\'s rotation, and the spent stages fall into the sea. A second site at Kulasekarapattinam in Tamil Nadu has been developed for small launch vehicles, which need a southward trajectory for polar orbits.',
            ],
            [
              'The institutional structure',
              'ISRO functions under the Department of Space, which reports directly to the Prime Minister. NewSpace India Limited, incorporated in 2019, is its commercial arm. The Indian National Space Promotion and Authorisation Centre, IN-SPACe, was created in 2020 as the single-window regulator for private space activity, and the Indian Space Policy of 2023 set out the framework for private participation.',
            ],
            [
              'Applications rather than prestige',
              'The Indian programme has been justified from the beginning by its applications: the INSAT and GSAT series for communication and broadcasting; the IRS series for remote sensing, crop assessment and disaster monitoring; RISAT for radar imaging through cloud; Cartosat for high-resolution mapping; and Oceansat for marine observation. Sarabhai\'s stated position was that India should apply advanced technology to real national problems rather than compete in the exploration of the moon and the planets — a quotation that appears in mains answers.',
            ],
            [
              'NavIC',
              'The Navigation with Indian Constellation system, formerly IRNSS, provides regional positioning over India and a surrounding region, using a constellation of seven satellites in geostationary and inclined geosynchronous orbits. It is regional rather than global, unlike GPS, GLONASS, Galileo and BeiDou — a distinction directly examined. GAGAN is the separate satellite-based augmentation system for civil aviation.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'vehicles',
      heading: 'Launch vehicles',
      eyebrow: 'SLV to LVM3, and the orbits',
      intro:
        'Four operational vehicles and two retired ones. Questions usually pair a vehicle with the class of payload it carries, or ask which orbit a described satellite occupies.',
      blocks: [
        {
          type: 'table',
          caption: 'Indian launch vehicles',
          head: ['Vehicle', 'Status', 'What it carries'],
          rows: [
            ['SLV-3', 'Retired', 'The first Indian launch vehicle, which placed Rohini in orbit in 1980.'],
            ['ASLV', 'Retired', 'The Augmented Satellite Launch Vehicle, a developmental step towards PSLV.'],
            ['PSLV', 'Operational', 'The Polar Satellite Launch Vehicle, ISRO\'s workhorse. Designed for sun-synchronous polar orbits but used far more widely — it launched Chandrayaan-1, the Mars Orbiter Mission and Aditya-L1.'],
            ['GSLV Mk II', 'Operational', 'The Geosynchronous Satellite Launch Vehicle, using an indigenously developed cryogenic upper stage. Cryogenic technology was withheld from India, and developing it independently is one of the programme\'s notable achievements.'],
            ['LVM3', 'Operational', 'Formerly GSLV Mk III, ISRO\'s heaviest vehicle. It launched Chandrayaan-2 and Chandrayaan-3 and is the vehicle intended for human spaceflight.'],
            ['SSLV', 'Operational', 'The Small Satellite Launch Vehicle, introduced in 2022 for small payloads on demand, with a short turnaround and low cost.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Low Earth orbit',
              'Roughly 200 to 2,000 kilometres up. Satellites here move fast relative to the ground and complete an orbit in about ninety minutes, so any one ground station sees them only briefly. Remote sensing satellites, the International Space Station and most communication constellations occupy it.',
            ],
            [
              'Geostationary and geosynchronous orbit',
              'A geosynchronous orbit has a period of one sidereal day. A geostationary orbit is the special case that is also circular and directly above the equator, so the satellite appears fixed in the sky at about 35,786 kilometres. That is why a dish antenna can point at one spot permanently, and why communication and weather satellites use it. Every geostationary orbit is geosynchronous; the reverse is not true.',
            ],
            [
              'Sun-synchronous polar orbit',
              'A near-polar orbit whose plane precesses so that the satellite passes over any given latitude at the same local solar time each day. That makes images comparable between dates, which is exactly what remote sensing needs. PSLV was designed for this orbit.',
            ],
            [
              'Lagrange points',
              'Five positions in a two-body system where the gravitational forces and the orbital motion balance, so a small object can hold a fixed position relative to the two bodies. L1, between the earth and the sun, gives an uninterrupted view of the sun and is where Aditya-L1 was placed. L2, on the far side of the earth from the sun, is used by space telescopes.',
            ],
            [
              'Cryogenic engines',
              'Engines burning liquid hydrogen with liquid oxygen, stored at extremely low temperatures. They give a much higher specific impulse than solid or ordinary liquid stages, which is what makes heavy payloads to geosynchronous orbit possible. The difficulty is handling propellants near absolute zero, which is why so few countries have mastered it.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'missions',
      heading: 'Lunar and planetary missions',
      eyebrow: 'Chandrayaan, Mangalyaan, Aditya',
      intro:
        'Five missions carry almost all the questions in this area. Each has a distinctive achievement, and it is the achievement rather than the technical detail that is asked.',
      blocks: [
        {
          type: 'table',
          caption: 'The missions',
          head: ['Mission', 'Year and vehicle', 'Achievement'],
          rows: [
            ['Chandrayaan-1', '2008, PSLV', 'India\'s first lunar mission. It carried the Moon Impact Probe and instruments whose data provided the evidence for water molecules on the lunar surface — its principal scientific result.'],
            ['Mars Orbiter Mission (Mangalyaan)', 'Launched November 2013, Mars orbit September 2014, PSLV', 'India became the first country to reach Mars orbit at its first attempt, and did so at a remarkably low cost. The mission ended in 2022 after far outlasting its design life.'],
            ['Chandrayaan-2', '2019, GSLV Mk III', 'The orbiter succeeded and continues to return data; the Vikram lander crashed during descent. The mission is therefore a partial success, which is how it should be described.'],
            ['Chandrayaan-3', 'Landed 23 August 2023, LVM3', 'A successful soft landing of the Vikram lander and deployment of the Pragyan rover near the lunar south pole. India became the fourth country to soft-land on the moon and the first to do so in that region.'],
            ['Aditya-L1', 'Launched September 2023, PSLV; inserted at L1 in January 2024', 'India\'s first dedicated solar observatory, placed in a halo orbit around the first Lagrange point to study the photosphere, chromosphere and corona without eclipses.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why the lunar south pole',
              'Because permanently shadowed craters there may hold water ice, which would be valuable both scientifically, as a record of the inner solar system, and practically, as a source of water, oxygen and hydrogen fuel for any future base. The region is also more difficult to land in, with rough terrain and low sun angles, which is why no earlier mission had done it.',
            ],
            [
              'Why the Mars Orbiter Mission cost so little',
              'A light spacecraft, extensive reuse of proven PSLV and existing subsystems, a slingshot trajectory that used earth orbit-raising manoeuvres rather than a larger launch vehicle, and a short development cycle with a small team. The comparison with the cost of a feature film became the standard shorthand for it.',
            ],
            [
              'Announced future missions',
              'Chandrayaan-4 as a lunar sample return mission, and a Venus orbiter mission, Shukrayaan, have both been announced. Their launch dates are stated targets rather than accomplished facts and have been revised; treat any date for them as provisional and check the current position.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'human',
      heading: 'Human spaceflight',
      eyebrow: 'Gaganyaan and the new space economy',
      intro:
        'The area of the programme that has moved most in recent years, and correspondingly the one where dated study material goes wrong most often.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Gaganyaan',
              'India\'s human spaceflight programme, intended to send a crew to low earth orbit aboard an indigenous vehicle launched by a human-rated LVM3. The programme includes uncrewed test flights, a crew escape system demonstration and crew training. The date of the first crewed flight has been revised several times, so it should be described as a stated target rather than a scheduled event, and the current position checked before quoting one.',
            ],
            [
              'Indians in space',
              'Rakesh Sharma became the first Indian in space in 1984, aboard the Soviet Soyuz T-11. Shubhanshu Shukla became the second Indian in space and the first Indian aboard the International Space Station in June 2025, flying on the commercial Axiom-4 mission. Kalpana Chawla and Sunita Williams flew with NASA as American citizens of Indian origin, which is why they are counted separately in questions.',
            ],
            [
              'The longer-term targets',
              'India has announced the intention to establish an Indian space station, the Bharatiya Antariksh Station, by around 2035, and to land an Indian on the moon by around 2040. These are declared goals, not accomplishments, and both are worth stating with that qualification.',
            ],
            [
              'The private space sector',
              'Opened up by the creation of IN-SPACe in 2020 and the Indian Space Policy of 2023, which defined roles for ISRO, NSIL and private operators and allowed private entities to build launch vehicles and satellites and to operate ground segments. Indian private launches have since taken place, and the sector has become a subject of both economy and science questions.',
            ],
            [
              'Space debris',
              'Defunct satellites, spent stages and fragments from collisions and anti-satellite tests, travelling at orbital speed and therefore dangerous to functioning spacecraft. The Kessler syndrome describes a runaway cascade in which collisions generate debris that causes further collisions. ISRO\'s system for monitoring and avoiding it is called Project NETRA.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'missiles',
      heading: 'Missiles',
      eyebrow: 'IGMDP, Agni, BrahMos',
      intro:
        'The Integrated Guided Missile Development Programme, launched in 1983 under A. P. J. Abdul Kalam, produced five systems whose names are asked directly and repeatedly.',
      blocks: [
        {
          type: 'table',
          caption: 'The IGMDP missiles and the major additions',
          head: ['Missile', 'Type', 'Note'],
          rows: [
            ['Prithvi', 'Short-range surface-to-surface ballistic missile', 'The first missile developed under the programme, with variants for the three services.'],
            ['Agni', 'Medium- to intercontinental-range ballistic missile', 'A family rather than a single missile. Agni-V is the longest-ranged, in the intercontinental class at around five thousand kilometres; Agni-Prime is a newer, lighter design.'],
            ['Trishul', 'Short-range surface-to-air missile', 'Development was eventually closed, but the name remains in question papers.'],
            ['Akash', 'Medium-range surface-to-air missile', 'In service, and exported.'],
            ['Nag', 'Anti-tank guided missile', 'Fire-and-forget, with the Helina variant launched from a helicopter.'],
            ['BrahMos', 'Supersonic cruise missile', 'A joint venture between India and Russia, named from the Brahmaputra and the Moskva. It is one of the fastest cruise missiles in service and has been exported.'],
            ['Astra', 'Beyond-visual-range air-to-air missile', 'Indigenously developed for use from Indian fighter aircraft.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Ballistic and cruise missiles',
              'A ballistic missile is powered only during the early part of its flight and then follows a mostly unpowered arc under gravity, reaching high altitude and very high speed. A cruise missile is powered throughout, flies within the atmosphere at low altitude, and can manoeuvre — which makes it harder to detect but slower and shorter-ranged. This is the most frequently asked distinction in the topic.',
            ],
            [
              'Mission Shakti',
              'India\'s anti-satellite test in March 2019, in which a satellite in low earth orbit was destroyed by an interceptor. India became the fourth country to demonstrate the capability, after the United States, Russia and China. The test was conducted at low altitude specifically so that debris would decay quickly.',
            ],
            [
              'Ballistic missile defence',
              'A two-tier Indian system has been under development, with an exo-atmospheric interceptor for high-altitude engagement and an endo-atmospheric one for lower altitudes. Separately, India has acquired the Russian S-400 long-range surface-to-air system.',
            ],
            [
              'The nuclear triad',
              'The capacity to deliver nuclear weapons by land, by air and from the sea. India completed it with the deterrent patrol of INS Arihant, its indigenous nuclear-powered ballistic missile submarine. Sea-based delivery matters because a submarine is the hardest leg to destroy in a first strike, which is what makes a no-first-use posture credible.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'defence',
      heading: 'Defence platforms and reform',
      eyebrow: 'Indigenisation and the services',
      intro:
        'Platform names and organisational reforms, both of which appear in defence-oriented papers and in the general awareness of banking and railway exams.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Indigenous platforms',
              'The Tejas Light Combat Aircraft, developed by the Aeronautical Development Agency and produced by Hindustan Aeronautics Limited. The Arjun main battle tank, developed by DRDO. INS Vikrant, commissioned in 2022 as India\'s first indigenously designed and built aircraft carrier — distinct from the earlier INS Vikrant acquired from Britain. The Dhruv advanced light helicopter, the Pinaka multi-barrel rocket launcher and the Akash air defence system.',
            ],
            [
              'Imported platforms in the news',
              'The Rafale multirole fighter from France, the S-400 air defence system from Russia, the P-8I maritime patrol aircraft and Apache and Chinook helicopters from the United States. Import content and the drive to reduce it are the recurring policy theme.',
            ],
            [
              'The Chief of Defence Staff',
              'The post was created in 2019 as the single-point military adviser to the government and head of the newly created Department of Military Affairs in the Ministry of Defence. Its central purpose is to promote jointness between the army, navy and air force, and eventually the reorganisation of commands into integrated theatre commands, which has been under consideration.',
            ],
            [
              'Existing joint structures',
              'The Andaman and Nicobar Command, created in 2001, is India\'s first and so far only geographical tri-service command. The Strategic Forces Command handles the nuclear arsenal. The Defence Cyber Agency, Defence Space Agency and Armed Forces Special Operations Division were created as tri-service agencies.',
            ],
            [
              'Indigenisation policy',
              'The Defence Acquisition Procedure sets out categories that prioritise Indian design and manufacture. Positive indigenisation lists specify items that may no longer be imported after a stated date. The Ordnance Factory Board was corporatised into seven defence public sector undertakings in 2021, and the foreign direct investment limit in defence manufacturing has been raised in stages. iDEX supports defence innovation by start-ups.',
            ],
            [
              'Recruitment',
              'The Agnipath scheme, introduced in 2022, recruits personnel to the three services for a four-year term as Agniveers, with a proportion retained thereafter for regular service. It is examined as a policy question rather than as a technical one.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'nuclear',
      heading: 'Nuclear programme',
      eyebrow: 'Three stages and the regimes',
      intro:
        'India\'s nuclear programme was designed around a scarcity of uranium and an abundance of thorium, and that single fact explains its unusual three-stage structure.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The three-stage programme',
              'Conceived by Homi Bhabha. Stage one uses pressurised heavy water reactors fuelled by natural uranium, producing plutonium as a by-product. Stage two uses fast breeder reactors fuelled by that plutonium, which breed more fissile material than they consume and can also convert thorium into uranium-233. Stage three uses thorium-based reactors running on uranium-233, drawing on India\'s very large thorium reserves in the monazite sands of the Kerala and Odisha coasts. The Prototype Fast Breeder Reactor at Kalpakkam is the stage-two demonstration.',
            ],
            [
              'The nuclear tests',
              'Pokhran-I in 1974, described at the time as a peaceful nuclear explosion and codenamed Smiling Buddha. Pokhran-II in May 1998, a series of tests under Operation Shakti, after which India declared itself a nuclear weapon state. National Technology Day on 11 May commemorates the 1998 tests.',
            ],
            [
              'India\'s nuclear doctrine',
              'Announced in 2003: credible minimum deterrence, no first use against a nuclear weapon state, non-use against non-nuclear weapon states, and massive retaliation should deterrence fail. The Nuclear Command Authority, comprising a Political Council chaired by the Prime Minister and an Executive Council, controls the arsenal, and the Strategic Forces Command executes.',
            ],
            [
              'Institutions',
              'The Atomic Energy Commission was set up in 1948 and the Department of Atomic Energy in 1954. The Bhabha Atomic Research Centre at Trombay is the principal research establishment. The Nuclear Power Corporation of India Limited operates the civil reactors, and the Atomic Energy Regulatory Board is the safety regulator.',
            ],
            [
              'Treaties India has not signed',
              'India is not a party to the Nuclear Non-Proliferation Treaty, which it regards as discriminatory because it recognises as nuclear weapon states only those that tested before 1967. India has also not signed the Comprehensive Nuclear-Test-Ban Treaty, though it maintains a voluntary moratorium on testing.',
            ],
            [
              'Export control regimes',
              'The India–United States civil nuclear agreement led to a waiver from the Nuclear Suppliers Group in 2008, allowing India to trade in nuclear material and technology despite not being an NPT party. India subsequently joined the Missile Technology Control Regime in 2016, the Wassenaar Arrangement in 2017 and the Australia Group in 2018. It is not a member of the Nuclear Suppliers Group — the one exception, and precisely the point questions test.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Aryabhata was India\'s first satellite, but Rohini is described as a bigger milestone. Why?',
      steps: [
        'Aryabhata, in 1975, was built in India but launched by the Soviet Union, so it showed satellite-building capability only.',
        'Rohini RS-1, in 1980, was placed in orbit by the Indian SLV-3 from Sriharikota.',
        'That launch demonstrated independent access to space, which is a different and harder capability, and it placed India among the small group of nations possessing it.',
      ],
      answer: 'Rohini was the first satellite launched by an Indian vehicle; Aryabhata was launched by another country.',
    },
    {
      q: 'What is the difference between a geostationary and a geosynchronous orbit?',
      steps: [
        'A geosynchronous orbit is any orbit with a period equal to one sidereal day.',
        'A geostationary orbit is the special case that is also circular and lies directly above the equator, at about 35,786 kilometres.',
        'Only in a geostationary orbit does the satellite appear fixed in the sky, which is why a dish antenna can be pointed permanently at one spot.',
      ],
      answer: 'Every geostationary orbit is geosynchronous, but not the reverse — geostationary must also be equatorial and circular.',
    },
    {
      q: 'Why was Aditya-L1 placed at the first Lagrange point?',
      steps: [
        'A Lagrange point is a position where gravitational and orbital forces balance, so a spacecraft can hold station relative to the earth and the sun.',
        'L1 lies between the earth and the sun.',
        'From there the sun can be observed continuously, without the interruptions caused by the earth passing in front of it, which is exactly what a solar observatory needs.',
      ],
      answer: 'Because L1 gives an uninterrupted view of the sun with no eclipses.',
    },
    {
      q: 'Distinguish a ballistic missile from a cruise missile.',
      steps: [
        'A ballistic missile is powered only during its initial boost phase and then follows an unpowered arc under gravity, reaching high altitude and very high speed.',
        'A cruise missile is powered throughout, flies low within the atmosphere and can manoeuvre in flight.',
        'The trade-off is that ballistic missiles are faster and longer-ranged, while cruise missiles are harder to detect because they fly beneath radar horizons.',
      ],
      answer: 'Powered arc under gravity versus continuous powered atmospheric flight.',
    },
    {
      q: 'Why is India\'s nuclear programme built in three stages?',
      steps: [
        'India has limited uranium reserves but very large thorium reserves in coastal monazite sands.',
        'Thorium is not itself fissile and cannot fuel a reactor directly; it must first be converted into uranium-233.',
        'So stage one uses natural uranium to produce plutonium, stage two uses that plutonium in fast breeder reactors which also convert thorium, and stage three runs on the uranium-233 that results.',
      ],
      answer: 'To reach India\'s abundant thorium, which cannot be used directly as fuel.',
    },
    {
      q: 'India is a member of three export control regimes but not a fourth. Which?',
      steps: [
        'India joined the Missile Technology Control Regime in 2016, the Wassenaar Arrangement in 2017 and the Australia Group in 2018.',
        'It obtained a waiver from the Nuclear Suppliers Group in 2008 following the civil nuclear agreement with the United States.',
        'A waiver is not membership, and India is still not a member of the Nuclear Suppliers Group.',
      ],
      answer: 'It is not a member of the Nuclear Suppliers Group — only a beneficiary of its 2008 waiver.',
    },
    {
      q: 'Why is PSLV suited to remote sensing missions?',
      steps: [
        'Remote sensing requires images of the same place taken at the same local solar time on different dates, so that they are comparable.',
        'That is achieved by a sun-synchronous polar orbit, whose plane precesses to keep pace with the earth\'s motion around the sun.',
        'PSLV was designed to reach exactly that orbit, which is what its name refers to.',
      ],
      answer: 'It was designed for sun-synchronous polar orbits, which is what earth observation needs.',
    },
    {
      q: 'Chandrayaan-2 is usually described as a partial success. Why?',
      steps: [
        'The mission comprised an orbiter, the Vikram lander and the Pragyan rover.',
        'The orbiter reached lunar orbit successfully and has continued to return scientific data since 2019.',
        'The lander crashed during its descent, so the landing and roving objectives failed while the orbital objectives succeeded.',
      ],
      answer: 'The orbiter succeeded and still operates; the lander failed during descent.',
    },
  ],

  practice: [
    {
      q: 'India\'s first satellite, Aryabhata, was launched in:',
      options: ['1972', '1975', '1980', '1984'],
      answer: 1,
      explain: 'It was built in India but launched by the Soviet Union. Rohini, in 1980, was the first launched by an Indian vehicle.',
    },
    {
      q: 'The father of the Indian space programme is:',
      options: ['Homi Bhabha', 'Vikram Sarabhai', 'Satish Dhawan', 'A. P. J. Abdul Kalam'],
      answer: 1,
      explain: 'Bhabha is associated with the nuclear programme and Kalam with missile development.',
    },
    {
      q: 'Chandrayaan-3 achieved its soft landing on:',
      options: ['22 July 2023', '23 August 2023', '14 September 2023', '2 September 2023'],
      answer: 1,
      explain: 'The date is now observed as National Space Day. India became the first country to land near the lunar south pole.',
    },
    {
      q: 'The Mars Orbiter Mission is notable because India was the first country to:',
      options: ['Land on Mars', 'Reach Mars orbit on its first attempt', 'Send a rover to Mars', 'Return a sample from Mars'],
      answer: 1,
      explain: 'The mission entered Mars orbit in September 2014 and operated until 2022, far beyond its design life.',
    },
    {
      q: 'ISRO\'s heaviest operational launch vehicle is:',
      options: ['PSLV', 'GSLV Mk II', 'LVM3', 'SSLV'],
      answer: 2,
      explain: 'Formerly called GSLV Mk III, it launched Chandrayaan-2 and Chandrayaan-3 and is intended for human spaceflight.',
    },
    {
      q: 'Aditya-L1 was placed in a halo orbit around:',
      options: ['The Moon', 'Lagrange point L1', 'Lagrange point L2', 'Geostationary orbit'],
      answer: 1,
      explain: 'L1 lies between the earth and the sun and allows continuous solar observation without eclipses.',
    },
    {
      q: 'NavIC differs from GPS in that it is:',
      options: ['A regional system', 'A global system', 'A weather system', 'A communication system'],
      answer: 0,
      explain: 'It covers India and a surrounding region using seven satellites, while GPS, GLONASS, Galileo and BeiDou are global.',
    },
    {
      q: 'The first Indian in space was:',
      options: ['Rakesh Sharma', 'Kalpana Chawla', 'Shubhanshu Shukla', 'Sunita Williams'],
      answer: 0,
      explain: 'He flew aboard Soyuz T-11 in 1984. Shubhanshu Shukla became the second Indian in space, and the first on the ISS, in 2025.',
    },
    {
      q: 'BrahMos is a joint venture between India and:',
      options: ['France', 'Israel', 'Russia', 'The United States'],
      answer: 2,
      explain: 'The name combines the Brahmaputra and the Moskva. It is a supersonic cruise missile.',
    },
    {
      q: 'The Integrated Guided Missile Development Programme was launched in 1983 under:',
      options: ['Homi Bhabha', 'A. P. J. Abdul Kalam', 'Vikram Sarabhai', 'Satish Dhawan'],
      answer: 1,
      explain: 'It produced Prithvi, Agni, Trishul, Akash and Nag.',
    },
    {
      q: 'Mission Shakti in 2019 demonstrated India\'s capability in:',
      options: ['Hypersonic flight', 'Anti-satellite weapons', 'Ballistic missile defence', 'Submarine launch'],
      answer: 1,
      explain: 'India became the fourth country to demonstrate the capability, after the United States, Russia and China.',
    },
    {
      q: 'Stage two of India\'s three-stage nuclear programme uses:',
      options: ['Pressurised heavy water reactors', 'Fast breeder reactors', 'Thorium-based reactors', 'Light water reactors'],
      answer: 1,
      explain: 'Stage one uses PHWRs with natural uranium and stage three thorium-based reactors running on uranium-233.',
    },
    {
      q: 'India is NOT a member of which export control regime?',
      options: ['Missile Technology Control Regime', 'Wassenaar Arrangement', 'Australia Group', 'Nuclear Suppliers Group'],
      answer: 3,
      explain: 'India obtained an NSG waiver in 2008 but has not been admitted as a member.',
    },
    {
      q: 'India\'s first indigenously designed and built aircraft carrier is:',
      options: ['INS Vikramaditya', 'INS Vikrant', 'INS Arihant', 'INS Viraat'],
      answer: 1,
      explain: 'Commissioned in 2022. INS Arihant is a nuclear-powered ballistic missile submarine, which completed the nuclear triad.',
    },
    {
      q: 'The post of Chief of Defence Staff was created in:',
      options: ['2001', '2015', '2019', '2022'],
      answer: 2,
      explain: 'Along with the Department of Military Affairs, to promote jointness among the three services.',
    },
    {
      q: 'PSLV-C37 set a record in 2017 by launching:',
      options: ['20 satellites', '68 satellites', '104 satellites', '143 satellites'],
      answer: 2,
      explain: 'One hundred and four satellites were placed in orbit in a single flight.',
    },
  ],

  faqs: [
    {
      q: 'Which facts in this topic go out of date fastest?',
      a: 'Anything framed as a future target. The first crewed Gaganyaan flight, Chandrayaan-4, the Venus mission, the Indian space station and the crewed lunar landing have all been announced with dates that have subsequently moved. Missions already flown, and the years in which they flew, do not change — so learn those as facts and treat everything else as a stated intention.',
    },
    {
      q: 'What made Chandrayaan-3 significant?',
      a: 'Two things. It was a successful soft landing on the moon, which only three countries had achieved before, and it was the first landing near the lunar south pole, a region of interest because permanently shadowed craters there may hold water ice. It also succeeded after the Chandrayaan-2 lander had failed, using a design revised in the light of that failure.',
    },
    {
      q: 'Why does India use a three-stage nuclear programme when other countries do not?',
      a: 'Because of its resource position. India has limited uranium but very large thorium reserves. Thorium is not fissile and cannot fuel a reactor directly, so a route has to be built to it: natural uranium first, then fast breeders using the plutonium produced, which also convert thorium to uranium-233, and finally thorium reactors. No other country has both that resource profile and the constraint of being outside the international fuel market for so long.',
    },
    {
      q: 'Is a waiver from the Nuclear Suppliers Group the same as membership?',
      a: 'No, and this is the standard trap. The 2008 waiver allows NSG members to trade nuclear material and technology with India despite its not being a party to the Non-Proliferation Treaty. Membership would give India a vote in the group\'s decisions. India has been admitted to the Missile Technology Control Regime, the Wassenaar Arrangement and the Australia Group, but not to the NSG.',
    },
    {
      q: 'Why does Sriharikota work as a launch site?',
      a: 'It is close to the equator, so an eastward launch gains the maximum benefit from the earth\'s rotational speed. It is on the east coast, so spent stages fall harmlessly into the Bay of Bengal. And it is on a sparsely populated island, which provides a safety buffer. A second site at Kulasekarapattinam serves small launchers needing a southward trajectory for polar orbits.',
    },
    {
      q: 'What is the difference between a geosynchronous and a sun-synchronous orbit?',
      a: 'A geosynchronous orbit has a period of one day, so the satellite keeps pace with a point on the rotating earth — used for communication. A sun-synchronous orbit is near-polar and precesses so that the satellite crosses each latitude at the same local solar time every day — used for earth observation, because it makes images from different dates directly comparable.',
    },
    {
      q: 'How much space and defence appears in the exam?',
      a: 'Two to four questions in UPSC Prelims, two to three in SSC CGL Tier 1, two to three in banking general awareness where it is almost entirely current, one to two in RRB NTPC, and three to five in NDA and CDS, which weight defence more heavily. It also recurs in UPSC mains GS Paper 3.',
    },
    {
      q: 'Should I follow ISRO launches as current affairs?',
      a: 'Yes, but briefly. Note the mission name, the launch vehicle, the orbit or destination, the date and the one thing that made it notable. That is the level at which questions are set. Technical detail about engine cycles or instrument specifications has never been asked in a general studies paper.',
    },
    {
      q: 'Why is India not a signatory to the NPT?',
      a: 'India regards the treaty as discriminatory because it recognises as nuclear weapon states only the five countries that tested before 1967, and requires everyone else to forgo weapons permanently. India\'s position is that non-proliferation should apply equally, and that its own doctrine of no first use and credible minimum deterrence makes it a responsible possessor. It has not signed the Comprehensive Nuclear-Test-Ban Treaty either, while maintaining a voluntary testing moratorium.',
    },
    {
      q: 'What is the nuclear triad and why does it matter?',
      a: 'The ability to deliver nuclear weapons from land, from the air and from the sea. It matters because a no-first-use doctrine requires that enough of the arsenal survives a first strike to make retaliation certain. Submarines are the hardest leg to find and destroy, which is why India\'s triad was described as complete only after INS Arihant began deterrent patrols.',
    },
  ],

  related: [
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'Emerging Technology', to: '/study-material/science/emerging-technology/' },
    { label: 'Physics', to: '/study-material/physics/' },
    { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
    { label: 'All Science & Technology', to: '/study-material/science/' },
  ],
}
