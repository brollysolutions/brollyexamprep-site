/**
 * Mechanics — /study-material/physics/mechanics/
 *
 * The foundation of the physics syllabus, written to serve two audiences at
 * once: the general-awareness candidate who needs the concept and the
 * entrance candidate who needs to use the formula. Every relation is stated
 * with the condition under which it holds.
 */
export default {
  subject: 'physics',
  subjectName: 'Physics',
  slug: 'mechanics',
  title: 'Mechanics',
  seoTitle: 'Mechanics for Competitive Exams | Motion, Laws, Energy Notes & Practice',
  metaDescription:
    'Complete mechanics study material for JEE, NEET, SSC, RRB and state exams — units and dimensions, kinematics, Newton\'s laws and friction.',
  readMinutes: 24,
  lead: [
    'Mechanics is where physics is either learnt properly or learnt badly for good. Everything that follows — heat, waves, electricity, even the modern physics of the twentieth century — is built on the ideas of force, energy and momentum introduced here, and a candidate shaky on free-body diagrams will be shaky for the rest of the subject.',
    'This page states each law with the conditions under which it applies, because most errors in mechanics come from using a relation outside its range: the equations of motion only hold for constant acceleration, the work-energy theorem only counts the net work, and the conservation of momentum only holds when the external force is zero.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '25–30% of the physics paper', note: 'The largest single block, and the one that underpins the rest.' },
    { exam: 'NEET Physics', count: '8–12 questions', note: 'Mechanics plus properties of matter accounts for roughly a quarter of the paper.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–2 questions', note: 'Conceptual only — no calculation. Newton\'s laws applied to familiar situations.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Definitions, units and simple applications.' },
    { exam: 'NDA / CDS General Ability', count: '3–5 questions', note: 'Numerical at a school level, including motion and energy.' },
  ],

  contents: [
    { icon: 'search', title: 'Units and dimensions', sub: 'Measurement and error', href: '#units' },
    { icon: 'play', title: 'Kinematics', sub: 'Describing motion', href: '#kinematics' },
    { icon: 'target', title: 'Newton\'s laws', sub: 'Forces and friction', href: '#laws' },
    { icon: 'chart', title: 'Work, energy and power', sub: 'The energy method', href: '#energy' },
    { icon: 'refresh', title: 'Rotation and momentum', sub: 'Circular and rotational motion', href: '#rotation' },
    { icon: 'globe', title: 'Gravitation', sub: 'From falling apples to orbits', href: '#gravitation' },
    { icon: 'layers', title: 'Fluids and elasticity', sub: 'Properties of matter', href: '#fluids' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'units',
      heading: 'Units and dimensions',
      eyebrow: 'Measurement and error',
      intro:
        'A short topic that pays for itself twice over: it supplies easy direct questions, and dimensional analysis is the fastest way to eliminate wrong options in a formula-based question.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The seven base quantities',
              'Length in metres, mass in kilograms, time in seconds, electric current in amperes, thermodynamic temperature in kelvin, amount of substance in moles and luminous intensity in candelas. Every other SI unit is derived from these seven. Plane angle in radians and solid angle in steradians are dimensionless supplementary units.',
            ],
            [
              'Dimensional formula',
              'The expression of a physical quantity in terms of the base dimensions M, L and T, together with others where needed. Force is MLT⁻², energy ML²T⁻², power ML²T⁻³ and pressure ML⁻¹T⁻². Two quantities can be added only if their dimensions match, which is the check that catches most algebraic errors.',
            ],
            [
              'What dimensional analysis can and cannot do',
              'It can check whether an equation is dimensionally consistent, convert between systems of units, and deduce the form of a relation when the dependence is a product of powers. It cannot determine a dimensionless constant, cannot handle a relation that is a sum of terms with different structures, and cannot distinguish quantities with the same dimensions — work and torque both have ML²T⁻², and energy and torque are not the same thing.',
            ],
            [
              'Significant figures and error',
              'In addition or subtraction, the result carries as many decimal places as the least precise term. In multiplication or division, it carries as many significant figures as the least precise factor. Absolute errors add in a sum or difference; relative errors add in a product or quotient, and multiply by the power in an exponent.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Error propagation',
          items: [
            { expr: 'For Z = A ± B: ΔZ = ΔA + ΔB', note: 'Absolute errors add, whether the operation is addition or subtraction.' },
            { expr: 'For Z = AB or A/B: ΔZ/Z = ΔA/A + ΔB/B', note: 'Relative errors add for both multiplication and division.' },
            { expr: 'For Z = Aⁿ: ΔZ/Z = n(ΔA/A)', note: 'The relative error is multiplied by the power — which is why a quantity raised to a high power dominates the total error.' },
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'kinematics',
      heading: 'Kinematics',
      eyebrow: 'Describing motion',
      intro:
        'Kinematics describes how things move without asking why. The whole topic reduces to three equations, and their one limitation — they hold only when acceleration is constant.',
      blocks: [
        {
          type: 'formula',
          title: 'Equations of motion for constant acceleration',
          items: [
            { expr: 'v = u + at', note: 'Velocity after time t, starting from initial velocity u.' },
            { expr: 's = ut + ½at²', note: 'Displacement in time t.' },
            { expr: 'v² = u² + 2as', note: 'Relates velocity to displacement without involving time — the one to reach for when time is not asked.' },
            { expr: 'sₙ = u + (a/2)(2n − 1)', note: 'Displacement during the nth second alone, not in n seconds.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Distance and displacement',
              'Distance is the total path length, a scalar that never decreases. Displacement is the straight-line vector from start to finish. A body returning to its starting point has non-zero distance and zero displacement, so its average speed is non-zero while its average velocity is zero — the standard question.',
            ],
            [
              'Reading graphs',
              'On a displacement-time graph the slope is velocity. On a velocity-time graph the slope is acceleration and the area under the curve is displacement. On an acceleration-time graph the area is the change in velocity. Being able to read these three is worth more than memorising the equations.',
            ],
            [
              'Projectile motion',
              'Treated as two independent motions: uniform velocity horizontally and constant downward acceleration vertically. The horizontal component never changes; the vertical component behaves exactly like a body thrown straight up. At the highest point the vertical velocity is zero but the speed is not, since the horizontal component survives.',
            ],
            [
              'Relative velocity',
              'The velocity of A with respect to B is the vector difference of their velocities. This is why rain appears to slant when you run, and why a river crossing needs the swimmer to aim upstream. In one dimension it is a subtraction; in two it requires the vector triangle.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Projectile relations for launch speed u at angle θ',
          items: [
            { expr: 'Time of flight T = 2u sinθ / g', note: 'Twice the time to reach the highest point.' },
            { expr: 'Maximum height H = u² sin²θ / 2g', note: 'Depends only on the vertical component of the launch velocity.' },
            { expr: 'Range R = u² sin2θ / g', note: 'Maximum at θ = 45°, and equal for complementary angles such as 30° and 60°.' },
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'laws',
      heading: 'Newton\'s laws',
      eyebrow: 'Forces and friction',
      intro:
        'Three laws, of which the second is the working tool and the third is the one most often misapplied. The classic error is to treat action and reaction as cancelling — they cannot, because they act on different bodies.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'First law — inertia',
              'A body continues at rest or in uniform motion in a straight line unless acted on by a net external force. Its real content is the definition of an inertial frame: a frame in which this holds. The forward lurch when a bus brakes and the backward jerk when it accelerates are the standard illustrations.',
            ],
            [
              'Second law',
              'The rate of change of momentum is proportional to the applied force and takes place in its direction. For constant mass this reduces to F = ma. The momentum form is the more general one and is what applies to a rocket, whose mass changes as fuel burns.',
            ],
            [
              'Third law',
              'To every action there is an equal and opposite reaction. The pair acts on two different bodies, which is why they never cancel. Recoil of a gun, the propulsion of a rocket and walking — where the foot pushes back on the ground and the ground pushes forward on the foot — are the standard cases.',
            ],
            [
              'Impulse',
              'The product of force and the time for which it acts, equal to the change in momentum. It explains why a cricketer draws the hands back while catching, why cars have crumple zones and why a gymnast bends the knees on landing: extending the time reduces the force for the same change in momentum.',
            ],
            [
              'Pseudo force',
              'In a non-inertial accelerating frame, Newton\'s laws can be applied only by adding a fictitious force of magnitude ma opposite to the frame\'s acceleration. Centrifugal force is the pseudo force in a rotating frame; centripetal force is a real force in an inertial one. Confusing the two is the commonest conceptual error in this topic.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Force, momentum and friction',
          items: [
            { expr: 'F = dp/dt = ma (constant mass)', note: 'The general form and the special case.' },
            { expr: 'Impulse J = F·Δt = Δp', note: 'A large force for a short time equals a small force for a long time.' },
            { expr: 'fₛ ≤ μₛN and f_k = μ_k N', note: 'Static friction is a range up to a maximum; kinetic friction has a fixed value, and μ_k is normally less than μₛ.' },
            { expr: 'tan θ = μₛ at the angle of repose', note: 'The steepest incline on which a body just stays at rest.' },
          ],
        },
        {
          type: 'note',
          title: 'Why friction is independent of area',
          text:
            'The frictional force depends on the normal reaction and the nature of the surfaces, not on the apparent area of contact. Real surfaces touch only at microscopic high points, and the true contact area is proportional to the load. Doubling the apparent area halves the pressure and leaves the true contact area, and therefore the friction, unchanged. Rolling friction is far smaller than sliding friction, which is why the wheel matters.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'energy',
      heading: 'Work, energy and power',
      eyebrow: 'The energy method',
      intro:
        'The energy method solves in one line problems that would take a page with forces, because it ignores the details of the path and looks only at the endpoints.',
      blocks: [
        {
          type: 'formula',
          title: 'The core relations',
          items: [
            { expr: 'W = F·s·cos θ', note: 'Only the component of force along the displacement does work. A force perpendicular to motion does none — which is why centripetal force does no work.' },
            { expr: 'KE = ½mv²', note: 'Kinetic energy. Note that doubling the speed quadruples it.' },
            { expr: 'PE = mgh', note: 'Gravitational potential energy near the earth\'s surface, measured from an arbitrary reference level.' },
            { expr: 'Work-energy theorem: W_net = ΔKE', note: 'The net work by all forces equals the change in kinetic energy. It holds whether or not the forces are conservative.' },
            { expr: 'P = W/t = F·v', note: 'Power as the rate of doing work, and as force times velocity for a body moving at speed v.' },
            { expr: 'p² = 2m(KE)', note: 'Relates momentum to kinetic energy — useful when a question gives one and asks for the other.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Conservative and non-conservative forces',
              'A conservative force does work that depends only on the endpoints, not the path, and does zero net work round a closed loop — gravity and the spring force are examples, and a potential energy can be defined for them. Friction is non-conservative: the work it does depends on the path, and it dissipates energy as heat.',
            ],
            [
              'Conservation of mechanical energy',
              'The sum of kinetic and potential energy is constant when only conservative forces act. The moment friction or air resistance enters, mechanical energy is not conserved though total energy still is — the difference appears as heat.',
            ],
            [
              'Collisions',
              'Momentum is conserved in every collision, whatever the type, provided no external force acts. Kinetic energy is conserved only in a perfectly elastic collision. In a perfectly inelastic collision the bodies move together afterwards and the loss of kinetic energy is maximal. The coefficient of restitution is the ratio of relative velocity of separation to relative velocity of approach: 1 for perfectly elastic, 0 for perfectly inelastic.',
            ],
            [
              'The special case worth memorising',
              'In a one-dimensional elastic collision between two bodies of equal mass, where one is initially at rest, they simply exchange velocities. This appears in question papers with great regularity.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'rotation',
      heading: 'Rotation and momentum',
      eyebrow: 'Circular and rotational motion',
      intro:
        'Every quantity in rotational motion is the exact analogue of a linear one, and the fastest way to learn the topic is to build that correspondence rather than to memorise a second set of equations.',
      blocks: [
        {
          type: 'table',
          caption: 'Linear and rotational analogues',
          head: ['Linear quantity', 'Rotational analogue', 'Relation between them'],
          rows: [
            ['Displacement s', 'Angular displacement θ', 's = rθ, with θ in radians'],
            ['Velocity v', 'Angular velocity ω', 'v = rω'],
            ['Acceleration a', 'Angular acceleration α', 'a_tangential = rα'],
            ['Mass m', 'Moment of inertia I', 'I depends on both mass and how it is distributed about the axis'],
            ['Force F', 'Torque τ', 'τ = rF sinθ, and τ = Iα'],
            ['Momentum p = mv', 'Angular momentum L = Iω', 'L is conserved when the net external torque is zero'],
            ['Kinetic energy ½mv²', 'Rotational KE ½Iω²', 'A rolling body has both, so its total is ½mv² + ½Iω²'],
          ],
        },
        {
          type: 'formula',
          title: 'Circular motion and moments of inertia',
          items: [
            { expr: 'a_c = v²/r = ω²r', note: 'Centripetal acceleration, directed towards the centre.' },
            { expr: 'F_c = mv²/r', note: 'The net inward force required. It is supplied by tension, friction, gravity or a normal reaction, depending on the situation — it is not a new kind of force.' },
            { expr: 'I = MR² for a ring or hollow cylinder about its axis', note: 'All the mass is at the same distance from the axis.' },
            { expr: 'I = ½MR² for a disc or solid cylinder', note: 'Mass is distributed from the axis outwards.' },
            { expr: 'I = ⅖MR² for a solid sphere; ⅔MR² for a hollow sphere', note: 'The hollow sphere has more mass far from the axis, so a larger moment of inertia.' },
            { expr: 'I = ML²/12 for a thin rod about its centre', note: 'And ML²/3 about one end, by the parallel axis theorem.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Conservation of angular momentum',
              'When no external torque acts, Iω is constant. A skater pulling the arms in reduces the moment of inertia and so spins faster; a diver tucks for the same reason. It also explains why a planet moves faster near the sun, which is Kepler\'s second law.',
            ],
            [
              'Parallel and perpendicular axis theorems',
              'The parallel axis theorem gives the moment of inertia about any axis as I_cm + Md², where d is the distance from the parallel axis through the centre of mass. The perpendicular axis theorem, valid only for a planar body, states that the moment of inertia about an axis perpendicular to the plane equals the sum of those about two perpendicular axes in the plane.',
            ],
            [
              'Rolling without slipping',
              'The condition is v = ωr at the contact point, so the contact point is instantaneously at rest. A body rolling down an incline accelerates less than one sliding without friction, because part of the potential energy goes into rotation. Which body wins a race down an incline depends only on the ratio I/MR², not on mass or radius — a solid sphere beats a disc, which beats a ring.',
            ],
            [
              'Centre of mass',
              'The point that moves as though all the mass were concentrated there and all external forces acted on it. In the absence of external force the centre of mass of a system moves at constant velocity, however violently the parts interact — which is why an exploding shell\'s fragments have a centre of mass continuing on the original trajectory.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'gravitation',
      heading: 'Gravitation',
      eyebrow: 'From falling apples to orbits',
      intro:
        'A short topic with a fixed set of results, and the one that connects mechanics to the space and astronomy questions in general studies.',
      blocks: [
        {
          type: 'formula',
          title: 'The gravitational relations',
          items: [
            { expr: 'F = Gm₁m₂/r²', note: 'Newton\'s law of universal gravitation. G is the universal gravitational constant, the same everywhere.' },
            { expr: 'g = GM/R²', note: 'Acceleration due to gravity at the surface of a body of mass M and radius R. Note that g depends on the planet while G does not.' },
            { expr: 'g_h = g(1 − 2h/R) for small height h', note: 'Gravity decreases with altitude.' },
            { expr: 'g_d = g(1 − d/R) at depth d', note: 'It also decreases with depth, reaching zero at the centre of the earth — not a maximum, which is the standard trap.' },
            { expr: 'v_orbital = √(GM/r)', note: 'Speed of a satellite in a circular orbit of radius r. Near the surface this is about 7.9 km/s.' },
            { expr: 'v_escape = √(2GM/R) = √2 × v_orbital', note: 'About 11.2 km/s from the earth\'s surface. It does not depend on the mass or the direction of the projected body.' },
            { expr: 'T² ∝ r³', note: 'Kepler\'s third law — the square of the orbital period is proportional to the cube of the semi-major axis.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Variation of g',
              'It decreases with altitude, decreases with depth, and varies with latitude — being least at the equator and greatest at the poles, both because the earth bulges at the equator and because rotation produces an outward effect there. At the centre of the earth g is zero.',
            ],
            [
              'Weightlessness',
              'An astronaut in orbit is not beyond gravity — at the height of a low orbit, gravity is nearly as strong as at the surface. The sensation of weightlessness arises because the astronaut and the spacecraft are both in free fall around the earth, so there is no normal reaction between them. Weight is what a scale reads, and in free fall a scale reads zero.',
            ],
            [
              'Kepler\'s laws',
              'First, every planet moves in an ellipse with the sun at one focus. Second, the line joining a planet to the sun sweeps equal areas in equal times, which is conservation of angular momentum and is why a planet moves faster at perihelion. Third, the square of the period is proportional to the cube of the semi-major axis.',
            ],
            [
              'Geostationary satellites',
              'A satellite whose period is one day, in a circular equatorial orbit, appears fixed above one point on the ground. Applying Kepler\'s third law gives an orbital radius corresponding to a height of about 35,786 km. This links directly to the communications questions in the space technology syllabus.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'fluids',
      heading: 'Fluids and elasticity',
      eyebrow: 'Properties of matter',
      intro:
        'The mechanics of continuous media, and the source of most of the everyday physics questions in general-awareness papers.',
      blocks: [
        {
          type: 'formula',
          title: 'Fluid relations',
          items: [
            { expr: 'P = hρg', note: 'Pressure at depth h in a fluid of density ρ, independent of the shape or the total volume of the container.' },
            { expr: 'Buoyant force = weight of fluid displaced', note: 'Archimedes\' principle. A floating body displaces fluid equal to its own weight.' },
            { expr: 'A₁v₁ = A₂v₂', note: 'The equation of continuity — a narrower pipe means faster flow, since the volume rate is fixed.' },
            { expr: 'P + ½ρv² + ρgh = constant', note: 'Bernoulli\'s theorem for steady, incompressible, non-viscous flow along a streamline. Faster flow means lower pressure.' },
            { expr: 'Stress = Y × strain', note: 'Hooke\'s law within the elastic limit; Y is Young\'s modulus.' },
            { expr: 'h = 2S cosθ / rρg', note: 'Capillary rise — the narrower the tube, the higher the liquid climbs.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Pascal\'s law',
              'Pressure applied to an enclosed fluid is transmitted undiminished to every part of it. This is the principle of the hydraulic lift and the hydraulic brake, where a small force on a small piston produces a large force on a large one.',
            ],
            [
              'Bernoulli in everyday life',
              'The lift on an aeroplane wing, the swing of a spinning cricket ball, the way a shower curtain is drawn inward, and the atomiser and the Venturi meter all follow from the same statement: where a fluid moves faster, its pressure is lower.',
            ],
            [
              'Surface tension',
              'The tendency of a liquid surface to contract, arising from the unbalanced cohesive forces on surface molecules. It explains why drops are spherical, why an insect can stand on water, and why detergent — which lowers surface tension — improves wetting and cleaning. Surface tension decreases with temperature, which is why hot water washes better.',
            ],
            [
              'Viscosity and terminal velocity',
              'Viscosity is internal friction in a fluid. A body falling through a viscous fluid accelerates until the drag balances the weight less buoyancy, after which it falls at a constant terminal velocity. The viscosity of a liquid falls with temperature while that of a gas rises — a contrast that is examined.',
            ],
            [
              'Elastic moduli',
              'Young\'s modulus for a change in length, bulk modulus for a change in volume under uniform pressure, and rigidity or shear modulus for a change in shape. Steel has a higher Young\'s modulus than rubber and is therefore more elastic in the physical sense, even though rubber stretches further — a definition question that catches many candidates.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A car accelerates uniformly from rest to 20 m/s in 5 s. What distance does it cover?',
      steps: [
        'Acceleration a = (v − u)/t = (20 − 0)/5 = 4 m/s².',
        'Use s = ut + ½at², with u = 0.',
        's = 0 + ½ × 4 × 25 = 50 m.',
      ],
      answer: '50 metres.',
    },
    {
      q: 'Two projectiles are launched at 30° and 60° with the same speed. Compare their ranges.',
      steps: [
        'Range R = u² sin2θ / g.',
        'For 30°, sin 60° = √3/2. For 60°, sin 120° = √3/2 as well.',
        'The two are equal — complementary launch angles always give the same range, though the 60° projectile goes higher and stays in the air longer.',
      ],
      answer: 'The ranges are equal; the trajectories are not.',
    },
    {
      q: 'A body falls from rest. What is the ratio of the distances covered in the first, second and third seconds?',
      steps: [
        'Distance in the nth second is sₙ = u + (a/2)(2n − 1), and here u = 0, a = g.',
        'So s₁ : s₂ : s₃ = 1 : 3 : 5.',
        'The distances in successive seconds are in the ratio of the odd numbers — a result worth remembering.',
      ],
      answer: '1 : 3 : 5.',
    },
    {
      q: 'Why does a cricketer move the hands backwards while catching a fast ball?',
      steps: [
        'The change in momentum of the ball is fixed — it must be brought to rest.',
        'Impulse equals force times time, and equals that change in momentum.',
        'Increasing the time over which the ball is stopped therefore reduces the force on the hands, for the same total impulse.',
      ],
      answer: 'To increase the stopping time and so reduce the force, since impulse is fixed.',
    },
    {
      q: 'A solid sphere, a disc and a ring of the same mass and radius roll down an incline. Which reaches the bottom first?',
      steps: [
        'Potential energy is shared between translation and rotation, and the share going into rotation depends on I/MR².',
        'That ratio is 2/5 for the solid sphere, 1/2 for the disc and 1 for the ring.',
        'The body with the smallest ratio puts the least energy into rotation and the most into translation, so it accelerates fastest.',
      ],
      answer: 'The solid sphere, then the disc, then the ring — independent of mass and radius.',
    },
    {
      q: 'Does escape velocity depend on the mass of the object being launched?',
      steps: [
        'Escape velocity is found by equating kinetic energy to the magnitude of gravitational potential energy: ½mv² = GMm/R.',
        'The mass m of the projectile appears on both sides and cancels.',
        'So v_escape = √(2GM/R), depending only on the planet — about 11.2 km/s for the earth, and independent of direction as well.',
      ],
      answer: 'No — it depends only on the mass and radius of the planet.',
    },
    {
      q: 'A skater pulls in her arms while spinning and rotates faster. Explain.',
      steps: [
        'No external torque acts about the vertical axis, so angular momentum L = Iω is conserved.',
        'Pulling the arms in brings mass closer to the axis, reducing the moment of inertia I.',
        'Since Iω must stay constant, ω increases. Her rotational kinetic energy also rises, the extra energy coming from the muscular work of pulling the arms in.',
      ],
      answer: 'Conservation of angular momentum — smaller I demands larger ω.',
    },
    {
      q: 'Why is steel said to be more elastic than rubber, when rubber stretches much further?',
      steps: [
        'In physics, elasticity means the tendency to regain the original shape, measured by the stress needed to produce a given strain.',
        'That is Young\'s modulus, and steel\'s is far higher than rubber\'s.',
        'A larger modulus means a larger restoring stress for the same strain, so steel is the more elastic material even though rubber deforms more easily.',
      ],
      answer: 'Because elasticity is measured by Young\'s modulus, which is much higher for steel.',
    },
  ],

  practice: [
    {
      q: 'The dimensional formula of force is:',
      options: ['MLT⁻¹', 'ML⁻¹T⁻²', 'ML²T⁻²', 'MLT⁻²'],
      answer: 3,
      explain: 'ML²T⁻² is energy and ML⁻¹T⁻² is pressure.',
    },
    {
      q: 'A body moves in a circle at constant speed. Which quantity is changing?',
      options: ['Speed', 'Kinetic energy', 'Velocity', 'Mass'],
      answer: 2,
      explain: 'Velocity is a vector, and its direction changes continuously, which is why there is an acceleration despite constant speed.',
    },
    {
      q: 'Newton\'s third law explains:',
      options: ['The recoil of a gun', 'Terminal velocity', 'The angle of repose', 'Capillary rise'],
      answer: 0,
      explain: 'The gun pushes the bullet forward and the bullet pushes the gun back with an equal and opposite force.',
    },
    {
      q: 'The work done by a centripetal force on a body in uniform circular motion is:',
      options: ['Positive', 'Negative', 'Zero', 'Equal to the kinetic energy'],
      answer: 2,
      explain: 'The force is always perpendicular to the displacement, and W = Fs cos 90° = 0.',
    },
    {
      q: 'In a perfectly inelastic collision, which quantity is conserved?',
      options: ['Kinetic energy only', 'Neither', 'Both momentum and kinetic energy', 'Momentum only'],
      answer: 3,
      explain: 'Momentum is conserved in every collision with no external force; kinetic energy is conserved only in an elastic one.',
    },
    {
      q: 'The escape velocity from the earth\'s surface is approximately:',
      options: ['7.9 km/s', '9.8 km/s', '11.2 km/s', '15 km/s'],
      answer: 2,
      explain: 'It is √2 times the orbital velocity near the surface, which is about 7.9 km/s.',
    },
    {
      q: 'The value of g at the centre of the earth is:',
      options: ['Maximum', 'Equal to the surface value', 'Half the surface value', 'Zero'],
      answer: 3,
      explain: 'g decreases linearly with depth and reaches zero at the centre, where the surrounding mass pulls equally in all directions.',
    },
    {
      q: 'A skater spins faster on pulling in her arms because of conservation of:',
      options: ['Linear momentum', 'Angular momentum', 'Kinetic energy', 'Torque'],
      answer: 1,
      explain: 'Iω is constant, so reducing I increases ω. Kinetic energy actually increases, supplied by muscular work.',
    },
    {
      q: 'The moment of inertia of a solid sphere about a diameter is:',
      options: ['MR²', '½MR²', '⅖MR²', '⅔MR²'],
      answer: 2,
      explain: '⅔MR² is a hollow sphere, ½MR² a disc and MR² a ring about its axis.',
    },
    {
      q: 'Bernoulli\'s theorem is a statement of the conservation of:',
      options: ['Mass', 'Momentum', 'Energy', 'Angular momentum'],
      answer: 2,
      explain: 'It expresses energy conservation per unit volume for steady non-viscous incompressible flow.',
    },
    {
      q: 'The hydraulic lift works on:',
      options: ['Pascal\'s law', 'Archimedes\' principle', 'Bernoulli\'s theorem', 'Hooke\'s law'],
      answer: 0,
      explain: 'Pressure applied to an enclosed fluid is transmitted undiminished throughout it.',
    },
    {
      q: 'Surface tension of a liquid, with rising temperature:',
      options: ['Increases', 'Decreases', 'Remains constant', 'First increases then decreases'],
      answer: 1,
      explain: 'Which is one reason hot water with detergent cleans better than cold.',
    },
    {
      q: 'A body is dropped from rest. The distances covered in successive seconds are in the ratio:',
      options: ['1 : 2 : 3', '1 : 3 : 5', '1 : 4 : 9', '1 : 2 : 4'],
      answer: 1,
      explain: 'The odd-number ratio follows from sₙ = (g/2)(2n − 1).',
    },
    {
      q: 'Which force does NOT do work on a body?',
      options: ['Friction on a sliding block', 'Gravity on a falling body', 'Tension in a string during circular motion', 'Applied force pushing a box'],
      answer: 2,
      explain: 'The tension provides the centripetal force and acts perpendicular to the motion, so it does no work.',
    },
    {
      q: 'The maximum range of a projectile launched at a given speed occurs at an angle of:',
      options: ['30°', '45°', '60°', '90°'],
      answer: 1,
      explain: 'R = u² sin2θ/g is maximum when sin2θ = 1, that is 2θ = 90°.',
    },
    {
      q: 'Kinetic friction is generally:',
      options: ['Greater than maximum static friction', 'Less than maximum static friction', 'Equal to it', 'Independent of the surfaces'],
      answer: 1,
      explain: 'Which is why a stationary object is harder to start moving than to keep moving.',
    },
  ],

  faqs: [
    {
      q: 'Why do the equations of motion fail when acceleration is not constant?',
      a: 'Because they are derived by integrating a constant acceleration. If a varies with time or position, the integration gives a different result, and the standard equations no longer apply. In such cases you must go back to the definitions — acceleration as dv/dt and velocity as ds/dt — and integrate directly. Free fall with air resistance is the everyday example.',
    },
    {
      q: 'Is centrifugal force real?',
      a: 'It depends on the frame. In an inertial frame there is no centrifugal force at all — there is only a centripetal force pulling the body inward, and the body\'s tendency to continue in a straight line. In a rotating frame, which is non-inertial, a pseudo force must be added to make Newton\'s laws work, and that is the centrifugal force. Calling it fictitious is accurate but easy to misread: it is genuinely felt by an observer in the rotating frame.',
    },
    {
      q: 'Why does friction not depend on the area of contact?',
      a: 'Because real surfaces touch only at microscopic asperities, and the true contact area is set by how hard those points are pressed together — that is, by the normal force. Doubling the apparent area halves the pressure at each point, leaving the true contact area unchanged. The empirical law f = μN captures this, which is why μ depends on the materials but not on the size of the block.',
    },
    {
      q: 'When can I use energy conservation instead of forces?',
      a: 'Whenever only conservative forces act and the question asks about speeds or heights rather than about times or directions. Energy methods ignore the path entirely, which is what makes them so powerful for problems on curved tracks and loops. Once friction or another dissipative force is involved, mechanical energy is no longer conserved and you must either account for the heat generated or go back to forces.',
    },
    {
      q: 'Why is a satellite in orbit weightless if gravity is still acting?',
      a: 'Because weight, as felt, is the normal reaction from a supporting surface, and there is none in free fall. At the height of a typical low orbit gravity is nearly as strong as on the ground; the satellite is falling continuously and moving sideways fast enough that it never reaches the surface. Everything inside falls at the same rate, so nothing presses on anything else.',
    },
    {
      q: 'What is the fastest way to check an answer in mechanics?',
      a: 'Dimensions and limiting cases. Check that both sides of your expression have the same dimensions, which catches most algebraic slips. Then test an extreme: set an angle to zero or ninety degrees, or let a mass go to zero or infinity, and see whether the result behaves as it must. Both checks take a few seconds and catch a large fraction of errors.',
    },
    {
      q: 'How is mechanics asked differently in JEE and in SSC?',
      a: 'JEE asks for the numerical answer, usually requiring you to combine two or three relations and set up a free-body diagram correctly. SSC and RRB ask for the concept: which principle explains why a cricketer draws the hands back, or why a body floats. The same material serves both, but the preparation differs — one needs practice with problems, the other needs the explanations at the end of each section here.',
    },
    {
      q: 'Which single idea unlocks rotational motion?',
      a: 'That every rotational quantity is the analogue of a linear one. Torque is the rotational force, moment of inertia the rotational mass, angular momentum the rotational momentum, and each equation has an exact counterpart. Building that table once, as in the section above, converts a topic that looks like a second syllabus into a translation of one you already know.',
    },
    {
      q: 'Why does a solid sphere beat a ring down an incline?',
      a: 'Because the potential energy released is shared between translation and rotation, and the share going into rotation is set by I/MR². For a solid sphere that ratio is 2/5; for a ring it is 1. The ring puts far more energy into spinning and less into moving down the slope, so it accelerates more slowly. Mass and radius cancel out entirely, which is why the result surprises people.',
    },
    {
      q: 'How much of the physics paper is mechanics?',
      a: 'Roughly a quarter to a third of JEE Main and Advanced, and about the same share of NEET physics once properties of matter is included. In general awareness papers it is one to three questions in SSC and RRB and three to five in NDA and CDS, all conceptual rather than numerical.',
    },
  ],

  related: [
    { label: 'Heat, Light & Sound', to: '/study-material/physics/heat-light-sound/' },
    { label: 'Electricity & Magnetism', to: '/study-material/physics/electricity-magnetism/' },
    { label: 'Mathematics', to: '/study-material/mathematics/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'All Physics', to: '/study-material/physics/' },
  ],
}
